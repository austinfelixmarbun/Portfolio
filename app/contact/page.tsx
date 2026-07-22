"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { Boxes } from "../components/ui/back-boxes";
import { contactPageStyles } from "../styles/styles";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const publicKey = "gAqNT_oU14Z0jxN42";
    if (publicKey) emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const serviceId = "service_a36grn7";
    const templateId = "template_hpoma2q";

    try {
      if (!serviceId || !templateId) {
        throw new Error("EmailJS service or template ID not configured.");
      }
      await emailjs.send(serviceId, templateId, templateParams);

      setFormData({ name: "", email: "", subject: "", message: "" });
      setFocused(null);

      alert("Message sent - thank you!");
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getLabelClass = (fieldName: string) => {
    const baseClass = contactPageStyles.formLabelBase;
    const focusedClass =
      focused === fieldName || formData[fieldName as keyof typeof formData]
        ? contactPageStyles.formLabelFocused
        : contactPageStyles.formLabelUnfocused;
    return `${baseClass} ${focusedClass}`;
  };

  return (
    <div className={contactPageStyles.pageContainer}>
      <div className={contactPageStyles.contentContainer}>
        <div className={contactPageStyles.backgroundContainer}>
          <div className={contactPageStyles.backgroundEffect}>
            <Boxes className="h-full w-full" />
          </div>
          <div className={contactPageStyles.contentWrapper}>
            <div className={contactPageStyles.headerContainer}>
              <h1 className={contactPageStyles.headerTitle}>Get in Touch</h1>
              <p className={contactPageStyles.headerSubtitle}>
                Have a project in mind or just want to say hi? I&apos;d love to
                hear from you.
              </p>
            </div>

            <div className={contactPageStyles.contactMethodsGrid}>
              <a
                href="mailto:austinfelixmarbun04@gmail.com"
                className={contactPageStyles.contactCard}
              >
                <div className={contactPageStyles.contactIconContainer}>
                  <svg
                    className={contactPageStyles.contactIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className={contactPageStyles.contactLabel}>Email</p>
                  <p className={contactPageStyles.contactValue}>
                    austinfelix...
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/austinflx/"
                target="_blank"
                rel="noopener noreferrer"
                className={contactPageStyles.contactCard}
              >
                <div className={contactPageStyles.contactIconContainer}>
                  <svg
                    className={contactPageStyles.contactIcon}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className={contactPageStyles.contactLabel}>Instagram</p>
                  <p className={contactPageStyles.contactValue}>@austinflx</p>
                </div>
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className={contactPageStyles.formContainer}
            >
              <div className={contactPageStyles.formGrid}>
                <div className={contactPageStyles.formFieldContainer}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={contactPageStyles.formInput}
                    placeholder="John Doe"
                    required
                  />
                  <label
                    htmlFor="name"
                    className={getLabelClass("name")}
                  >
                    Name
                  </label>
                </div>

                {/* Email Field */}
                <div className={contactPageStyles.formFieldContainer}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={contactPageStyles.formInput}
                    placeholder="john@example.com"
                    required
                  />
                  <label
                    htmlFor="email"
                    className={getLabelClass("email")}
                  >
                    Email
                  </label>
                </div>
              </div>

              {/* Subject Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="Project Collaboration"
                  required
                />
                <label
                  htmlFor="subject"
                  className={getLabelClass("subject")}
                >
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={6}
                  className={contactPageStyles.formTextarea}
                  placeholder="Tell me about your project..."
                  required
                />
                <label
                  htmlFor="message"
                  className={getLabelClass("message")}
                >
                  Message
                </label>
              </div>
              <div className={contactPageStyles.submitButtonContainer}>
                <button
                  type="submit"
                  className={contactPageStyles.submitButton}
                  disabled={sending}
                  aria-busy={sending}
                >
                  <span className={contactPageStyles.submitButtonText}>
                    {sending ? "Sending..." : "Send Message"}
                    <svg
                      className={contactPageStyles.submitButtonIcon}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className={contactPageStyles.alternativeText}>
          Chat on Whatsapp?{" "}
          <a
            href="https://wa.me/6282245517443"
            className={contactPageStyles.alternativeLink}
            target="_blank"
          >
            +62 822-4551-7443
          </a>
        </p>
      </div>
    </div>
  );
}
