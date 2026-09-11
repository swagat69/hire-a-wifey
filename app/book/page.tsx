import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Book a Wifey | Hire a Wifey Hervey Bay",
  description:
    "Book cleaning, housekeeping and household assistance with Hire a Wifey in Hervey Bay.",
  robots: { index: false, follow: true },
};

export default function BookPage() {
  return (
    <StubPage
      title="Booking page coming soon."
      body="This is where the dedicated booking flow will live. Every booking button on the homepage already points here, so the page can be built without touching anything else."
    />
  );
}
