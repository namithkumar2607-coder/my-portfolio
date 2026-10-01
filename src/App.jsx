import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Contact,
  ExternalLink as ExternalLinkIcon,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const profileLinks = {
  github: 'https://github.com/namithkumar2607-coder',
  linkedin: 'https://www.linkedin.com/in/namith-kumar-b-v-77aa5a383',
  email: 'mailto:namithkumar2607@gmail.com',
}

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const activities = [
  {
    number: '01',
    title: 'Development Environment Setup',
    description:
      'Set up Visual Studio Code for programming and worked with C and C++. Used the VS Code debugger to identify and fix logical and runtime errors, then tested the programs with different inputs.',
    tools: ['C', 'C++', 'Visual Studio Code', 'Debugger'],
    repository:
      'https://github.com/namithkumar2607-coder/Activity-1-dev-Environment-Setup1',
  },
  {
    number: '02',
    title: 'Git & GitHub Setup',
    description:
      'Created and configured my GitHub account and learned the basics of Git and GitHub. Created a Hello World C repository and practiced uploading and managing code.',
    tools: ['Git', 'GitHub', 'C'],
    repository: 'https://github.com/namithkumar2607-coder/hello-world-c',
  },
  {
    number: '03',
    title: 'GitLens & Live Share',
    description:
      'Explored GitLens and Live Share in Visual Studio Code to understand Git-related features and collaborative programming workflows.',
    tools: ['GitLens', 'Live Share', 'Visual Studio Code'],
  },
  {
    number: '04',
    title: 'LeetCode Practice Repository',
    description:
      'Practiced Data Structures and Algorithms through LeetCode problems and documented my solutions on GitHub. The repository contains practice work covering arrays and strings, basic algorithms, and stacks.',
    tools: ['C', 'Data Structures & Algorithms', 'LeetCode', 'GitHub'],
    repository: 'https://github.com/namithkumar2607-coder/leetcode-solutions',
  },
]

const skills = [
  'C',
  'C++',
  'Python',
  'Git & GitHub',
  'VS Code',
  'DSA / Data Structures & Algorithms',
  'SQL',
]

function ExternalLink({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-20 border-b border-line/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#top"
          aria-label="Namith Kumar B V, home"
          className="font-display text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-soft-green"
        >
          NAMITH <span className="text-soft-green">KUMAR B V</span>
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-white transition-colors hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-green md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b border-line bg-page px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-copy transition-colors hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-green md:py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-soft-green">
        {eyebrow}
      </p>
      <h2 id={id} className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-muted">{description}</p>}
    </div>
  )
}

