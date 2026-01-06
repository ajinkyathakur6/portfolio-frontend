const skills = {
  Languages: ['JavaScript', 'Python', 'Java'],
  Frontend: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind'],
  Backend: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
  Databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma'],
  DevOps: [
    'Docker',
    'Jenkins',
    'Kubernetes',
    'Oracle Cloud',
    'Nginx',
    'Linux',
    'Git & GitHub',
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-medium mb-3">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 bg-gray-800 rounded-md text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
