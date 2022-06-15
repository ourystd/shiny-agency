import { formatJobList, formatQueryParams } from "./format";

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

describe("The formatQueryParams function:", () => {
  const answers = { 1: true, 2: false, 3: true };

  it("should not add a '&' at the end", () => {
    const formatedQuey = formatQueryParams(answers);
    expect(formatedQuey.at(-1) !== "&").toBe(true);
  });
});
