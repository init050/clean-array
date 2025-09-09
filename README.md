# Clean Array

This is a JavaScript utility function that cleans an array by removing `null`, `undefined`, and `NaN` values.

## Project Overview

The `makeArrayClean` function takes a "dirty" array containing a mix of data types and returns a new array with all the unwanted values removed. It's a handy utility for data sanitization and preparation.

This project is useful when you're working with data from various sources and need to ensure that your arrays are clean and consistent.

## Features

*   **Removes unwanted values:** Filters out `null`, `undefined`, and `NaN` from an array.
*   **Preserves useful data:** Keeps strings, numbers, and objects in the array.
*   **Simple and efficient:** Uses the built-in `filter` method for a clean and readable implementation.
*   **Unit tests:** Includes a testing setup with Jest.

## Technologies Used

*   **Language:** JavaScript
*   **Testing:** [Jest](https://jestjs.io/)

## Installation and Setup

To use this function and run the tests, you'll need to have Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/init050/clean-array.git
    cd JS/clean\ array
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

## How to Use

You can use the `makeArrayClean` function by importing it into your own JavaScript files.

```javascript
const makeArrayClean = require('./main');

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

const cleanArray = makeArrayClean(dirtyArray);

console.log(cleanArray);
// Output: [ "Quera", 2024, { course: "alpha", duration: "7" }, "1403/02/15", 912000111222, "Array", true, "undefined" ]
```

### Running the Tests

To run the included tests, use the following command:

```bash
npm test
```

## Future Improvements

*   **Customizable filter rules:** Allow the user to pass in their own filter criteria to decide what should be removed from the array.
*   **Deep cleaning:** Add an option to recursively clean nested arrays and objects.
*   **TypeScript conversion:** Convert the project to TypeScript to add type safety and improve developer experience.
