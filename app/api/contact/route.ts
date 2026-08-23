import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { user } from "@/details";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", 
            to: user.email,
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6;">
                    <h2>New message from your portfolio</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, "<br/>")}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact form error:", err);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}