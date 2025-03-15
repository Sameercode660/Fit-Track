import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, date, userId } = await req.json();

    if (!name || !date || !userId) {
      return NextResponse.json({
        statusCode: 400,
        message: "Bad request",
        status: false,
      });
    }

    const response = await prisma.activity.create({
      data: {
        name,
        date,
        userId,
      },
    });

    if (!response) {
      return NextResponse.json({
        statusCode: 400,
        message: "Activity not added",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Activity added successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error (activity POST)",
      status: false,
    });
  }
}
