import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Woodsol Chemicals in Klang, Selangor for water and air treatment enquiries — call, email or message us on WhatsApp.",
};

export default function ContactPage() {
  return <ContactForm />;
}
