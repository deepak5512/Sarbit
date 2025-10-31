import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

const Collaborators = () => {
  return (
    <section className="bg-background pt-16 pb-16 md:pt-32 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Powering with best collaborators</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={60} gap={100}>
              {/* AIIMS */}
              <a
                href="https://www.aiims.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/collaborators/aiims.png"
                    alt="AIIMS Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>

              {/* BIRAC */}
              <a
                href="https://www.birac.nic.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/collaborators/birac.png"
                    alt="BIRAC Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>

              {/* IIT Jodhpur */}
              <a
                href="https://www.iitj.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/collaborators/iitj.png"
                    alt="IIT Jodhpur Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>

              {/* JCKIF */}
              <a
                href="https://jckif.iitj.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/collaborators/jckif.png"
                    alt="JCKIF Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>

              {/* MedTech */}
              <a
                href="https://medtech.iitj.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/collaborators/medtech.png"
                    alt="MedTech Logo"
                    fill
                    className="object-contain dark:invert"
                    priority
                  />
                </div>
              </a>

              {/* SINE */}
              <a
                href="https://sineiitb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/collaborators/sine.png"
                    alt="Sine Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>

              {/* TISC */}
              <a
                href="https://tisc.iitj.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/collaborators/tisc.png"
                    alt="TISC Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>
            </InfiniteSlider>

            {/* Blurs on both sides */}
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-full w-10"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 right-0 h-full w-10"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
