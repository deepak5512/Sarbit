import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <main className="relative flex size-full min-h-screen w-full items-center justify-center p-4">
      <div className="mx-auto max-w-5xl">
        <ContactCard
          title="Get in touch"
          description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "b22ee022@iitj.ac.in",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "+91 83069 62394",
            },
            {
              icon: MapPinIcon,
              label: "Address",
              value:
                "Sarbit Innovations Pvt. Ltd. TISC, IIT Jodhpur, Karwar, Jodhpur,Rajasthan, 342037",
              className: "col-span-2",
            },
          ]}
        >
          <form action="" className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input type="phone" id="phone" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="address">Address</Label>
              <Input type="text" id="address" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required />
            </div>
            <Button className="w-full" type="button">
              Submit
            </Button>
          </form>
        </ContactCard>
      </div>
    </main>
  );
}
