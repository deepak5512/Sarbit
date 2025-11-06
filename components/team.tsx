import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "Sambit Kumar Keshil",
    role: "CEO",
    avatar: "/team/sambit.jpg",
    link: "https://www.linkedin.com/in/sambit-kumar-keshi-5898a5155",
  },
  {
    name: "Sarvar Singh",
    role: "CTO",
    avatar: "/team/sarvar.jpg",
    link: "https://www.linkedin.com/in/sarvarsingh/",
  },
  {
    name: "Dr. Ajay Agrawal",
    role: "Director",
    avatar: "/team/ajay.jpg",
    link: "https://www.linkedin.com/in/ajay-agarwal-72883431/",
  },
];

const advisors = [
  {
    name: "Dr. Nikhil Kothari",
    role: "Dy. Medical Superintendent",
    avatar: "/team/nikhil.jpg",
    link: "https://www.linkedin.com/in/sambit-kumar-keshi-5898a5155/",
  },
  {
    name: "Dr. Ajay Agrawal",
    role: "Director",
    avatar: "/team/ajay.jpg",
    link: "https://www.linkedin.com/in/ajay-agarwal-72883431/",
  },
  {
    name: "Dr. Vibhor Tak",
    role: "Additional Professor",
    avatar: "/team/vibhor.jpg",
    link: "https://www.linkedin.com/in/vibhor-tak-20555039/",
  },
];

export default function TeamSection() {
  return (
    <section className="pt-24 md:pt-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl gap-4 px-6 sm:grid sm:grid-cols-3">
        <div className="sm:col-span-1">
          <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>
        </div>
        <div className="mt-6 sm:col-span-2 sm:mt-0">
          <p>
            At Sarbit Innovations, we develop advanced sensors for early disease
            detection and food safety monitoring. Our mission is to deliver
            innovative, reliable tools that empower healthier lives and ensure a
            safer food supply.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-5xl border-t px-6 md:mt-24">
        <span className="text-caption absolute -top-3 left-6 bg-white px-3 dark:bg-black">
          Founders
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24"></div>
        <div className="">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {founders.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <Image
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 group-hover:h-90 group-hover:rounded-xl hover:grayscale-0"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pt-4 sm:pb-0">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:underline"
                    >
                      {" "}
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-5xl border-t px-6 md:mt-24">
        <span className="text-caption absolute -top-3 left-6 bg-white px-3 dark:bg-black">
          Scientific Advisors
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24"></div>
        <div className="">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <Image
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 group-hover:h-90 group-hover:rounded-xl hover:grayscale-0"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pt-4 sm:pb-0">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:underline"
                    >
                      {" "}
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
