export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Patheya Technologies',
    alternateName: 'Pātheya Technologies',
    url: 'https://patheya.tech',
    logo: 'https://patheya.tech/images/logo-dark.png',
    description: 'Leading software development and IT consultancy company specializing in web development, mobile applications, cloud services, AI/ML solutions, and DevOps. Based in Pune, India.',
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'connect@patheya.tech',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.linkedin.com/company/patheya-technologies',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '15',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 15,
    },
    slogan: 'Build at the speed of innovation',
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceArea: [
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    knowsAbout: [
      'Software Development',
      'Mobile App Development',
      'Cloud Computing',
      'DevOps',
      'Artificial Intelligence',
      'Machine Learning',
      'Business Consultancy',
      'React',
      'Next.js',
      'Node.js',
      'AWS',
      'Flutter',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
