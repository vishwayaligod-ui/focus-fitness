"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/config";

type Status = "idle" | "success" | "error";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function validate() {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[0-9+\-\s]{7,15}$/.test(values.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Tell us a little about your goals.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    try {
      const enquiryMessage = [
        "Hi Focus Fitness! I'd like to make an enquiry.",
        "",
        `Name: ${values.name.trim()}`,
        `Phone: ${values.phone.trim()}`,
        values.email.trim() ? `Email: ${values.email.trim()}` : "",
        `Message: ${values.message.trim()}`,
      ]
        .filter(Boolean)
        .join("\n");

      const whatsappUrl = whatsappLink(enquiryMessage);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setStatus("success");
      setValues({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border-b border-bone/20 bg-transparent py-3 text-bone placeholder:text-ash focus-outline focus:border-ember transition-colors";

  if (status === "success") {
    return (
      <div className="border border-ember/40 bg-ember/5 p-8 text-center">
        <p className="big-heading text-3xl text-bone">WhatsApp Opened.</p>
        <p className="mt-3 text-sm text-ash">
          Your enquiry has been prepared in WhatsApp. Tap Send in WhatsApp to
          complete your enquiry.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-ash">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className={inputClass}
          placeholder="Your full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-xs text-crimson">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.2em] text-ash">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          className={inputClass}
          placeholder="Enter your 10-digit mobile number"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-2 text-xs text-crimson">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-ash">
          Email (optional)
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          className={inputClass}
          placeholder="Enter your email address"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-xs text-crimson">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-ash">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className={inputClass}
          placeholder="Tell us about your fitness goals..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-crimson">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-crimson" role="alert">
          Something went wrong. Please try again, or message us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        className="focus-outline w-full bg-ember px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-90"
      >
        Send via WhatsApp →
      </button>
    </form>
  );
}
