import { FiPhone, FiMail, FiGithub } from "react-icons/fi";
import AboutPageCard from "../Components/AboutPageCard";
import { PiTelegramLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 mx-auto min-h-screen">
      <div className="flex absolute top-0 left-0 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-gradient-to-tl blur-3xl w-[55vw] h-[60vh] rounded-full origin-bottom-left -rotate-12 from-lime-900/70 via-indigo-900/70 to-blue-900/70 "></div>
      </div>
      <div className="max-w-2xl lg:max-w-7xl mx-auto">
        <div className="mt-12 grid items-start lg:grid-cols-2 gap-6 lg:gap-16">
          <AboutPageCard />
          <div className="divide-y  divide-neutral-800">
            {/* Telegram */}
            <div className="flex gap-x-7 py-6 cursor-pointer hover:bg-white/10 px-3">
              <PiTelegramLogo className="shrink-0 size-6 mt-1.5  text-neutral-200" />
              <div className="grow">
                <h3 className="font-semibold  text-neutral-200">Telegram</h3>
                <p className="mt-1 text-sm  text-neutral-500">
                  Reach out to us on Telegram for quick support.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium   focus:outline-none  text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
                  href="https://t.me/your_telegram"
                >
                  Join Telegram
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex gap-x-7 py-6 cursor-pointer hover:bg-white/10 px-3">
              <FiGithub className="shrink-0 size-6 mt-1.5  text-neutral-200" />
              <div className="grow">
                <h3 className="font-semibold  text-neutral-200">GitHub</h3>
                <p className="mt-1 text-sm  text-neutral-500">
                  Check out our open-source projects on GitHub.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium  hover: focus:outline-none focus: text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
                  href="https://github.com/your_github"
                >
                  Visit GitHub
                </a>
              </div>
            </div>

            {/* X (Twitter) */}
            <div className="flex gap-x-7 py-6 cursor-pointer hover:bg-white/10 px-3">
              <RiTwitterXFill className="shrink-0 size-6 mt-1.5  text-neutral-200" />
              <div className="grow">
                <h3 className="font-semibold  text-neutral-200">X (Twitter)</h3>
                <p className="mt-1 text-sm  text-neutral-500">
                  Follow us for updates and announcements.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium  hover: focus:outline-none focus: text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
                  href="https://twitter.com/your_twitter"
                >
                  Follow us on X
                </a>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex gap-x-7 py-6 cursor-pointer hover:bg-white/10 px-3">
              <FiPhone className="shrink-0 size-6 mt-1.5  text-neutral-200" />
              <div className="grow">
                <h3 className="font-semibold  text-neutral-200">Call Us</h3>
                <p className="mt-1 text-sm  text-neutral-500">
                  You can reach us by phone for direct inquiries.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium  hover: focus:outline-none focus: text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
                  href="tel:+1234567890"
                >
                  +123 456 7890
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-x-7 py-6 cursor-pointer hover:bg-white/10 px-3">
              <FiMail className="shrink-0 size-6 mt-1.5  text-neutral-200" />
              <div className="grow">
                <h3 className="font-semibold  text-neutral-200">Email Us</h3>
                <p className="mt-1 text-sm  text-neutral-500">
                  Feel free to send us an email for any inquiries.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium  hover: focus:outline-none focus: text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
                  href="mailto:example@yourdomain.com"
                >
                  example@yourdomain.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
