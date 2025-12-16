import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                message,
            },
        });

        return NextResponse.json(contact, { status: 201 });
    } catch (error) {
        console.error("Error creating contact:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
