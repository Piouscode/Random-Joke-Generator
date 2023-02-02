'use strict';
import { jokeContainer, btn } from "./variables.js";
import { getJoke } from "./api.js";

btn.addEventListener('click', getJoke);