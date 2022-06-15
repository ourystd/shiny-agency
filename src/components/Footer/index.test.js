import { render } from "@testing-library/react";
import Footer from ".";

describe("Footer component:", () => {
  it("should render without crashing", async () => {
    render(<Footer />);
  });
});
