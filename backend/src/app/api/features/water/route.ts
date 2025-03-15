import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { amount, date, userId } = await req.json();

    if (!amount || !date || !userId) {
      return NextResponse.json({
        statusCode: 400,
        message: "Bad request",
        status: false,
      });
    }

    const response = await prisma.water.create({
      data: {
        amount,
        date,
        userId,
      },
    });

    if (!response) {
      return NextResponse.json({
        statusCode: 400,
        message: "Water not added",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Water added successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error (water POST)",
      status: false,
    });
  }
}
