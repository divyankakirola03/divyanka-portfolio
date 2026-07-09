import Link from "next/link";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#111]">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="grid min-h-[calc(100vh-73px)] items-center gap-10 overflow-hidden px-5 py-10 sm:px-6 sm:py-14 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-16"
      >
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/45">
            Cybersecurity Portfolio
          </p>

          <h1 className="font-serif text-[15vw] leading-[0.86] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[6.5rem] lg:leading-[0.82] xl:text-[7.5rem]">
            Divyanka
            <br />
            Kirola
          </h1>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-black/60 md:text-lg">
            Building at the intersection of cybersecurity, digital forensics,
            network security and technology — while creating practical tools,
            platforms and security-focused communities.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a
              href="#work"
              className="rounded-full bg-black px-4 py-3 text-center text-sm text-white transition hover:scale-105 sm:px-6"
            >
              View My Work
            </a>

            <a
              href="#about"
              className="rounded-full border border-black px-4 py-3 text-center text-sm transition hover:bg-black hover:text-white sm:px-6"
            >
              Know More
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-12 bg-black/30" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              Scroll to explore
            </p>
          </div>
        </div>

        {/* HERO CARDS */}
        <div className="mx-auto grid w-full max-w-[540px] grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="flex min-h-[180px] flex-col justify-between rounded-[30px] bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">
              About Me
            </p>

            <div>
              <p className="font-serif text-2xl">Security.</p>

              <p className="mt-2 text-sm leading-relaxed text-black/50">
                Student.
                <br />
                Builder.
                <br />
                Leader.
              </p>
            </div>
          </div>

          <div className="flex min-h-[190px] sm:mt-10 sm:min-h-[220px] flex-col justify-between rounded-[30px] bg-[#4f7cff] p-5 text-white transition duration-500 hover:-translate-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-60">
              Flagship Project
            </p>

            <div>
              <p className="font-serif text-2xl">ForensiX</p>

              <p className="mt-2 text-xs leading-relaxed opacity-70">
                Digital Forensics Platform
              </p>
            </div>
          </div>

          <Link
            href="/leadership"
            className="group flex min-h-[180px] flex-col justify-between rounded-[30px] bg-[#ffcf3f] p-5 transition duration-500 hover:-translate-y-2"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/45">
              Leadership
            </p>

            <div>
              <p className="font-serif text-2xl">CyberZee</p>

              <p className="mt-2 text-xs text-black/55">
                Lead
                <br />
                2025–Present
              </p>

              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-black/50 transition group-hover:translate-x-1">
                Explore Leadership →
              </p>
            </div>
          </Link>

          <div className="flex min-h-[165px] sm:-mt-4 flex-col justify-between rounded-[30px] bg-[#ff8fa3] p-5 transition duration-500 hover:-translate-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/45">
              Research
            </p>

            <p className="font-serif text-2xl">OSINT</p>
          </div>

          <div className="flex min-h-[210px] flex-col justify-between rounded-[30px] bg-[#d8e7d2] p-5 transition duration-500 hover:-translate-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/45">
              Field
            </p>

            <div>
              <p className="font-serif text-xl">
                Digital
                <br />
                Forensics
              </p>

              <p className="mt-3 text-xs leading-relaxed text-black/50">
                FTK Imager
                <br />
                Autopsy
                <br />
                ExifTool
              </p>
            </div>
          </div>

          <div className="flex min-h-[180px] sm:-mt-6 flex-col justify-between rounded-[30px] bg-[#111] p-5 text-white transition duration-500 hover:-translate-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-50">
              Toolkit
            </p>

            <div>
              <p className="font-serif text-xl">
                Network
                <br />
                Security
              </p>

              <p className="mt-3 text-xs opacity-50">
                Nmap · Wireshark
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="border-t border-black/10 px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16"
      >
        <div className="mb-16 flex items-end justify-between gap-10">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/40">
              Selected Work
            </p>

            <h2 className="font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Things I&apos;ve
              <br />
              built.
            </h2>
          </div>

          <p className="hidden max-w-sm text-right text-sm leading-relaxed text-black/50 md:block">
            Selected projects across digital forensics, cybersecurity
            platforms, network security and computer vision.
          </p>
        </div>

        {/* PROJECT 01 — FORENSIX */}
        <article className="group grid gap-8 border-t border-black/15 py-10 sm:py-14 md:grid-cols-[0.1fr_0.9fr]">
          <p className="text-sm text-black/35">01</p>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
                Digital Forensics · Flagship Project
              </p>

              <h3 className="font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">
                ForensiX
              </h3>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/55">
                A digital forensics investigation platform for evidence
                analysis, forensic hashing, metadata and EXIF extraction,
                duplicate evidence detection, case management and PDF
                investigation reports.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Python
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Flask
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  SQLite
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Digital Forensics
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://forensix-digital-forensics-platform-2.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black px-6 py-3 text-sm text-white transition duration-300 hover:scale-105"
                >
                  Live Project ↗
                </a>

                <a
                  href="https://github.com/divyankakirola03/ForensiX-Digital-Forensics-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/30 px-6 py-3 text-sm transition duration-300 hover:bg-black hover:text-white"
                >
                  View Repository ↗
                </a>
              </div>
            </div>

            <div className="relative min-h-[350px] sm:min-h-[430px] overflow-hidden rounded-[36px] bg-[#111] p-6 text-white transition-all duration-500 group-hover:rounded-[60px] md:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Investigation Platform
                  </p>

                  <p className="mt-2 font-serif text-3xl">ForensiX</p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                  FX
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-[22px] bg-white/10 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Evidence
                  </p>

                  <p className="mt-6 font-serif text-2xl sm:text-3xl">Analyse</p>
                </div>

                <div className="rounded-[22px] bg-[#4f7cff] p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                    Hashing
                  </p>

                  <p className="mt-6 font-serif text-2xl sm:text-3xl">Verify</p>
                </div>

                <div className="rounded-[22px] bg-[#d8e7d2] p-5 text-black">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                    Metadata
                  </p>

                  <p className="mt-6 font-serif text-2xl sm:text-3xl">Extract</p>
                </div>

                <div className="rounded-[22px] bg-[#ffcf3f] p-5 text-black">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                    Reports
                  </p>

                  <p className="mt-6 font-serif text-2xl sm:text-3xl">Document</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* PROJECT 02 — CTF PLATFORM */}
        <article className="group grid gap-8 border-t border-black/15 py-10 sm:py-14 md:grid-cols-[0.1fr_0.9fr]">
          <p className="text-sm text-black/35">02</p>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
                Cybersecurity · CTF Platform
              </p>

              <h3 className="font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">
                CTF Platform
              </h3>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/55">
                A cybersecurity challenge platform created for practical
                security learning and Capture The Flag experiences through
                challenge-based exploration and problem solving.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  CTF
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Cybersecurity
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Security Learning
                </span>
              </div>

              <div className="mt-8">
                <a
                  href="https://github.com/divyankakirola03/ctf-platform-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-black/30 px-6 py-3 text-sm transition duration-300 hover:bg-black hover:text-white"
                >
                  View Repository ↗
                </a>
              </div>
            </div>

            <div className="flex min-h-[340px] sm:min-h-[400px] items-center justify-center overflow-hidden rounded-[36px] bg-[#4f7cff] p-8 text-white transition-all duration-500 group-hover:rounded-[60px]">
              <div className="w-full max-w-md">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Capture The Flag
                </p>

                <h4 className="mt-5 font-serif text-5xl leading-tight">
                  Find.
                  <br />
                  Exploit.
                  <br />
                  Capture.
                </h4>

                <div className="mt-10 space-y-3">
                  <div className="flex items-center justify-between rounded-full border border-white/20 px-5 py-3 text-sm">
                    <span>Web Security</span>
                    <span>01</span>
                  </div>

                  <div className="flex items-center justify-between rounded-full border border-white/20 px-5 py-3 text-sm">
                    <span>Cryptography</span>
                    <span>02</span>
                  </div>

                  <div className="flex items-center justify-between rounded-full border border-white/20 px-5 py-3 text-sm">
                    <span>Forensics</span>
                    <span>03</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* PROJECT 03 — NETWORK IDS */}
        <article className="group grid gap-8 border-t border-black/15 py-10 sm:py-14 md:grid-cols-[0.1fr_0.9fr]">
          <p className="text-sm text-black/35">03</p>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
                Network Security · Python
              </p>

              <h3 className="font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">
                Network IDS
              </h3>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/55">
                A Python-based Network Intrusion Detection System focused on
                monitoring network activity and identifying potentially
                suspicious behaviour in traffic.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Python
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  IDS
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Network Security
                </span>
              </div>

              <div className="mt-8">
                <a
                  href="https://github.com/divyankakirola03/network-ids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-black/30 px-6 py-3 text-sm transition duration-300 hover:bg-black hover:text-white"
                >
                  View Repository ↗
                </a>
              </div>
            </div>

            <div className="flex min-h-[340px] sm:min-h-[400px] items-center justify-center overflow-hidden rounded-[36px] bg-[#d8e7d2] p-8 transition-all duration-500 group-hover:rounded-[60px]">
              <div className="w-full max-w-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                      Network Monitor
                    </p>

                    <p className="mt-2 font-serif text-3xl">
                      Traffic Analysis
                    </p>
                  </div>

                  <div className="h-3 w-3 animate-pulse rounded-full bg-black" />
                </div>

                <div className="mt-10 space-y-3 font-mono text-xs">
                  <div className="rounded-[18px] bg-white/60 p-4">
                    192.168.1.10 → TCP → NORMAL
                  </div>

                  <div className="rounded-[18px] bg-white/60 p-4">
                    192.168.1.21 → UDP → NORMAL
                  </div>

                  <div className="rounded-[18px] bg-[#ff8fa3] p-4">
                    10.0.0.45 → ALERT → SUSPICIOUS
                  </div>

                  <div className="rounded-[18px] bg-white/60 p-4">
                    192.168.1.32 → TCP → NORMAL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* PROJECT 04 — HAND GESTURE */}
        <article className="group grid gap-8 border-y border-black/15 py-10 sm:py-14 md:grid-cols-[0.1fr_0.9fr]">
          <p className="text-sm text-black/35">04</p>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
                Computer Vision · Python
              </p>

              <h3 className="font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">
                Hand Gesture
                <br />
                Project
              </h3>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/55">
                A Python computer vision project exploring real-time hand
                gesture recognition and visual interaction.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Python
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Computer Vision
                </span>

                <span className="rounded-full border border-black/20 px-4 py-2 text-xs">
                  Gesture Recognition
                </span>
              </div>

              <div className="mt-8">
                <a
                  href="https://github.com/divyankakirola03/HandGestureProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-black/30 px-6 py-3 text-sm transition duration-300 hover:bg-black hover:text-white"
                >
                  View Repository ↗
                </a>
              </div>
            </div>

            <div className="flex min-h-[340px] sm:min-h-[400px] items-center justify-center overflow-hidden rounded-[36px] bg-[#ffcf3f] p-8 transition-all duration-500 group-hover:rounded-[60px]">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-black/40">
                  Computer Vision
                </p>

                <div className="my-8 text-8xl">
                  ✋
                </div>

                <p className="font-serif text-4xl">
                  Gesture Detected
                </p>

                <p className="mt-4 text-sm text-black/50">
                  Real-time visual interaction
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* STATEMENT */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40">
            Building & Learning
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Security is better
            <br />
            understood by building.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-black/50">
            My work focuses on practical exploration — from digital forensics
            and network monitoring to security platforms and technical
            communities.
          </p>
        </div>
            </section>

      <About />

      <Contact />
    </main>
  );
}