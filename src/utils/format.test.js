import { formatJobList } from "./format";

describe("The formatJobList function:", () => {
  const title = "Frontend";
  const listLength = 3;
  let index = 0;

  it("should add a comma & space to a word", () => {
    expect(formatJobList(title, index, listLength)).toBe(title + ", ");
  });

  it("should not add a comma to the last element of the list", () => {
    let index = 2;
    expect(formatJobList(title, index, listLength)).toBe(title);
  });
});
