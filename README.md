# Random Joke Generator
This is a simple random joke generator that uses a random joke API from [jokeAPI](https://icanhazdadjoke.com/) API to generate random jokes. It is built using HTML, CSS and JavaScript.

# Table of Contents
- [Getting Started](#Getting Started)
- [Technologies](#Technologies)
- [File Structure](#File Structure)
- [Styles](#Styles)
- [JavaScript](#JavaScript)

# Getting Started
To get started, you can simply clone this repository and open the index.html file in your browser. Ulternatively, 
you can visit the live site [here](https://piouscode.github.io/Random-Joke-Generator/). Once the page loads, click on the 
button to generate a random joke.

# Technologies
- HTML
- SaSS
- JavaScript

# File Structure
This application consists of three main files:

index.html - This file contains the HTML code for the layout of the web page.
```html 
├── HTML 
│   ├── index.html
<body>
    <div class="wrapper-container">
        <div class="wrapper">
            <span>&#128514;</span>
            <p id="joke">This text is for a text, calm down.</p>
            <button id="btn">Generate Joke</button>
        </div>
    </div>
</body>
```
Scss file - This file contains the "non compiled" CSS code for the styling of the web page.
```scss
├── SCSS
@import 'mixins';
@import 'style_variables';

body {
  background-color: $background-color;
  font-family: $font-family;
  background-size: 50% 100%;
  * :after :before {
    @include box-sizing;
  }
  .wrapper-container {
    display: grid;
    place-items: center;
    height: 100vh;
    .wrapper {
      @include background-color($primary-color);
      width: 80vmin;
      @include padding(50, 40);
      border-radius: 1em;
      border: 1px solid rgba(255, 255, 255, 0.5);
      text-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
      background: rgba(255, 255, 255, 0.2);
      span {
        display: block;
        @include text-align(center);
        @include font-size(100);
      }...
```
Index.js - This file contains the JavaScript code for the functionality of the web page.
```javascript
├── JavaScript
'use strict';
import { jokeContainer, btn } from "./variables.js";
import { getJoke } from "./api.js";

btn.addEventListener('click', getJoke);
```

# Styles
SASS is used to style the web page. The SASS file is divided into several partials. The partials are then imported 
into the main SASS file. The main SASS file is then compiled to CSS and linked to the HTML file. 

# JavaScript
The JavaScript file, api.js, uses JavaScript to fetch and display the joke. The joke is fetched from the jokeAPI by 
creating a function that makes a GET request to the API. The function then returns the joke in JSON format. Once we 
have our response, we use json() method on it to parse out all of its data into JavaScript objects (data). We then store these objects inside jokeContainer variable so they can be accessed later on when needed.

# Conclusion 
The goal of this project was to practice working with APIs by using JavaScript to fetch data from an API and display 
it on the web page. I also used SASS to style the web page. 
