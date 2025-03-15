import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { hours, date, userId } = await req.json();

    if (!hours || !date || !userId) {
      return NextResponse.json({
        statusCode: 400,
        message: "Bad request",
        status: false,
      });
    }

    const response = await prisma.sleep.create({
      data: {
        hours,
        date,
        userId,
      },
    });

    if (!response) {
      return NextResponse.json({
        statusCode: 400,
        message: "Sleep not added",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Sleep added successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error (sleep POST)",
      status: false,
    });
  }
}
