// Create a new XHR object
// Make this project a npm project  and instal xhr package and require
const xhr = new XMLHttpRequest();

// Define a function to handle the response
function handleResponse() {
  // Check if the request is successful
  if (xhr.status === 200) {
    // Get the response text
    const responseText = xhr.responseText;
    // Display it on the page
    document.getElementById("content").innerHTML = responseText;
  }
}

// Add an event listener for the load event
xhr.addEventListener("load", handleResponse);

// Open a GET request to the URL
xhr.open("GET", "https://fakestoreapi.com/products/1");

// Send the request
xhr.send();
