export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-40">
      <h1 className="text-5xl md:text-6xl font-bold">
        Ajinkya Thakur
      </h1>

      <p className="mt-6 text-xl text-gray-400 max-w-2xl">
        Software Engineer specializing in MERN Stack development
        and DevOps-driven deployments on cloud infrastructure.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-gray-600 rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
