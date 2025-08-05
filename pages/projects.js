export default function Projects() {
  const projects = [
    {
      name: 'Entopia',
      description: 'Gamified blockchain hub with quests and rewards.',
      link: 'https://entopia.entity.global/'
    },
    {
      name: 'Ooredoo Eshop',
      description: 'Optimized e-commerce platform for Ooredoo Qatar.',
      link: 'https://sit.ooredoo.qa/eshop'
    },
    {
      name: 'Recharge',
      description: 'Mobile recharge app with UX enhancements.',
      link: 'https://www.ooredoo.qa/recharge/home'
    }
  ]

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map(({name, description, link}) => (
          <li key={name} className="border p-4 rounded hover:shadow">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-600 hover:underline">{name}</a>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}