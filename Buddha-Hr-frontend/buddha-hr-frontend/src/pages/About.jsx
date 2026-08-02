import Container from "../components/common/Container";
import { Users, Target, Award } from "lucide-react";

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-violet-900 py-28 text-white">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <Container>
          <div className="relative text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100 ring-1 ring-white/20">
              About Us
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Buddha Human Resource Pvt Ltd.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-indigo-100">
              We connect talented professionals with trusted organizations,
              helping businesses grow while supporting individuals in building
              successful careers across Nepal.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-indigo-200 to-violet-200 opacity-60 blur-xl" />
              <img
                src="/hr.png"
                alt="Office"
                className="rounded-2xl shadow-xl shadow-indigo-100 ring-1 ring-slate-200/60"
              />
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Our Story
              </span>

              <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                Who We Are
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Buddha Human Resource Pvt. Ltd. is committed to connecting
                talented job seekers with reputable employers. We believe that
                the right people can transform businesses, and the right
                opportunity can transform lives.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our experienced HR professionals provide recruitment, staffing,
                and human resource solutions that benefit both employers and
                candidates.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Vision Values */}

      <section className="bg-gradient-to-b from-slate-50 to-indigo-50/40 py-20">
        <Container>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What Drives Us
            </h2>
            <p className="mt-3 text-slate-500">
              The principles behind everything we do.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-2xl border border-slate-200/70 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-200 transition-transform duration-300 group-hover:scale-105">
                <Target className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Mission</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Deliver reliable HR and recruitment services while creating
                opportunities for job seekers.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200/70 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-200 transition-transform duration-300 group-hover:scale-105">
                <Award className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Vision</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Become one of Nepal's most trusted human resource companies.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200/70 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-200 transition-transform duration-300 group-hover:scale-105">
                <Users className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Values</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Integrity, professionalism, transparency, and commitment to
                excellence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-violet-900 py-20 text-white">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <Container>
          <div className="relative grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="mt-3 text-indigo-100">Successful Placements</p>
            </div>

            <div className="sm:border-l sm:border-white/15">
              <h2 className="text-5xl font-bold">100+</h2>
              <p className="mt-3 text-indigo-100">Partner Companies</p>
            </div>

            <div className="md:border-l md:border-white/15">
              <h2 className="text-5xl font-bold">5+</h2>
              <p className="mt-3 text-indigo-100">Years Experience</p>
            </div>

            <div className="sm:border-l sm:border-white/15">
              <h2 className="text-5xl font-bold">98%</h2>
              <p className="mt-3 text-indigo-100">Client Satisfaction</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
