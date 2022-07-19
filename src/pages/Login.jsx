import { useState } from "react";
import { useAuth } from "../contexts";
import { Link, useNavigate } from "react-router-dom";
import { notifyUserLogin, notifyError } from "../helper-functions";
import { Toaster } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userLogin, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="auth-form">
        <form
          onSubmit={(e) =>
            userLogin(
              e,
              email,
              password,
              setCurrentUser,
              navigate,
              notifyUserLogin,
              notifyError
            )
          }
        >
          <h2>Login</h2>
          <div className="input-box">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email ID"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <button className="btn btn-primary login-btn" type="submit">
              Login
            </button>
            <button
              className="btn btn-primary login-btn"
              type="button"
              onClick={(e) =>
                userLogin(
                  e,
                  "vivek@gkool.com",
                  "keviv123@",
                  setCurrentUser,
                  navigate,
                  notifyUserLogin,
                  notifyError
                )
              }
            >
              Login as Guest
            </button>
          </div>
          <p>
            Don't have an account?
            <span>
              <Link to="/signup"> Sign up?</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export { Login };
