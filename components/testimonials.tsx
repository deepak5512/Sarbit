import { Testimonials } from "@/components/ui/testimonials";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The sensitivity of Sarbit's biosensors is remarkable. Their technology is paving the way for truly early disease detection, which is a game-changer for patient outcomes.",
    name: "Dr. Alice Johnson",
    username: "@dralicejohnson",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Integrating Sarbit's nanosensors into our food safety protocols has been seamless. The accuracy in detecting adulterants is beyond what we've seen before.",
    name: "David Smith",
    username: "@davidsmith_foodsafe",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/kaDy9hV.jpeg",
    text: "Sarbit's expertise in SERS substrates and micropatterning is top-notch. Their willingness to customize solutions for our research has been invaluable.",
    name: "Prof. Emma Brown",
    username: "@prof_emmabrown",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/cRwFxtE.png",
    text: "The precision of Sarbit's thin film coatings and their wafer dicing services are exceptional. Their fabrication work is highly reliable.",
    name: "James Wilson",
    username: "@jameswilson_tech",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/TQIqsob.png",
    text: "Sarbit Innovations is at the forefront of sensor technology. Their mission to improve health and food safety is backed by deep technical expertise.",
    name: "Sophia Lee",
    username: "@sophialee_ventures",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/3ROmJ0S.png",
    text: "The potential of Sarbit's nanosensor technology in diagnostics is immense. This is the deep tech innovation that will redefine healthcare.",
    name: "Dr. Michael Davis",
    username: "@michaeldavis_md",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/6fKCuVC.png",
    text: "We rely on Sarbit's sensors to ensure the integrity of our food supply chain. Their tech provides the reliable, real-time data we need.",
    name: "Emily Chen",
    username: "@emilychen_qa",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/Jjqe7St.png",
    text: "The enhanced detection sensitivity from their SERS substrates has significantly advanced our research. A brilliant product from a brilliant team.",
    name: "Dr. Robert Lee",
    username: "@robertlee_research",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/bG88vHI.png",
    text: "Working with Sarbit on customized micropatterning was a smooth process. They delivered exactly to our specifications and on schedule.",
    name: "Sarah Taylor",
    username: "@sarahtaylor_eng",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/tjmS77j.png",
    text: "Sarbit is a prime example of impactful innovation from the IIT Jodhpur & AIIMS Jodhpur collaboration. Ones to watch in deep-tech.",
    name: "Kevin White",
    username: "@kevinwhite_invest",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/yTsomza.png",
    text: "Their wire bonding and wafer dicing services are precise and reliable. A key partner for our semiconductor manufacturing needs.",
    name: "Rachel Patel",
    username: "@rachelpatel_semi",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/pnsLqpq.png",
    text: "The dual focus on early disease diagnosis and food safety shows a deep understanding of public health. Sarbit's technology is critical.",
    name: "Brian Kim",
    username: "@briankim_ph",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
];

export function TestimonialsDemo() {
  return (
    <div className="container mx-auto max-w-5xl py-10">
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
