export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-black/10 px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/40">
              About Me
            </p>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-black/50">
              Cybersecurity student, builder and community leader focused on
              practical security, digital forensics and hands-on learning.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-5xl leading-[1.02] tracking-[-0.04em] md:text-7xl">
              I learn security
              <br />
              by building,
              <br />
              investigating &
              <br />
              sharing.
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="text-base leading-relaxed text-black/55">
                I&apos;m pursuing Computer Science & Engineering with a focus
                on Cyber Security. My interests span digital forensics, OSINT,
                network security and building practical security tools.
              </p>

              <p className="text-base leading-relaxed text-black/55">
                Alongside technical work, I lead CyberZee, a student
                cybersecurity community where I help create workshops, CTF
                experiences and peer-led learning opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex min-h-[220px] flex-col justify-between rounded-[30px] bg-[#111] p-6 text-white">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Focus
            </p>
            <p className="font-serif text-3xl">
              Digital
              <br />
              Forensics
            </p>
          </div>

          <div className="flex min-h-[220px] flex-col justify-between rounded-[30px] bg-[#4f7cff] p-6 text-white">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Community
            </p>
            <div>
              <p className="font-serif text-3xl">CyberZee</p>
              <p className="mt-2 text-sm text-white/60">Lead · 2025–Present</p>
            </div>
          </div>

          <div className="flex min-h-[220px] flex-col justify-between rounded-[30px] bg-[#ffcf3f] p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              Exploring
            </p>
            <p className="font-serif text-3xl">
              OSINT &
              <br />
              Network
              <br />
              Security
            </p>
          </div>

          <div className="flex min-h-[220px] flex-col justify-between rounded-[30px] bg-[#ff8fa3] p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              Approach
            </p>
            <p className="font-serif text-3xl">
              Learn.
              <br />
              Build.
              <br />
              Share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
