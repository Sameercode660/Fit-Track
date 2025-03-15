import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, calories, date, userId } = await req.json();

    if (!name || !calories || !date || !userId) {
      return NextResponse.json({
        statusCode: 400,
        message: "Bad request",
        status: false,
      });
    }

    const response = await prisma.calorie.create({
      data: {
        name,
        calories,
        date,
        userId,
      },
    });

    if (!response) {
      return NextResponse.json({
        statusCode: 400,
        message: "Calorie not added",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Calorie added successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error (calorie POST)",
      status: false,
    });
  }
}
