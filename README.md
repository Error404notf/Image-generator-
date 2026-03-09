Wallpaper Generator

A simple web app that generates a random wallpaper each time the user clicks a button. The project uses a public image API to fetch and display a new wallpaper dynamically.

Link to project:
https://unique-platypus-bc596e.netlify.app/

How It's Made

Tech used: HTML, CSS, JavaScript

This project was built as a way to practice working with APIs and the JavaScript fetch() method. The application consists of a simple interface with a button and an image element. When the user clicks the button, a JavaScript function is triggered that sends a request to the Lorem Picsum API.

The API returns a random image URL, which is then assigned to the src attribute of the image element on the page. This updates the DOM and displays a new wallpaper to the user without refreshing the page.

The structure of the project is intentionally simple to focus on understanding core concepts such as:

Handling user events with addEventListener

Making asynchronous API requests using fetch()

Working with API responses

Updating the DOM dynamically with JavaScript

CSS was used only for basic layout and styling, centering the content and improving the visual presentation of the button and image.

Optimizations (optional)

This project currently focuses on simplicity and core API functionality. In future iterations, potential improvements could include:

Adding a loading indicator while the image is being fetched

Allowing users to download the generated wallpaper

Displaying multiple wallpapers in a gallery layout

Adding keyboard or automatic refresh functionality

Lessons Learned

Building this project helped reinforce how JavaScript can interact with external APIs and dynamically update content on a webpage. One key takeaway was understanding how the fetch() method works and how API responses can be used to modify elements in the DOM.

It also highlighted how a small amount of JavaScript can create interactive behavior on a webpage. Even with a minimal interface, integrating an API makes the application feel dynamic and engaging.