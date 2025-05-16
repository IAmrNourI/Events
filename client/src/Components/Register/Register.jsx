import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";

export default function Register() {
  const [uploadPhoto, setUploadPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      profile_pic: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      formik.resetForm();
      setUploadPhoto(null);
    },
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    dirty,
    isValid,
  } = formik;

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadPhoto(file);
      formik.setFieldValue("profile_pic", file);
    }
  };

  const handleClearUploadPhoto = (e) => {
    e.preventDefault();
    setUploadPhoto(null);
    formik.setFieldValue("profile_pic", "");
  };

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center text-success mb-4">Welcome to Talky Chat App!</h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.name && errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="profile_pic" className="form-label">Profile Image:</label>
            <div
              className="border rounded p-2 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={handleFileButtonClick}
            >
              <span className="text-truncate" style={{ maxWidth: "300px" }}>
                {uploadPhoto?.name || "Upload Profile Image"}
              </span>
              {uploadPhoto && (
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={handleClearUploadPhoto}
                >
                  <IoClose />
                </button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                className="d-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!dirty || !isValid}
            className="btn btn-success w-100"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/check-mail" className="text-success fw-bold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
