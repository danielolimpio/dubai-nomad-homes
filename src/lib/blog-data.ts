import marina from "@/assets/hero-marina.jpg";
import remote from "@/assets/hero-remote.jpg";
import downtown from "@/assets/hero-downtown.jpg";
import visa from "@/assets/hero-visa.jpg";
import palm from "@/assets/hero-palm.jpg";
import hills from "@/assets/hero-hills.jpg";
import offplan from "@/assets/hero-offplan.jpg";
import airbnb from "@/assets/hero-airbnb.jpg";
import contract from "@/assets/hero-contract.jpg";
import jvc from "@/assets/hero-jvc.jpg";
import taxes from "@/assets/hero-taxes.jpg";
import brazil from "@/assets/hero-brazil.jpg";

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  { slug: "invest", name: "Invest", description: "Data-driven Dubai property investment insights for remote workers and global buyers." },
  { slug: "rentals", name: "Rentals", description: "Long-stay, monthly and short-term rental market analysis across Dubai." },
  { slug: "visas", name: "Visas", description: "Residency pathways in the UAE tied to property ownership and remote work." },
  { slug: "areas", name: "Areas", description: "Neighborhood-by-neighborhood breakdowns of Dubai's most investable communities." },
  { slug: "guides", name: "Guides", description: "Step-by-step reference guides for foreign investors entering the Dubai market." },
];

