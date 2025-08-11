import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { validateUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    if (!userData.userName.trim()) {
      formErrors.userName = "Username is required";
    }
    if (!userData.password.trim()) {
      formErrors.password = "Password is required";
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    localStorage.setItem("user", JSON.stringify(userData));

    if (
      userData.userName === validateUser.userName &&
      userData.password === validateUser.password
    ) {
      navigate("/dashboard");
    } else {
      setErrors({ login: "Incorrect username or password" });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 flex flex-col min-h-dvh justify-center items-center">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome to iHUZA INVENTORY
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Username"
          type="text"
          name="userName"
          value={userData.userName}
          onChange={handleChange}
          placeholder="Enter your username"
          variant={errors.userName ? "danger" : "default"}
        />
        {errors.userName && (
          <p className="text-sm text-red-600">{errors.userName}</p>
        )}

        <Input
          label="Password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          variant={errors.password ? "danger" : "default"}
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password}</p>
        )}
        {errors.login && <p className="text-sm text-red-600">{errors.login}</p>}

        <Button label="Log In" type="submit" />
        {/* <p className="mt-2">
          Don't you have an account?{" "}
          <Link
            className="text-xl text-green-600 hover:underline hover:text-palette-200"
            to="/register"
          >
            Register here
          </Link>
        </p> */}
      </form>
    </div>
  );
}
