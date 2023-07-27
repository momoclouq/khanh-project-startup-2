import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";

import PricePage from "./pages/PricePage";
import OurCourses from "./pages/OurCourses";
import CourseDetail from "pages/CourseDetails";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import { DashboardLayout } from "components/Dashboard/DashboardLayout";
import DashboardPage from "pages/DashboardPage";
import MessagesPage from "pages/MessagesPage";
import SessionsPage from "pages/SessionsPage";
import HourOfPurchaseHistoryPage from "pages/HourOfPurchaseHistoryPage";
import MyTutorsPage from "pages/MyTutorsPage";
import MyClassesPage from "pages/MyClassesPage";
import CoursesPage from "pages/MyCoursesPage";
import VideoPlayerPage from "pages/VideoPlayerPage";
import SignUp from "pages/SignUp";
import LogInStudent from "pages/student/Register";
import ForgotPasswordStudent from "pages/student/ForgotPassword";
import ResetPasswordStudent from "pages/student/ResetPassword";
import LogInTutor from "pages/tutor/LogIn";
import ForgotPasswordTutor from "pages/tutor/ForgotPassword";
import ResetPasswordTutor from "pages/tutor/ResetPassword";
import AllClasses from "pages/AllClassesPage";
import VideoCallPage from "pages/VideoCallPage";

import Welcome from "pages/student/Welcome";
import Register from "pages/student/Register";
import RequireAuth from "pages/student/RequireAuth";
import LoginPage from "pages/student/LoginPage";

function App() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            {/* public routes */}

            <Route path="/register" element={<Register />} />
            <Route path="/login-page" element={<LoginPage />} />

            {/* protected routes */}
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="pricing" element={<PricePage />} />
              <Route path="our-courses" element={<OurCourses />} />
              <Route path="coursedetails/:id" element={<CourseDetail />} />
              <Route
                path="coursedetails/:orderId/:id"
                element={<CourseDetail />}
              />
              <Route path="cart" element={<Cart />} />
              <Route element={<RequireAuth />}>
                <Route path="checkout" element={<CheckoutPage />} />
              </Route>
            </Route>
            <Route element={<RequireAuth />}>
              <Route path="/mainboard/:orderId" element={<DashboardLayout />}>
                <Route path="" element={<DashboardPage />} />
                <Route path="messages/:orderId" element={<MessagesPage />} />
                <Route path="sessions/:orderId" element={<SessionsPage />} />
                <Route path="my-courses/:orderId" element={<CoursesPage />} />
                <Route
                  path="hour-purchase-history/:orderId"
                  element={<HourOfPurchaseHistoryPage />}
                />
                <Route path="my-tutors/:orderId" element={<MyTutorsPage />} />
                <Route path="my-classes/:orderId" element={<MyClassesPage />} />
                <Route path="video-player/:id" element={<VideoPlayerPage />} />
                <Route path="all-classes/:orderId" element={<AllClasses />} />
                <Route path="video-call" element={<VideoCallPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
