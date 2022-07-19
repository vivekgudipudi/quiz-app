import toast from "react-hot-toast";

const toastStyle = {
  backgroundColor: "none",
  padding: "16px",
  color: "black",
};

const errorStyle = {
  backgroundColor: "none",
  padding: "16px",
  color: "black",
};

const notifyUserLogin = () =>
  toast(
    (t) => (
      <span>
        <b>User logged in succesfully</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyUserLogout = () =>
  toast(
    (t) => (
      <span>
        <b>User logged out succesfully</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyQuizStart = () =>
  toast(
    (t) => (
      <span>
        <b>Quiz Started</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyQuizSubmission = () =>
  toast(
    (t) => (
      <span>
        <b>Quiz submitted succesfully</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyUserCreation = () =>
  toast(
    (t) => (
      <span>
        <b>Welcome to Blink, User created successfully</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyNoNext = () =>
  toast(
    (t) => (
      <span>
        <b>Choose atleast one option</b>
      </span>
    ),
    {
      style: errorStyle,
    }
  );

const notifyQuizQuit = () =>
  toast(
    (t) => (
      <span>
        <b>You've quit the current quiz</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyError = (err) =>
  toast(
    (t) => (
      <span>
        <b>Something went wrong, {err}</b>
      </span>
    ),
    {
      style: errorStyle,
    }
  );

export {
  notifyUserLogin,
  notifyUserLogout,
  notifyError,
  notifyQuizStart,
  notifyQuizSubmission,
  notifyUserCreation,
  notifyQuizQuit,
  notifyNoNext,
};
