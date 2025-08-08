export default function Projects() {
  const projects = [
    {
      name: 'Entopia',
      description: 'Gamified blockchain hub with quests and rewards.',
      link: 'https://entopia.entity.global/',
    },
    {
      name: 'Viulive (Web)',
      description:
        'Live streaming web platform enabling creators and audiences to connect via high-quality video, chat, and interactive tools. Built with React, Next.js, and microfrontend architecture.',
      link: 'https://viulive.com',
    },
    {
      name: 'Viulive (Mobile)',
      description:
        'Cross-platform live streaming mobile app developed with React Native, featuring low-latency streaming, real-time chat, and interactive features.',
      link: 'https://play.google.com/store/apps/details?id=com.millennium.vumemobile&hl=en',
    },
    {
      name: 'Viulive (Mobile iOS)',
      description:
        'iOS version of Viulive mobile app with identical streaming and interactive capabilities, optimized for iOS devices.',
      link: 'https://apps.apple.com/tt/app/go-live-stream-studio-viulive/id1493243242?ign-mpt=uo%3D2',
    },
    {
      name: 'Ooredoo Eshop',
      description: 'Optimized e-commerce platform for Ooredoo Qatar.',
      link: 'https://sit.ooredoo.qa/eshop',
    },
    {
      name: 'Recharge',
      description: 'Mobile recharge app with UX enhancements.',
      link: 'https://www.ooredoo.qa/recharge/home',
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
