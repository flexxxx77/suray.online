"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FeedbackForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_7ypj80q",
        "template_m712dut",
        form.current,
        "5SQifsW93f9FflQ4H"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Амжилттай илгээгдлээ!");
          form.current?.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Алдаа гарлаа! Дахин оролдоно уу.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        background: "#ffffffcc",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>
        Санал хүсэлт
      </h2>

      <label style={{ display: "block", marginBottom: "5px" }}>Нэр:</label>
      <input
        type="text"
        name="name"
        required
        placeholder="Таны нэр"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ display: "block", marginBottom: "5px" }}>Имэйл:</label>
      <input
        type="email"
        name="email"
        required
        placeholder="email@example.com"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ display: "block", marginBottom: "5px" }}>Зурвас:</label>
      <textarea
        name="message"
        required
        placeholder="Санал хүсэлтээ энд бичнэ үү..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          height: "120px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          resize: "vertical",
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#2c3e50",
          color: "white",
          fontWeight: "bold",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1a242f")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2c3e50")}
      >
        Илгээх
      </button>
    </form>
  );
}
