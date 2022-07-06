import { render } from "./";
import Home from "../pages/Home";
import { Router } from "react-router-dom";

describe("Home page component:", () => {
  it.skip("renders without crashing", async () => {
    render(<Home />, { wrapper: <Router /> });
  });
});
