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
                className="flex"
              >
                <Image
                  src="/collaborators/aiims.png"
                  alt="AIIMS Logo"
                  height={40}
                  width={60}
                  className="mx-auto dark:invert"
                  priority
                />
              </a>

              {/* BIRAC */}
              <a
                href="https://www.birac.nic.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <Image
                  src="/collaborators/birac.png"
                  alt="BIRAC Logo"
                  height={36}
                  width={80}
                  className="mx-auto dark:invert"
                  priority
                />
              </a>

              {/* IIT Jodhpur */}
              <a
                href="https://www.iitj.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <Image
                  src="/collaborators/iitj.png"
                  alt="IIT Jodhpur Logo"
                  height={36}
                  width={80}
                  className="mx-auto dark:invert"
                  priority
                />
              </a>

              {/* JCKIF */}
              <a
                href="https://jckif.iitj.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <Image
                  src="/collaborators/jckif.png"
                  alt="JCKIF Logo"
                  height={40}
                  width={80}
                  className="mx-auto dark:invert"
                  priority
                />
              </a>

              {/* MedTech */}
              <a
                href="https://medtech.iitj.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <Image
                  src="/collaborators/medtech.png"
                  alt="MedTech Logo"
                  height={40}
                  width={100}
                  className="mx-auto dark:invert"
                  priority
                />
              </a>

              {/* SINE */}
              <a
                href="https://sineiitb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <Image
                  src="/collaborators/sine.png"
                  alt="Sine Logo"
                  height={36}
                  width={80}
                  className="mx-auto dark:invert"
                  priority
                />
              </a>

              {/* TISC */}
              <a
                href="https://tisc.iitj.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <Image
                  src="/collaborators/tisc.png"
                  alt="TISC Logo"
                  height={50}
                  width={100}
                  className="mx-auto dark:invert"
                  priority
                />
              </a>
            </InfiniteSlider>

            {/* Blurs on both sides */}
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 right-0 h-full w-20"
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
