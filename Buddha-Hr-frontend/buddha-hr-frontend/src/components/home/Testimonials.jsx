import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "../common/TestimonialCard";

import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Sharma",
      country: "Nepal",
      image: person1,
      message:
        "Buddha Human Resource made my overseas employment process smooth and transparent.",
    },
    {
      name: "Sita Rai",
      country: "Nepal",
      image: person2,
      message:
        "The staff guided me through training and preparation professionally.",
    },
    {
      name: "Bikash Gurung",
      country: "Nepal",
      image: person3,
      message:
        "Highly recommended for anyone looking for trustworthy home employment.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="Success Stories"
          description="Hear from candidates who successfully built their careers through Buddha Human Resource."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
