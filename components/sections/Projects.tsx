const projects = [
  {
    title: 'Secure Notes Application',
    description:
      'A secure MERN-based notes platform with authentication, sharing, and file content extraction.',
    stack: 'MERN, Prisma, PostgreSQL',
    link: '/notes',
  },
  {
    title: 'Face Recognition System',
    description:
      'Backend system with a complete CI/CD pipeline and Kubernetes deployment.',
    stack: 'Django, Docker, Jenkins, Kubernetes',
    link: '/demo',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-medium mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {project.description}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: {project.stack}
            </p>
            <a
              href={project.link}
              className="text-blue-400 hover:underline"
            >
              View Live →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
