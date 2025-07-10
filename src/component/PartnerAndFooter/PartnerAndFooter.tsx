import React from "react";
import podeanFooterLogo from "../../assets/images/podean_footer.png"; // Update with actual logo path
import {} from "@radix-ui/react-icons";
import { Linkedin, Mail } from "lucide-react";

const PartnerAndFooterSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* Full-width white background section */}
      <div className="rounded-xl bg-white text-black w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Partner with an agency who <br className="hidden sm:block" /> gets
              social <span className="font-extrabold">AND</span> commerce.
            </h2>
            <p className="text-gray-700 max-w-md">
              Chosen by Leading Brands
              <br />
              Top brands who want to launch and scale their social commerce
              presence trust our expertise. We act as an extension of your team,
              going above and beyond to support client partners.
            </p>

            <div>
              <h3 className="font-bold mb-2">Experts in Every Area</h3>
              <p className="text-gray-700 max-w-md">
                Our team is composed of social, livestream, commerce, and
                affiliate experts to build and execute the most effective
                strategies for your brand.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Global-Minded</h3>
              <p className="text-gray-700 max-w-md">
                Our team operates across 5 continents, with the unique knowledge
                needed to scale in new markets.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">What can we help you with?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Social Commerce Strategy</li>
                <li>Launching Social Commerce Shop</li>
                <li>Shop management</li>
                <li>Social content</li>
                <li>End-to-End Social Commerce Services</li>
                <li>Livestreams</li>
                <li>Something else</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 space-y-4 mt-auto mb-auto">
            <form className="space-y-4">
              <input
                className="w-full border-b border-gray-400 py-2 px-1 focus:outline-none"
                placeholder="Name"
                type="text"
              />
              <input
                className="w-full border-b border-gray-400 py-2 px-1 focus:outline-none"
                placeholder="Work Email"
                type="email"
              />
              <input
                className="w-full border-b border-gray-400 py-2 px-1 focus:outline-none"
                placeholder="Website URL"
                type="text"
              />
              <select className="w-full border-b border-gray-400 py-2 px-1 bg-transparent focus:outline-none">
                <option>What is your role of interest?</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Other</option>
              </select>
              <select className="w-full border-b border-gray-400 py-2 px-1 bg-transparent focus:outline-none">
                <option>How big is your marketing team?</option>
                <option>1-5</option>
                <option>6-20</option>
                <option>20+</option>
              </select>
              <input
                className="w-full border-b border-gray-400 py-2 px-1 focus:outline-none"
                placeholder="How did you hear about us?"
                type="text"
              />

              <button
                type="submit"
                className="w-full bg-[#FC4A27] text-white rounded-full py-3 font-semibold mt-4 hover:bg-[#e63e1e] transition"
              >
                START HIRING
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Connected Orange Footer */}
      <footer className="bg-[#FC4A27] text-white w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mt-auto sm:mt-[200px] lg:mt-[300px] xl:mt-[150px] max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left side */}
          <div className="flex-1 space-y-4">
            <img
              src={podeanFooterLogo}
              alt="logo"
              className="w-[400px] h-auto"
            />
            <p className="text-sm max-w-sm">
              Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-4 space-x-4 text-sm">
              <a href="#" className="underline">
                Contact Us
              </a>
              <a href="#" className="underline">
                We are Hiring
              </a>
            </div>
          </div>

          {/* Right side - Newsletter */}
          <div className="flex-1 space-y-4">
            <p className="font-semibold">
              Enter your Email to subscribe to our Newsletter
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                className="flex-1 px-4 py-2 rounded-full text-black focus:outline-none"
                type="email"
                placeholder="Your Email"
              />
              <button
                type="submit"
                className="bg-white text-[#FC4A27] rounded-full px-6 py-2 font-semibold hover:bg-gray-100 transition"
              >
                SUBSCRIBE
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
              <a href="#" className="hover:opacity-80">
                <Mail />
              </a>
              <a href="#" className="hover:opacity-80">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-30 mt-8 pt-4 text-center text-sm flex flex-col sm:flex-row justify-between gap-2">
          <span>TERMS OF SERVICE</span>
          <span>PRIVACY POLICY</span>
        </div>
      </footer>
    </section>
  );
};

export default PartnerAndFooterSection;
