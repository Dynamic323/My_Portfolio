import { useEffect } from "react";
import UAParser from "ua-parser-js";

export default function VisitorNotifier() {
  useEffect(() => {
    const collectVisitorInfo = async () => {
      try {
        // Get IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        // Get location
        const locRes = await fetch(`https://ipwho.is/${ip}`);
        const { city, region: regionName, country } = await locRes.json();
        const location = `${city}, ${regionName}, ${country}`;

        // Get device info
        const parser = new UAParser();
        const { browser, os, device } = parser.getResult();
        const deviceName =
          device.vendor && device.model
            ? `${device.vendor} ${device.model}`
            : `${browser.name} (${os.name})`;

        // Build Telegram message
        const text = `
🚨 *New Visitor*
━━━━━━━━━━━━━━━
🌐 *Page*: ${window.location.pathname}
🌍 *Location*: ${location}
📱 *Device*: ${deviceName}
🖥️ *IP*: ${ip}
⏰ *Time*: ${new Date().toLocaleString()}
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

  return null; // nothing renders
}
