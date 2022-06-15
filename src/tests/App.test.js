import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home page component:", () => {
  it("renders without crashing", async () => {
    render(<Home />);
  });
});
