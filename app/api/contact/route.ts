import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactFormSchema } from "@/lib/validation";
import { successResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);

    const contact = await prisma.contactRequest.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        serviceType: validatedData.serviceType,
        message: validatedData.message,
      },
    });

    return NextResponse.json(
      successResponse(contact, "Contact request submitted successfully"),
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && "errors" in error) {
      return NextResponse.json(
        errorResponse(
          "Validation failed: " + JSON.stringify((error as any).errors)
        ),
        { status: 400 }
      );
    }

    console.error("Contact route error:", error);
    return NextResponse.json(
      errorResponse("Failed to submit contact request"),
      { status: 500 }
    );
  }
}
