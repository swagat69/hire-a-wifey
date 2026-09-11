/**
 * Single source of truth for homepage copy.
 * Every string here is taken from the supplied client brief
 * (Hire_A_Wifey_Hervey_Bay_Freelancer_Website_Brief_INTEGRATED.pdf).
 * Nothing in this file is invented. Do not add statistics, review text,
 * response times or guarantees that are not in the brief.
 */

/* ---------- Destinations (brief §1, §2) ---------------------------- */

export const BOOKING_URL = "/book";
export const RECRUITMENT_URL = "/become-a-wifey";
export const ENQUIRY_ANCHOR = "#enquiry";

export const CONTACT = {
  phone: "0448 168 480",
  phoneHref: "tel:+61448168480",
  email: "admin@hireawifeyaustralia.com.au",
  emailHref: "mailto:admin@hireawifeyaustralia.com.au",
  abn: "83 644 050 573",
  region: "Hervey Bay, Queensland",
} as const;

/* ---------- Navigation --------------------------------------------- */

export const NAV = [
  { label: "What We Do", href: "#services" },
  { label: "Who We Help", href: "#who-we-help" },
  { label: "NDIS & DVA", href: "#support" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQs", href: "#faq" },
] as const;

/* ---------- Hero (brief §4) ---------------------------------------- */

export const HERO = {
  headline: ["Need a hand", "around the home?"],
  brandLine: "Hire a Wifey.",
  tagline: "We Take Care of Home.",
  seoHeading: "Home Cleaning & Housekeeping Services in Hervey Bay",
  kicker: "Cleaning is only the beginning.",
  body: [
    "Imagine coming home to clean floors, a tidy kitchen, fresh beds, folded washing and fewer jobs waiting for you.",
    "Hire a Wifey provides friendly, reliable household help throughout Hervey Bay. Your Wifey can help with cleaning, laundry, ironing, dishes, changing beds, home organisation, tidying, meal preparation and those everyday household jobs you never seem to have enough time for.",
    "Book us once, every week, every fortnight or whenever you need an extra pair of hands.",
  ],
  image: {
    src: "/images/hero-folding-laundry.jpg",
    alt: "A Hire a Wifey household helper folding laundry at the dining table in a Hervey Bay home",
  },
} as const;

/* ---------- Hero trust bar (brief §4) ------------------------------ */

export const TRUST_POINTS = [
  "Fully Insured",
  "Current Police Checks",
  "One-Off Services",
  "Weekly & Fortnightly",
  "NDIS & DVA Welcome",
  "Servicing Hervey Bay",
] as const;

/* ---------- Introduction (brief §5) -------------------------------- */

export const TODO = {
  heading: ["Your to-do list", "just got shorter."],
  body: [
    "There's always something that needs doing around the home. The bathroom needs cleaning. There's washing waiting to be folded. The dishwasher needs emptying. The sheets need changing. Dinner needs preparing. And somehow the floors need cleaning again.",
    "You could spend your day off catching up on it all…",
  ],
  pullQuote: "Or you could Hire a Wifey.",
  after: [
    "We're not here to give every customer the exact same cleaning checklist. We're here to ask: what would make your life easier?",
    "Tell us what needs doing and we'll tailor your Wifey service around your home and priorities.",
  ],
  image: {
    src: "/images/todo-household-reset.jpg",
    alt: "Laundry basket, folded clothes and fresh linen during a household reset in an Australian family home",
  },
} as const;

/* ---------- The difference (brief §6) ------------------------------ */

export const DIFFERENCE = {
  heading: ["More than", "just a cleaner."],
  body: [
    "There are plenty of companies that will clean your floors and bathrooms. Hire a Wifey is different.",
    "We created our service around the reality that keeping a home running involves much more than cleaning.",
    "Sometimes the biggest help isn't vacuuming. It might be folding three baskets of washing, changing everyone's beds, emptying the dishwasher, getting the kitchen back under control, organising the pantry, preparing ingredients for dinner, or doing a combination of everything.",
  ],
  statement: ["One Wifey. One visit.", "A whole lot less to worry about."],
  images: [
    {
      src: "/images/difference-laundry.jpg",
      alt: "Household helper folding baskets of fresh laundry in a bright Hervey Bay home",
    },
    {
      src: "/images/difference-kitchen.jpg",
      alt: "Household helper resetting a family kitchen, arranging dishes and wiping the bench",
    },
  ],
} as const;

/* ---------- Trust (brief §7) --------------------------------------- */

export const GOOD_HANDS = {
  heading: ["Your home is", "in good hands."],
  body: [
    "Inviting someone into your home requires trust. We take that seriously.",
    "Hire a Wifey is fully insured, and our Wifeys have current police checks. We are focused on providing professional, respectful and reliable household assistance so customers can feel comfortable welcoming a Wifey into their home.",
  ],
  items: [
    { title: "Fully Insured", note: "Cover in place for every booked service." },
    { title: "Current Police Checks", note: "Every Wifey holds a current check." },
    { title: "Local Hervey Bay Service", note: "We live and work in the Bay." },
    { title: "Customer-Focused Wifeys", note: "Professional, respectful, reliable." },
  ],
} as const;

/* ---------- Services (brief §8) ------------------------------------ */

export type ServiceCategory = {
  id: string;
  title: string;
  prose?: string;
  items: string[];
};

export const SERVICES: ServiceCategory[] = [
  {
    id: "home-cleaning",
    title: "Home Cleaning",
    items: [
      "Regular weekly cleaning",
      "Fortnightly cleaning",
      "One-off cleaning",
      "General house cleaning",
      "Kitchen cleaning",
      "Bathroom and toilet cleaning",
      "Shower cleaning",
      "Vanities and sinks",
      "Vacuuming",
      "Mopping",
      "Dusting",
      "Surface cleaning",
      "Mirrors",
      "Internal glass",
      "Skirting boards",
      "General tidying",
      "Deep / spring cleaning",
      "Move-in cleaning",
      "Move-out cleaning",
      "Pre-sale cleaning",
      "Holiday home cleaning",
      "Airbnb cleaning and changeovers",
    ],
  },
  {
    id: "laundry",
    title: "Laundry",
    items: [
      "Putting washing on",
      "Hanging washing",
      "Bringing washing in",
      "Using the dryer",
      "Folding clothes",
      "Sorting laundry",
      "Putting clothes away",
      "Changing linen",
      "Fresh towels",
      "General laundry organisation",
    ],
  },
  {
    id: "ironing",
    title: "Ironing",
    prose:
      "Ironing can be included during a Wifey visit. Customers can combine ironing with cleaning, laundry or other household assistance.",
    items: [],
  },
  {
    id: "beds-linen",
    title: "Bed Making & Linen Changes",
    items: [
      "Strip beds",
      "Change sheets",
      "Replace pillowcases",
      "Change doona covers",
      "Make beds",
      "Put used linen into the wash",
    ],
  },
  {
    id: "dishes-kitchen",
    title: "Dishes & Kitchen Reset",
    items: [
      "Washing dishes",
      "Loading and unloading the dishwasher",
      "Putting dishes away",
      "Wiping benches",
      "Cleaning sinks",
      "Wiping accessible appliances",
      "Tidying cupboards",
      "Fridge cleaning",
      "Pantry organisation",
      "General kitchen reset",
    ],
  },
  {
    id: "organisation",
    title: "Home Organisation & Tidying",
    items: [
      "Pantry organisation",
      "Wardrobe organisation",
      "Kitchen cupboards",
      "Laundry organisation",
      "Tidying children's rooms",
      "Toy organisation",
      "Decluttering assistance",
      "Folding and putting clothes away",
      "Preparing spare rooms for guests",
      "General household reset",
    ],
  },
  {
    id: "meal-prep",
    title: "Meal Preparation",
    prose:
      "Basic meal preparation using the customer's ingredients and instructions may include washing and chopping vegetables, preparing ingredients, simple meal preparation, lunch preparation, portioning food and cleaning the kitchen afterwards.",
    items: [],
  },
  {
    id: "general-help",
    title: "General Household Help",
    prose:
      "Not sure where your job fits? Just ask. If it's a reasonable household task within our service scope, talk to us about it.",
    items: [],
  },
];

/* ---------- Build your own visit (brief §9) ------------------------ */

export const BUILD_VISIT = {
  heading: ["Your home.", "Your priorities."],
  body: [
    "You don't necessarily need to book completely separate services. Tell us what matters most and we'll work through the agreed priorities during your booked time.",
  ],
  listTitle: "Example Wifey to-do list",
  list: [
    "Clean bathrooms",
    "Vacuum and mop",
    "Change the beds",
    "Fold the washing",
    "Empty the dishwasher",
    "Tidy the kitchen",
  ],
  note: "Next visit, the priorities might be completely different.",
  closer: "Your Wifey service should work around your home — not the other way around.",
} as const;

/* ---------- Who we help (brief §10) -------------------------------- */

export type Audience = {
  id: string;
  title: string;
  body: string;
  image?: { src: string; alt: string };
};

export const AUDIENCES: Audience[] = [
  {
    id: "families",
    title: "Busy Families",
    body: "Work, school, sport, dinner, washing and cleaning can quickly consume the week. Let us take some of the household workload off your shoulders.",
    image: {
      src: "/images/who-families.jpg",
      alt: "A parent heading out with children while a Wifey handles household tasks in the background",
    },
  },
  {
    id: "professionals",
    title: "Working Professionals",
    body: "Your weekends weren't designed for scrubbing showers and catching up on laundry. Come home to fewer jobs waiting for you.",
    image: {
      src: "/images/who-professional.jpg",
      alt: "A working professional arriving home as a Wifey finishes resetting the kitchen",
    },
  },
  {
    id: "seniors",
    title: "Seniors",
    body: "Need an extra pair of hands keeping the home clean, tidy and organised? Talk to us about regular household assistance.",
    image: {
      src: "/images/who-seniors.jpg",
      alt: "An older adult at home while a Wifey makes a bed nearby",
    },
  },
  {
    id: "temporary",
    title: "People Needing Temporary Help",
    body: "Sometimes life changes and you simply need extra assistance around the home. Ask about one-off or short-term services.",
  },
  {
    id: "ndis",
    title: "NDIS Participants",
    body: "We welcome eligible self-managed and plan-managed NDIS participants requiring appropriate household assistance.",
  },
  {
    id: "dva",
    title: "DVA Clients",
    body: "We welcome eligible DVA clients requiring approved household services.",
  },
  {
    id: "housework-haters",
    title: "Anyone Who Hates Housework",
    body: "You don't need an excuse. If you'd rather spend your time doing something else, that's reason enough.",
  },
];

/* ---------- Regular service (brief §11) ---------------------------- */

export const REGULAR = {
  heading: ["Meet your new", "favourite day of the week."],
  body: "Imagine knowing your Wifey is coming every week or fortnight. The house doesn't get completely out of control, the bathrooms get cleaned, the floors get done, the beds can be changed, the washing can be folded, and you don't lose half your weekend catching up.",
  options: [
    {
      title: "Weekly Wifey",
      body: "Perfect for busy households wanting consistent help keeping everything under control.",
    },
    {
      title: "Fortnightly Wifey",
      body: "A popular option for households wanting regular help without a weekly service.",
    },
    {
      title: "One-Off Wifey",
      body: "Great for getting back on top of things, preparing for visitors, moving, a home reset, or simply trying Hire a Wifey before considering a regular service.",
    },
  ],
} as const;

/* ---------- Why choose (brief §12) --------------------------------- */

export const WHY_CHOOSE = {
  heading: ["Why choose", "Hire a Wifey?"],
  reasons: [
    "Cleaning and housekeeping in one flexible service",
    "Choose the jobs that matter to you",
    "One-off, weekly and fortnightly options",
    "Friendly, customer-focused Wifeys",
    "Equipment and cleaning supplies provided where applicable",
    "Fully insured",
    "Wifeys with current police checks",
    "Regular household assistance",
    "NDIS clients welcome",
    "DVA clients welcome",
    "Local Hervey Bay service",
    "More than just cleaning",
  ],
  statement: "Most importantly, we listen.",
  closer:
    "Every household is different. We want to understand what you need and provide a service that genuinely makes your week easier.",
} as const;

/* ---------- NDIS + DVA (brief §13, §14) ---------------------------- */

export const SUPPORT = [
  {
    id: "ndis",
    label: "NDIS",
    heading: "NDIS Cleaning & Household Assistance Hervey Bay",
    body: [
      "Hire a Wifey welcomes eligible self-managed and plan-managed NDIS participants.",
      "Depending on the participant's individual plan, funding and approved supports, household assistance may include cleaning, laundry, ironing, changing and making beds, dishes, household organisation, general household tasks, meal preparation and other appropriate household assistance.",
      "Every participant has different needs. Tell us what household assistance you're looking for and how the plan is managed, and we'll discuss how we may be able to assist.",
    ],
    cta: "NDIS Enquiry",
  },
  {
    id: "dva",
    label: "DVA",
    heading: "DVA Household Services Hervey Bay",
    body: [
      "Hire a Wifey welcomes eligible Department of Veterans' Affairs clients requiring approved household assistance.",
      "We believe household help should be reliable, respectful and easy to arrange. If you receive DVA household assistance, contact us and tell us what services have been approved. We'll discuss your requirements and whether we're able to provide the services you need.",
    ],
    cta: "DVA Enquiry",
  },
] as const;

/* ---------- Service area (brief §15) ------------------------------- */

export const SERVICE_AREA = {
  heading: ["Your local", "Hervey Bay Wifeys."],
  body: "Hire a Wifey provides home cleaning, housekeeping and household assistance throughout Hervey Bay and surrounding communities.",
  suburbs: [
    "Hervey Bay",
    "Pialba",
    "Scarness",
    "Torquay",
    "Urangan",
    "Point Vernon",
    "Kawungan",
    "Urraween",
    "Eli Waters",
    "Wondunna",
    "Nikenbah",
    "Dundowran",
    "Dundowran Beach",
    "Craignish",
    "Sunshine Acres",
    "Booral",
    "River Heads",
  ],
  noteBefore: "Can't see your suburb? ",
  noteLink: "Make an enquiry",
  noteAfter: " — our service area continues to expand.",
} as const;

/* ---------- How it works (brief §16) ------------------------------- */

export const STEPS = [
  {
    n: "01",
    title: "Tell us what you need",
    body: "Choose a booking or make an enquiry and tell us about your home and what you'd like help with.",
  },
  {
    n: "02",
    title: "Choose your service",
    body: "One-off, weekly or fortnightly. Tell us your preferred days and times.",
  },
  {
    n: "03",
    title: "Set your priorities",
    body: "Cleaning? Washing? Beds? Dishes? Tell us what matters most.",
  },
  {
    n: "04",
    title: "Your Wifey gets to work",
    body: "Your Wifey takes care of the agreed household tasks during the booked service.",
  },
  {
    n: "05",
    title: "Enjoy your time back",
    body: "That's the best part.",
  },
] as const;

/* ---------- Emotional section (brief §17) -------------------------- */

export const TIME_BACK = {
  heading: ["What would you do", "with your time back?"],
  items: [
    "Spend more time with your kids.",
    "Take the dog to the beach.",
    "Have lunch with friends.",
    "Work on your business.",
    "Go to the gym.",
    "Spend time with your partner.",
  ],
  closer: "Or do absolutely nothing.",
  note: "Your free time is valuable. Don't spend all of it cleaning.",
  image: {
    src: "/images/time-back-beach.jpg",
    alt: "A family walking their dog on a Hervey Bay beach in the late afternoon",
  },
} as const;

/* ---------- Reviews (brief §18) ------------------------------------
   The brief requires genuine reviews only. No placeholder review text
   ships here — the section renders an owner-facing empty state until
   real reviews are added to REVIEWS below.
   ------------------------------------------------------------------- */

export type Review = {
  quote: string;
  name: string;
  suburb: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const REVIEWS: Review[] = [];

export const REVIEWS_COPY = {
  heading: ["Don't just take", "our word for it."],
  support: "See what our customers say about their Wifeys.",
} as const;

/* ---------- FAQ (brief §19) ---------------------------------------- */

export const FAQS = [
  {
    q: "What does a Hire a Wifey service include?",
    a: "Hire a Wifey is more than a traditional cleaning service. Depending on your booking and requirements, your Wifey can assist with cleaning, housekeeping, laundry, ironing, changing beds, dishes, home organisation, tidying and basic meal preparation.",
  },
  {
    q: "Are you fully insured and do your Wifeys have police checks?",
    a: "Yes. Hire a Wifey is fully insured and our Wifeys have current police checks. We take trust, professionalism and the responsibility of working inside customers' homes seriously.",
  },
  {
    q: "Do I have to book cleaning?",
    a: "No. You may want help purely with laundry, ironing, bed changes, organisation or other household tasks, or combine these with cleaning during the same visit.",
  },
  {
    q: "Can I give my Wifey a list of jobs?",
    a: "Yes. Tell us which agreed jobs are most important and your Wifey can work through those priorities during the booked time.",
  },
  {
    q: "Do you offer regular cleaning in Hervey Bay?",
    a: "Yes. Weekly and fortnightly services are available subject to current availability.",
  },
  {
    q: "Can I book a one-off clean or household-help visit?",
    a: "Yes. You do not need to commit to a regular service. One-off visits are available subject to availability.",
  },
  {
    q: "Do you provide cleaning equipment and products?",
    a: "Where applicable, our Wifeys can arrive with the equipment and cleaning products required for the booked cleaning service. Customers with preferred products should discuss this when booking.",
  },
  {
    q: "Can you use my own cleaning products?",
    a: "Usually, yes. If you have preferred products or particular surface requirements, let us know when arranging the service.",
  },
  {
    q: "Do I need to be home?",
    a: "Not necessarily. Access arrangements can be discussed when the booking is confirmed.",
  },
  {
    q: "Can my Wifey do laundry and cleaning during the same visit?",
    a: "Yes. This is one of the advantages of Hire a Wifey. Tasks can be combined within the booked time according to the agreed priorities.",
  },
  {
    q: "Can you change my bed sheets?",
    a: "Yes. Leave fresh linen ready and bed changes can be included as one of the household tasks.",
  },
  {
    q: "Do you do ironing?",
    a: "Yes. Ironing can be included as part of a Wifey service.",
  },
  {
    q: "Do you do dishes?",
    a: "Yes. Hand washing dishes, loading or unloading the dishwasher and general kitchen resetting can be included.",
  },
  {
    q: "Can you help organise my home?",
    a: "Yes. Depending on the job, our Wifeys can assist with general household organisation such as pantries, wardrobes, laundries, cupboards and cluttered areas.",
  },
  {
    q: "Can you prepare food?",
    a: "Our Wifeys may assist with basic meal and ingredient preparation in the customer's home using the customer's food and instructions. Customers should explain what they require so suitability can be confirmed.",
  },
  {
    q: "Do you do deep cleans?",
    a: "Yes, depending on availability and the condition and scope of the property. Larger or more involved cleans should provide enough information for suitable booking time to be determined.",
  },
  {
    q: "Do you do move-in or move-out cleans?",
    a: "Yes, subject to availability and the required scope.",
  },
  {
    q: "Do you clean Airbnb and holiday homes?",
    a: "Yes, subject to availability and requirements. Cleaning, bed changes and general property resets can be discussed.",
  },
  {
    q: "Do you accept NDIS clients?",
    a: "Yes. We welcome eligible self-managed and plan-managed NDIS participants. Services must be appropriate to the participant's plan and funding arrangements.",
  },
  {
    q: "Do you accept DVA clients?",
    a: "Yes. We welcome eligible DVA clients requiring approved household assistance.",
  },
  {
    q: "What areas of Hervey Bay do you service?",
    a: "We service Hervey Bay and many surrounding suburbs including Pialba, Scarness, Torquay, Urangan, Point Vernon, Kawungan, Urraween, Eli Waters, Wondunna, Nikenbah, Dundowran, Dundowran Beach, Craignish, Sunshine Acres, Booral and River Heads.",
  },
  {
    q: "How long should I book for?",
    a: "This depends on the size of the home and what you want your Wifey to accomplish. Customers can provide their priorities when booking or enquiring.",
  },
  {
    q: "Can I have the same Wifey regularly?",
    a: "Where possible, we aim to provide consistency for regular customers. Staff availability, leave and scheduling can occasionally require changes.",
  },
  {
    q: "What if I need to change my booking?",
    a: "Contact us as early as possible and we'll do our best to assist. Applicable booking or cancellation conditions are clearly communicated when the service is confirmed.",
  },
  {
    q: "How do I book?",
    a: "Click any booking button on this page. All booking links lead to our dedicated Booking Page.",
  },
] as const;

/* ---------- Enquiry form (brief §20) ------------------------------- */

export const ENQUIRY = {
  heading: ["Still have a question?", "Talk to us."],
  body: "This form is for anyone who isn't quite ready to book — you have a question, an unusual request, or you'd like to talk through NDIS or DVA services first. We'd love to hear what you need help with.",
  enquiryTypes: [
    "General",
    "Cleaning",
    "Household Help",
    "NDIS",
    "DVA",
    "Other",
  ],
  contactMethods: ["Phone call", "Text message", "Email"],
  success: {
    title: "Your enquiry has been received.",
    body: "Thanks for getting in touch — we'll be in contact soon.",
  },
} as const;

/* ---------- Final sales (brief §21) -------------------------------- */

export const FINAL = {
  opener: "Imagine this…",
  lines: [
    "You get home.",
    "The floors are done.",
    "The bathrooms are clean.",
    "The kitchen is tidy.",
    "The beds are fresh.",
    "The washing is folded.",
  ],
  turn: "And instead of starting another list of chores…",
  punch: "You're finished for the day.",
  statement: ["That's what Hire a Wifey is really selling.", "Not just cleaning."],
  word: "Time.",
  body: "Time with your family. Time for yourself. Time to enjoy your home instead of constantly maintaining it. Let us take something off your plate.",
  signoff: "Hire a Wifey. We Take Care of Home.",
} as const;

/* ---------- Recruitment (brief §22) -------------------------------- */

export const RECRUITMENT = {
  heading: ["Want to become", "a Wifey?"],
  body: [
    "We're growing Hire a Wifey and we're looking for great people to join us. We're interested in both experienced cleaners and people who may be new to professional cleaning but have the right attitude.",
    "What matters to us is being reliable, friendly, taking pride in your work, caring about customers and understanding that the little things matter.",
    "Training and support can be provided, with casual and permanent opportunities potentially available depending on current requirements.",
  ],
  notes: [
    "Experienced cleaner? We'd especially love to hear from you.",
    "No professional experience? Don't automatically count yourself out. If you're enthusiastic, dependable and willing to learn, we'd still like to hear from you.",
  ],
  image: {
    src: "/images/recruitment-wifey.jpg",
    alt: "A Hire a Wifey team member in uniform standing in a Hervey Bay home after finishing household tasks",
  },
} as const;

/* ---------- Footer (brief §23) ------------------------------------- */

export const FOOTER = {
  blurb:
    "Professional home cleaning, housekeeping and household assistance throughout Hervey Bay.",
  services: [
    "Cleaning",
    "Housekeeping",
    "Laundry",
    "Ironing",
    "Bed Making",
    "Dishes",
    "Home Organisation",
    "Meal Preparation",
    "Household Help",
  ],
  trustLine: [
    "Fully Insured",
    "Wifeys with Current Police Checks",
    "NDIS & DVA Clients Welcome",
  ],
} as const;
