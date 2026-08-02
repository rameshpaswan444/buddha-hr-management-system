import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../services/authService";

function ResetPassword() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");

      return;
    }

    try {
      setLoading(true);

      await resetPassword({
        token,
        newPassword,
      });

      alert("Password reset successfully.");

      navigate("/login");
    } catch (error) {
      console.error(error);

      setMessage(error.response?.data?.message || "Unable to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">Reset Password</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-700 py-3 text-white"
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>

        {message && <p className="mt-5 text-center text-red-600">{message}</p>}
      </div>
    </section>
  );
}

export default ResetPassword;
