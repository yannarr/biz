import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { quoteFormSchema } from "@/lib/validation";
import { successResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = quoteFormSchema.parse(body);

    const areaSizeNum = validatedData.areaSize
      ? parseFloat(validatedData.areaSize)
      : null;

    const quote = await prisma.quoteRequest.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        projectType: validatedData.projectType,
        areaSize: areaSizeNum,
        location: validatedData.location,
        notes: validatedData.notes || null,
      },
    });

    return NextResponse.json(
      successResponse(quote, "Quote request submitted successfully"),
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

    console.error("Quote route error:", error);
    return NextResponse.json(
      errorResponse("Failed to submit quote request"),
      { status: 500 }
    );
  }
}
