import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

async function sendDiscordNotification(webhookUrl, info) {
  try {
    const payload = {
      username: "Portfolio Resume Gate",
      avatar_url: "https://github.com/ohnogaurav.png",
      embeds: [
        {
          title: "📄 Resume Downloaded!",
          color: 5763719, // Emerald green
          fields: [
            {
              name: "📍 Location & IP",
              value: `${info.city ? `${info.city}, ` : ""}${info.country || "Unknown Country"} (${info.ip})`,
              inline: true,
            },
            {
              name: "⏰ Time (UTC)",
              value: info.timestamp,
              inline: true,
            },
            {
              name: "💻 Device / User-Agent",
              value: info.userAgent ? `\`\`\`${info.userAgent.slice(0, 250)}\`\`\`` : "Unknown",
              inline: false,
            },
          ],
          footer: {
            text: "Portfolio Notification System • ohnogaurav.vercel.app",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Error sending Discord notification:", error);
  }
}

async function sendTelegramNotification(botToken, chatId, info) {
  try {
    const text = `<b>📄 Resume Downloaded!</b>\n\n` +
      `📍 <b>Location:</b> ${info.city ? `${info.city}, ` : ""}${info.country || "Unknown Country"} (<code>${info.ip}</code>)\n` +
      `⏰ <b>Time:</b> ${info.timestamp}\n` +
      `💻 <b>Device:</b> <code>${info.userAgent ? info.userAgent.slice(0, 150) : "Unknown"}</code>`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    });
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}

export async function GET(request) {
  // Extract visitor information from headers
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";

  const userAgent = request.headers.get("user-agent") || "";
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    "";
  const city = request.headers.get("x-vercel-ip-city") || "";

  const info = {
    ip,
    userAgent,
    country,
    city,
    timestamp: new Date().toUTCString(),
  };

  // Trigger notifications asynchronously in background
  const discordUrl = process.env.DISCORD_WEBHOOK_URL;
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (discordUrl) {
    sendDiscordNotification(discordUrl, info);
  }

  if (telegramToken && telegramChatId) {
    sendTelegramNotification(telegramToken, telegramChatId, info);
  }

  // Serve PDF file
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Gaurav_Kumar_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error serving resume file:", error);
    return new Response("Resume file not found.", { status: 44 });
  }
}