function ActivityCard({ activity }) {
  return (
    <article
      id={`activity-${activity.number}`}
      className="group flex h-full scroll-mt-24 flex-col border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/70 sm:p-7"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-display text-sm font-medium text-soft-green">{activity.number}</span>
        <span className="h-px w-12 bg-line transition-colors group-hover:bg-accent" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
        {activity.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted sm:text-base">
        {activity.description}
      </p>
      <div className="mt-6 border-t border-line pt-5">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted/80">
          Tools &amp; technology
        </p>
        <ul className="flex list-none flex-wrap gap-2 p-0" aria-label={`Tools for ${activity.title}`}>
          {activity.tools.map((tool) => (
            <li
              key={tool}
              className="border border-line bg-surface-raised px-2.5 py-1 text-xs text-copy/90"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
      {activity.repository && (
        <ExternalLink
          href={activity.repository}
          className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-soft-green transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-soft-green"
        >
          <Code2 size={17} aria-hidden="true" />
          View repository
          <ArrowUpRight size={15} aria-hidden="true" />
        </ExternalLink>
      )}
    </article>
  )
}

function HeroIndex() {
  return (
    <aside className="border-t border-line pt-5 lg:ml-auto lg:w-full lg:max-w-sm lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        Activities in this portfolio
      </p>
      <ol className="m-0 list-none divide-y divide-line p-0">
        {activities.map((activity) => (
          <li key={activity.number}>
            <a
              href={`#activity-${activity.number}`}
              className="group flex min-h-11 items-center gap-4 py-2 text-sm text-copy/90 transition-colors hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-soft-green"
            >
              <span className="font-display text-xs text-soft-green">{activity.number}</span>
              <span className="min-w-0 flex-1">{activity.title}</span>
              <ArrowDownRight size={15} aria-hidden="true" className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}

function App() {
  return (
    <div id="top" className="min-h-screen bg-page text-copy">
      <a
        href="#main-content"
        className="sr-only z-50 bg-white px-4 py-3 text-page focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />

      <main id="main-content">
        <section
          aria-labelledby="hero-title"
          className="relative isolate overflow-hidden border-b border-line bg-[radial-gradient(ellipse_at_76%_0%,rgba(48,140,82,0.17),transparent_42%),radial-gradient(ellipse_at_100%_24%,rgba(127,190,143,0.08),transparent_48%)]"
        >
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(290px,0.8fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-soft-green">
                <span className="h-px w-8 bg-soft-green" aria-hidden="true" />
                Computer Science Student &amp; Developer
              </p>
              <h1
                id="hero-title"
                className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-[4.5rem]"
              >
                Namith Kumar
                  <span className="block text-accent">B V</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-copy sm:text-xl">
                Computer Science student building useful web applications.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#activities"
                  className="inline-flex min-h-12 items-center gap-3 bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-soft-green"
                >
                  View Activities <ArrowRight size={17} aria-hidden="true" />
                </a>
                <ExternalLink
                  href={profileLinks.github}
                  className="inline-flex min-h-12 items-center gap-2 border border-line bg-page/40 px-5 text-sm font-medium text-white transition-colors hover:border-soft-green/60 hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-soft-green"
                >
                  <Code2 size={17} aria-hidden="true" /> GitHub
                </ExternalLink>
                <ExternalLink
                  href={profileLinks.linkedin}
                  className="inline-flex min-h-12 items-center gap-2 border border-line bg-page/40 px-5 text-sm font-medium text-white transition-colors hover:border-soft-green/60 hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-soft-green"
                >
                  <Contact size={17} aria-hidden="true" /> LinkedIn
                </ExternalLink>
              </div>
            </div>
            <HeroIndex />
          </div>
        </section>

        <section id="about" className="scroll-mt-8 border-b border-line" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12 lg:py-24">
            <SectionHeading eyebrow="01 / About" title="A little about me" id="about-title" />
            <div className="max-w-2xl lg:pt-8">
              <p className="text-lg leading-8 text-copy">
                I am a Computer Science student and developer interested in building useful web applications and improving my programming and problem-solving skills.
              </p>
            </div>
          </div>
        </section>

        <section id="activities" className="scroll-mt-8 border-b border-line" aria-labelledby="activities-title">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <SectionHeading
              eyebrow="02 / Activities"
              title="Learning by doing."
              description="Programming practice, tools, and project work collected in one place."
              id="activities-title"
            />
            <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
              {activities.map((activity) => (
                <ActivityCard key={activity.number} activity={activity} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-8 border-b border-line" aria-labelledby="skills-title">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12 lg:py-24">
            <SectionHeading eyebrow="03 / Skills" title="Tools I work with." id="skills-title" />
            <ul className="flex list-none flex-wrap content-start gap-2.5 p-0 lg:pt-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border border-line bg-surface px-4 py-2.5 text-sm text-copy transition-colors hover:border-accent/70 hover:text-soft-green"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8" aria-labelledby="contact-title">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12 lg:py-24">
            <SectionHeading eyebrow="04 / Contact" title="Get in touch." id="contact-title" />
            <div className="min-w-0 divide-y divide-line border-y border-line">
              <a
                href={profileLinks.email}
                className="group flex min-h-16 items-center justify-between gap-4 py-4 text-copy transition-colors hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-soft-green sm:min-h-[72px]"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Mail size={19} aria-hidden="true" className="shrink-0 text-soft-green" />
                  <span className="truncate text-sm sm:text-base">namithkumar2607@gmail.com</span>
                </span>
                <ExternalLinkIcon size={17} aria-hidden="true" className="shrink-0 text-muted transition-colors group-hover:text-soft-green" />
              </a>
              <ExternalLink
                href={profileLinks.github}
                className="group flex min-h-16 items-center justify-between gap-4 py-4 text-copy transition-colors hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-soft-green sm:min-h-[72px]"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Code2 size={19} aria-hidden="true" className="shrink-0 text-soft-green" />
                  <span className="truncate text-sm sm:text-base">github.com/namithkumar2607-coder</span>
                </span>
                <ExternalLinkIcon size={17} aria-hidden="true" className="shrink-0 text-muted transition-colors group-hover:text-soft-green" />
              </ExternalLink>
              <ExternalLink
                href={profileLinks.linkedin}
                className="group flex min-h-16 items-center justify-between gap-4 py-4 text-copy transition-colors hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-soft-green sm:min-h-[72px]"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Contact size={19} aria-hidden="true" className="shrink-0 text-soft-green" />
                  <span className="truncate text-sm sm:text-base">linkedin.com/in/namith-kumar-b-v-77aa5a383</span>
                </span>
                <ExternalLinkIcon size={17} aria-hidden="true" className="shrink-0 text-muted transition-colors group-hover:text-soft-green" />
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span className="font-display font-medium text-white">© 2026 Namith Kumar B V</span>
          <div className="flex items-center gap-5">
            <ExternalLink
              href={profileLinks.github}
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-soft-green"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href={profileLinks.linkedin}
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-soft-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-soft-green"
            >
              LinkedIn
            </ExternalLink>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App