import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Terms | Hire a Wifey",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <StubPage
      title="Terms coming soon."
      body="Booking, cancellation and service conditions will be published here and confirmed with you when a service is booked."
    />
  );
}
