import { NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (
    mode === "subscribe" &&
    token &&
    VERIFY_TOKEN &&
    token === VERIFY_TOKEN
  ) {
    return new Response(challenge, { status: 200 });
  }

  return new Response("Forbidden", { status: 403 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log(
      "Focus Fitness WhatsApp webhook:",
      JSON.stringify(body, null, 2)
    );

    const message =
      body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

    if (!message) {
      return NextResponse.json({ ok: true });
    }

    const from = message.from;
    const messageType = message.type;

    if (!from || messageType !== "text") {
      return NextResponse.json({ ok: true });
    }

    const incomingText =
      message?.text?.body?.trim().toLowerCase() ?? "";

    let reply =
      "👋 Hi! Welcome to Focus Fitness!\n\n" +
      "How can we help you today?\n\n" +
      "1️⃣ Membership Plans\n" +
      "2️⃣ Personal Training\n" +
      "3️⃣ Gym Timings\n" +
      "4️⃣ Location\n" +
      "5️⃣ Talk to our team";

    if (
      incomingText === "1" ||
      incomingText.includes("membership") ||
      incomingText.includes("plan")
    ) {
      reply =
        "💪 *Membership Plans*\n\n" +
        "We have flexible membership options available.\n\n" +
        "Please tell us your preferred duration:\n" +
        "• 1 Month\n" +
        "• 3 Months\n" +
        "• 6 Months\n" +
        "• 12 Months\n\n" +
        "Our team will share the current offers with you.";
    } else if (
      incomingText === "2" ||
      incomingText.includes("personal training") ||
      incomingText.includes("trainer")
    ) {
      reply =
        "🏋️ *Personal Training*\n\n" +
        "Our trainers can help you with personalized workout guidance.\n\n" +
        "Reply *5* if you'd like our team to contact you.";
    } else if (
      incomingText === "3" ||
      incomingText.includes("timing") ||
      incomingText.includes("time")
    ) {
      reply =
        "🕐 *Gym Timings*\n\n" +
        "Please contact our team for the current gym timings.";
    } else if (
      incomingText === "4" ||
      incomingText.includes("location") ||
      incomingText.includes("address")
    ) {
      reply =
        "📍 *Focus Fitness*\n\n" +
        "Sr.No 71/1+2, 39, Main Road,\n" +
        "Kranti Chowk, Kirti Nagar,\n" +
        "New Sangavi, Pimpri-Chinchwad,\n" +
        "Maharashtra 411061";
    } else if (
      incomingText === "5" ||
      incomingText.includes("human") ||
      incomingText.includes("team") ||
      incomingText.includes("contact")
    ) {
      reply =
        "🙋 *Talk to our team*\n\n" +
        "Sure! Our Focus Fitness team will get back to you shortly.";
    }

    if (!ACCESS_TOKEN || !PHONE_NUMBER_ID) {
      console.error(
        "WhatsApp environment variables are missing."
      );

      return NextResponse.json({ ok: true });
    }

    const response = await fetch(
      `https://graph.facebook.com/v25.0/${PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: from,
          type: "text",
          text: {
            preview_url: false,
            body: reply,
          },
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error(
        "WhatsApp send error:",
        JSON.stringify(result, null, 2)
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("WhatsApp webhook error:", error);

    return NextResponse.json({ ok: true });
  }
}