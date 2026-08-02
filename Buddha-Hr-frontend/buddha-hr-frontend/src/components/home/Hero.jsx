import Button from "../common/Button";
import Container from "../common/Container";
import heroImage from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full bg-blue-100 px-8 py-6 text-lg font-semibold text-blue-800">
              Welcome to Buddha Human Resource Pvt. Ltd.
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
              Connecting Talent with
              <span className="block text-blue-900">Great Opportunities</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We specialize in recruitment by connecting skilled Nepalese
              professionals with trusted employers around the world. Our
              commitment is to provide ethical, transparent, and reliable
              recruitment services.
            </p>

            <div className="mt-8 flex gap-4">
              <Link to="/jobs">
                <Button>Explore Jobs</Button>
              </Link>

              <Link to="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-blue-900">5000+</h2>

                <p className="text-gray-600">Successful Placements</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900">50+</h2>

                <p className="text-gray-600">Skilled Professionals</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900">100+</h2>

                <p className="text-gray-600">Partner Employers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={heroImage}
              alt="Recruitment"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
