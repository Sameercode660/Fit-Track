import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Extract userId from the request body
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        {
          statusCode: 400,
          message: "Bad request: userId is required",
          status: false,
        },
        { status: 400 }
      );
    }

    // Fetch data for the user from all models
    const weightData = await prisma.weight.findMany({
      where: { userId },
      orderBy: { date: "asc" },
    });

    const activityData = await prisma.activity.findMany({
      where: { userId },
      orderBy: { date: "asc" },
    });

    const calorieData = await prisma.calorie.findMany({
      where: { userId },
      orderBy: { date: "asc" },
    });

    const sleepData = await prisma.sleep.findMany({
      where: { userId },
      orderBy: { date: "asc" },
    });

    const waterData = await prisma.water.findMany({
      where: { userId },
      orderBy: { date: "asc" },
    });

    // Combine all data into a single response
    const analyticsData = {
      weight: weightData,
      activity: activityData,
      calorie: calorieData,
      sleep: sleepData,
      water: waterData,
    };

    return NextResponse.json(
      {
        statusCode: 200,
        message: "Analytics data fetched successfully",
        status: true,
        data: analyticsData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        statusCode: 500,
        message: "Internal server error (analytics POST)",
        status: false,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
