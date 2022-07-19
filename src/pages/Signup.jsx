import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";
import { notifyError, notifyUserCreation } from "../helper-functions";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { userSignup, setUserData } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <div className="auth-form">
        <form
          onSubmit={(e) =>
            userSignup(
              e,
              email,
              pass,
              name,
              setUserData,
              navigate,
              notifyUserCreation,
              notifyError
            )
          }
        >
          <h2>Sign up</h2>
          <div className="input-box">
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              name="fname"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="email"
              placeholder="Enter your password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="input-box">
            <button className="btn btn-primary login-btn" type="submit">
              Sign Up
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">
                Login
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export { Signup };
