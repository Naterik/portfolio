import { Projector } from "lucide-react";
import { Projects } from "../data";
import Student from "../assets/STUDENT.json";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Student,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section id="project" className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center text-3xl lg:text-4xl font-bold mb-16 theme-text">
          {t("projects_title")}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:flex justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl ">
                  <Lottie {...defaultOptions} />
                </div>
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-6 lg:space-y-8">
            {Projects.map((project, index) => (
              <a
                key={index}
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="p-6 theme-card rounded-lg border theme-border shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] ring-1 ring-[var(--color-border)] hover:ring-[var(--color-primary-theme)]">
                  <p className="text-center text-sm text-[var(--color-primary-theme)] font-medium mb-3">
                    {t(project.time)}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-3 bg-[var(--color-surface)] rounded-lg group-hover:scale-110 transition-transform">
                      <Projector className="w-10 h-10 text-[var(--color-primary-theme)]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-bold theme-text uppercase group-hover:text-[var(--color-primary-theme)] transition-colors">
                        {t(project.name)}
                      </p>
                      <p className="theme-text-secondary font-medium mt-1 line-clamp-1">
                        {t(project.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
