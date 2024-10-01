const ajaxButton = document.getElementById('ajax-button');
        const fetchButton = document.getElementById('fetch-button');
        const dataContainer = document.getElementById('data-container');

        // Dummy API
        const api = 'https://jsonplaceholder.typicode.com/posts';

        // Event listener for AJAX button
        ajaxButton.addEventListener('click', function () {
            // Create a new XMLHttpRequest object
            const ajax = new XMLHttpRequest();

            // GET-request for the posts
            ajax.open('GET', api, true);

            // function for a response data when request is completed
            ajax.onload = function () {
                if (ajax.status === 200) {
                    // Parse JSON data
                    const posts = JSON.parse(ajax.responseText);
                    displayData(posts);
                } else {
                    console.error('Failed to load data using AJAX');
                }
            };

            // Send the request
            ajax.send();
        });

        // Event listener for Fetchapi button
        fetchButton.addEventListener('click', function () {
            // Fetch the data from the api
            fetch(api)
                .then(response => {
                    // Check if the response is successful
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(posts => {
                    // Display the data
                    displayData(posts);
                })
                .catch(error => {
                    console.error('Failed to load data using Fetch API', error);
                });
        });

        
        function displayData(posts) {
            // Clear previous content
            dataContainer.innerHTML = '';

            // Limit to first 5 posts for demonstration purposes
            posts.slice(0, 5).forEach(post => {
                // Create a div for each post and add content
                const div = document.createElement('div');
                div.className = 'data-item';
                div.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                // Append the post div to the data container
                dataContainer.appendChild(div);
            });
        }