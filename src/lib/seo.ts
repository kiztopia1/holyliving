export const SITE_URL = 'https://www.holylivingafh.com';
export const SITE_NAME = 'Holy Living Adult Family Home';
export const SITE_PHONE = '(425) 921-6842';
export const SITE_PHONE_TEL = '4259216842';
export const SITE_EMAIL = 'holylivingss@gmail.com';
export const SITE_LICENSE = '7547341';
export const SITE_ADDRESS = {
  street: '20121 8th Ave NE',
  city: 'Shoreline',
  region: 'WA',
  postal: '98155',
  country: 'US',
} as const;

export const SITE_GEO = {
  latitude: 47.7755463,
  longitude: -122.3214146,
} as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.jpg`;
export const LOGO_URL = `${SITE_URL}/logo.jpg`;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string;
};

export function absoluteUrl(path: string): string {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export const HOME_SEO: PageSeo = {
  title: 'Holy Living Adult Family Home | Senior Care in Shoreline, WA',
  description:
    'Holy Living Adult Family Home provides compassionate, personalized care for seniors, memory care, and hospice in Shoreline, WA. Schedule a tour today. Call 425-921-6842.',
  path: '/',
  keywords:
    'adult family home Shoreline WA, senior care Shoreline, memory care Seattle area, dementia care Shoreline, hospice care Shoreline WA, elderly care near me, adult family home near Seattle',
};

export const REVIEW_SEO: PageSeo = {
  title: 'Leave a Review | Holy Living Adult Family Home',
  description: 'Share your experience with Holy Living Adult Family Home in Shoreline, WA.',
  path: '/review',
  noIndex: true,
};

export type SeoPageContent = {
  slug: string;
  seo: PageSeo;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  related: { href: string; label: string }[];
};

export const SEO_PAGES: SeoPageContent[] = [
  {
    slug: 'adult-family-home-shoreline',
    seo: {
      title: 'Adult Family Home in Seattle WA',
      description:
        'Licensed adult family home in Shoreline, WA with only 6 residents, on-site ownership, a 1:3 caregiver ratio, and personalized senior care. Tour Holy Living today.',
      path: '/adult-family-home-shoreline',
      keywords:
        'adult family home Seattle WA, adult family home Shoreline, AFH Seattle, senior home care Seattle, small group home King County',
    },
    h1: 'Adult Family Home in Seattle WA',
    intro:
      'Holy Living is a Washington State licensed adult family home in Shoreline offering personalized senior care in a true residential setting—never a large institution.',
    sections: [
      {
        heading: 'What is an adult family home?',
        body: 'An adult family home (AFH) is a licensed residential care setting for a small number of adults who need help with daily living. At Holy Living, we care for just six residents, which keeps daily life calm, familiar, and personal.',
      },
      {
        heading: 'Why families in Shoreline choose us',
        body: 'Families looking for adult family home care in Shoreline want more than a bed—they want caregivers who notice changes early, cook real meals, and treat every resident with dignity. With ownership on-site and a 1:3 caregiver-to-resident ratio, each care plan is built around the person.',
      },
      {
        heading: 'Care we provide',
        body: 'We assist with bathing, dressing, mobility, medication management, nutritious home-cooked meals, laundry, housekeeping, and 24/7 supervision. We also support memory care needs, developmental disabilities, mental health support, and hospice coordination.',
      },
      {
        heading: 'Convenient Shoreline location',
        body: 'We are located at 20121 8th Ave NE, Shoreline, WA 98155—a quiet residential neighborhood with easy access to medical providers across King County and the north Seattle metro area. License #7547341.',
      },
    ],
    related: [
      { href: '/memory-care-shoreline', label: 'Memory Care in Seattle WA' },
      { href: '/assisted-living-shoreline', label: 'Assisted Living in Seattle WA' },
      { href: '/hospice-care-shoreline', label: 'Hospice Care in Seattle WA' },
    ],
  },
  {
    slug: 'memory-care-shoreline',
    seo: {
      title: 'Memory Care in Seattle WA',
      description:
        'Small-home memory care in Shoreline for dementia and Alzheimer\'s. Consistent routines, trained caregivers, and a calm 6-resident setting. Call to schedule a tour.',
      path: '/memory-care-shoreline',
      keywords:
        'memory care Seattle WA, dementia care Seattle, Alzheimer\'s adult family home, memory care Shoreline',
    },
    h1: 'Memory Care in Seattle WA',
    intro:
      'Looking for memory care in Shoreline without the overwhelm of a large facility? Our six-resident adult family home offers structured, compassionate support for dementia and Alzheimer\'s.',
    sections: [
      {
        heading: 'A calmer setting for memory loss',
        body: 'Large memory care wings can feel noisy and confusing. In a small adult family home, residents see the same caregivers, follow familiar routines, and live in a house that feels like home—advantages that often reduce agitation and support orientation.',
      },
      {
        heading: 'How we support dementia and Alzheimer\'s',
        body: 'Our team delivers memory care with patience and proven techniques. We use consistent daily rhythms, clear communication, safe mobility support, medication oversight, and activities tailored to each resident\'s interests and cognitive stage.',
      },
      {
        heading: 'Family partnership',
        body: 'We keep families informed and involved. You can reach us directly, visit by arrangement, and help shape a care plan that honors your loved one\'s history, preferences, and dignity.',
      },
      {
        heading: 'When memory care is needed',
        body: 'Families often contact us after a hospital stay, when wandering or nighttime confusion increases, or when caregiving at home is no longer safe. If you are unsure whether memory care is the right next step, we can talk through options during a tour.',
      },
    ],
    related: [
      { href: '/adult-family-home-shoreline', label: 'Adult Family Home in Seattle WA' },
      { href: '/assisted-living-shoreline', label: 'Assisted Living in Seattle WA' },
      { href: '/hospice-care-shoreline', label: 'Hospice Care in Seattle WA' },
    ],
  },
  {
    slug: 'assisted-living-shoreline',
    seo: {
      title: 'Assisted Living in Seattle WA',
      description:
        'Prefer assisted living in Seattle without a large campus? Our licensed adult family home in Shoreline offers daily living help, meals, and 24/7 care for just six residents.',
      path: '/assisted-living-shoreline',
      keywords:
        'assisted living Seattle WA, assisted living alternative Seattle, small assisted living King County, senior care Shoreline',
    },
    h1: 'Assisted Living in Seattle WA',
    intro:
      'If you are comparing assisted living in Shoreline, consider a licensed adult family home. Holy Living delivers the daily help of assisted living in a warmer, smaller home.',
    sections: [
      {
        heading: 'Assisted living help, residential feel',
        body: 'Residents receive help with activities of daily living—bathing, dressing, grooming, toileting, and mobility—plus medication management, housekeeping, laundry, and home-cooked meals.',
      },
      {
        heading: 'How we differ from large assisted living',
        body: 'Corporate assisted living communities can house dozens or hundreds of residents. We cap at six. That means faster response times, personal relationships, and ownership on-site who knows each resident well.',
      },
      {
        heading: 'Comprehensive daily support',
        body: 'From medication management to meaningful daily routines, we provide comprehensive support tailored to each person. Families tell us the difference is feeling known—not processed.',
      },
      {
        heading: 'Tour before you decide',
        body: 'The best way to evaluate an assisted living alternative is to visit. See the rooms, meet caregivers, ask about routines, and decide whether our Shoreline home feels right for your family.',
      },
    ],
    related: [
      { href: '/adult-family-home-shoreline', label: 'Adult Family Home in Seattle WA' },
      { href: '/memory-care-shoreline', label: 'Memory Care in Seattle WA' },
      { href: '/hospice-care-shoreline', label: 'Hospice Care in Seattle WA' },
    ],
  },
  {
    slug: 'hospice-care-shoreline',
    seo: {
      title: 'Hospice Care in Seattle WA',
      description:
        'Dignified hospice and end-of-life care in a Shoreline adult family home near Seattle. Comfort, presence, and personalized support for residents and families. Call to learn more.',
      path: '/hospice-care-shoreline',
      keywords:
        'hospice care Seattle WA, end of life care Seattle, adult family home hospice, comfort care Shoreline',
    },
    h1: 'Hospice Care in Seattle WA',
    intro:
      'When comfort and dignity matter most, Holy Living provides hospice and end-of-life care in a calm, home-like Shoreline setting—not a busy institutional ward.',
    sections: [
      {
        heading: 'Comfort-focused end-of-life care',
        body: 'Our hospice support emphasizes pain management coordination, peaceful surroundings, familiar faces, and the emotional presence residents and families need during life\'s final chapter.',
      },
      {
        heading: 'Working with hospice providers',
        body: 'We partner with hospice agencies so clinical and spiritual support can come into the home while our caregivers continue daily comfort care, meals, and companionship around the clock.',
      },
      {
        heading: 'A quieter place for families',
        body: 'A six-resident adult family home gives families space to visit, sit together, and stay connected without the noise and turnover of larger facilities.',
      },
      {
        heading: 'Talk with us early',
        body: 'Whether hospice is already in place or you are exploring options, call us to discuss availability and how we support residents receiving end-of-life care in Shoreline.',
      },
    ],
    related: [
      { href: '/adult-family-home-shoreline', label: 'Adult Family Home in Seattle WA' },
      { href: '/memory-care-shoreline', label: 'Memory Care in Seattle WA' },
      { href: '/assisted-living-shoreline', label: 'Assisted Living in Seattle WA' },
    ],
  },
];
