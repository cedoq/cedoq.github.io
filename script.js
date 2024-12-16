fetch('movies-250.json')
.then(response => {
    // Check if the response is OK (status code 200)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();  // Parse the response body as JSON
})