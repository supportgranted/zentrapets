"use client";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const FloatingTranslateButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "ca,fr,en,pt,es",
          layout:
            window.google.translate.TranslateElement?.InlineLayout
              ?.HORIZONTAL || 0,
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
      }}
    >
      <div
        id="google_translate_element"
        style={{
          display: visible ? "flex" : "none",
          color: "#fff",
          backgroundColor: "#c3e0ff",
          border: "0px solid #000000",
          borderRadius: "5px",
          padding: "8px 20px",
        }}
      />
      <button
        className="flex items-center justify-center"
        onClick={() => setVisible(!visible)}
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "58px",
          height: "58px",
          fontSize: "30px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
        aria-label="Traducir"
        title="Traducir esta página"
      >
        <Languages size={32} color="var(--color-primary)" strokeWidth={1.75} />
      </button>
    </div>
  );
};

export default FloatingTranslateButton;
