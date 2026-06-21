import { useState } from "react";
import { loginUser, registerUser } from "../api/authApi";

function Auth({ setIsLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    role: "ADMIN",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await loginUser({
          username: form.username,
          password: form.password,
        });
      } else {
        await registerUser(form);
        alert("Registered! Now login.");
        setIsLogin(true);
        return;
      }

      setIsLoggedIn(true);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-sm w-80 space-y-4"
      >
        <h2 className="text-lg font-semibold">
          {isLogin ? "Login" : "Register"}
        </h2>

        {!isLogin && (
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        )}

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
        />

        <button className="w-full bg-black text-white py-2 rounded-md">
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          className="text-sm text-center cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
}

export default Auth;