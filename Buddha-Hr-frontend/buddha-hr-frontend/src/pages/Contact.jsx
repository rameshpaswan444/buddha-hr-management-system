import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";
import Container from "../components/common/Container";
import { sendContactMessage } from "../services/contactService";

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      setSuccessMessage("");

      setErrorMessage("");

      await sendContactMessage(form);

      setSuccessMessage("Thank you! Your message has been sent successfully.");

      setForm({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error.response?.data?.message || "Unable to send your message.",
      );
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Office Address",
      lines: ["Nawalparasi, Nepal"],
    },
    {
      icon: Phone,
      title: "Phone",
      lines: ["+977-9806985945"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["buddhahumanresource@gmail.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      lines: ["Sunday – Friday", "9:00 AM – 6:00 PM"],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-indigo-50/40 py-20">
      <Container>
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            Get in Touch
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Have questions or need assistance? Our team is here to help.
          </p>
        </div>

        {/* Content */}

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Side */}

          <div className="space-y-4">
            {contactDetails.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md hover:shadow-indigo-100"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-200">
                  <item.icon className="text-white" size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  {item.lines.map((line) => (
                    <p key={line} className="text-slate-500">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder / accent panel */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-md shadow-indigo-200">
              <h3 className="text-lg font-semibold">Prefer to visit?</h3>
              <p className="mt-1 text-sm text-indigo-100">
                Drop by our Nawalparasi office during working hours — we're
                always happy to talk in person.
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-xl shadow-indigo-100">
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 to-violet-600" />

            <div className="p-8">
              <h2 className="mb-1 text-2xl font-bold text-slate-900">
                Send us a Message
              </h2>

              <p className="mb-6 text-sm text-slate-500">
                We usually respond within one business day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-md"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                {successMessage && (
                  <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-center text-sm font-medium text-green-600">
                    {successMessage}
                  </p>
                )}

                {errorMessage && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-center text-sm font-medium text-red-600">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
