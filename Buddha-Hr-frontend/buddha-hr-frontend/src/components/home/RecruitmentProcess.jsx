import {
  FileSearch,
  UserCheck,
  FileText,
  BadgeCheck,
  GraduationCap,
  Plane,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function RecruitmentProcess() {
  const steps = [
    {
      icon: <FileSearch size={34} />,
      title: "Apply",
      description: "Browse available jobs and submit your application.",
    },
    {
      icon: <UserCheck size={34} />,
      title: "Interview",
      description: "Attend interviews and skill assessments.",
    },
    {
      icon: <FileText size={34} />,
      title: "Documentation",
      description: "Complete all required documents and verification.",
    },

    {
      icon: <GraduationCap size={34} />,
      title: "Practical Training",
      description: "hands-on training sessions to prepare for your role.",
    },
    {
      icon: <GraduationCap size={34} />,
      title: "Placement",
      description: "Begin your career with confidence.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          subtitle="Recruitment Process"
          title="Simple & Transparent Hiring Journey"
          description="Our streamlined recruitment process ensures every candidate receives guidance from application to placement."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                {index + 1}
              </div>

              <div className="mt-6 mb-6 text-blue-900">{step.icon}</div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="leading-7 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default RecruitmentProcess;
