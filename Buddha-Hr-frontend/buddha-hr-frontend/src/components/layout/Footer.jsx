

import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Recruitment",
    "HR Consulting",
    "Staffing",
    "Payroll",
    "Training",
  ];

  const socials = [
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
    { icon: FaYoutube, href: "https://youtube.com" },
    { icon: FaXTwitter, href: "https://x.com" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-violet-600" />

      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/20">
                <img
                  src="/logo.png"
                  alt="Buddha HR"
                  className="h-7 w-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                Buddha Human Resource
              </h3>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Your trusted HR and recruitment partner, helping businesses find
              exceptional talent and supporting professionals in building
              successful careers across Nepal.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 transition-colors hover:text-indigo-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400 transition-colors hover:text-indigo-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Contact</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                <span className="text-slate-400">Nawalparasi, Nepal</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                <span className="text-slate-400">+977-9806985945</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                <span className="text-slate-400">	buddhahumanresource@gmail.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                Follow Us
              </h3>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-violet-600 hover:text-white"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Buddha Human Resource Pvt. Ltd. All
          Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
