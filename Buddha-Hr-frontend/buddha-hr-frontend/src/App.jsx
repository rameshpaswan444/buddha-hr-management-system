// import { Routes, Route } from "react-router-dom";

// import PublicLayout from "./layouts/PublicLayout";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Jobs from "./pages/Jobs";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import NotFound from "./pages/NotFound";
// import JobDetails from "./pages/JobDetails";
// import ApplyJob from "./pages/ApplyJob";

// import AdminLayout from "./admin/layouts/AdminLayout";
// import Dashboard from "./admin/pages/Dashboard";
// import Companies from "./admin/pages/Companies";
// import AdminJobs from "./admin/pages/Jobs";
// import Applications from "./admin/pages/Applications";
// import Users from "./admin/pages/Users";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";



// function App() {
//   return (
//     <Routes>
//       <Route element={<PublicLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/jobs/:id" element={<JobDetails />} />
//         <Route path="/jobs/:id/apply" element={<ApplyJob />} />
//         <Route path="/contact" element={<Contact />} />
//       </Route>

//       <Route path="/admin" element={<AdminLayout />}>
  
//         <Route index element={<Dashboard />} />
//         <Route path="companies" element={<Companies />} />
//         <Route path="jobs" element={<AdminJobs />} />
//         <Route path="applications" element={<Applications />} />
//         <Route path="users" element={<Users />} />
//       </Route>

//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password" element={<ResetPassword />} />

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";

import AdminLayout from "./admin/layouts/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Companies from "./admin/pages/Companies";
import AdminJobs from "./admin/pages/Jobs";
import Applications from "./admin/pages/Applications";
import Users from "./admin/pages/Users";

import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import ProtectedRoute from "./admin/components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route
          path="/jobs/:id/apply"
          element={
            <ProtectedRoute>
              <ApplyJob />
            </ProtectedRoute>
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="companies" element={<Companies />} />
        <Route path="jobs" element={<AdminJobs />} />
        <Route path="applications" element={<Applications />} />
        <Route path="users" element={<Users />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;