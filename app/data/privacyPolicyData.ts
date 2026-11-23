import { Eye, LockKeyhole, UserRound } from "lucide-react";

export const privacySections = [
  {
    id: "information",
    number: "01",
    title: "The information we collect",
    description:
      "Every journey begins with a little information. When you interact with our platform, we collect details that help us provide a smooth and reliable experience.",
    items: [
      [
        "Personal details",
        "Your name, email address, phone number, account information, and details you choose to share with us.",
      ],
      [
        "Reservation details",
        "Booking dates, guest information, accommodation preferences, special requests, and reservation history.",
      ],
      [
        "Payment information",
        "Transaction details required to process payments. Sensitive payment information may be handled by our payment partners.",
      ],
      [
        "Technical information",
        "Your IP address, device type, browser, operating system, pages visited, and general website activity.",
      ],
    ],
  },
  {
    id: "purpose",
    number: "02",
    title: "Why we use your information",
    description:
      "Your information helps us bring the different parts of your experience together, from the first enquiry to the details of your reservation.",
    items: [
      [
        "Reservations",
        "To process bookings, coordinate with accommodation providers, and send confirmations or updates.",
      ],
      [
        "Account management",
        "To create your account, maintain your preferences, and provide access to our services.",
      ],
      [
        "Customer support",
        "To answer questions, resolve concerns, and assist with booking-related requests.",
      ],
      [
        "Service improvements",
        "To understand how our website is used, improve functionality, and develop better experiences.",
      ],
      [
        "Safety and compliance",
        "To detect fraud, prevent misuse, protect our platform, and meet applicable legal obligations.",
      ],
    ],
  },
  {
    id: "sharing",
    number: "03",
    title: "When information is shared",
    description:
      "We share information only where it is reasonably necessary to provide our services, fulfil your requests, or meet our legal responsibilities.",
    items: [
      [
        "Accommodation providers",
        "Relevant guest and booking details may be shared with the property responsible for your reservation.",
      ],
      [
        "Service partners",
        "Trusted providers may process information for payment services, website hosting, analytics, communications, and technical support.",
      ],
      [
        "Legal requirements",
        "Information may be disclosed when required by law or when necessary to protect our rights and the safety of others.",
      ],
      [
        "Business transfers",
        "Information may form part of a merger, acquisition, or business transfer, subject to applicable legal requirements.",
      ],
    ],
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies & website preferences",
    description:
      "Small technologies help our website remember certain preferences and understand how visitors interact with our pages.",
    items: [
      [
        "Essential cookies",
        "Support important website functions, account sessions, and basic security.",
      ],
      [
        "Preference cookies",
        "Remember settings and choices to make future visits more convenient.",
      ],
      [
        "Analytics cookies",
        "Help us understand website performance and improve our services.",
      ],
    ],
    note: "You can manage cookies through your browser settings. Where required, we will provide choices for non-essential cookies. Disabling certain cookies may affect website functionality.",
  },
  {
    id: "security",
    number: "05",
    title: "Keeping your information safe",
    description:
      "We take the security of personal information seriously and use reasonable technical and organisational measures designed to protect it.",
    items: [
      [
        "Protection measures",
        "We aim to prevent unauthorised access, alteration, disclosure, loss, or misuse of personal information.",
      ],
      [
        "Limited access",
        "Information should only be accessible to authorised individuals and service providers who need it for legitimate purposes.",
      ],
      [
        "Your part",
        "Please keep your login credentials confidential and contact us if you believe your account has been accessed without permission.",
      ],
    ],
    note: "No online service or electronic storage system can be guaranteed to be completely secure.",
  },
  {
    id: "retention",
    number: "06",
    title: "How long we keep information",
    description:
      "We retain personal information only for as long as reasonably necessary for the purposes explained in this policy.",
    items: [
      [
        "Active accounts",
        "Information may be retained while your account remains active.",
      ],
      [
        "Booking records",
        "Certain transaction and reservation records may need to be retained for accounting, dispute resolution, or legal purposes.",
      ],
      [
        "Deletion",
        "When information is no longer needed, we take reasonable steps to delete or anonymise it, subject to applicable retention requirements.",
      ],
    ],
  },
  {
    id: "rights",
    number: "07",
    title: "Your information, your rights",
    description:
      "Depending on your location and applicable data protection laws, you may have choices and rights concerning the personal information we hold.",
    items: [
      ["Access", "Request access to personal information we hold about you."],
      ["Correction", "Ask us to correct inaccurate or incomplete information."],
      [
        "Deletion",
        "Request deletion of personal information where applicable law allows.",
      ],
      [
        "Objection",
        "Object to or request restrictions on certain processing activities where legally available.",
      ],
      [
        "Consent",
        "Withdraw consent where processing is based on your consent.",
      ],
      ["Marketing", "Opt out of promotional communications at any time."],
    ],
    note: "Contact us to exercise an applicable privacy right. We may need to verify your identity before responding.",
  },
  {
    id: "third-party",
    number: "08",
    title: "External websites & services",
    description:
      "Our website may contain links to third-party websites, payment providers, or other external services.",
    items: [
      [
        "Independent policies",
        "Third parties may collect and process information under their own privacy policies.",
      ],
      [
        "External links",
        "We are not responsible for the content, security, or privacy practices of websites we do not operate.",
      ],
      [
        "Your choice",
        "We recommend reviewing the relevant privacy policy before sharing information with an external service.",
      ],
    ],
  },
  {
    id: "international",
    number: "09",
    title: "International information transfers",
    description:
      "Depending on where our systems and service providers operate, your information may be processed or stored in countries outside your own.",
    items: [
      [
        "Cross-border processing",
        "Information may be transferred where necessary to provide our services.",
      ],
      [
        "Safeguards",
        "Where required by law, we will take appropriate measures to protect personal information during international transfers.",
      ],
    ],
  },
  {
    id: "children",
    number: "10",
    title: "Children's privacy",
    description:
      "Our platform is not intended for children to use independently where parental or guardian consent is required by applicable law.",
    items: [
      [
        "Information about children",
        "We do not knowingly collect personal information from children in circumstances where such collection is prohibited by law.",
      ],
      [
        "Concerns",
        "If you believe a child has provided personal information improperly, please contact us so we can review the situation.",
      ],
    ],
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to this policy",
    description:
      "Our services and legal responsibilities may evolve. We may therefore update this policy from time to time.",
    items: [
      [
        "Updated policy",
        "Changes will be published on this page with a revised effective date.",
      ],
      [
        "Staying informed",
        "We encourage you to revisit this page periodically to understand our current privacy practices.",
      ],
    ],
  },
];

export const privacyPrinciples = [
  {
    icon: Eye,
    title: "Transparency",
    text: "Understand what information we collect and why.",
  },
  {
    icon: LockKeyhole,
    title: "Responsibility",
    text: "We take reasonable steps to protect the information entrusted to us.",
  },
  {
    icon: UserRound,
    title: "Your control",
    text: "Understand the rights and choices available to you.",
  },
];
