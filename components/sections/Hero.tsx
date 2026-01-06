export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold">
        Ajinkya Thakur
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl">
        Software Engineer | Full-Stack & DevOps
      </p>

      <p className="mt-4 text-gray-400 max-w-3xl">
        MCA student with hands-on experience in building, deploying,
        and debugging production-ready web applications using the
        MERN stack, Docker, Kubernetes, and CI/CD pipelines.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
