import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req: NextRequest) {
  try {
    let { phone, code } = await req.json();

    if (!phone || !code) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number and OTP are required.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Format Phone Number
    // -----------------------------
    phone = phone.toString().replace(/\s+/g, "").trim();

    if (!phone.startsWith("+")) {
      phone = `+91${phone}`;
    }

    // -----------------------------
    // Get Latest OTP
    // -----------------------------
    const { data: otpData, error: otpError } = await supabaseAdmin
      .from("otp_codes")
      .select("*")
      .eq("phone", phone)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (otpError) {
      console.error("OTP QUERY ERROR:", otpError);

      return NextResponse.json(
        {
          success: false,
          message: otpError.message,
        },
        { status: 500 }
      );
    }

    if (!otpData) {
      return NextResponse.json(
        {
          success: false,
          message: "OTP not found.",
        },
        { status: 404 }
      );
    }

    // -----------------------------
    // DEBUG
    // -----------------------------
    const now = new Date();
    const expiry = new Date(otpData.expires_at);

    console.log("=====================================");
    console.log("PHONE        :", phone);
    console.log("DB OTP       :", otpData.otp);
    console.log("USER OTP     :", code);
    console.log("CREATED AT   :", otpData.created_at);
    console.log("EXPIRES AT   :", otpData.expires_at);
    console.log("CURRENT TIME :", now.toISOString());
    console.log("EXPIRY TIME  :", expiry.toISOString());
    console.log("NOW (ms)     :", now.getTime());
    console.log("EXPIRY (ms)  :", expiry.getTime());
    console.log(
      "DIFFERENCE   :",
      expiry.getTime() - now.getTime(),
      "ms"
    );
    console.log("=====================================");

    // -----------------------------
    // Expiry Check
    // -----------------------------
    if (now.getTime() > expiry.getTime()) {
      return NextResponse.json(
        {
          success: false,
          message: "OTP has expired.",
          debug: {
            currentTime: now.toISOString(),
            expiryTime: expiry.toISOString(),
            difference: expiry.getTime() - now.getTime(),
          },
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Verify OTP
    // -----------------------------
    if (otpData.otp !== code.toString().trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid OTP.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Get User
    // -----------------------------
    const { data: user, error: userError } = await supabaseAdmin
      .from("app_users")
      .select("*")
      .eq("phone", phone)
      .maybeSingle();

    if (userError) {
      console.error("USER QUERY ERROR:", userError);

      return NextResponse.json(
        {
          success: false,
          message: userError.message,
        },
        { status: 500 }
      );
    }

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not registered.",
        },
        { status: 404 }
      );
    }

    if (!user.is_active) {
      return NextResponse.json(
        {
          success: false,
          message: "User account is inactive.",
        },
        { status: 403 }
      );
    }

    // -----------------------------
    // Delete Used OTP
    // -----------------------------
    await supabaseAdmin
      .from("otp_codes")
      .delete()
      .eq("id", otpData.id);

    // -----------------------------
    // Success
    // -----------------------------
    return NextResponse.json({
      success: true,
      message: "Login Successful",
      user: {
        id: user.id,
        name: user.full_name,
        phone: user.phone,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error: any) {
    console.error("VERIFY OTP ERROR");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Verification failed.",
      },
      { status: 500 }
    );
  }
}