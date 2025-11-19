"use client";
import { useEffect, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem("woodsol_chat_draft") : null;
      return saved || "";
    } catch {
      return "";
    }
  });

  const [toast, setToast] = useState("");

  // Persist draft whenever message changes
  useEffect(() => {
    try {
      if (message) localStorage.setItem("woodsol_chat_draft", message);
      else localStorage.removeItem("woodsol_chat_draft");
    } catch {
      // ignore
    }
  }, [message]);

  // The company WhatsApp number (international format, no + or dashes).
  // Set to the number provided by the company: +60 12 511 7450 => 60125117450
  const whatsappNumber = "60125117450";

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(message || "Hello, I would like more info about WoodSol products.");
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Show a small confirmation toast and close the panel before opening WhatsApp
    setToast("Opening WhatsApp...");
    setOpen(false);

    // analytics event (if analytics available)
    try {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", "chat_send", {
          event_category: "engagement",
          event_label: "whatsapp_send",
        });
      }
    } catch {
      // ignore
    }

    // clear toast after 3s
    setTimeout(() => setToast(""), 3000);

    // open WhatsApp in a new tab/window
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div>
      <div className="chat-widget">
        <button
          className="chat-toggle"
          aria-label="Open chat"
          onClick={() => setOpen((s) => !s)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="white" />
            <path d="M7 8h10M7 12h6" stroke="#0b7a44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <div className="chat-panel" role="dialog" aria-modal="false">
            <div className="chat-header">
              <strong>Chat with WoodSol</strong>
              <button className="btn-close" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
            </div>

            <div className="chat-body">
              <p className="small text-muted">Type your message below — we will connect you on WhatsApp.</p>
              <textarea
                className="form-control"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi — I'm interested in your water treatment products..."
              />
            </div>

            <div className="chat-actions">
              <button className="btn btn-outline-secondary" onClick={() => { setMessage(""); setOpen(false); }}>Cancel</button>
              <button className="btn btn-success" onClick={sendToWhatsApp}>Send via WhatsApp</button>
            </div>
          </div>
        )}
        {/* Toast confirmation */}
        {toast && <div className="chat-toast" role="status">{toast}</div>}
      </div>
    </div>
  );
}

