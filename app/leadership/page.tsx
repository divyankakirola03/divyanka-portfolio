import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const initiatives = [
  {
    title: "OSINT Workshop",
    meta: "Open-Source Intelligence",
    description:
      "Practical exposure to open-source intelligence, investigation techniques and real-world information gathering workflows.",
  },
  {
    title: "Malware Mayhem",
    meta: "Security Workshop",
    description:
      "A practical learning experience focused on malware concepts, attack understanding and defensive security awareness.",
  },
  {
    title: "Networking Nexus",
    meta: "3-Day Workshop",
    description:
      "Hands-on learning covering networking fundamentals, OSI and TCP/IP models, Packet Tracer and Nmap.",
  },
  {
    title: "Digital Forensics Workshop",
    meta: "2-Day Hands-on Workshop",
    description:
      "Practical evidence acquisition and investigation using FTK Imager, Autopsy, ExifTool and Steghide.",
  },
  {
    title: "ROOT ACCESS DENIED",
    meta: "Capture The Flag",
    description:
      "A cybersecurity CTF designed around practical problem-solving, technical exploration and security challenges.",
  },
  {
    title: "Project Ignite",
    meta: "First-Year Security Series",
    description:
      "A beginner-friendly cybersecurity learning series designed to help students begin their practical security journey.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f5f0] text-[#111]">
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="px-5 pb-16 pt-10 sm:px-6 md:px-12 md:pb-24 md:pt-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-block text-xs uppercase tracking-[0.25em] text-black/45 transition hover:text-black"
          >
            ← Back Home
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            {/* HERO TEXT */}

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">
                Leadership & Community
              </p>

              <h1 className="mt-6 font-serif text-[15vw] leading-[0.88] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[6.5rem]">
                Building
                <br />
                communities
                <br />
                that learn.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-black/55">
                My journey beyond technical projects includes community
                leadership, peer learning, public speaking and campus outreach.
                I enjoy creating spaces where people can learn, collaborate and
                become confident enough to teach others.
              </p>
            </div>

            {/* HERO IMAGE */}

            <div className="relative min-h-[440px] overflow-hidden rounded-[32px] sm:min-h-[560px]">
              <Image
                src="/leadership/div6.png"
                alt="Leading a cybersecurity learning session"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE 01 — CYBERZEE
      ====================================================== */}

      <section className="border-t border-black/10 px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40">
            Experience 01
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            {/* CYBERZEE TEXT */}

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                Lead · 2025—Present
              </p>

              <h2 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl md:text-7xl">
                CyberZee
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/55">
                I lead CyberZee, a student-driven cybersecurity community
                focused on making technical security education practical,
                collaborative and accessible.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-black/55">
                My work includes planning workshops, coordinating teams,
                developing CTF experiences and helping students explore
                cybersecurity through hands-on technical sessions.
              </p>

              {/* ROLE TAGS */}

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Workshop Planning",
                  "CTF Events",
                  "Team Leadership",
                  "Community Building",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-black/15 px-4 py-4 text-sm text-black/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CYBERZEE PHOTOS */}

            <div className="grid grid-cols-2 gap-3">
              <div className="relative min-h-[330px] overflow-hidden rounded-[28px] sm:min-h-[420px]">
                <Image
                  src="/leadership/div5.png"
                  alt="CyberZee technical session"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>

              <div className="relative min-h-[330px] overflow-hidden rounded-[28px] sm:min-h-[420px]">
                <Image
                  src="/leadership/div4.png"
                  alt="Supporting students during a cybersecurity workshop"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>

          {/* WORKSHOP GALLERY */}

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="group relative min-h-[380px] overflow-hidden rounded-[30px]">
              <Image
                src="/leadership/div3.jpeg"
                alt="Mentoring students during a practical cybersecurity lab"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-24 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Hands-on Learning
                </p>

                <p className="mt-2 font-serif text-3xl">
                  Learning through practice.
                </p>
              </div>
            </div>

            <div className="group relative min-h-[380px] overflow-hidden rounded-[30px]">
              <Image
                src="/leadership/div6.png"
                alt="Leading a peer learning session"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-24 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Peer Learning
                </p>

                <p className="mt-2 font-serif text-3xl">
                  Sharing technical knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE 02 — ANCHORING
      ====================================================== */}

      <section className="bg-[#111] px-5 py-16 text-white sm:px-6 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Experience 02
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
            {/* PODIUM PHOTO */}

            <div className="relative min-h-[460px] overflow-hidden rounded-[32px] sm:min-h-[620px]">
              <Image
                src="/leadership/div2.jpeg"
                alt="Anchoring a university event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* ANCHORING CONTENT */}

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Anchoring & Public Speaking
              </p>

              <h2 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl md:text-7xl">
                On stage.
                <br />
                In the moment.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-relaxed text-white/55">
                Alongside my technical and leadership work, I have anchored
                university events and represented student communities on stage.
                These experiences have strengthened my communication, audience
                engagement and ability to stay composed in live environments.
              </p>

              <div className="mt-10">
                {[
                  "Live event anchoring",
                  "Audience engagement",
                  "Public speaking and communication",
                  "Representing student communities on stage",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-5 border-b border-white/15 py-5"
                  >
                    <span className="text-xs text-white/30">
                      0{index + 1}
                    </span>

                    <p className="text-sm leading-relaxed text-white/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE 03 — CAMPUS AMBASSADOR
      ====================================================== */}

      <section className="px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40">
            Experience 03
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
            {/* CRAC CONTENT */}

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                Campus Ambassador
              </p>

              <h2 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl md:text-7xl">
                CRAC
                <br />
                Learning
              </h2>

              <p className="mt-7 max-w-lg text-base leading-relaxed text-black/55">
                As a Campus Ambassador, I contributed to cybersecurity
                awareness, student outreach and connecting learners with
                practical security workshops and community opportunities.
              </p>

              <div className="mt-10">
                {[
                  "Campus outreach and student engagement",
                  "Cybersecurity awareness initiatives",
                  "Workshop and collaboration support",
                  "Connecting learners with practical security opportunities",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-5 border-b border-black/15 py-5"
                  >
                    <span className="text-xs text-black/30">
                      0{index + 1}
                    </span>

                    <p className="text-sm leading-relaxed text-black/60">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CAMPUS AMBASSADOR IMAGE */}

            <div className="relative min-h-[460px] overflow-hidden rounded-[32px] bg-white sm:min-h-[650px]">
              <Image
                src="/leadership/photo_div_port.png"
                alt="CRAC Learning Campus Ambassador"
                fill
                className="object-contain p-3 sm:p-6"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP APPROACH
      ====================================================== */}

      <section className="border-t border-black/10 px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">
                My Approach
              </p>
            </div>

            <div>
              <h2 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
                Leadership through
                <br />
                participation.
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <p className="text-base leading-relaxed text-black/55">
                  I believe technical communities become stronger when
                  leadership remains connected to the actual learning process.
                  That means teaching, building, organizing and solving
                  problems alongside the team.
                </p>

                <p className="text-base leading-relaxed text-black/55">
                  My goal is to create environments where beginners feel
                  comfortable starting and experienced learners have space to
                  experiment, collaborate and share knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED INITIATIVES
      ====================================================== */}

      <section className="border-t border-black/10 px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">
                Selected Initiatives
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                Learning by
                <br />
                doing.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-black/50">
              Workshops and events designed around practical tools, security
              thinking, investigation and peer-led technical learning.
            </p>
          </div>

          {/* INITIATIVE CARDS */}

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item, index) => {
              const cardStyle =
                index % 3 === 0
                  ? "bg-[#4f7cff] text-white"
                  : index % 3 === 1
                    ? "bg-[#ffcf3f] text-black"
                    : "bg-[#d8e7d2] text-black";

              return (
                <article
                  key={item.title}
                  className={`flex min-h-[280px] flex-col justify-between rounded-[30px] p-6 transition duration-500 hover:-translate-y-2 ${cardStyle}`}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-[10px] uppercase tracking-[0.25em] opacity-50">
                      {item.meta}
                    </p>

                    <span className="text-xs opacity-40">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed opacity-60">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL PHILOSOPHY CTA
      ====================================================== */}

      <section className="bg-[#4f7cff] px-5 py-16 text-white sm:px-6 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/55">
            Leadership Philosophy
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Share what you learn.
            <br />
            Build what you wish existed.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-white/65">
            Leadership, for me, is about creating opportunities for people to
            learn, experiment and eventually teach others.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm text-black transition duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}