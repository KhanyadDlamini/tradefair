"use client";
import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";
import { CONFIG } from "../config";

export default function RegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    institution: "",
    programme: "",
    days: [],
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(true); // page loader
  const [submitting, setSubmitting] = useState(false); // form submit loader
  const [status, setStatus] = useState(null); // success or error

  const days = [
    "Aug 30, 2025",
    "Aug 31, 2025",
    "Sep 1, 2025",
    "Sep 2, 2025",
    "Sep 3, 2025",
    "Sep 4, 2025",
    "Sep 5, 2025",
    "Sep 6, 2025",
  ];

  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    validateForm();
  };

  const handleDayChange = (day) => {
    setForm((prevForm) => {
      const isSelected = prevForm.days.includes(day);
      return {
        ...prevForm,
        days: isSelected
          ? prevForm.days.filter((d) => d !== day)
          : [...prevForm.days, day],
      };
    });
    setTouched({ ...touched, days: true });
    validateForm();
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Za-z]{2,}$/.test(form.name)) {
      newErrors.name = "Name field is required.";
    }
    if (!/^[A-Za-z]{2,}$/.test(form.surname)) {
      newErrors.surname = "Surname field is required.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!/^[A-Za-z0-9\s]{2,}$/.test(form.institution)) {
      newErrors.institution = "Institution field is required.";
    }
    if (!/^[A-Za-z0-9\s]{2,}$/.test(form.programme)) {
      newErrors.programme = "Programme field is required.";
    }
    if (form.days.length == 0) {
      newErrors.days = "Please select at least one day.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      setStatus(null);

      try {
        const response = await fetch(`${CONFIG}/registration`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Form submitted:", data);

          setStatus("success");
          setForm({
            name: "",
            surname: "",
            email: "",
            institution: "",
            programme: "",
            days: [],
          });
          setTouched({});
        } else {
          const errData = await response.json();
          console.error("Error:", errData);
          setStatus("error");
        }
      } catch (error) {
        console.error("Network error:", error);
        setStatus("error");
      } finally {
        setSubmitting(false);
      }
    } else {
      setStatus("error");
    }
  };


  // Show page loader first
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Commet color="#63c7de" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-gray-100 to-white">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <img
          src="https://i.ibb.co/mVsH16TX/images-removebg-preview.png"
          alt="Trade Fair Logo"
          className="w-28"
        />

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Trade Fair 2025
        </h1>

        {/* Status messages */}
        {status === "success" && (
          <div className="mb-4 p-3 w-full max-w-md bg-green-500 text-white text-center rounded-lg shadow-lg animate-bounce">
            🎉 Registration Successful! See you at the Trade Fair! 🎉
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 p-3 w-full max-w-md bg-red-500 text-white text-center rounded-lg shadow-lg animate-pulse">
            ⚠️ Please correct the errors before submitting!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 backdrop-blur"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name(s)"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-b border-gray-500 focus:outline-none bg-transparent py-2"
              required
            />
            {touched.name && errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Surname */}
          <div>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={form.surname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-b border-gray-500 focus:outline-none bg-transparent py-2"
              required
            />
            {touched.surname && errors.surname && (
              <p className="text-red-600 text-sm">{errors.surname}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-b border-gray-500 focus:outline-none bg-transparent py-2"
              required
            />
            {touched.email && errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Institution */}
          <div>
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              value={form.institution}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-b border-gray-500 focus:outline-none bg-transparent py-2"
              required
            />
            {touched.institution && errors.institution && (
              <p className="text-red-600 text-sm">{errors.institution}</p>
            )}
          </div>

          {/* Programme */}
          <div>
            <input
              type="text"
              name="programme"
              placeholder="Programme"
              value={form.programme}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-b border-gray-500 focus:outline-none bg-transparent py-2"
              required
            />
            {touched.programme && errors.programme && (
              <p className="text-red-600 text-sm">{errors.programme}</p>
            )}
          </div>

          {/* Days */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Select Days:</p>
            <div className="grid grid-cols-2 gap-2">
              {days.map((day, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={form.days.includes(day)}
                    onChange={() => handleDayChange(day)}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span>{day}</span>
                </label>
              ))}
            </div>
            {touched.days && errors.days && (
              <p className="text-red-600 text-sm">{errors.days}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>

      <footer className="bg-blue-400 text-white text-center py-3 mt-auto">
        © 2025 Trade Fair. All Rights Reserved.
      </footer>
    </div>
  );
}
