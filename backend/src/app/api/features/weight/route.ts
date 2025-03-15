import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { weight, date, userId } = await req.json();

    if (!weight || !date || !userId) {
      return NextResponse.json({
        statusCode: 400,
        message: "Bad request",
        status: false,
      });
    }

    const response = await prisma.weight.create({
      data: {
        weight: weight,
        date: date,
        userId: userId,
      },
    });

    if (!response) {
      return NextResponse.json({
        statusCode: 400,
        message: "Weight not added",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Weight added successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error(wieght POST)",
      status: false,
    });
  }
}
