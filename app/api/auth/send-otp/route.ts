import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";
import { supabaseAdmin } from "@/lib/supabase/admin";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(req: NextRequest) {
  try {
    const { phone, name } = await req.json();

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required.",
        },
        { status: 400 }
      );
    }

    // Format Phone Number
    let mobile = phone.toString().replace(/\s+/g, "").trim();

    if (!mobile.startsWith("+")) {
      mobile = `+91${mobile}`;
    }

    // Basic Validation
    if (!/^\+\d{10,15}$/.test(mobile)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid phone number.",
        },
        { status: 400 }
      );
    }

    // Generate OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Expire after 5 minutes
    const expiresAt = new Date(
      Date.now() + 5 * 60 * 1000
    ).toISOString();

    // Delete Previous OTP
    await supabaseAdmin
      .from("otp_codes")
      .delete()
      .eq("phone", mobile);

    // Save OTP
    const { error: insertError } = await supabaseAdmin
      .from("otp_codes")
      .insert({
        phone: mobile,
        otp,
        name: name || "User",
        expires_at: expiresAt,
      });

    if (insertError) {
      console.error(insertError);

      return NextResponse.json(
        {
          success: false,
          message: insertError.message,
        },
        { status: 500 }
      );
    }

    console.log("OTP Saved :", otp);
    console.log("Expires :", expiresAt);

    // Send SMS
    const sms = await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: mobile,
      body: `ArikaSoft ERP

Hello ${name || "User"},

Your Login OTP is: ${otp}

Please do not share this OTP with anyone.

This OTP is valid for 5 minutes.

© ArikaSoft Private Limited`,
    });

    console.log("SMS SID :", sms.sid);

    return NextResponse.json({
      success: true,
      message: "OTP Sent Successfully",
      sid: sms.sid,
      phone: mobile,
    });

  } catch (error: any) {
    console.error("========== SEND OTP ERROR ==========");
    console.error(error);
    console.error("====================================");

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Unable to send OTP.",
        code: error.code || null,
      },
      { status: 500 }
    );
  }
}