import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="bg-blue-900 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            Ready to Build Your Career or Hire Great Talent?
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Buddha Human Resource Pvt. Ltd. connects talented professionals with
            trusted companies across Nepal. Whether you're searching for a job
            or looking to hire, we're here to help.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button
              className="bg-white !text-blue-900 hover:bg-gray-100"
              to="/jobs"
            >
              Find Jobs
            </Button>

            <Button
              variant="secondary"
              className="border-white text-white hover:bg-white hover:!text-blue-900"
              to="/contact"
            >
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CallToAction;
