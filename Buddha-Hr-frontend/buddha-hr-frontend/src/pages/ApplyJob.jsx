import { Upload, FileText } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { applyJob } from "../services/applicationService";

function ApplyJob() {
  const { id } = useParams();

  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      setMessage("Please upload your resume.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("jobId", id);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);

      await applyJob(formData);

      setMessage("Application submitted successfully.");

      setCoverLetter("");
      setResume(null);
    } catch (error) {
      console.error(error);

      setMessage("Unable to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-10 shadow-lg">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Apply for Job</h1>

          <p className="mt-3 text-gray-600">
            Complete the application form below. Our recruitment team will
            review your profile and contact you if you are shortlisted.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="md:col-span-2">
            <label className="mb-2 block font-semibold">Cover Letter</label>

            <textarea
              rows="6"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full rounded-lg border p-3"
              placeholder="Tell us why you're a good fit..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-semibold">Upload Resume</label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-10">
              <Upload size={40} className="text-blue-900" />

              <p className="mt-4 font-semibold">Click to upload your resume</p>

              <span className="mt-2 text-sm text-gray-500">
                PDF or DOCX (Max 5MB)
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setResume(e.target.files[0])}
              />
            </label>
            {resume && (
              <p className="mt-3 text-green-600">Selected: {resume.name}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-900 py-4 text-lg font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
            >
              <FileText className="mr-2 inline" />

              {loading ? "Submitting..." : "Submit Application"}
            </button>
            {message && (
              <p className="text-center font-medium text-green-600">
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ApplyJob;
