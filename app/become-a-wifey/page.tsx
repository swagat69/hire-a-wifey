import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Become a Wifey | Careers at Hire a Wifey Hervey Bay",
  description:
    "Join the Hire a Wifey team in Hervey Bay. Experienced cleaners and enthusiastic beginners welcome.",
  robots: { index: false, follow: true },
};

export default function RecruitmentPage() {
  return (
    <StubPage
      title="Recruitment page coming soon."
      body="The employment application form belongs here, not on the homepage. Every recruitment button already points to this route."
    />
  );
}