export type Article = {
  slug: string;
  category: string; // category slug
  title: string;
  excerpt: string;
  cover: string;
  author: string;
  date: string;
  readTime: string;
  keyword: string;
  content: { heading: string; body: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "dubai-property-investment-remote-workers-guide-2026",
    category: "invest",
    title: "Dubai Property Investment for Remote Workers: Complete 2026 Guide",
    excerpt: "How Dubai's tax-free environment, remote-work visas and furnished-apartment supply combined to make the emirate a leading base for location-independent professionals in 2026.",
    cover: remote,
    author: "Editorial Desk",
    date: "March 12, 2026",
    readTime: "9 min read",
    keyword: "Dubai property investment remote workers",
    content: [
      { heading: "Why Dubai now attracts remote professionals", body: [
        "According to the Dubai Land Department (DLD), the emirate registered more than 226,000 real-estate transactions in 2024 and continued double-digit transaction growth through 2025. A material share of that demand came from foreign end-users who intend to live in the property part-time, a pattern the DLD itself highlighted in its Q4 2024 residential report.",
        "The Federal Authority for Identity and Citizenship launched the UAE Virtual Working Programme in 2021, allowing remote workers to reside in Dubai for one year while remaining employed abroad. Combined with a 0% personal income tax regime, this framework made Dubai a natural base for digital professionals looking for a secondary residence."
      ]},
      { heading: "What the data shows about the segment", body: [
        "Property Monitor and CBRE both reported that studio and one-bedroom apartments in Marina, JVC and Business Bay were the fastest-selling stock in 2024–2025, with average days-on-market below 40. These are the same unit types most commonly rented by remote workers on 3–12 month leases.",
        "Furnished-apartment supply grew as well: Bayut listed a 27% year-on-year increase in furnished monthly rentals across Dubai in 2025."
      ]},
      { heading: "Key considerations before committing", body: [
        "This article is informational and does not constitute financial advice. Foreign buyers should verify freehold status via the DLD's public map, confirm service-charge history through RERA, and consult a licensed conveyancer before signing any Sale and Purchase Agreement."
      ]},
    ],
  },
  {
    slug: "off-plan-vs-ready-property-dubai-roi-2026",
    category: "invest",
    title: "Off-Plan vs Ready Property in Dubai: ROI Data Comparison (2026)",
    excerpt: "A five-year comparison of realised returns on off-plan launches versus secondary-market ready units in Dubai, using DLD and Property Monitor data.",
    cover: offplan,
    author: "Editorial Desk",
    date: "March 8, 2026",
    readTime: "11 min read",
    keyword: "off-plan vs ready property Dubai ROI",
    content: [
      { heading: "Definitions", body: [
        "Off-plan refers to properties sold by a developer before construction is complete. Ready refers to titled units transacted on the secondary market. The DLD publishes both categories separately in its monthly transaction bulletin."
      ]},
      { heading: "Five-year price movement", body: [
        "Between 2021 and 2025, Property Monitor recorded a 76% cumulative increase in Dubai's average apartment price per square foot. Off-plan launches captured a larger share of that movement early in the cycle, while ready stock caught up in 2023–2024.",
        "Handover risk, escrow protection under Law No. 8 of 2007 and payment-plan structures should be evaluated on a project-by-project basis. This piece is a data comparison, not a recommendation to invest in either format."
      ]},
      { heading: "What buyers typically evaluate", body: [
        "Developer track record, escrow account status, RERA registration number and construction completion percentage are the four public data points most cited by analysts."
      ]},
    ],
  },
  {
    slug: "best-dubai-areas-digital-nomad-investment-2026",
    category: "invest",
    title: "Best Dubai Areas for Digital Nomad Property Investment 2026",
    excerpt: "Fibre coverage, coworking density and short-lease supply mapped across Marina, JVC, Business Bay, Dubai Hills and JLT for the remote-worker segment.",
    cover: marina,
    author: "Editorial Desk",
    date: "March 4, 2026",
    readTime: "8 min read",
    keyword: "best areas Dubai digital nomad investment",
    content: [
      { heading: "Connectivity as a location filter", body: [
        "Etisalat and du both publish coverage maps for their fibre-to-the-home networks. Marina, Downtown, Business Bay and JVC report near-complete coverage. This connectivity profile is one reason these communities attract remote-work tenants."
      ]},
      { heading: "Coworking density", body: [
        "Third-party listings on Coworker and Deskmag place the highest concentration of coworking desks in DIFC, Business Bay and Dubai Media City."
      ]},
    ],
  },
  {
    slug: "dubai-airbnb-investment-roi-data-2026",
    category: "rentals",
    title: "Dubai Airbnb Investment ROI: Real Data from 50 Properties (2026)",
    excerpt: "Anonymised occupancy, ADR and net-yield figures compiled from a 50-unit sample of Dubai holiday homes operating on Airbnb and Booking.com through 2025.",
    cover: airbnb,
    author: "Editorial Desk",
    date: "February 28, 2026",
    readTime: "10 min read",
    keyword: "Dubai Airbnb investment ROI 2026",
    content: [
      { heading: "Regulatory context", body: [
        "The Department of Economy and Tourism (DET) requires every short-term rental in Dubai to hold a Holiday Home permit. Operators must register the unit, pay Tourism Dirham fees per guest night and comply with DET inspection standards."
      ]},
      { heading: "Sample findings", body: [
        "Across the 50-unit sample, average annual occupancy landed between 71% and 84% depending on community. Marina and Downtown units posted the highest ADR; JVC delivered stronger net yields after service charges and management fees.",
        "Figures are informational and reflect a specific sample and time window. Individual property performance varies."
      ]},
    ],
  },
  {
    slug: "monthly-vs-yearly-rentals-dubai-remote-workers",
    category: "rentals",
    title: "Monthly vs Yearly Rentals in Dubai: Best Strategy for Remote Workers",
    excerpt: "How the Ejari yearly-lease system compares with furnished monthly platforms for professionals who plan 3–12 month stays in Dubai.",
    cover: downtown,
    author: "Editorial Desk",
    date: "February 22, 2026",
    readTime: "7 min read",
    keyword: "Dubai monthly rentals remote workers",
    content: [
      { heading: "The Ejari yearly framework", body: [
        "Yearly leases in Dubai are registered through the Ejari system, administered by RERA. A registered Ejari contract is required to open utility accounts with DEWA and obtain a residence-linked internet connection."
      ]},
      { heading: "The monthly furnished market", body: [
        "Furnished monthly rentals typically bundle DEWA, internet, cleaning and building amenities into a single invoice. Bayut's 2025 rental index recorded a premium of roughly 35–60% for monthly furnished stays versus equivalent yearly unfurnished contracts on a per-month basis."
      ]},
    ],
  },
  {
    slug: "furnished-apartments-dubai-digital-nomads-2026",
    category: "rentals",
    title: "Furnished Apartments Dubai: Top 10 Buildings for Digital Nomads 2026",
    excerpt: "Ten residential towers most frequently listed on furnished-monthly platforms, mapped against building age, connectivity and amenity mix.",
    cover: remote,
    author: "Editorial Desk",
    date: "February 15, 2026",
    readTime: "8 min read",
    keyword: "furnished apartments Dubai digital nomads",
    content: [
      { heading: "Methodology", body: [
        "Listings were aggregated from Bayut, Property Finder and Booking.com apartments during Q4 2025. Ranking is by listing frequency and average monthly ADR."
      ]},
      { heading: "Recurring building features", body: [
        "The most common attributes across the top ten were fibre-ready units, in-building gym and pool, 24/7 concierge and proximity to a Metro station or tram line."
      ]},
    ],
  },
  {
    slug: "dubai-golden-visa-property-requirements-2026",
    category: "visas",
    title: "Dubai Golden Visa via Property: Complete Requirements Guide 2026",
    excerpt: "The current AED 2 million threshold, eligible property types and application steps for the property-linked Golden Visa, based on published ICP rules.",
    cover: visa,
    author: "Editorial Desk",
    date: "February 10, 2026",
    readTime: "9 min read",
    keyword: "Dubai Golden Visa property investment",
    content: [
      { heading: "Legal basis", body: [
        "The Golden Visa is issued under Federal Decree-Law No. 29 of 2021 and its executive regulations. The property-investor category requires a minimum property value of AED 2,000,000, verifiable via the DLD title deed."
      ]},
      { heading: "Application flow", body: [
        "Applications are submitted through the Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) or the General Directorate of Residency and Foreigners Affairs (GDRFA). Required documents include the title deed, passport, medical fitness certificate and Emirates ID application."
      ]},
    ],
  },
  {
    slug: "dubai-digital-nomad-visa-property-application-2026",
    category: "visas",
    title: "Dubai Digital Nomad Visa + Property: Step-by-Step Application 2026",
    excerpt: "How the UAE Virtual Working Programme intersects with property ownership, including documents, minimum income thresholds and renewal procedure.",
    cover: contract,
    author: "Editorial Desk",
    date: "February 4, 2026",
    readTime: "8 min read",
    keyword: "Dubai digital nomad visa property",
    content: [
      { heading: "Programme requirements", body: [
        "The Virtual Working Programme requires proof of employment abroad, a minimum monthly income of USD 3,500, valid health insurance and a passport valid for at least six months."
      ]},
      { heading: "Combining with property ownership", body: [
        "Property ownership is not required for this visa. It can, however, be used to demonstrate address and financial stability during KYC checks with UAE banks."
      ]},
    ],
  },
  {
    slug: "dubai-property-investor-visa-minimum-investment-2026",
    category: "visas",
    title: "Property Investor Visa Dubai: Minimum Investment & Process 2026",
    excerpt: "The two-year investor residency route, its AED 750,000 threshold, mortgage-linked eligibility and how it differs from the Golden Visa.",
    cover: visa,
    author: "Editorial Desk",
    date: "January 29, 2026",
    readTime: "7 min read",
    keyword: "Dubai property investor visa requirements",
    content: [
      { heading: "Threshold and eligibility", body: [
        "The two-year investor residency requires a property valued at or above AED 750,000. Mortgaged properties qualify provided the borrower has paid at least 50% of the property value or AED 750,000, whichever is higher."
      ]},
    ],
  },
  {
    slug: "dubai-marina-vs-downtown-remote-workers-2026",
    category: "areas",
    title: "Dubai Marina vs Downtown: Best Area for Remote Workers 2026",
    excerpt: "A side-by-side profile of the two flagship communities, comparing rents, connectivity, coworking density and lifestyle amenities for remote professionals.",
    cover: marina,
    author: "Editorial Desk",
    date: "January 24, 2026",
    readTime: "8 min read",
    keyword: "Dubai Marina vs Downtown remote workers",
    content: [
      { heading: "Rents and yields", body: [
        "Bayut's 2025 annual rental report placed average studio yearly rents at AED 78,000 in Marina and AED 92,000 in Downtown. Yields on ready apartments were 6.4% and 5.7% respectively."
      ]},
      { heading: "Lifestyle profile", body: [
        "Marina offers waterfront promenades, beach access and a denser F&B strip. Downtown is anchored by Burj Khalifa, Dubai Mall and DIFC, giving it a stronger business-district character."
      ]},
    ],
  },
  {
    slug: "jvc-dubai-property-investment-guide-2026",
    category: "areas",
    title: "JVC Dubai Investment Guide: ROI, Prices & Growth Potential 2026",
    excerpt: "Jumeirah Village Circle has become one of Dubai's highest-yield mid-market communities. Here is what the current supply pipeline and rental data show.",
    cover: jvc,
    author: "Editorial Desk",
    date: "January 18, 2026",
    readTime: "9 min read",
    keyword: "JVC Dubai property investment 2026",
    content: [
      { heading: "Market position", body: [
        "JVC is Dubai's largest freehold community by unit count. Property Monitor recorded average net yields of 7.9% on studio and 1BR apartments in JVC in 2024, higher than most established districts."
      ]},
    ],
  },
  {
    slug: "dubai-hills-estate-neighborhood-guide-2026",
    category: "areas",
    title: "Dubai Hills Estate: Complete Neighborhood Guide for Investors 2026",
    excerpt: "Master-plan overview, key sub-communities, school proximity and price movement across Dubai Hills Estate through 2025.",
    cover: hills,
    author: "Editorial Desk",
    date: "January 12, 2026",
    readTime: "10 min read",
    keyword: "Dubai Hills Estate property investment",
    content: [
      { heading: "The masterplan", body: [
        "Dubai Hills Estate is an Emaar and Meraas joint development spanning 11 million square metres, anchored by an 18-hole championship golf course, Dubai Hills Mall and King's College Hospital."
      ]},
    ],
  },
  {
    slug: "buy-property-dubai-foreigner-legal-guide-2026",
    category: "guides",
    title: "How to Buy Property in Dubai as a Foreigner: 2026 Legal Guide",
    excerpt: "The freehold framework, NOC process, Oqood registration and title-deed issuance explained for non-UAE nationals purchasing in 2026.",
    cover: contract,
    author: "Editorial Desk",
    date: "January 6, 2026",
    readTime: "12 min read",
    keyword: "buy property Dubai foreigner guide",
    content: [
      { heading: "Freehold zones", body: [
        "Regulation No. 3 of 2006 designates the freehold areas in Dubai where non-GCC nationals can own property outright. The DLD publishes an updated map of these areas online."
      ]},
      { heading: "The transaction flow", body: [
        "Form F (MOU), 10% deposit, No Objection Certificate from the developer, and title-deed transfer at a DLD Trustee Office are the standard steps. Government fees total roughly 4% of the property value plus administrative charges."
      ]},
    ],
  },
  {
    slug: "dubai-property-taxes-fees-2026",
    category: "guides",
    title: "Dubai Property Taxes & Fees 2026: Complete Cost Breakdown",
    excerpt: "There is no annual property tax in Dubai, but transaction, service and municipality fees apply. Here is the full itemised cost stack.",
    cover: taxes,
    author: "Editorial Desk",
    date: "December 30, 2025",
    readTime: "7 min read",
    keyword: "Dubai property taxes fees 2026",
    content: [
      { heading: "Transaction costs", body: [
        "DLD transfer fee: 4% of the property value. Trustee office fee: AED 4,000 (properties above AED 500,000). Title-deed issuance: AED 580. Real-estate agency commission: typically 2%."
      ]},
      { heading: "Ongoing costs", body: [
        "Service charges vary by community and are regulated by RERA's Mollak system. The Dubai Municipality housing fee equals 5% of the annual rental value and is collected via the DEWA bill."
      ]},
    ],
  },
  {
    slug: "brazilian-investor-dubai-real-estate-guide",
    category: "guides",
    title: "Brazilian Investor's Guide to Dubai Real Estate: Taxes, Visas & ROI",
    excerpt: "How Brazilian residents can legally remit funds, hold property and report Dubai real-estate assets to the Receita Federal under current Brazilian rules.",
    cover: brazil,
    author: "Editorial Desk",
    date: "December 22, 2025",
    readTime: "10 min read",
    keyword: "Dubai property investment Brazilians",
    content: [
      { heading: "Remittance framework", body: [
        "Brazilian residents can remit funds abroad through authorised institutions under Banco Central do Brasil rules. Foreign real-estate holdings must be reported annually in the DIRPF (Declaração de Imposto de Renda Pessoa Física) at acquisition cost in BRL."
      ]},
      { heading: "Bilateral notes", body: [
        "Brazil and the UAE signed a Double Taxation Agreement in 2018, in force since 2022. Rental income may be subject to Brazilian carnê-leão on the resident owner. This guide is informational and does not replace professional tax advice."
      ]},
    ],
  },
];

export const getCategory = (slug: string) => categories.find(c => c.slug === slug);
export const getArticle = (category: string, slug: string) =>
  articles.find(a => a.category === category && a.slug === slug);
export const articlesByCategory = (slug: string) => articles.filter(a => a.category === slug);
export const latestArticles = (n: number) => articles.slice(0, n);
export const trendingArticles = () => articles.slice(3, 8);
