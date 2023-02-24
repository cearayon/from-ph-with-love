import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <div className="bg-zinc-800 p-4">
      <div className="mb-4">
        <h2 className="text-xl text-white">Contact Us</h2>

        <span className="flex items-center gap-4 py-2">
          <PhoneIcon className=" h-8 w-8" />
          <h3 className="base text-white">(623) 980-9164</h3>
        </span>

        <span className="flex items-center gap-4">
          <EnvelopeIcon className="h-8 w-8" />
          <h3 className="text-base text-white">franciscoalthea@gmail.com</h3>
        </span>
      </div>

      <div>
        <h2 className="text-xl text-white">Follow Us</h2>

        <span className="flex gap-4 p-4">
          <SocialIcon url="https://www.instagram.com" />
          <SocialIcon url="https://www.facebook.com" />
          <SocialIcon url="https://discord.com/" />
          <SocialIcon url="https://twitter.com/" />
        </span>
      </div>
    </div>
  );
};
