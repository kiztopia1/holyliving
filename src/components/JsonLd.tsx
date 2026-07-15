import { useEffect } from 'react';
import {
  LOGO_URL,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_GEO,
  SITE_LICENSE,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from '../lib/seo';

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function HomeJsonLd() {
  useEffect(() => {
    upsertJsonLd('ld-local-business', {
      '@context': 'https://schema.org',
      '@type': ['NursingHome', 'LocalBusiness'],
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: 'Holy Living AFH',
      description:
        'Washington State licensed adult family home in Shoreline offering personalized senior care, memory care, and hospice support for up to six residents.',
      url: SITE_URL,
      telephone: SITE_PHONE,
      email: SITE_EMAIL,
      image: LOGO_URL,
      logo: LOGO_URL,
      priceRange: '$$',
      identifier: SITE_LICENSE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_ADDRESS.street,
        addressLocality: SITE_ADDRESS.city,
        addressRegion: SITE_ADDRESS.region,
        postalCode: SITE_ADDRESS.postal,
        addressCountry: SITE_ADDRESS.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE_GEO.latitude,
        longitude: SITE_GEO.longitude,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      areaServed: [
        { '@type': 'City', name: 'Shoreline' },
        { '@type': 'AdministrativeArea', name: 'King County' },
        { '@type': 'State', name: 'Washington' },
      ],
    });

    upsertJsonLd('ld-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { '@id': `${SITE_URL}/#business` },
    });
  }, []);

  return null;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  useEffect(() => {
    upsertJsonLd('ld-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
      })),
    });

    return () => {
      document.getElementById('ld-breadcrumb')?.remove();
    };
  }, [items]);

  return null;
}
