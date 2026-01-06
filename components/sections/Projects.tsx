const projects = [
  {
    title: 'Secure Notes Application',
    focus: 'Full-Stack (MERN)',
    description:
      'A secure full-stack web application for creating, managing, and sharing notes with authentication and role-based access control.',
    points: [
      'Designed RESTful APIs using Node.js and Express',
      'Implemented JWT-based authentication and authorization',
      'Designed database schemas using Prisma ORM',
      'Integrated file upload and text extraction',
      'Containerized services using Docker',
    ],
    link: '/notes',
  },
  {
    title: 'Face Detection & Attendance System',
    focus: 'DevOps & CI/CD',
    description:
      'A real-time face detection and automated attendance system deployed using a complete CI/CD pipeline and Kubernetes infrastructure.',
    points: [
      'Built CI/CD pipeline using Jenkins, SonarQube, and Nexus',
      'Dockerized backend services',
      'Deployed application on on-prem Kubernetes cluster',
      'Debugged pod crashes and Gunicorn startup issues',
      'Managed cluster using Lens for Kubernetes',
    ],
    link: '/demo',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
      <h2 className="text-3xl font-semibold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(project => (
          <div
            key={project.title}
            className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
          >
            <h3 className="text-xl font-semibold mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Focus: {project.focus}
            </p>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
              {project.points.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>

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
