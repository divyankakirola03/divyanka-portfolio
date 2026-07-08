export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/10 px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.35em] text-black/40">
          Contact
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.04em] md:text-8xl">
              Have an idea?
              <br />
              Let&apos;s talk.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-black/50 md:text-lg">
              I&apos;m always open to conversations around cybersecurity,
              digital forensics, technology, projects and interesting
              collaborations.
            </p>
          </div>

          <div className="space-y-3">
            {/* EMAIL */}

            <a
              href="mailto:divyankakirola03@gmail.com"
              className="group flex items-center justify-between rounded-[24px] bg-black px-6 py-5 text-white transition duration-300 hover:scale-[1.02]"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Email
                </p>

                <p className="mt-2 text-sm md:text-base">
                  divyankakirola03@gmail.com
                </p>
              </div>

              <span className="text-2xl transition duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/divyanka-kirola-b70236293/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[24px] bg-[#4f7cff] px-6 py-5 text-white transition duration-300 hover:scale-[1.02]"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Professional Network
                </p>

                <p className="mt-2 font-serif text-2xl">
                  LinkedIn
                </p>
              </div>

              <span className="text-2xl transition duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/divyankakirola03"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[24px] bg-[#ffcf3f] px-6 py-5 transition duration-300 hover:scale-[1.02]"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                  Code & Projects
                </p>

                <p className="mt-2 font-serif text-2xl">
                  GitHub
                </p>
              </div>

              <span className="text-2xl transition duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* FOOTER */}

        <footer className="mt-24 flex flex-col gap-4 border-t border-black/10 pt-6 text-xs text-black/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Divyanka Kirola</p>

          <p>Designed & built with curiosity.</p>
        </footer>
      </div>
    </section>
  );
}