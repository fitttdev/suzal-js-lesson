// A Promise is an object representing the eventual completion 
// or failure of an asynchronous operation. It provides a cleaner
// alternative to callback functions for handling asynchronous tasks.

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const data = 'Some data';
    // Resolve the Promise with the data
    resolve(data);
  }, 1000);
  console.log("Execution Continues")
});

// Consuming the Promise
myPromise.then(data => {
  console.log('Received data:', data);
}).catch(error => {
  console.error('Error:', error);
})