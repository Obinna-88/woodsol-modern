"use client";
import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(() => {
    try {
      if (typeof window === "undefined") return "";
      return localStorage.getItem("woodsol_chat_draft") || "";
    } catch {
      return "";
    }
  });
  const [toast, setToast] = useState("");

  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const panelId = "woodsol-chat-panel";

  // Persist draft whenever message changes
  useEffect(() => {
    try {
      if (message) localStorage.setItem("woodsol_chat_draft", message);
      else localStorage.removeItem("woodsol_chat_draft");
    } catch {
      // ignore storage errors (private mode)
    }
  }, [message]);

  // Handle focus when opening/closing, and keyboard Escape to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    if (open) {
      // focus textarea when panel opens
      setTimeout(() => textareaRef.current?.focus(), 50);
      document.addEventListener("keydown", onKey);
    } else {
      document.removeEventListener("keydown", onKey);
      // restore focus to toggle button
      setTimeout(() => toggleRef.current?.focus(), 50);
    }

    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // The company WhatsApp number (international format, no leading +)
  const whatsappNumber = "60125117450";

  function normalizeMessage(text?: string) {
    return encodeURIComponent((text || "").trim() || "Hello, I would like more information about WoodSol products.");
  }

  function sendToWhatsApp() {
    const text = normalizeMessage(message);
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    setToast("Opening WhatsApp...");
    setOpen(false);

    // analytics: fire if available
    try {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") w.gtag("event", "chat_send", { event_category: "engagement", event_label: "whatsapp_send" });
    } catch {
      // ignore
    }

    setTimeout(() => setToast(""), 2800);
    window.open(url, "_blank", "noopener noreferrer");
  }

  return (
    <div className="chat-widget" aria-live="polite">
      <button
        ref={toggleRef}
        className="chat-toggle"
        aria-haspopup="dialog"
        aria-expanded={open ? "true" : "false"}
        aria-controls={panelId}
        onClick={() => setOpen((s) => !s)}
        title={open ? "Close chat" : "Chat with us"}
      >
        <span className="visually-hidden">{open ? "Close chat panel" : "Open chat panel"}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="white" />
          <path d="M7 8h10M7 12h6" stroke="#0b7a44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`chat-panel ${open ? "open" : ""}`} id={panelId} role="dialog">
        <div className="chat-header">
          <strong>Chat with WoodSol</strong>
          <button className="btn-close" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
        </div>

        <div className="chat-body">
          <p className="small text-muted">Type a short message and we will connect on WhatsApp.</p>
          <textarea
            ref={textareaRef}
            className="form-control"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi — I'm interested in your water treatment services..."
            aria-label="Message to WoodSol"
          />

          <div className="chat-contact small text-muted mt-2">
            <div>Or call us: <a href="tel:+60333713360">+60 3-3371 3360</a></div>
            <div>Email: <a href="mailto:woodsol@woodsol.com">woodsol@woodsol.com</a></div>
          </div>
        </div>

        <div className="chat-actions">
          <button className="btn btn-outline-secondary" onClick={() => { setMessage(""); setOpen(false); }}>Cancel</button>
          <button className="btn btn-success" onClick={sendToWhatsApp} disabled={false}>Send via WhatsApp</button>
        </div>
      </div>

      {toast && <div className="chat-toast" role="status">{toast}</div>}
    </div>
  );
}

