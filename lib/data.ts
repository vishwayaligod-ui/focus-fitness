export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Training", href: "/training" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export const statistics = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Certified Trainers" },
  { value: 95, suffix: "%", label: "Member Satisfaction" },
  { value: 3, suffix: "+", label: "Years of Impact" },
];

export const coreBenefits = [
  {
    title: "Modern Equipment",
    description:
      "Precision-engineered strength and cardio equipment, maintained to a standard that matches your ambition.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Expert Trainers",
    description:
      "Certified coaches who study your movement, correct your form, and push your ceiling higher.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Personalized Plans",
    description:
      "No two athletes train the same. Your program is built around your body, your goals, your timeline.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Supportive Community",
    description:
      "Train alongside people who show up for themselves — and for each other. Discipline is contagious here.",
    image:
      "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1600&q=80",
  },
];

export const trainingPrograms = [
  {
    slug: "strength-training",
    title: "Strength Training",
    short: "Build raw, functional power from the ground up.",
    description:
      "Progressive overload programming built on the big compound lifts — squat, deadlift, press, and pull — coached for technique first, load second.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "muscle-building",
    title: "Muscle Building",
    short: "Structured hypertrophy programming for visible results.",
    description:
      "Volume-driven training splits, tracked progression, and nutrition guidance designed to build lean, sustainable muscle.",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "fat-loss",
    title: "Fat Loss",
    short: "Metabolic conditioning that torches fat, not motivation.",
    description:
      "High-intensity circuits and structured cardio protocols paired with accountability coaching to keep the results coming.",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    short: "One coach. One plan. Zero guesswork.",
    description:
      "One-on-one sessions built entirely around your goals, schedule, and starting point — with a coach in your corner every rep.",
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "functional-training",
    title: "Functional Training",
    short: "Train movement, not just muscle.",
    description:
      "Multi-planar, athletic conditioning that builds strength you can actually use — better balance, power, and mobility for real life.",
    image:
      "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "womens-fitness",
    title: "Women's Fitness",
    short: "A dedicated space, a dedicated approach.",
    description:
      "Strength and conditioning programming designed by trainers who understand the goals and needs specific to women's fitness.",
    image:
      "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1600&q=80",
  },
];

export type Facility = {
  title: string;
  description: string;
  image: string;
};

export const facilities: Facility[] = [
  {
    title: "Strength Training Area",
    description:
      "A dedicated floor of racks, platforms, and free weights built for serious lifting.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Cardio Area",
    description:
      "Rows of modern cardio machines with a view, built to keep your engine strong.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Functional Training Zone",
    description:
      "Open turf, sleds, ropes, and rigs for athletic, movement-based conditioning.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Personal Training Area",
    description:
      "A focused, semi-private space for one-on-one coaching sessions.",
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Locker Facilities",
    description:
      "Clean, secure lockers so you can walk in and get straight to work.",
    image:
      "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Shower Facilities",
    description:
      "Well-maintained showers so your day can carry on right after training.",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1600&q=80",
  },
];

export type MembershipPlan = {
  name: string;
  price: string;
  period: string;
  featured?: boolean;
  features: string[];
};

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Basic",
    price: "—",
    period: "/ month",
    features: [
      "Full gym floor access",
      "Standard operating hours",
      "Locker access",
      "Community events",
    ],
  },
  {
    name: "Standard",
    price: "—",
    period: "/ month",
    featured: true,
    features: [
      "Everything in Basic",
      "Extended hours access",
      "Group class access",
      "Monthly progress check-in",
      "Guest passes",
    ],
  },
  {
    name: "Premium",
    price: "—",
    period: "/ month",
    features: [
      "Everything in Standard",
      "Personal training sessions",
      "Custom nutrition guidance",
      "Priority booking",
      "Premium locker + towel service",
    ],
  },
];

export const values = [
  {
    title: "Discipline",
    description: "Consistency compounds. We build habits that outlast motivation.",
  },
  {
    title: "Progress",
    description: "Every session is measured against yesterday, not anyone else.",
  },
  {
    title: "Community",
    description: "Strength is easier to sustain when it's shared.",
  },
  {
    title: "Expertise",
    description: "Every program is guided by trainers who know the science of the work.",
  },
];
