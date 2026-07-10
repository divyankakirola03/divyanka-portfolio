import Image from "next/image";
import Link from "next/link";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#111]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f0]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 lg:px-16">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight md:text-2xl"
          >
            Divyanka Kirola
          </Link>

          <Link
            href="/"
            className="rounded-full border border-black/20 px-5 py-2.5 text-sm transition hover:bg-black hover:text-white"
          >
            ← Back Home
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40">
            Leadership & Community
          </p>

          <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-9xl">
            Building communities
            <br />
            through security.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-black/55 md:text-xl">
            My leadership journey is centered around practical cybersecurity
            education, community building, technical workshops and creating
            opportunities for students to learn by doing.
          </p>
        </div>
      </section>

      {/* EXPERIENCE 01 */}
      <section className="border-t border-black/10 px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                Experience 01
              </p>

              <p className="mt-4 text-sm text-black/45">
                2025 — Present
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-black/40">
                CyberZee
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] md:text-7xl">
                Lead
              </h2>

              <div className="mt-10 max-w-3xl space-y-7 text-lg leading-relaxed text-black/55 md:text-xl">
                <p>
                  I lead CyberZee, a student-driven cybersecurity community
                  focused on making technical security education practical,
                  collaborative and accessible.
                </p>

                <p>
                  My work includes planning workshops, coordinating teams,
                  developing CTF experiences and helping students explore
                  cybersecurity through hands-on technical sessions.
                </p>
              </div>

              {/* SKILLS */}
              <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  "Workshop Planning",
                  "CTF Events",
                  "Team Leadership",
                  "Community Building",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[90px] items-center rounded-full border border-black/15 px-5 text-sm text-black/60 md:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* CYBERZEE GALLERY */}
              <div className="mt-16 grid gap-4 md:grid-cols-2">
                {/* NEW PHOTO */}
                <div className="relative min-h-[500px] overflow-hidden rounded-[30px] md:min-h-[620px]">
                  <Image
                    src="/leadership/div7.jpeg"
                    alt="Leading a CyberZee cybersecurity session"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* WORKSHOP PHOTO */}
                <div className="relative min-h-[500px] overflow-hidden rounded-[30px] md:min-h-[620px]">
                  <Image
                    src="/leadership/div4.png"
                    alt="Supporting students during a cybersecurity workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* MORE CYBERZEE PHOTOS */}
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="relative min-h-[420px] overflow-hidden rounded-[30px] md:min-h-[540px]">
                  <Image
                    src="/leadership/div5.png"
                    alt="CyberZee technical workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="relative min-h-[420px] overflow-hidden rounded-[30px] md:min-h-[540px]">
                  <Image
                    src="/leadership/div6.png"
                    alt="CyberZee community learning session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE 02 */}
      <section className="border-t border-black/10 bg-[#111] px-5 py-20 text-white md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Experience 02
              </p>

              <p className="mt-4 text-sm text-white/40">
                University Events
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Anchoring & Public Speaking
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] md:text-7xl">
                Speaking,
                <br />
                hosting & connecting.
              </h2>

              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/55 md:text-xl">
                Alongside technical leadership, I have contributed to
                university events through anchoring and public speaking. These
                experiences have strengthened my communication, confidence and
                ability to connect with diverse audiences.
              </p>

              {/* PODIUM PHOTO ONLY */}
              <div className="relative mt-14 min-h-[600px] overflow-hidden rounded-[32px] bg-white/5 md:min-h-[850px]">
                <Image
                  src="/leadership/div2.jpeg"
                  alt="Anchoring a university event"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 68vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE 03 */}
      <section className="border-t border-black/10 px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                Experience 03
              </p>

              <p className="mt-4 text-sm text-black/45">
                Community Outreach
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-black/40">
                CRAC Learning
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] md:text-7xl">
                Campus
                <br />
                Ambassador
              </h2>

              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-black/55 md:text-xl">
                As a Campus Ambassador with CRAC Learning, I contributed to
                cybersecurity awareness, student engagement and connecting
                learners with practical security opportunities.
              </p>

              {/* RESPONSIBILITIES */}
              <div className="mt-12">
                {[
                  "Campus outreach and student engagement",
                  "Cybersecurity awareness initiatives",
                  "Workshop and collaboration support",
                  "Connecting learners with practical security opportunities",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[45px_1fr] gap-4 border-b border-black/15 py-6"
                  >
                    <span className="text-sm text-black/30">
                      0{index + 1}
                    </span>

                    <p className="text-lg leading-relaxed text-black/60 md:text-xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* ONLY CRAC IMAGE */}
              <div className="relative mt-14 min-h-[520px] overflow-hidden rounded-[32px] bg-white md:min-h-[720px]">
                <Image
                  src="/leadership/photo_div_port.png"
                  alt="CRAC Learning Campus Ambassador"
                  fill
                  className="object-contain p-2 md:p-6"
                  sizes="(max-width: 1024px) 100vw, 68vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-black/10 px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.35em] text-black/40">
              What I believe
            </p>

            <h2 className="mt-8 font-serif text-5xl leading-[1] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Share what you learn.
              <br />
              Build what you believe in.
            </h2>

            <Link
              href="/#contact"
              className="mt-12 inline-flex rounded-full bg-black px-8 py-4 text-white transition hover:scale-105"
            >
              Let&apos;s Talk ↗
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-5 py-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Divyanka Kirola</p>

          <Link href="/" className="transition hover:text-black">
            Back to Portfolio ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}