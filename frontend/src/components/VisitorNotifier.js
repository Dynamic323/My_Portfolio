"use client";
import { UAParser } from "ua-parser-js";
import { useEffect } from "react";

export default function VisitorNotifier() {
  useEffect(() => {
    const collectVisitorInfo = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        const locRes = await fetch(`https://ipwho.is/${ip}`);
        const { city, region: regionName, country, continent } = await locRes.json();
        const location = `${city}, ${regionName}, ${country}`;

        const parser = new UAParser();
        const { browser, os, device } = parser.getResult();
        const deviceName =
          device.vendor && device.model
            ? `${device.vendor} ${device.model}`
            : `${browser.name} (${os.name})`;

        const text = `
🚨 *New Visitor*
━━━━━━━━━━━━━━━
 *Page*: ${window.location.pathname}
🌍 *Location*: ${location}
📱 *Device*: ${deviceName}
 *IP*: ${ip}
 *Time*: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━
        `;

        await fetch("/api/telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });
      } catch (err) {
        console.error("Telegram notify error:", err);
      }
    };

    collectVisitorInfo();
  }, []);

  return null;
}
