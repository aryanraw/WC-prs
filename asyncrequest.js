// Function to make an asynchronous request
function makeRequest(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => console.error(error));
  }
  
  // Define the URLs for the requests
  const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
  const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
  const url3 = 'https://jsonplaceholder.typicode.com/posts/3';
  
  // Make the asynchronous requests and store the promises
  const request1 = makeRequest(url1);
  const request2 = makeRequest(url2);
  const request3 = makeRequest(url3);
  
  // Execute a callback when all requests are complete
  Promise.all([request1, request2, request3])
    .then(data => {
      // All requests are complete, and data is an array with the results.
      console.log('Request 1:', data[0]);
      console.log('Request 2:', data[1]);
      console.log('Request 3:', data[2]);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  