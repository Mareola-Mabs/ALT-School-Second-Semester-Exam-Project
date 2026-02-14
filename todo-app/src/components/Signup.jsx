import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (name === ""){
        setError("Name Cannot be Empty")
        return
    }
    if (email === ""){
        setError("Email Cannot be Empty")
        return
    }
    if (password === ""){
        setError("Password Cannot be Empty")
        return
    }
    if (password === ""){
        setError("Password Cannot be Empty")
        return
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
    if (!passwordRegex.test(password)){
        setError("Password Must Contain a Special Character, Uppercase and LowerCase Letters")
        return
    }


    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://api.oluwasetemi.dev/auth/register",
        {
          name,
          email,
          password,
        },
      );

      console.log(data);

      // store tokens
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      setLoading(false);

      // redirect
      window.location.href = "/login";
    } catch (error) {
      console.error(error.response?.data || error.message);
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="bg-zinc-900 border border-blue-500/30 rounded-2xl shadow-lg shadow-blue-500/10 p-8 w-full max-w-md flex flex-col gap-5"
      >
        {/* Title */}
        <div className="flex flex-col items-center mb-2">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-zinc-400 text-sm mt-1">Signup to get started</p>
        </div>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-black border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-black border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md shadow-blue-500/20"
        >
          {loading ? <>Loading...</> : <>Signup</>}
        </button>

        {error ? <div style={{ color: "red" }}>{error}</div> : null}

        {/* Footer */}
        <p className="text-zinc-400 text-sm text-center mt-2">
          Already have an account?{" "}
          <span className="text-blue-500 hover:text-blue-400 cursor-pointer">
            <NavLink to="/login">Login</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
