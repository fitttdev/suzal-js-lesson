// 1. fetch
// 2. XMLHttpRequest(XHR)

const API_PATH = 'https://fakestoreapi.com/products/1'
fetch(API_PATH)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
