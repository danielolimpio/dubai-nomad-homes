export type GlossaryCategory =
  | "investment"
  | "visas"
  | "rentals"
  | "areas"
  | "legal"
  | "finance";

export const glossaryCategories: { slug: GlossaryCategory; name: string; description: string }[] = [
  { slug: "investment", name: "Investment", description: "Core concepts every Dubai property investor should master." },
  { slug: "visas", name: "Visas & Residency", description: "Residency pathways tied to Dubai real estate and remote work." },
  { slug: "rentals", name: "Rentals", description: "Long-term, short-term and holiday-home rental terminology." },
  { slug: "areas", name: "Areas & Communities", description: "Freehold zones, master-plans and community frameworks." },
  { slug: "legal", name: "Legal & Regulatory", description: "Laws, authorities and compliance frameworks in Dubai property." },
  { slug: "finance", name: "Finance & Fees", description: "Mortgages, fees, taxes and remittance concepts for foreign buyers." },
];

export type GlossaryFAQ = { q: string; a: string };

export type GlossaryTerm = {
  slug: string; // canonical slug, e.g. "freehold-property"
  term: string; // display term, e.g. "Freehold Property"
  category: GlossaryCategory;
  shortAnswer: string; // 40-60 words, direct answer for snippets
  definition: string; // longer definition paragraph
  keyFacts: string[];
  howItWorks?: string[];
  practicalExample?: string;
  whyItMatters?: string;
  advantages?: string[];
  disadvantages?: string[];
  commonMistakes?: string[];
  faqs: GlossaryFAQ[];
  relatedSlugs: string[]; // related glossary term slugs
  relatedArticleSlugs?: { category: string; slug: string }[];
  synonyms?: string[];
  updated: string; // ISO-ish date
  readingMinutes: number;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "freehold-property",
    term: "Freehold Property",
    category: "areas",
    synonyms: ["freehold ownership", "freehold zone"],
    shortAnswer:
      "Freehold property in Dubai is real estate that non-UAE nationals can own outright — including the land, the building and the right to sell, lease or bequeath it — inside government-designated freehold zones defined by Regulation No. 3 of 2006.",
    definition:
      "Freehold ownership grants the buyer a permanent title deed registered with the Dubai Land Department (DLD), with no expiry and no ground rent. It is the strongest form of property ownership available to foreigners in the emirate and is limited to specific freehold areas mapped by the DLD.",
    keyFacts: [
      "Introduced for foreigners by Regulation No. 3 of 2006.",
      "Registered with the Dubai Land Department (DLD) via a title deed.",
      "Available only inside designated freehold zones (Marina, Downtown, JVC, Dubai Hills, etc.).",
      "No annual property tax; a 5% municipality housing fee is collected via DEWA.",
    ],
    howItWorks: [
      "Buyer and seller sign Form F (MOU) and pay a 10% deposit.",
      "Developer issues a No Objection Certificate (NOC).",
      "Transfer completes at a DLD Trustee Office; DLD issues the new title deed.",
    ],
    practicalExample:
      "A remote worker from Brazil buys a 1-bedroom apartment in Dubai Marina for AED 1.4M. Because Marina is a freehold zone, the buyer receives a DLD title deed in their personal name and can later resell, lease or use the property as collateral.",
    whyItMatters:
      "Freehold status determines whether a foreign buyer can hold the title personally, qualify for a property-linked visa, and freely resell on the secondary market.",
    advantages: ["Perpetual ownership", "Full resale rights", "Eligible for Golden Visa when value ≥ AED 2M"],
    disadvantages: ["Limited to designated zones", "Service charges apply", "Requires DLD registration fees"],
    commonMistakes: [
      "Assuming every Dubai neighborhood is freehold — many are leasehold or Emirati-only.",
      "Skipping the DLD freehold-map check before signing an MOU.",
    ],
    faqs: [
      { q: "Can any foreigner buy freehold property in Dubai?", a: "Yes, non-UAE and non-GCC nationals can buy freehold in designated zones, subject to standard KYC and title-registration procedures at the DLD." },
      { q: "Does freehold ownership grant a residency visa?", a: "It does not automatically. However, a freehold property valued at AED 750,000+ can qualify the owner for a 2-year investor visa, and AED 2M+ for the 10-year Golden Visa." },
      { q: "Are there annual property taxes on freehold in Dubai?", a: "No. There is no annual property tax. Owners pay community service charges and a 5% municipality housing fee based on the property's rental value." },
    ],
    relatedSlugs: ["leasehold-property", "title-deed", "dld", "golden-visa", "oqood"],
    relatedArticleSlugs: [
      { category: "guides", slug: "buy-property-dubai-foreigner-legal-guide-2026" },
      { category: "areas", slug: "jvc-dubai-property-investment-guide-2026" },
    ],
    updated: "2026-03-01",
    readingMinutes: 5,
  },
  {
    slug: "leasehold-property",
    term: "Leasehold Property",
    category: "areas",
    shortAnswer:
      "Leasehold property in Dubai is real estate held under a long-term lease — typically 30 to 99 years — where the buyer owns the right to use the unit but not the underlying land. It is less common than freehold and mostly appears outside designated freehold zones.",
    definition:
      "Leasehold ownership is a contractual right to occupy and use a property for a fixed term. At the end of the lease, the property reverts to the freeholder unless renewed. It is registered with the DLD but carries different resale and financing dynamics than freehold.",
    keyFacts: [
      "Typical duration: 30–99 years.",
      "Buyer holds a usufruct right, not underlying land ownership.",
      "Common in some older or non-designated communities.",
      "Financing terms may be less favorable than freehold.",
    ],
    faqs: [
      { q: "Is leasehold in Dubai a good investment?", a: "It can be, but resale liquidity and mortgage options are typically narrower than freehold. Always confirm remaining lease term and renewal terms before purchase." },
      { q: "Can leasehold property qualify for a Golden Visa?", a: "The Golden Visa property route requires a title deed valued at AED 2M+. Most qualifying deeds are freehold; leasehold structures rarely meet the criteria." },
    ],
    relatedSlugs: ["freehold-property", "title-deed", "dld"],
    updated: "2026-03-01",
    readingMinutes: 4,
  },
  {
    slug: "title-deed",
    term: "Title Deed",
    category: "legal",
    shortAnswer:
      "A title deed in Dubai is the official ownership document issued by the Dubai Land Department (DLD) that legally proves who owns a property. It lists the owner, unit details, plot number and any registered mortgages, and is required for resale, financing and visa applications.",
    definition:
      "The DLD title deed is the highest form of property proof in Dubai. It is issued after transaction registration and a fee payment (AED 580 for issuance). All property-linked visa applications reference the title deed as the primary asset document.",
    keyFacts: [
      "Issued by the Dubai Land Department.",
      "Required for resale and mortgage registration.",
      "Fee: AED 580 for issuance.",
      "Available in physical and electronic (e-title) format.",
    ],
    faqs: [
      { q: "How long does it take to receive a title deed?", a: "For ready property transfers, the new title deed is typically issued on the transfer date at the DLD Trustee Office." },
      { q: "Is an Oqood the same as a title deed?", a: "No. Oqood is the interim off-plan registration; the full title deed is issued after project handover." },
    ],
    relatedSlugs: ["oqood", "freehold-property", "dld", "noc"],
    relatedArticleSlugs: [{ category: "guides", slug: "buy-property-dubai-foreigner-legal-guide-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "oqood",
    term: "Oqood",
    category: "legal",
    shortAnswer:
      "Oqood is the Dubai Land Department's mandatory pre-registration system for off-plan property. It records the buyer's rights in a project before construction is complete and serves as interim proof of ownership until the final title deed is issued at handover.",
    definition:
      "Introduced to protect off-plan buyers, Oqood registration attaches the Sale and Purchase Agreement to the DLD's official records. It is required for every off-plan sale in Dubai and is a prerequisite to receiving the final title deed.",
    keyFacts: [
      "Applies exclusively to off-plan property.",
      "Registered by the developer with the DLD.",
      "Standard fee: 4% of the property value plus AED 3,000 admin.",
      "Replaced by a title deed at handover.",
    ],
    faqs: [
      { q: "Is Oqood mandatory?", a: "Yes, every off-plan sale in Dubai must be registered under Oqood by the developer." },
      { q: "Can I resell an Oqood-registered property?", a: "Yes, provided the developer's payment threshold is met and the developer issues an NOC for transfer." },
    ],
    relatedSlugs: ["off-plan-property", "title-deed", "dld", "escrow-account"],
    relatedArticleSlugs: [{ category: "invest", slug: "off-plan-vs-ready-property-dubai-roi-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "off-plan-property",
    term: "Off-Plan Property",
    category: "investment",
    synonyms: ["off plan", "pre-construction property"],
    shortAnswer:
      "Off-plan property in Dubai is real estate purchased directly from a developer before construction is complete. Buyers pay in structured installments tied to construction milestones, benefit from lower entry prices and are protected by an escrow account regulated under Law No. 8 of 2007.",
    definition:
      "Off-plan is a primary-market purchase from a licensed developer. Payments follow a milestone schedule (booking, construction stages, handover) and are deposited into a RERA-supervised escrow account. It typically offers lower entry prices and payment plans in exchange for handover risk.",
    keyFacts: [
      "Payments held in a RERA-regulated escrow account.",
      "Payment plans typically range from 60/40 to 40/60 (during/post handover).",
      "Handover risk mitigated by escrow law.",
      "Registered via Oqood at the DLD.",
    ],
    advantages: ["Lower entry price", "Installment payment plans", "Potential capital appreciation before handover"],
    disadvantages: ["Handover delay risk", "No immediate rental income", "Design changes possible"],
    faqs: [
      { q: "Is off-plan safe in Dubai?", a: "Escrow protection under Law No. 8 of 2007 significantly reduces risk, but delivery timing and developer track record should still be independently verified." },
      { q: "Can I finance off-plan with a mortgage?", a: "Some UAE banks offer off-plan mortgages after a certain construction completion percentage, typically 50%+." },
    ],
    relatedSlugs: ["ready-property", "escrow-account", "oqood", "rera", "payment-plan"],
    relatedArticleSlugs: [{ category: "invest", slug: "off-plan-vs-ready-property-dubai-roi-2026" }],
    updated: "2026-03-01",
    readingMinutes: 6,
  },
  {
    slug: "ready-property",
    term: "Ready Property",
    category: "investment",
    shortAnswer:
      "Ready property in Dubai refers to fully constructed and titled units available for immediate transfer, occupation or leasing on the secondary market. It carries no handover risk and can generate rental income from day one, but usually commands a higher price than comparable off-plan.",
    definition:
      "Ready (secondary-market) property has a completed title deed and can be inspected physically before purchase. Transactions are settled at a DLD Trustee Office and the buyer takes possession immediately upon transfer.",
    keyFacts: [
      "Immediate title-deed transfer at DLD.",
      "Can be occupied or rented from day one.",
      "Requires developer NOC and full payment at transfer.",
      "Mortgage LTVs up to 80% for UAE residents on first property.",
    ],
    faqs: [
      { q: "Ready or off-plan — which delivers higher ROI?", a: "Historically off-plan captured stronger capital appreciation in early-cycle years, while ready delivered predictable rental yields. The right choice depends on capital, timeline and risk tolerance." },
    ],
    relatedSlugs: ["off-plan-property", "title-deed", "noc", "mortgage-ltv"],
    relatedArticleSlugs: [{ category: "invest", slug: "off-plan-vs-ready-property-dubai-roi-2026" }],
    updated: "2026-03-01",
    readingMinutes: 4,
  },
  {
    slug: "escrow-account",
    term: "Escrow Account",
    category: "legal",
    shortAnswer:
      "In Dubai real estate, an escrow account is a RERA-regulated bank account where all off-plan buyer payments are deposited. Funds can only be released to the developer against verified construction progress, protecting buyers under Law No. 8 of 2007.",
    definition:
      "Escrow accounts ring-fence buyer funds from a developer's general operating cash. An independent auditor and RERA authorize each release based on construction milestones, ensuring payments follow actual project delivery.",
    keyFacts: [
      "Mandated by Law No. 8 of 2007.",
      "Supervised by RERA and audited independently.",
      "Applies to all off-plan projects in Dubai.",
    ],
    faqs: [
      { q: "What happens to escrow funds if a developer defaults?", a: "Funds remain protected in the escrow bank. RERA may transfer the project to another developer or refund buyers, depending on project status." },
    ],
    relatedSlugs: ["off-plan-property", "rera", "oqood"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "rera",
    term: "RERA (Real Estate Regulatory Agency)",
    category: "legal",
    synonyms: ["Real Estate Regulatory Agency"],
    shortAnswer:
      "RERA is the Real Estate Regulatory Agency of Dubai, the regulatory arm of the Dubai Land Department. It licenses brokers, regulates developers and service charges, administers Ejari and Mollak, and enforces landlord–tenant law across the emirate.",
    definition:
      "RERA sets the framework for professional standards, developer accountability, service-charge governance (Mollak) and lease registration (Ejari). It publishes Dubai's official rental index used for rent-increase disputes.",
    keyFacts: [
      "Arm of the Dubai Land Department (DLD).",
      "Licenses brokers, developers and management firms.",
      "Operates Ejari (leases) and Mollak (service charges).",
      "Publishes the RERA Rental Index.",
    ],
    faqs: [
      { q: "How do I check if a broker is RERA-registered?", a: "Use the Dubai REST app or the DLD website to verify the broker's BRN (Broker Registration Number)." },
    ],
    relatedSlugs: ["dld", "ejari", "mollak", "service-charges"],
    updated: "2026-03-01",
    readingMinutes: 4,
  },
  {
    slug: "dld",
    term: "Dubai Land Department (DLD)",
    category: "legal",
    shortAnswer:
      "The Dubai Land Department (DLD) is the government body responsible for registering, regulating and documenting all real-estate transactions in Dubai. It issues title deeds, maintains the freehold map and oversees RERA, Ejari, Mollak and Oqood.",
    definition:
      "Established in 1960, the DLD is the ultimate authority on property ownership records in Dubai. Every sale, mortgage or lease-registration event flows through its systems and Trustee Offices.",
    keyFacts: [
      "Issues all title deeds in Dubai.",
      "Charges a 4% transfer fee on ownership changes.",
      "Publishes monthly transaction data and price indices.",
    ],
    faqs: [
      { q: "Where do property transfers physically happen?", a: "At licensed DLD Trustee Offices located across Dubai." },
    ],
    relatedSlugs: ["rera", "title-deed", "freehold-property", "trustee-office"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "trustee-office",
    term: "DLD Trustee Office",
    category: "legal",
    shortAnswer:
      "A DLD Trustee Office is a licensed service center authorized to process property transfers on behalf of the Dubai Land Department. Buyers, sellers, mortgage banks and brokers complete title-deed transfers there in a single appointment.",
    definition:
      "Trustee Offices centralize the paperwork, fee collection and title issuance steps of a Dubai property transfer. Standard trustee fee is AED 4,000 for properties above AED 500,000.",
    keyFacts: [
      "Licensed by the DLD.",
      "Trustee fee: AED 4,000 (properties > AED 500,000).",
      "Manager cheques required for payment settlement.",
    ],
    faqs: [
      { q: "Can I complete a transfer remotely?", a: "Some transfers can be completed via power of attorney (POA); consult a licensed conveyancer for eligibility." },
    ],
    relatedSlugs: ["dld", "title-deed", "noc"],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "noc",
    term: "NOC (No Objection Certificate)",
    category: "legal",
    synonyms: ["No Objection Certificate"],
    shortAnswer:
      "An NOC (No Objection Certificate) is a document issued by a Dubai developer confirming that a property has no outstanding service charges or restrictions preventing its transfer. It is required for every secondary-market and off-plan resale before the DLD will process ownership change.",
    definition:
      "The developer issues the NOC after verifying that all community fees, mortgages (if applicable) and other obligations are cleared. Fees typically range from AED 500 to AED 5,000 depending on the developer.",
    keyFacts: [
      "Required for every property resale in Dubai.",
      "Issued by the developer, not the DLD.",
      "Typical fee: AED 500–5,000.",
    ],
    faqs: [
      { q: "How long does an NOC take?", a: "Usually 3–7 working days depending on the developer." },
    ],
    relatedSlugs: ["title-deed", "dld", "service-charges"],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "ejari",
    term: "Ejari",
    category: "rentals",
    shortAnswer:
      "Ejari is Dubai's mandatory online lease-registration system, operated by RERA. It legally records every yearly tenancy contract and is required to activate DEWA utilities, obtain a residence-linked internet connection and enforce landlord–tenant rights.",
    definition:
      "An Ejari-registered contract is the legal proof of tenancy in Dubai. It ties the tenant, landlord and unit to a unique Ejari number and is referenced by government agencies for utilities, visas and dispute resolution.",
    keyFacts: [
      "Mandatory for all yearly residential leases.",
      "Registration fee: ~AED 220.",
      "Required to open DEWA, du and Etisalat accounts.",
    ],
    faqs: [
      { q: "Do monthly furnished rentals require Ejari?", a: "Not typically — furnished monthly rentals bundle utilities and are administered by the operator, not registered under Ejari." },
    ],
    relatedSlugs: ["rera", "dewa", "monthly-rental", "rera-rental-index"],
    relatedArticleSlugs: [{ category: "rentals", slug: "monthly-vs-yearly-rentals-dubai-remote-workers" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "dewa",
    term: "DEWA (Dubai Electricity & Water Authority)",
    category: "rentals",
    shortAnswer:
      "DEWA is the Dubai Electricity and Water Authority, the sole provider of electricity and water to residential and commercial properties in Dubai. Every tenant or owner must open a DEWA account — using an Ejari contract or title deed — to receive utilities.",
    definition:
      "DEWA activation typically requires an Ejari contract (tenants) or title deed (owners), Emirates ID and a security deposit (AED 2,000 for apartments, AED 4,000 for villas).",
    keyFacts: [
      "Deposit: AED 2,000 (apartments) / AED 4,000 (villas).",
      "Bill includes a 5% housing (municipality) fee.",
    ],
    faqs: [
      { q: "Can I open DEWA online?", a: "Yes, activation is fully digital via the DEWA app with a valid Ejari or title deed." },
    ],
    relatedSlugs: ["ejari", "municipality-housing-fee"],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "monthly-rental",
    term: "Monthly Rental",
    category: "rentals",
    synonyms: ["furnished monthly rental"],
    shortAnswer:
      "A monthly rental in Dubai is a short-to-mid-term furnished lease — typically 1 to 12 months — where the operator bundles DEWA, internet, cleaning and amenities into one invoice. It is the format most used by digital nomads and remote workers on 3–9 month stays.",
    definition:
      "Monthly rentals sit between hotel stays and yearly Ejari leases. They avoid the 12-month commitment and the utility setup process, at a per-month premium of roughly 35–60% over an equivalent yearly unfurnished contract.",
    keyFacts: [
      "Bundled utilities and amenities.",
      "No Ejari registration typically.",
      "Premium: ~35–60% over yearly unfurnished per month.",
    ],
    faqs: [
      { q: "Can I get a residence visa on a monthly rental?", a: "No — monthly rentals are not Ejari-registered and cannot serve as a residence address for most visa applications." },
    ],
    relatedSlugs: ["yearly-rental-ejari", "holiday-home-permit", "furnished-apartment"],
    relatedArticleSlugs: [
      { category: "rentals", slug: "monthly-vs-yearly-rentals-dubai-remote-workers" },
      { category: "rentals", slug: "furnished-apartments-dubai-digital-nomads-2026" },
    ],
    updated: "2026-03-01",
    readingMinutes: 4,
  },
  {
    slug: "yearly-rental-ejari",
    term: "Yearly Rental (Ejari Lease)",
    category: "rentals",
    shortAnswer:
      "A yearly rental in Dubai is a 12-month tenancy contract registered under the Ejari system. It offers the lowest per-month rate, unlocks DEWA and internet in the tenant's name, and can support residence-visa procedures.",
    definition:
      "Yearly Ejari leases are unfurnished or semi-furnished in most cases and are paid in 1–12 cheques depending on landlord terms. The RERA Rental Index caps allowed annual rent increases.",
    keyFacts: [
      "Mandatory Ejari registration.",
      "Rent increases limited by the RERA Rental Index.",
      "Typically unfurnished.",
    ],
    faqs: [
      { q: "How much can a landlord increase rent each year?", a: "The RERA Rental Index sets the maximum allowed increase, based on how far the current rent sits below the market rate." },
    ],
    relatedSlugs: ["monthly-rental", "ejari", "rera-rental-index"],
    relatedArticleSlugs: [{ category: "rentals", slug: "monthly-vs-yearly-rentals-dubai-remote-workers" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "furnished-apartment",
    term: "Furnished Apartment",
    category: "rentals",
    shortAnswer:
      "A furnished apartment in Dubai is a residential unit that comes fully equipped with furniture, appliances, kitchenware and linens, ready for immediate occupation. It is the standard format for monthly rentals aimed at remote workers, business travelers and relocating professionals.",
    definition:
      "Furnished units command a premium over unfurnished stock but eliminate setup time. Bayut recorded a 27% year-on-year rise in furnished monthly listings across Dubai in 2025.",
    keyFacts: [
      "Fully equipped, move-in ready.",
      "Common in Marina, Downtown, JVC and Business Bay.",
      "Preferred format for digital nomads.",
    ],
    faqs: [
      { q: "Are furnished apartments more expensive?", a: "Yes, typically 30–60% more per month than unfurnished equivalents, offset by bundled utilities and no setup effort." },
    ],
    relatedSlugs: ["monthly-rental", "digital-nomad-visa", "holiday-home-permit"],
    relatedArticleSlugs: [{ category: "rentals", slug: "furnished-apartments-dubai-digital-nomads-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "holiday-home-permit",
    term: "Holiday Home Permit",
    category: "rentals",
    shortAnswer:
      "A Holiday Home permit is the license required by Dubai's Department of Economy and Tourism (DET) to operate a residential property as a short-term rental on platforms like Airbnb and Booking.com. Every night booked is subject to the Tourism Dirham fee.",
    definition:
      "Holiday Home operators must register each unit with the DET, comply with quality standards, pay per-night Tourism Dirham fees and undergo periodic inspections. It is illegal to run short-term rentals in Dubai without this permit.",
    keyFacts: [
      "Issued by DET (Department of Economy and Tourism).",
      "Applies to all short-term rentals in Dubai.",
      "Tourism Dirham fee applies per guest per night.",
    ],
    faqs: [
      { q: "Can any apartment be a holiday home?", a: "The unit's community and building must allow short-term rentals; check with the building management and DET before applying." },
    ],
    relatedSlugs: ["short-term-rental", "det", "tourism-dirham"],
    relatedArticleSlugs: [{ category: "rentals", slug: "dubai-airbnb-investment-roi-data-2026" }],
    updated: "2026-03-01",
    readingMinutes: 4,
  },
  {
    slug: "short-term-rental",
    term: "Short-Term Rental",
    category: "rentals",
    synonyms: ["Airbnb rental", "vacation rental"],
    shortAnswer:
      "A short-term rental in Dubai is any residential lease of less than 30 days, operated under a DET Holiday Home permit. It is the format used by Airbnb and Booking.com listings and can generate higher gross yields than long-term leases, at the cost of operational overhead.",
    definition:
      "Short-term rentals monetize nightly demand from tourists and business travelers. They require a permit, active management (or a licensed operator), and adherence to quality and inspection rules.",
    keyFacts: [
      "Under 30 days per booking.",
      "Holiday Home permit required.",
      "Occupancy in prime areas typically 70–85%.",
    ],
    faqs: [
      { q: "Is Airbnb legal in Dubai?", a: "Yes, but only for units registered under a valid DET Holiday Home permit." },
    ],
    relatedSlugs: ["holiday-home-permit", "det", "tourism-dirham", "adr", "occupancy-rate"],
    relatedArticleSlugs: [{ category: "rentals", slug: "dubai-airbnb-investment-roi-data-2026" }],
    updated: "2026-03-01",
    readingMinutes: 4,
  },
  {
    slug: "det",
    term: "DET (Department of Economy and Tourism)",
    category: "legal",
    shortAnswer:
      "The Department of Economy and Tourism (DET) is the Dubai authority regulating tourism, hospitality and short-term rentals. It issues Holiday Home permits, licenses operators and enforces quality standards for the emirate's vacation-rental sector.",
    definition:
      "DET (formerly the Department of Tourism and Commerce Marketing) oversees Dubai's tourism ecosystem, including holiday-home compliance, hotel classification and tourism-fee collection.",
    keyFacts: ["Issues Holiday Home permits.", "Collects Tourism Dirham.", "Regulates operators and inspections."],
    faqs: [{ q: "How do I contact DET for a Holiday Home permit?", a: "Applications are submitted via the DET Holiday Homes portal (Dubai Tourism)." }],
    relatedSlugs: ["holiday-home-permit", "tourism-dirham"],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "tourism-dirham",
    term: "Tourism Dirham",
    category: "finance",
    shortAnswer:
      "The Tourism Dirham is a per-night, per-room fee collected in Dubai from every guest staying at hotels, hotel apartments and holiday homes. Rates range from AED 7 to AED 20 depending on the property's classification and are remitted by the operator to the DET.",
    definition:
      "Introduced in 2014, the Tourism Dirham funds Dubai's tourism-promotion activities. Holiday-home operators must collect it at check-in or include it in the nightly price.",
    keyFacts: ["Per-night, per-room fee.", "Range: AED 7–20.", "Collected by the operator."],
    faqs: [{ q: "Who pays the Tourism Dirham?", a: "The guest pays; the operator collects and remits to DET." }],
    relatedSlugs: ["short-term-rental", "holiday-home-permit", "det"],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "adr",
    term: "ADR (Average Daily Rate)",
    category: "investment",
    synonyms: ["Average Daily Rate"],
    shortAnswer:
      "ADR (Average Daily Rate) is the average nightly rental income earned per occupied room, calculated by dividing total rental revenue by the number of nights booked. In Dubai short-term-rental analysis, ADR is one of two core inputs — alongside occupancy — used to model annual yield.",
    definition:
      "ADR excludes vacant nights and is expressed in local currency (AED). It is combined with occupancy rate to compute RevPAR (Revenue per Available Room), the standard hospitality performance metric.",
    keyFacts: ["Formula: total revenue ÷ nights booked.", "Marina and Downtown typically post Dubai's highest ADRs."],
    faqs: [{ q: "How is ADR different from RevPAR?", a: "ADR only counts occupied nights; RevPAR spreads revenue across all available nights, factoring in vacancy." }],
    relatedSlugs: ["occupancy-rate", "short-term-rental", "net-yield"],
    relatedArticleSlugs: [{ category: "rentals", slug: "dubai-airbnb-investment-roi-data-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "occupancy-rate",
    term: "Occupancy Rate",
    category: "investment",
    shortAnswer:
      "Occupancy rate is the percentage of available nights that a Dubai short-term rental is actually booked, calculated as booked nights ÷ available nights × 100. It is the primary demand indicator for holiday-home investors, alongside ADR.",
    definition:
      "Sustainable Dubai short-term-rental businesses typically target 70%+ annual occupancy. Marina, Downtown and Palm Jumeirah consistently rank among the emirate's highest-occupancy submarkets.",
    keyFacts: ["Formula: booked nights ÷ available nights × 100.", "Benchmark: 70%+ for viable operations."],
    faqs: [{ q: "What impacts occupancy the most?", a: "Location, pricing strategy, listing quality, guest reviews and seasonality (Dec–Apr peak in Dubai)." }],
    relatedSlugs: ["adr", "short-term-rental", "net-yield"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "gross-yield",
    term: "Gross Rental Yield",
    category: "investment",
    shortAnswer:
      "Gross rental yield is the annual rental income of a property divided by its purchase price, expressed as a percentage. It is the fastest way to compare Dubai investment properties before accounting for service charges, management fees or vacancy.",
    definition:
      "Gross yield is useful for quick screening but overstates real return. It excludes service charges, agency fees, DEWA, insurance, vacancy and management costs — which is why net yield is the more accurate benchmark.",
    keyFacts: ["Formula: annual rent ÷ purchase price × 100.", "Dubai average (2025): ~6–8% for apartments."],
    faqs: [{ q: "Is gross or net yield more important?", a: "Net yield reflects actual cash return; gross yield is only useful for high-level screening." }],
    relatedSlugs: ["net-yield", "service-charges", "roi"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "net-yield",
    term: "Net Rental Yield",
    category: "investment",
    shortAnswer:
      "Net rental yield is the annual rental income of a Dubai property after deducting service charges, management fees, insurance, DEWA (if applicable) and average vacancy, divided by the total acquisition cost. It reflects the property's real cash return.",
    definition:
      "Net yield is the metric that actually reaches the investor's pocket. Property Monitor recorded 2024 net yields of ~7.9% for studios in JVC, higher than most established Dubai districts.",
    keyFacts: ["Formula: (annual rent − annual costs) ÷ total cost × 100.", "Better comparison metric than gross yield."],
    faqs: [{ q: "What's a good net yield in Dubai?", a: "Anything above 6% net is considered strong; JVC and Business Bay often exceed 7%." }],
    relatedSlugs: ["gross-yield", "service-charges", "roi"],
    relatedArticleSlugs: [{ category: "invest", slug: "off-plan-vs-ready-property-dubai-roi-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "roi",
    term: "ROI (Return on Investment)",
    category: "investment",
    synonyms: ["Return on Investment"],
    shortAnswer:
      "ROI in Dubai real estate is the total return earned on a property investment, combining rental income and capital appreciation, divided by total capital invested. It is expressed as a percentage over a defined holding period.",
    definition:
      "ROI captures both cash-on-cash yield and property value growth. Realistic Dubai apartment ROIs for 2020–2025 landed in the 60–90% cumulative range on well-selected units.",
    keyFacts: ["Blends rental income and capital appreciation.", "Measured over a defined holding period."],
    faqs: [{ q: "What's an average ROI for Dubai property?", a: "5-year cumulative ROIs of 60–90% were common in the 2020–2025 cycle for well-located apartments." }],
    relatedSlugs: ["gross-yield", "net-yield", "capital-appreciation"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "capital-appreciation",
    term: "Capital Appreciation",
    category: "investment",
    shortAnswer:
      "Capital appreciation is the increase in a Dubai property's market value over time, independent of rental income. Between 2021 and 2025, Property Monitor recorded a 76% cumulative rise in Dubai's average apartment price per square foot.",
    definition:
      "Capital appreciation is driven by supply–demand imbalance, macro trends (visa reforms, tax competitiveness), infrastructure investment and area maturation. It is the second half of total ROI.",
    keyFacts: ["Measured in AED/sqft.", "2021–2025 Dubai apartment growth: +76%."],
    faqs: [{ q: "Where has capital appreciation been strongest?", a: "Palm Jumeirah, Downtown, Dubai Hills and select off-plan launches in Business Bay led 2021–2025." }],
    relatedSlugs: ["roi", "off-plan-property", "price-per-square-foot"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "price-per-square-foot",
    term: "Price Per Square Foot",
    category: "investment",
    synonyms: ["AED/sqft", "PSF"],
    shortAnswer:
      "Price per square foot (PSF) is the standard unit for comparing Dubai property prices, calculated by dividing the total sale price by the built-up area in square feet. It normalizes prices across units of different sizes and communities.",
    definition:
      "PSF is the metric used in every DLD and Property Monitor report. It enables meaningful comparison across freehold zones, developers and unit types.",
    keyFacts: ["Standard metric across the DLD and analytics providers."],
    faqs: [{ q: "How is PSF calculated?", a: "Total price ÷ built-up area (in sqft)." }],
    relatedSlugs: ["capital-appreciation", "rera-rental-index"],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "service-charges",
    term: "Service Charges",
    category: "finance",
    shortAnswer:
      "Service charges in Dubai are annual community fees paid by property owners to cover building maintenance, security, cleaning and shared-amenity operation. They are regulated by RERA and administered through the Mollak system, and typically range from AED 10 to AED 30 per square foot per year.",
    definition:
      "Service charges vary by community and building tier. Mollak (RERA's escrow platform for service charges) ensures collected fees are used only for the approved community budget.",
    keyFacts: ["Range: AED 10–30 per sqft/year.", "Administered via Mollak (RERA)."],
    faqs: [{ q: "Do I have to pay service charges every year?", a: "Yes, they are recurring annual fees required to maintain building operations." }],
    relatedSlugs: ["mollak", "rera", "net-yield"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "mollak",
    term: "Mollak",
    category: "legal",
    shortAnswer:
      "Mollak is RERA's escrow-based service-charge system in Dubai. It holds jointly-owned property fees in dedicated bank accounts and releases funds only against approved community budgets, protecting owners from misuse.",
    definition:
      "Every registered management company in Dubai must use Mollak to collect and disburse service charges. Owners can view budgets, invoices and payments via the Dubai REST app.",
    keyFacts: ["Operated by RERA.", "Mandatory for all jointly-owned properties."],
    faqs: [{ q: "How do I check my Mollak invoice?", a: "Through the Dubai REST app under 'Service Charges'." }],
    relatedSlugs: ["service-charges", "rera"],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "municipality-housing-fee",
    term: "Municipality Housing Fee",
    category: "finance",
    shortAnswer:
      "The Dubai Municipality housing fee is a monthly charge equal to 5% of a property's annual rental value, collected from residents through their DEWA bill. It applies to tenants of rented units and to owner-occupiers based on RERA's rental index.",
    definition:
      "The housing fee is the closest thing Dubai has to a property tax and is billed in equal monthly installments alongside utilities.",
    keyFacts: ["5% of annual rental value.", "Collected via DEWA."],
    faqs: [{ q: "Is the housing fee negotiable?", a: "No — it is a statutory fee based on rental value." }],
    relatedSlugs: ["dewa", "rera-rental-index", "service-charges"],
    relatedArticleSlugs: [{ category: "guides", slug: "dubai-property-taxes-fees-2026" }],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "dld-transfer-fee",
    term: "DLD Transfer Fee",
    category: "finance",
    shortAnswer:
      "The DLD transfer fee is a 4% government charge on the value of any Dubai property transfer, paid at the Trustee Office when ownership changes hands. It is Dubai's single largest transaction cost for buyers and is due in addition to the trustee, agency and title-deed fees.",
    definition:
      "The fee is typically borne by the buyer, although the split can be negotiated. It is paid via manager cheque at the Trustee Office on the day of transfer.",
    keyFacts: ["4% of the property value.", "Payable to the DLD via manager cheque."],
    faqs: [{ q: "Can the seller pay the DLD fee?", a: "It is negotiable in the MOU, but market convention is that the buyer pays." }],
    relatedSlugs: ["dld", "trustee-office", "title-deed"],
    relatedArticleSlugs: [{ category: "guides", slug: "dubai-property-taxes-fees-2026" }],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "mortgage-ltv",
    term: "Mortgage LTV",
    category: "finance",
    synonyms: ["Loan-to-Value", "LTV"],
    shortAnswer:
      "Mortgage LTV (Loan-to-Value) is the percentage of a Dubai property's value that a UAE bank will finance. UAE regulations cap LTVs at 80% for residents on their first property under AED 5M, 50% for non-residents and 70% on off-plan (after a specified construction stage).",
    definition:
      "The remaining down payment is funded by the buyer. UAE Central Bank rules govern the maximum LTV based on residency, property value, first-home status and property type.",
    keyFacts: [
      "Residents: up to 80% LTV on first property under AED 5M.",
      "Non-residents: up to 50%.",
      "Off-plan: up to 70% after ~50% construction.",
    ],
    faqs: [{ q: "Can non-residents get a UAE mortgage?", a: "Yes, some UAE banks lend to non-residents at up to 50% LTV, subject to income verification." }],
    relatedSlugs: ["ready-property", "off-plan-property", "dld-transfer-fee"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "payment-plan",
    term: "Payment Plan",
    category: "investment",
    shortAnswer:
      "A Dubai payment plan is a developer-structured installment schedule for off-plan property, spreading payments across construction milestones and often extending into a post-handover period. Common structures include 60/40, 50/50 and 40/60 (during/post handover).",
    definition:
      "Payment plans reduce the upfront capital required to enter Dubai's off-plan market. Post-handover plans effectively function as developer financing, without bank involvement.",
    keyFacts: ["Common: 60/40, 50/50, 40/60.", "Post-handover plans act as developer financing."],
    faqs: [{ q: "Are payment plans interest-free?", a: "Most Dubai developer payment plans are marketed as 0% interest, but total price may be higher than a cash equivalent." }],
    relatedSlugs: ["off-plan-property", "escrow-account", "mortgage-ltv"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "rera-rental-index",
    term: "RERA Rental Index",
    category: "rentals",
    shortAnswer:
      "The RERA Rental Index is Dubai's official rent benchmark, published by the Real Estate Regulatory Agency. It sets the maximum permitted annual rent increase for existing tenancies, based on how far the current rent sits below the prevailing market rate.",
    definition:
      "The index applies a graduated scale: if the current rent is more than 40% below the index, the landlord can raise it by up to 20%. Accessed via the Dubai REST app.",
    keyFacts: ["Published by RERA.", "Caps allowed annual rent increases."],
    faqs: [{ q: "How can a tenant dispute a rent increase?", a: "File a case with the Rental Disputes Center referencing the RERA Rental Index calculation." }],
    relatedSlugs: ["ejari", "yearly-rental-ejari", "rera"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "golden-visa",
    term: "Golden Visa",
    category: "visas",
    shortAnswer:
      "The UAE Golden Visa is a 10-year renewable residency issued under Federal Decree-Law No. 29 of 2021. Real-estate investors qualify with a Dubai property title deed valued at AED 2,000,000 or more, including mortgaged units where at least AED 2M of value is paid.",
    definition:
      "The Golden Visa grants long-term residency, family sponsorship without an employer, and freedom from minimum-stay requirements. It is issued via ICP or GDRFA and requires the DLD title deed as the qualifying asset.",
    keyFacts: [
      "10-year renewable residency.",
      "Property threshold: AED 2M title-deed value.",
      "Mortgaged units qualify if 50% or AED 2M is paid.",
    ],
    advantages: ["10-year term", "No employer sponsor needed", "Family sponsorship included"],
    faqs: [
      { q: "Do I need to live in Dubai to keep the Golden Visa?", a: "No minimum-stay requirement applies to Golden Visa holders." },
      { q: "Can multiple properties combine to reach AED 2M?", a: "Yes, provided each is registered in the applicant's personal name via DLD title deeds." },
    ],
    relatedSlugs: ["digital-nomad-visa", "investor-visa", "title-deed", "freehold-property"],
    relatedArticleSlugs: [
      { category: "visas", slug: "dubai-golden-visa-property-requirements-2026" },
      { category: "visas", slug: "golden-visa-vs-remote-work-visa-dubai" },
    ],
    updated: "2026-03-01",
    readingMinutes: 5,
  },
  {
    slug: "digital-nomad-visa",
    term: "Digital Nomad Visa (UAE Virtual Working Programme)",
    category: "visas",
    synonyms: ["Remote Work Visa", "UAE Virtual Working Programme"],
    shortAnswer:
      "The UAE Digital Nomad Visa — officially the Virtual Working Programme — is a 1-year renewable residency for remote workers employed abroad. It requires a minimum monthly income of USD 3,500, valid health insurance and proof of employment or company ownership.",
    definition:
      "Launched in 2021, the programme lets professionals live in Dubai while working for a foreign employer. It does not require a UAE employer, property purchase or capital investment.",
    keyFacts: [
      "1-year renewable.",
      "Minimum income: USD 3,500/month.",
      "Requires health insurance with UAE coverage.",
    ],
    advantages: ["Low barrier to entry", "No employer needed", "Full Emirates ID benefits"],
    faqs: [
      { q: "Do I need to own property for the Digital Nomad Visa?", a: "No — the visa is fully decoupled from property ownership." },
      { q: "Can I sponsor family on the Digital Nomad Visa?", a: "Yes, subject to income verification and standard sponsorship rules." },
    ],
    relatedSlugs: ["golden-visa", "investor-visa", "furnished-apartment", "monthly-rental"],
    relatedArticleSlugs: [
      { category: "visas", slug: "dubai-digital-nomad-visa-property-application-2026" },
      { category: "visas", slug: "golden-visa-vs-remote-work-visa-dubai" },
    ],
    updated: "2026-03-01",
    readingMinutes: 5,
  },
  {
    slug: "investor-visa",
    term: "Property Investor Visa",
    category: "visas",
    shortAnswer:
      "The Dubai Property Investor Visa is a 2-year renewable residency for foreign owners of Dubai real estate valued at AED 750,000 or more. Mortgaged units qualify provided the borrower has paid 50% of the value or AED 750,000, whichever is higher.",
    definition:
      "This visa is a mid-tier alternative to the Golden Visa, requiring a lower property threshold. It is issued by ICP/GDRFA and requires the DLD title deed as proof of investment.",
    keyFacts: ["2-year renewable.", "Threshold: AED 750,000."],
    faqs: [{ q: "How is the Investor Visa different from the Golden Visa?", a: "Shorter term (2 vs 10 years) and a lower property threshold (AED 750K vs AED 2M)." }],
    relatedSlugs: ["golden-visa", "digital-nomad-visa", "title-deed"],
    relatedArticleSlugs: [{ category: "visas", slug: "dubai-property-investor-visa-minimum-investment-2026" }],
    updated: "2026-03-01",
    readingMinutes: 4,
  },
  {
    slug: "emirates-id",
    term: "Emirates ID",
    category: "visas",
    shortAnswer:
      "The Emirates ID is the UAE's mandatory national identity card issued to every citizen and resident by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). It is required to open bank accounts, register a lease, activate DEWA and sign any government transaction.",
    definition:
      "Emirates ID is issued alongside every residency visa (Golden, Investor, Digital Nomad, employment, family). It carries the holder's photo, biometrics and unique ID number.",
    keyFacts: ["Mandatory for all residents.", "Issued by ICP.", "Required for Ejari, DEWA and banking."],
    faqs: [{ q: "How long is the Emirates ID valid?", a: "It matches the visa term (typically 2 or 10 years) and is renewable." }],
    relatedSlugs: ["golden-visa", "investor-visa", "digital-nomad-visa", "ejari"],
    updated: "2026-03-01",
    readingMinutes: 2,
  },
  {
    slug: "vat-real-estate",
    term: "VAT on Real Estate",
    category: "finance",
    shortAnswer:
      "In the UAE, residential real estate is generally exempt from the 5% VAT on secondary sales and on leases. The first sale of a new residential building within 3 years of completion is zero-rated. Commercial real estate is standard-rated at 5%.",
    definition:
      "VAT treatment is set by the Federal Tax Authority (FTA). Investors buying residential secondary-market property do not pay VAT on the purchase; commercial transactions do.",
    keyFacts: ["Residential resale: exempt.", "First residential sale within 3 years: zero-rated.", "Commercial: 5%."],
    faqs: [{ q: "Do I pay VAT on rent?", a: "Residential rent is exempt; commercial rent is standard-rated at 5%." }],
    relatedSlugs: ["dld-transfer-fee", "corporate-tax-uae", "service-charges"],
    relatedArticleSlugs: [{ category: "guides", slug: "dubai-property-taxes-fees-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "corporate-tax-uae",
    term: "UAE Corporate Tax",
    category: "finance",
    shortAnswer:
      "The UAE Corporate Tax is a 9% federal tax on business profits above AED 375,000, effective from June 2023. It generally does not apply to individuals earning rental income from personal-name Dubai property investments, but does apply to real-estate businesses.",
    definition:
      "Personal, non-commercial rental income earned by an individual is typically outside the scope of Corporate Tax. Investors holding property through UAE companies fall within scope.",
    keyFacts: ["9% rate above AED 375K profit.", "Effective from June 2023.", "Personal rental income usually out of scope."],
    faqs: [{ q: "Does the Golden Visa change my tax situation?", a: "No, tax residency and corporate tax rules apply independently of visa status." }],
    relatedSlugs: ["vat-real-estate", "tax-residency-certificate"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "tax-residency-certificate",
    term: "Tax Residency Certificate (TRC)",
    category: "finance",
    shortAnswer:
      "A UAE Tax Residency Certificate (TRC) is issued by the Federal Tax Authority to individuals or companies that meet the UAE residency criteria. It is used to claim benefits under the UAE's network of double-taxation treaties, including agreements with Brazil, India, the UK and 100+ other countries.",
    definition:
      "For individuals, eligibility typically requires 183+ days of physical presence in the UAE during a 12-month period, plus a valid residency visa and a permanent home.",
    keyFacts: ["Issued by the FTA.", "Requires 183+ days of UAE presence.", "Used to claim DTA benefits."],
    faqs: [{ q: "Do I need a TRC as a Golden Visa holder?", a: "Only if you need to prove UAE tax residency to another jurisdiction under a treaty." }],
    relatedSlugs: ["corporate-tax-uae", "golden-visa", "double-taxation-treaty"],
    relatedArticleSlugs: [{ category: "guides", slug: "brazilian-investor-dubai-real-estate-guide" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "double-taxation-treaty",
    term: "Double Taxation Treaty (DTA)",
    category: "finance",
    synonyms: ["DTA", "Double Taxation Agreement"],
    shortAnswer:
      "A Double Taxation Treaty (DTA) is a bilateral agreement between two countries that prevents the same income from being taxed twice. The UAE has DTAs with 100+ jurisdictions, including Brazil (in force from 2022), India, the UK and most of Europe.",
    definition:
      "DTAs typically allocate taxing rights between the source country (where income arises) and the residence country (where the taxpayer lives), often reducing withholding tax rates and providing credits.",
    keyFacts: ["Bilateral tax agreements.", "UAE–Brazil DTA in force since 2022.", "Reduces or eliminates double taxation."],
    faqs: [{ q: "Does the UAE–Brazil DTA cover rental income?", a: "Yes, but Brazilian tax residents still report and may owe carnê-leão on foreign rental income; a professional tax advisor should confirm." }],
    relatedSlugs: ["tax-residency-certificate", "corporate-tax-uae"],
    relatedArticleSlugs: [{ category: "guides", slug: "brazilian-investor-dubai-real-estate-guide" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "power-of-attorney",
    term: "Power of Attorney (POA)",
    category: "legal",
    shortAnswer:
      "A Power of Attorney (POA) in Dubai real estate is a notarized legal document authorizing another person to act on the owner's behalf — buying, selling, leasing or managing property. Foreign investors frequently use POAs to complete transactions without traveling to the UAE.",
    definition:
      "POAs must be notarized in the UAE, or notarized and apostilled abroad and then attested by the UAE consulate and Ministry of Foreign Affairs. Specific-purpose POAs are recommended over general ones.",
    keyFacts: ["Must be notarized and, if abroad, apostilled and attested.", "Specific POAs preferred to general."],
    faqs: [{ q: "Can a POA holder buy property in their own name?", a: "No — the POA authorizes acting on the principal's behalf only." }],
    relatedSlugs: ["title-deed", "trustee-office", "noc"],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "sale-purchase-agreement",
    term: "Sale and Purchase Agreement (SPA)",
    category: "legal",
    synonyms: ["SPA", "MOU", "Form F"],
    shortAnswer:
      "The Sale and Purchase Agreement (SPA) — commonly referred to as Form F or MOU — is the binding contract signed between buyer and seller for a Dubai property transaction. It sets the price, deposit, timeline and conditions, and is followed by NOC issuance and DLD transfer.",
    definition:
      "Form F is the DLD-standardized contract used in most secondary transactions. A 10% deposit is typically paid on signing and held by the broker or trustee.",
    keyFacts: ["DLD-standardized Form F.", "10% deposit standard.", "Binding on both parties."],
    faqs: [{ q: "Can I back out after signing Form F?", a: "The buyer typically forfeits the 10% deposit; the seller may owe double if they back out." }],
    relatedSlugs: ["noc", "title-deed", "trustee-office", "dld-transfer-fee"],
    relatedArticleSlugs: [{ category: "guides", slug: "buy-property-dubai-foreigner-legal-guide-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "master-community",
    term: "Master Community",
    category: "areas",
    shortAnswer:
      "A master community in Dubai is a large, planned development built by a single master developer — such as Emaar, Nakheel or Dubai Holding — that integrates residential, retail, leisure and infrastructure into one cohesive neighborhood. Examples include Downtown Dubai, Dubai Marina and Dubai Hills Estate.",
    definition:
      "Master communities offer predictable service standards, curated amenities and consistent architectural planning. Sub-developers often build individual projects within the master plan.",
    keyFacts: ["Built by a master developer.", "Integrates housing, retail, leisure and infrastructure.", "Standardized service and maintenance."],
    faqs: [{ q: "Do master communities have higher service charges?", a: "Often slightly higher due to shared amenities, but consistent quality typically justifies the premium." }],
    relatedSlugs: ["freehold-property", "service-charges", "jvc", "dubai-hills"],
    relatedArticleSlugs: [
      { category: "areas", slug: "dubai-hills-estate-neighborhood-guide-2026" },
      { category: "areas", slug: "jvc-dubai-property-investment-guide-2026" },
    ],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "jvc",
    term: "JVC (Jumeirah Village Circle)",
    category: "areas",
    shortAnswer:
      "JVC — Jumeirah Village Circle — is Dubai's largest freehold community by unit count, developed by Nakheel. Its mid-market pricing, high rental yields (Property Monitor recorded ~7.9% net on studios in 2024) and strong tenant demand make it a top pick for yield-focused investors.",
    definition:
      "JVC combines apartments, townhouses and villas across a circular master plan with parks, schools and F&B outlets. It is one of the most listed communities on Bayut and Property Finder.",
    keyFacts: ["Largest freehold community by unit count.", "Net yields on studios ~7.9% (2024)."],
    faqs: [{ q: "Is JVC good for short-term rentals?", a: "Yes — high tourist and business-traveler demand supports strong Holiday Home performance." }],
    relatedSlugs: ["master-community", "freehold-property", "net-yield"],
    relatedArticleSlugs: [{ category: "areas", slug: "jvc-dubai-property-investment-guide-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
  {
    slug: "dubai-hills",
    term: "Dubai Hills Estate",
    category: "areas",
    shortAnswer:
      "Dubai Hills Estate is an 11 million-square-metre master community jointly developed by Emaar and Meraas, anchored by an 18-hole championship golf course, Dubai Hills Mall and King's College Hospital. It is Dubai's premier family-oriented freehold neighborhood.",
    definition:
      "Dubai Hills Estate mixes apartments, townhouses and luxury villas across sub-communities like Sidra, Maple and Golf Place, with strong schools and green space.",
    keyFacts: ["Emaar × Meraas joint development.", "11M sqm total area.", "18-hole golf course + Dubai Hills Mall."],
    faqs: [{ q: "Is Dubai Hills a good long-term investment?", a: "Yes — mature masterplan, top schools and stable capital appreciation make it a family-market anchor." }],
    relatedSlugs: ["master-community", "freehold-property", "capital-appreciation"],
    relatedArticleSlugs: [{ category: "areas", slug: "dubai-hills-estate-neighborhood-guide-2026" }],
    updated: "2026-03-01",
    readingMinutes: 3,
  },
];

// Alphabet index (letters that have at least one term)
export const glossaryLetters = Array.from(
  new Set(glossaryTerms.map((t) => t.term.charAt(0).toUpperCase())),
).sort();

export function getGlossaryTerm(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getRelatedTerms(t: GlossaryTerm) {
  return t.relatedSlugs
    .map((s) => glossaryTerms.find((x) => x.slug === s))
    .filter(Boolean) as GlossaryTerm[];
}

export function getTermsByCategory(cat: string) {
  return glossaryTerms.filter((t) => t.category === cat);
}

export function getTermsByLetter(letter: string) {
  return glossaryTerms.filter((t) => t.term.toUpperCase().startsWith(letter.toUpperCase()));
}
