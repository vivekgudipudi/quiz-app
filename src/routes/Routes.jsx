import { Routes, Route } from "react-router-dom";
import {
  Home,
  Themes,
  Quest,
  Rules,
  Signup,
  Login,
  Result,
  LatestResult,
} from "../pages";

function Endpoints() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/quest/:qid" element={<Quest />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/result" element={<Result />} />
      <Route path="/quest/:qid/rules" element={<Rules />} />
      <Route path="/latest-result" element={<LatestResult />} />
    </Routes>
  );
}

export { Endpoints as Routes };
