import { BadgeCheck, Globe2, BriefcaseBusiness, Clock3 } from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <BadgeCheck className="text-blue-900" size={32} />,
      title: "Government Authorized",
      description: "Licensed and committed to ethical overseas recruitment.",
    },
    {
      icon: <Globe2 className="text-blue-900" size={32} />,
      title: "Global Opportunities",
      description:
        "Connecting Nepalese talent with trusted employers worldwide.",
    },
    {
      icon: <BriefcaseBusiness className="text-blue-900" size={32} />,
      title: "Professional Guidance",
      description: "From documentation to placement, we support every step.",
    },
    {
      icon: <Clock3 className="text-blue-900" size={32} />,
      title: "Fast Recruitment",
      description: "Efficient hiring process with timely communication.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="Your Success is Our Priority"
          description="We focus on building trust between candidates and employers through reliable recruitment services."
        />

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-xl bg-white p-6 shadow-sm"
              >
                <div>{item.icon}</div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-blue-900 p-10 text-white">
            <h2 className="text-4xl font-bold">
              Building Careers, Building Futures
            </h2>

            <p className="mt-6 leading-8 text-blue-100">
              Our mission is to create opportunities for skilled professionals
              while helping international employers find qualified and reliable
              talent.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold">5000+</h3>
                <p className="mt-2 text-blue-200">Candidates Placed</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="mt-2 text-blue-200">Skilled Professionals</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">100+</h3>
                <p className="mt-2 text-blue-200">Partner Companies</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">5+</h3>
                <p className="mt-2 text-blue-200">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
