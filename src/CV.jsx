
import React from "react";

export default function CV() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Web Design",
  ];

  const projects = [
    {
      name: "Pastel Calculator",
      description:
        "A calculator web application built with ReactJS and Tailwind CSS, featuring interactive calculations and a pastel-themed interface.",
      technologies: "ReactJS • Tailwind CSS",
      link: "",
    },
    {
      name: "To-Do List",
      description:
        "A task management application that allows users to add tasks, mark them as completed, and delete tasks.",
      technologies: "ReactJS • Tailwind CSS",
      link: "",
    },
    {
      name: "TrakPay",
      description:
        "A proposed transaction management system for tracking cash-in and cash-out transactions across multiple business branches.",
      technologies: "System Proposal • Transaction Management",
      link: "",
    },
  ];

  return (
    <section
      id="cv"
      className="min-h-screen bg-slate-950 px-5 py-16 text-white sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Page Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl text-blue-400">
           My Portfolio
          </h1>
          <p className="mt-3 text-slate-400">
            My background, skills, and projects
          </p>
        </div>

        {/* CV Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-800 p-6 sm:p-10">
            <div className="flex flex-col items-center gap-7 sm:flex-row sm:items-center">
              {/* Photo Frame */}
              <div className="shrink-0 text-center">
                <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-blue-400 bg-slate-800">
                  <div className="flex flex-col items-center gap-3 p-4 text-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2h-3l-2-2h-4L8 6H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                   <img src="pfp.jfif"
                    alt="Arselle E. Cabañas"
                 className="h-40 w-40 rounded-2xl object-cover"/>
                  </div>
                </div>
                <p className="mt-2 text-xs text-blue-200">
                  Profile Photo
                </p>
              </div>

              {/* Personal Information */}
              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Arselle E. Cabañas
                </h2>
                <p className="mt-3 font-medium text-blue-300">
                  BS Information Technology Student
                </p>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                  Aspiring IT professional passionate about web
                  development, user interface design, and creating
                  practical digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* CV Content */}
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-3">
            {/* Left Column */}
            <div className="space-y-9">
              {/* Contact */}
              <div>
                <SectionTitle>Contact Information</SectionTitle>

                <div className="space-y-4 text-sm text-slate-300">
                  <ContactItem
                    icon="✉"
                    label="Email"
                    value="arselleeguna97@gmail.com"
                  />
                  <ContactItem
                    icon="☎"
                    label="Phone"
                    value="09919185992"
                  />
                  <ContactItem
                    icon="⌖"
                    label="Location"
                    value="Trece Martires, Cavite"
                  />
                  <ContactItem
                    icon="⌘"
                    label="GitHub"
                    value="https://github.com/arsellecabanas-cmd/"
                  />
                </div>
              </div>

              {/* Education */}
              <div>
                <SectionTitle>Education</SectionTitle>

                <h3 className="font-semibold text-white">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="mt-2 text-sm text-blue-300">
                  Cavite State University-Tanza Campus
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  3rd · Expected graduation: 2028
                </p>
              </div>

              {/* Skills */}
              <div>
                <SectionTitle>Technical Skills</SectionTitle>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-800 bg-blue-950/60 px-3 py-2 text-xs font-medium text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-9 lg:col-span-2">
              {/* Profile */}
              <div>
                <SectionTitle>About Me</SectionTitle>
                <p className="text-sm leading-7 text-slate-300">
                  I am an Information Technology student developing
                  my knowledge of programming, web development, and
                  responsive user interface design. Through academic
                  projects, I practice building applications that
                  are organized, functional, and easy to use. I am
                  eager to continue learning and improve my technical
                  and problem-solving skills.
                </p>
              </div>

              {/* Projects */}
              <div>
                <SectionTitle>Academic & Personal Projects</SectionTitle>

                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div
                      key={project.name}
                      className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 transition hover:border-blue-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-950 font-bold text-blue-300">
                          0{index + 1}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold text-white">
                            {project.name}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            {project.description}
                          </p>

                          <p className="mt-3 text-xs font-medium text-blue-300">
                            {project.technologies}
                          </p>

                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-3 inline-block text-sm text-blue-400 underline hover:text-blue-300"
                            >
                              View Project
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div>
                <SectionTitle>Personal Strengths</SectionTitle>
                <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  <li>✓ Willingness to learn</li>
                  <li>✓ Problem-solving</li>
                  <li>✓ Attention to detail</li>
                  <li>✓ Adaptability</li>
                  <li>✓ Team collaboration</li>
                  <li>✓ Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-700 bg-slate-950/70 px-6 py-5 text-center">
            <p className="text-sm text-slate-400">
              Thank you for viewing my CV portfolio.
            </p>
          </div>
        </div>

        {/* Print Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.print()}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Download / Print CV
          </button>
        </div>
      </div>

      {/* Print Styling */}
      <style>{`
        @media print {
          body {
            background: white !important;
          }

          #cv {
            background: white !important;
            color: black !important;
            padding: 0 !important;
          }

          #cv > div {
            max-width: none !important;
          }

          #cv > div > div:first-of-type {
            margin-bottom: 12px !important;
          }

          #cv > div > div:nth-of-type(2) {
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            overflow: visible !important;
          }

          #cv button {
            display: none !important;
          }

          #cv .text-white {
            color: #111827 !important;
          }

          #cv .text-slate-300,
          #cv .text-slate-400 {
            color: #374151 !important;
          }

          #cv .bg-slate-950,
          #cv .bg-slate-900,
          #cv .bg-slate-800,
          #cv .bg-blue-950 {
            background: white !important;
          }

          #cv .border-slate-700 {
            border-color: #d1d5db !important;
          }

          #cv .text-blue-300,
          #cv .text-blue-200,
          #cv .text-blue-400 {
            color: #1d4ed8 !important;
          }

          #cv .rounded-3xl {
            border-radius: 0 !important;
          }

          #cv .shadow-2xl {
            box-shadow: none !important;
          }

          #cv .grid {
            break-inside: auto;
          }

          #cv .rounded-2xl {
            break-inside: avoid;
          }

          @page {
            size: A4;
            margin: 10mm;
          }
        }
      `}</style>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-4 border-b border-blue-800 pb-3 text-lg font-bold text-blue-300">
      {children}
    </h2>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-950 text-blue-300">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="break-words">{value}</p>
      </div>
    </div>
  );
}
