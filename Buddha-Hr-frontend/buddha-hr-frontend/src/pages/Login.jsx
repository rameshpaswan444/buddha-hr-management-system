import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Input from "../components/common/Input";
import { login } from "../services/authService";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();

  const sessionExpired = new URLSearchParams(location.search).get(
    "sessionExpired",
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      localStorage.setItem("token", response.token);

      localStorage.setItem("user", JSON.stringify(response));

      if (response.role === "ADMIN") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/jobs", { replace: true });
      }
    } catch (err) {
      console.error(err);

      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center bg-gradient-to-b from-slate-50 to-indigo-50/40 py-16 px-4">
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-xl shadow-indigo-100">
        {/* Accent top bar */}
        <div className="h-1.5 w-full bg-white from-white to-violet-100" />

        <div className="p-8 sm:p-10">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-200">
              <img
                src="/logo.png"
                alt="Buddha HR"
                className="h-9 w-9 object-contain"
              />
            </div>
            {sessionExpired && (
              <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                Your session has expired. Please log in again.
              </div>
            )}

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to your Buddha Human Resource account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 pr-11 text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-indigo-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="mt-2 text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {error && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-center text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?
            <Link
              to="/register"
              className="ml-1.5 font-semibold text-indigo-700 hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
