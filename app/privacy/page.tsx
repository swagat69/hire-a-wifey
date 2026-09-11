import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Hire a Wifey",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <StubPage
      title="Privacy policy coming soon."
      body="This page will set out how Hire a Wifey collects, uses and stores the information you provide through the enquiry form."
    />
  );
}
