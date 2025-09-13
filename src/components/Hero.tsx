import React from "react";
import { ArrowDownToLine, GitPullRequest, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light theme-text-secondary">
                {t("hero_greeting")}
              </h3>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold flex flex-wrap gap-3 justify-center lg:justify-start">
                {t("hero_im")}{" "}
                <span className="text-[var(--color-primary-theme)]">{`Khuong`}</span>
              </h1>
              <div className="text-[var(--color-secondary-theme)] text-xl sm:text-2xl lg:text-3xl min-h-[3rem] flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    t("hero_roles.intern"),
                    1000,
                    t("hero_roles.frontend"),
                    1000,
                    t("hero_roles.fullstack"),
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-8">
              <a href="Lu-Tien-Khuong-intern-cv.pdf" download>
                <button className="bg-[var(--color-primary-theme)] text-[var(--color-text)] px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {t("hero_resume")}
                  <ArrowDownToLine className="w-5 h-5" />
                </button>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Naterik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitPullRequest className="w-7 h-7 theme-text-secondary hover:text-[var(--color-primary-theme)] transition-colors" />
                </a>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:khuong190703@gmail.com")
                  }
                >
                  <Mail className="w-7 h-7 theme-text-secondary hover:text-[var(--color-primary-theme)] transition-colors" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="theme-card rounded-lg border theme-border shadow-md hover:shadow-xl transition-all duration-300 ring-1 ring-[var(--color-border)] hover:ring-[var(--color-primary-theme)] max-w-lg mx-auto lg:max-w-none">
              <div className="rounded-xl flex gap-3 items-center border-b theme-border p-3 bg-[var(--color-surface)]">
                <div className="rounded-full bg-red-500 w-3 h-3"></div>
                <div className="rounded-full bg-yellow-500 w-3 h-3"></div>
                <div className="rounded-full bg-green-500 w-3 h-3"></div>
              </div>

              <div className="p-4 text-sm lg:text-base overflow-x-auto">
                <code className="theme-text">
                  <div>
                    <span className="text-blue-600 dark:text-blue-400 me-2">
                      const
                    </span>
                    <span className="me-2">developer</span>
                    <span className="text-pink-500 dark:text-pink-400 me-2">
                      =
                    </span>
                    <span>{`{`}</span>
                  </div>
                  <div>
                    <span className="ms-4 me-2">name:</span>
                    <span className="text-yellow-500 dark:text-yellow-400">
                      'Lu Tien Khuong',
                    </span>
                  </div>
                  <div className="ms-4 me-2 text-pink-400 dark:text-pink-400">
                    <span className="theme-text">skills:</span>
                    <span>['</span>
                    <span>ReactJS</span>
                    <span>','</span>
                    <span>React Native</span>
                    <span>', '</span>
                    <span>Redux</span>
                    <span>','</span>
                    <span>NoSQL</span>
                    <span>','</span>
                    <span>SQL</span>
                    <span>','</span>
                    <span>Docker</span>
                    <span>'],</span>
                  </div>
                  <div>
                    <span className="ms-4 me-2">hardWorker:</span>
                    <span className="text-red-500 dark:text-red-400">true</span>
                    <span>,</span>
                  </div>
                  <div>
                    <span className="ms-4 me-2">quickLearner:</span>
                    <span className="text-red-500 dark:text-red-400">true</span>
                    <span>,</span>
                  </div>
                  <div>
                    <span className="ms-4 me-2">problemSolver:</span>
                    <span className="text-red-500 dark:text-red-400">true</span>
                    <span>,</span>
                  </div>
                  <div>
                    <span className="ms-4 me-2 text-green-600 dark:text-green-400">
                      hireable:
                    </span>
                    <span className="text-red-500 dark:text-red-400">
                      function
                    </span>
                    <span>() {`{`}</span>
                  </div>
                  <div>
                    <span className="ms-5 me-2 text-red-500 dark:text-red-400">
                      return
                    </span>
                    <span>(</span>
                  </div>
                  <div>
                    <span className="ms-5 ps-3 text-blue-400 dark:text-blue-400">
                      this.
                    </span>
                    <span className="me-2">hardWorker</span>
                    <span className="text-blue-400 dark:text-blue-400">&&</span>
                  </div>
                  <div>
                    <span className="ms-5 ps-3 text-blue-400 dark:text-blue-400">
                      this.
                    </span>
                    <span className="me-2">problemSolver</span>
                    <span className="text-blue-400 dark:text-blue-400">&&</span>
                  </div>
                  <div>
                    <span className="ms-5 ps-3 text-blue-400 dark:text-blue-400">
                      this.
                    </span>
                    <span className="me-2">quickLearner</span>
                  </div>
                  <div>
                    <span className="ms-5 me-2">);</span>
                  </div>
                  <div>
                    <span className="ms-4">{`}`};</span>
                  </div>
                  <div>
                    <span>{`}`};</span>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
