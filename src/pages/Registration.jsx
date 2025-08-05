import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Registration = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = {};

    if (!userData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!userData.password.trim()) {
      formErrors.password = "Password is required";
    }

    if (!userData.email.includes("@")) {
      formErrors.email = "Invalid Email address";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("Registration successfully!");
      setErrors({});
      setUserData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Create an account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          name="name"
          variant={errors.name ? "danger" : "default"}
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        <Input
          label="Email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          name="email"
          variant={errors.email ? "danger" : "default"}
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
        <Input
          label="Password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          name="password"
          variant={errors.password ? "danger" : "default"}
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password}</p>
        )}
        <Button label="Send Message" type="submit" />
        <p>
          Do you have an account?{" "}
          <Link
            className="text-xl text-green-600 hover:underline hover:text-palette-200"
            to="/login"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
