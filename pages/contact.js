// Contact.jsx
export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4 border-b pb-2">Contact Me</h1>
      <p className="mb-6 text-lg">
        I’d love to connect! Feel free to reach out through the channels below.
      </p>
      <div className="space-y-3">
        <p className="text-lg">
          📧 <span className="font-semibold">Email:</span>{' '}
          <a
            href="mailto:amiramahmoudatef@gmail.com"
            className="text-blue-600 hover:underline"
          >
            amiramahmoudatef@gmail.com
          </a>
        </p>
        <p className="text-lg">
          🔗 <span className="font-semibold">LinkedIn:</span>{' '}
          <a
            href="https://linkedin.com/in/amira-atef-7a90a5156"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/amira-atef-7a90a5156
          </a>
        </p>
      </div>
    </main>
  );
}
