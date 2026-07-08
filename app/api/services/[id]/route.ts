import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/services
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: [],
  });
}

/**
 * POST /api/services
 */
export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json(
    {
      success: true,
      message: "Service created successfully.",
      data: body,
    },
    {
      status: 201,
    }
  );
}