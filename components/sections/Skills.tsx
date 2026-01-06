const skills = {
  'Full-Stack Development': [
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'NestJS',
    'REST APIs',
    'JWT Authentication',
  ],
  Databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma'],
  'DevOps & Cloud': [
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Nginx',
    'Oracle Cloud',
    'Linux',
  ],
  Tools: ['Git', 'GitHub', 'Jira', 'Postman'],
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {Object.entries(skills).map(([title, items]) => (
          <div key={title}>
            <h3 className="text-xl font-medium mb-4">{title}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map(skill => (
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
