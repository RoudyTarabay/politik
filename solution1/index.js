async function getData(sortingColumn, lang) {
  const response = await axios.get(
    "http://ws-old.parlament.ch/councillors/basicdetails/sessions?format=json",
    {
      params: {
        format: "json",
        lang: lang,
      },
    }
  );
  //   console.log(response);
  return sorted(response.data, sortingColumn);
}
function sorted(data, sortingColumn) {
  return data.sort(function (a, b) {
    return a[sortingColumn] - b[sortingColumn];
  });
}
let results = getData("id", "en");
console.log("results", results);
