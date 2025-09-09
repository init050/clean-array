const dirtyArray = [
  "Quera",
  2024,
  undefined,
  { course: "alpha", duration: "7" },
  NaN,
  "1403/02/15",
  null,
  912000111222,
  NaN,
  "Array",
  true,
  null,
  "undefined",
];

function makeArrayClean(dirtyArray) {
  return dirtyArray.filter(item =>

    typeof item === 'string' || typeof item === 'number' && !isNaN(item) ||
    typeof item === 'object' && item !== null 

    );
}

module.exports = makeArrayClean;
