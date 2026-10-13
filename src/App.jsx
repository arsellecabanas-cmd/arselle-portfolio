

import CV from "./CV";
import { useState } from 'react'

const projects = [
  {
    title: 'Pastel Calculator',
    category: 'ReactJS · Tailwind CSS',
    description:
      'A pastel-themed calculator built with reusable React components and interactive calculation features.',
    number: '01',
  },
  {
    title: 'To-Do List',
    category: 'ReactJS · Tailwind CSS',
    description:
      'A task management application for adding tasks, tracking completion, and deleting tasks.',
    number: '02',
  },
  {
    title: 'TrakPay',
    category: 'System Proposal · UI/UX',
    description:
      'A proposed transaction management system designed to help organize and monitor transactions across multiple branches.',
    number: '03',
  },
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-400">
        {description}
      </p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formMessage, setFormMessage] = useState('')

  const navigation = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Resume', '#resume'],
    ['Contact', '#contact'],
  ]

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormMessage('Please complete all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFormMessage('Please enter a valid email address.')
      return
    }

    setFormMessage(
      'Your form passed validation! Connect a form service to send messages.'
    )
  }

  return (
    <div className="min-h-screen bg-[#080d1b] text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d1b]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold text-white">
            Arselle<span className="text-blue-400">.dev</span>
          </a>

          <button
            type="button"
            className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? 'Close ✕' : 'Menu ☰'}
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-slate-300 transition hover:text-blue-400"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-white/10 px-6 py-3 md:hidden">
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-white/5 hover:text-blue-400"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex min-h-[80vh] max-w-6xl scroll-mt-24 flex-col justify-center px-6 py-20"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            BS Information Technology Student
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Hello, I'm <span className="text-blue-400">Arselle E.</span>
            <br />
            Cabañas.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Welcome to my digital portfolio! Explore my academic journey,
            programming projects, skills, and experiences as an Information
            Technology student.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Explore My Projects ↗
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-blue-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-blue-400">BSIT</p>
              <p className="mt-1 text-sm text-slate-400">My degree program</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-blue-400">03</p>
              <p className="mt-1 text-sm text-slate-400">Featured projects</p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-t border-white/10 bg-white/[0.02] px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Get to know me"
              title="About Me"
              description="A little about my background, interests, and growing technical skills."
            />

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#0c1325] p-7">
                <h3 className="text-xl font-semibold text-white">
                  My Background
                </h3>
                <p className="mt-4 leading-8 text-slate-400">
                  I am Arselle E. Cabañas, a Bachelor of Science in
                  Information Technology student. I am developing my skills
                  in web development, programming, and system design through
                  academic activities and personal projects.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c1325] p-7">
                <h3 className="text-xl font-semibold text-white">
                  Skills & Interests
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'ReactJS',
                    'Tailwind CSS',
                    'Java',
                    'SQL',
                    'UI/UX Design',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-sm text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-5 leading-7 text-slate-400">
                  I enjoy learning new technologies, creating useful
                  applications, and improving my problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="My work"
              title="Featured Projects"
              description="A selection of my academic and development projects."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="flex flex-col rounded-2xl border border-white/10 bg-[#0c1325] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
                >
                  <div className="mb-7 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/5">
                    <span className="text-5xl font-bold text-blue-400/80">
                      {project.number}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {expandedProject === project.number && (
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
                      This project is part of my learning journey. I aim to
                      apply programming concepts, organized design, and
                      problem-solving techniques in its development.
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.number
                          ? null
                          : project.number
                      )
                    }
                    className="mt-6 self-start font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    {expandedProject === project.number
                      ? 'Show Less ↑'
                      : 'View More →'}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="resume"
          className="scroll-mt-24 border-t border-white/10 bg-white/[0.02] px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="My qualifications"
              title="Resume / CV"
              description="My educational background, experience, and technical skills."
            />
            <CV />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#0c1325] p-7">
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <div className="mt-6 border-l-2 border-blue-400/40 pl-5">
                  <p className="font-semibold text-blue-300">
                    Bachelor of Science in Information Technology
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Cavite State University (CvSU)
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Currently studying
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c1325] p-7">
                <h3 className="text-xl font-semibold text-white">
                  Experience & Strengths
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  Academic experience developing web applications,
                  designing interfaces, exploring databases, and working on
                  system proposals.
                </p>
                <p className="mt-4 leading-7 text-slate-400">
                  Strengths: willingness to learn, problem-solving,
                  collaboration, and attention to detail.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
              <h3 className="font-semibold text-white">Download my CV</h3>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Let's connect"
                title="Contact Me"
                description="Have a question or want to connect? Use the form to try the validation feature."
              />
              <p className="leading-7 text-slate-400">
                Email: Add your preferred email address here.
              </p>
              <p className="mt-3 leading-7 text-slate-400">
                Location: Cavite, Philippines
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/10 bg-[#0c1325] p-6"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#080d1b] px-4 py-3 text-white outline-none focus:border-blue-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#080d1b] px-4 py-3 text-white outline-none focus:border-blue-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  required
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#080d1b] px-4 py-3 text-white outline-none focus:border-blue-400"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Validate & Submit
              </button>

              {formMessage && (
                <p role="status" aria-live="polite" className="text-sm leading-6 text-blue-300">
                  {formMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Arselle E. Cabañas · Built with ReactJS & Tailwind CSS
      </footer>
    </div>
  )
}

export default App
