import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-lg shadow-lg mt-10">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-md">
        Amira Mahmoud Atef
      </h1>
      <p className="text-xl font-semibold mb-8 text-gray-700">
        Senior Frontend Engineer (Web & Mobile) based in Cairo, Egypt.
      </p>
      <p className="mb-10 text-gray-600 leading-relaxed text-lg">
        Skilled in React, Next.js, Tailwind CSS, Microfrontends, Node.js, and
        more. Experienced leading teams and building scalable web & mobile apps.
      </p>
      <nav className="flex space-x-8">
        <Link
          href="/projects"
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300"
        >
          Contact
        </Link>
      </nav>
    </main>
  );
}
