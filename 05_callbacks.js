// Callbacks in JavaScript are functions that are passed as 
// arguments to other functions and are executed later, 
// usually after the completion of an asynchronous operation 
// or some other time-consuming task. Callbacks are a fundamental
//  concept in JavaScript, especially in asynchronous programming, 
// and they enable you to execute code asynchronously and handle 
// the results when they become available.

// Function that takes a callback
function fetchData(callback) {
  // Simulate an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    // Call the callback function with the data
    callback(data);
  }, 1000); // Simulating a delay of 1 second
  console.log("Execution Continues")
}

// Callback function to handle the fetched data
function processData(data) {
  console.log('Received data:', data);
}

// Calling fetchData and passing processData as a callback
fetchData(processData);

// // Using Arrow function
// fetchData(data => {
//   console.log('Received data AF:', data);
// });
