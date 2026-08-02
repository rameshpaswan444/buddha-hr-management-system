import Container from "../components/common/Container";
import ServiceCard from "../services/ServiceCard";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import {
  Briefcase,
  Users,
  GraduationCap,
  ClipboardList,
  Wallet,
  Search,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: Search,
      title: "Recruitment",
      description:
        "Helping companies find skilled and qualified employees across different industries.",
    },
    {
      icon: Users,
      title: "HR Consulting",
      description:
        "Professional HR guidance, policy development, and workforce planning.",
    },
    {
      icon: Wallet,
      title: "Payroll Management",
      description:
        "Reliable payroll processing and employee salary management services.",
    },
    {
      icon: Briefcase,
      title: "Staffing Solutions",
      description:
        "Temporary, permanent, and contract staffing based on business requirements.",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description:
        "Employee training programs to improve skills and workplace productivity.",
    },
    {
      icon: ClipboardList,
      title: "Career Guidance",
      description:
        "Helping job seekers prepare resumes, interviews, and career planning.",
    },
  ];

  return (
    <>
      {/* Hero */}

      <section className="bg-blue-900 py-24 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl font-bold">Our Services</h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
              We provide comprehensive HR and recruitment solutions that support
              both employers and job seekers throughout Nepal.
            </p>
          </div>
        </Container>
      </section>

      {/* Services */}

      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">What We Offer</h2>

            <p className="mt-4 text-gray-600">
              Professional HR solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="py-20">
        <Container>
          <div className="rounded-3xl bg-blue-900 px-10 py-16 text-center text-white">
            <h2 className="text-4xl font-bold">Need HR Support?</h2>

            <p className="mx-auto mt-6 max-w-2xl text-blue-100">
              Let Buddha Human Resource Private Ltd. help your organization
              recruit, manage, and develop the right people.
            </p>

            <Button
              className="mt-8 flex gap-4 hover:bg-green-100 hover:text-green-500"
              to="/jobs"
            >
              Explore Jobs
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Services;
