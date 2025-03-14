import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendForgotPasswordMail } from "@/utils/forgotPassword";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const {email} = await req.json()

        if(!email) {
            return NextResponse.json({statusCode: 400, messsage: 'Anyone field is empty', status: false})
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user) {
            return NextResponse.json({statusCode: 400, message: 'User does not exist', status: false})
        }

        // send the password
        await sendForgotPasswordMail({customerName: user.fullName, customerEmail: user.email, password: user.password})

        return NextResponse.json({statusCode: 200, message: 'Password has been sent to your email', status: true})
    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'Unable to run the controller(forgot-password', status: false})
    }
}


