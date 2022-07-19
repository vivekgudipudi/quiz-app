import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";
import { notifyUserLogout, notifyError } from "../helper-functions";

function Nav() {
  const { currentUser, userLogOut, setCurrentUser } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);

  return (
    <nav>
      <h1>
        <Link to="/">Blink</Link>
      </h1>
      <div className="nav-opts">
        {currentUser ? (
          <>
            <p>Hey {currentUser.displayName}</p>
            <Link to="/latest-result">
              <p>Latest scores</p>
            </Link>
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                userLogOut(
                  navigate,
                  setCurrentUser,
                  notifyUserLogout,
                  notifyError
                )
              }
            >
              Logout
            </p>
          </>
        ) : (
          <Link to="/login">
            <p>Login</p>
          </Link>
        )}
      </div>
    </nav>
  );
}

export { Nav };
