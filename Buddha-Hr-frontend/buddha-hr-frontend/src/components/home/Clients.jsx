import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ClientCard from "../common/ClientCard";

import sugarmill from "../../assets/images/sugarmill.jpg";
import siddibinayek from "../../assets/images/siddibinayak.jpg";
import sarbottam from "../../assets/images/sarbottam.jpg";
import laxmisteel from "../../assets/images/laxmisteel.jpg";
import kajariya from "../../assets/images/kajariya.jpg";
import palpacement from "../../assets/images/palpacement.jpg";

function Clients() {
  const clients = [
    { name: "Company One", logo: sugarmill },
    { name: "Company Two", logo: siddibinayek },
    { name: "Company Three", logo: sarbottam },
    { name: "Company Four", logo: laxmisteel },
    { name: "Company Five", logo: kajariya },
    { name: "Company Six", logo: palpacement },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          subtitle="Our Clients"
          title="Trusted by Leading Companies"
          description="We proudly partner with organizations across Nepal to help them recruit talented professionals."
        />

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <ClientCard
              className=" bg-white p-4 rounded-lg shadow-md"
              key={client.name}
              {...client}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Clients;
