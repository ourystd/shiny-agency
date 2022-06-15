export function formatJobList(title, index, listLength) {
  return index < listLength - 1 ? `${title}, ` : title;
}
