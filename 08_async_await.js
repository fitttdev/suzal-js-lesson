// Async/await is a syntactic sugar built on top of Promises, 
// providing a more synchronous-like way to write asynchronous 
// code. It allows you to write asynchronous code that looks 
// and behaves like synchronous code, making it easier to 
// understand and reason about.

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const data = 'Some data';
    // Resolve the Promise with the data
    resolve(data);
  }, 1000);
});

async function fetchData() {
  try {
    // Await the Promise to resolve
    const data = await myPromise;
    console.log('Received data:', data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchData();
console.log("Execution Continues")
