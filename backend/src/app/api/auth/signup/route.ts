import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateOtp, sendOtpMail } from "@/utils/sendOtp";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const {fullName, email, password} = await req.json()

        if(!fullName || !email || !password) {
            return NextResponse.json({statusCode: 400, message: 'Anyone field is empty', status: false})
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(user) {
            return NextResponse.json({statusCode: 400, message: 'User already exists', status: false})
        }
        
        // send the otp
        const otp = generateOtp()

        await sendOtpMail({customerEmail: email, customerName: fullName, otp})

        const createUser = await prisma.user.create({
            data: {
                fullName,
                email,
                password,
                otp
            }
        })

        if(!createUser) {
            return NextResponse.json({statusCode: 400, message: 'User not created', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'User created successfully', status: true, data: createUser})
        
    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'Unable to run the controller(signup)', status: false})
    }
}