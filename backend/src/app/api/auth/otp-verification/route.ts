import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        
        const {id, otp} = await req.json()

        const user = await prisma.user.findUnique({
            where: {
                id,
            }
        })

        if(!(user?.otp == otp)) {
            return NextResponse.json({statusCode: 401, message: 'Entered otp is wrong', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'user verified successfully', status: false, data: user})

    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'Unable to run the controller(otp-verification)', status: false})
    }
}