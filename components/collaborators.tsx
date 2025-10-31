import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "AIIMS",
    src: "/collaborators/aiims.png",
    href: "https://www.aiims.edu/",
  },
  {
    name: "BIRAC",
    src: "/collaborators/birac.png",
    href: "https://www.birac.nic.in/",
  },
  {
    name: "IIT Jodhpur",
    src: "/collaborators/iitj.png",
    href: "https://www.iitj.ac.in/",
  },
  {
    name: "JCKIF",
    src: "/collaborators/jckif.png",
    href: "https://jckif.iitj.ac.in/",
  },
  {
    name: "MedTech",
    src: "/collaborators/medtech.png",
    href: "https://medtech.iitj.ac.in/",
  },
  {
    name: "SINE",
    src: "/collaborators/sine.png",
    href: "https://sine.iitj.ac.in/",
  },
];

const Collaborators = () => {
  return (
    <section className="pt-16 pb-16 md:pb-32">
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 sm:gap-x-16 sm:gap-y-14">
          {data.map((collaborator, index) => (
            <div key={index} className="flex">
              {collaborator.name === "MedTech" ? (
                <Link
                  href={collaborator.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={collaborator.src}
                    alt={`${collaborator.name} Logo`}
                    height={128}
                    width={128}
                    className="mx-auto h-16 w-fit dark:invert"
                    priority
                  />
                </Link>
              ) : (
                <Link
                  href={collaborator.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={collaborator.src}
                    alt={`${collaborator.name} Logo`}
                    height={128}
                    width={128}
                    className="mx-auto h-16 w-fit"
                    priority
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
