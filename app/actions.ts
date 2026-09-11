"use server";

import { ENQUIRY } from "@/lib/content";
import type { EnquiryState } from "@/lib/enquiry";

const AU_MOBILE = /^(?:\+?61|0)[2-478](?:[ -]?\d){8}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();

  const values = {
    name: get("name"),
    mobile: get("mobile"),
    email: get("email"),
    suburb: get("suburb"),
    enquiryType: get("enquiryType"),
    contactMethod: get("contactMethod"),
    message: get("message"),
  };

  // Bots fill every field they can see; humans never see this one.
  if (get("company")) {
    return { status: "success", errors: {}, values: {} };
  }

  const errors: Record<string, string> = {};

  if (values.name.length < 2) {
    errors.name = "Please tell us your name.";
  }
  if (!AU_MOBILE.test(values.mobile.replace(/\s+/g, ""))) {
    errors.mobile = "Please enter a valid Australian mobile or phone number.";
  }
  if (values.email && !EMAIL.test(values.email)) {
    errors.email = "That email address doesn't look right.";
  }
  if (values.suburb.length < 2) {
    errors.suburb = "Please tell us your suburb.";
  }
  if (values.message.length < 10) {
    errors.message = "Please tell us a little about what you need help with.";
  }
  if (
    values.enquiryType &&
    !ENQUIRY.enquiryTypes.includes(values.enquiryType as never)
  ) {
    errors.enquiryType = "Please choose an option from the list.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  // ---------------------------------------------------------------
  // INTEGRATION POINT — not yet wired.
  //
  // The enquiry is validated but nothing is delivered anywhere. Before
  // launch, send it to admin@hireawifeyaustralia.com.au here (Resend,
  // Postmark, SES or the host's form handler) and return "error" with a
  // general message if delivery fails. Do not go live until this is done:
  // the form currently reports success without notifying anyone.
  // ---------------------------------------------------------------
  console.info("[enquiry] validated, delivery not yet configured", {
    suburb: values.suburb,
    enquiryType: values.enquiryType,
  });

  return { status: "success", errors: {}, values: {} };
}
