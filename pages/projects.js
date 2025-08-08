export default function Projects() {
  const projects = [
    // 🌐 Web Apps
    {
      name: 'Entopia (Web)',
      description:
        'Gamified blockchain hub where users complete quests, engage with partners, and integrate wallets to earn rewards. Built with React, Next.js, Tailwind CSS, and microfrontend architecture.',
      link: 'https://entopia.entity.global/',
    },
    {
      name: 'Viulive (Web)',
      description:
        'Live streaming platform enabling creators and audiences to connect via high-quality video, chat, and interactive tools. Built with React, Next.js, and microfrontend architecture.',
      link: 'https://viulive.com',
    },
    {
      name: 'Eshop (Web)',
      description:
        'E-commerce platform for Ooredoo, offering product browsing, purchasing, and delivery tracking. Improved conversion by 60% through component redesign and UI optimization.',
      link: 'https://sit.ooredoo.qa/eshop',
    },
    {
      name: 'Recharge (Web)',
      description:
        'Mobile recharge web app with enhanced UX and PWA optimizations, increasing engagement by 50%.',
      link: 'https://www.ooredoo.qa/recharge/home',
    },
    {
      name: 'Shahry (Web)',
      description:
        'Postpaid plan management platform allowing users to view, upgrade, and manage Ooredoo mobile plans.',
      link: 'https://www.ooredoo.qa/web/en/postpaid-plans/shahry/',
    },
    {
      name: 'Nojoom (Web)',
      description:
        'Ooredoo customer loyalty platform enabling users to earn and redeem points with various partners.',
      link: 'https://www.ooredoo.qa/web/en/nojoom/',
    },
    {
      name: 'SelfCare (Web)',
      description:
        'Self-service platform enabling customers to manage bills, payments, and subscriptions online.',
      link: 'https://www.ooredoo.qa/selfcare/#/ePayment/en',
    },

    // 📱 Mobile Apps
    {
      name: 'Viulive (Mobile – Android)',
      description:
        'Cross-platform live streaming mobile app developed with React Native, featuring low-latency streaming, real-time chat, and interactive features.',
      link: 'https://play.google.com/store/apps/details?id=com.millennium.vumemobile&hl=en',
    },
    {
      name: 'Viulive (Mobile – iOS)',
      description:
        'iOS version of Viulive mobile app with identical streaming and interactive capabilities, optimized for iOS devices.',
      link: 'https://apps.apple.com/tt/app/go-live-stream-studio-viulive/id1493243242?ign-mpt=uo%3D2',
    },
    {
      name: 'Fan ID (Mobile)',
      description:
        'Mobile application for managing fan identification during events, built for scalability and ease of use.',
      link: 'https://play.google.com/store/apps/details?id=qa.ooredoo.android',
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map(({ name, description, link }) => (
          <li key={name} className="border p-4 rounded hover:shadow">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {name}
            </a>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
