import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body ?? {};

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: connect this to a real backend — e.g. send an email,
    // push to a CRM, or store in a database. Currently a no-op stub
    // so the frontend can be wired up without a fake success response
    // once a real integration exists.
    console.log("New Focus Fitness enquiry:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
