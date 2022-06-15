export function formatJobList(title, index, listLength) {
  return index < listLength - 1 ? `${title}, ` : title;
}

export function formatQueryParams(answers) {
  let query = "";

  for (let key in answers) {
    query += `a${key}=${answers[key]}&`;
  }

  // remove last & before returning
  return query.slice(0, -1);
}
