import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        
        const {email, password} = await req.json()

        if(!email || !password) {
            return NextResponse.json({statusCode: 400, messsage: 'Anyone field is empty', status: false})
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user) {
            return NextResponse.json({statusCode: 401, message: 'User does not exist', status: false})
        }

        const checkPassword = user.password == password

        if(!checkPassword) {
            return NextResponse.json({statusCode: 401, message: 'Entered password is wrong', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'Login successfully', status: true, data: user})
        
    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'Unable to run the controller(login)', status: false})
    }
}
