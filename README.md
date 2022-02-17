# Crosswordle

This project was created using React frontend and python backend.

## Quickstart

First, clone this repository. Then:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Meet the team

This project was made by wordle-peeps comprising of:

Bryn Williams\
Ezekiel Kassim\
Jess Gordon\
Titus Chang

From Makers Cohort November 2021

<img src="./public/makers academy.png" height="30">

## About

This is a wordle style application made by team Wordle-peeps for our final Group Project. This application has three game modes: Easy, Normal and Hard, in which the user has to guess the correct 5-letter words according to the ruleset.

For all game modes, the check solution button can be clicked to check the users attempt. Each guess increments the user's guess count, hence a lower guess count indicates a better score.

The letters shown below the grid indicate the characters that are usable for the given daily solution. Note that not all characters are present, giving the user an easier time guessing words.

Colours of the letters in the letter bucket will adjust accordingly i.e. green if the letter is in the correct space, yellow if the letter is in the correct row or column, grey if the letter is in neither the row or column.

## Easy mode:

The user is presented with a 5x5 grid with the diagonal characters shown. The user then has to find 5 horizontal words, each of which intercepts with one character in the diagonal.

<img src="./public/easy_mode_grid.png" height="250" width="200">

## Normal mode:

The user is presented with a 5x5 grid with the characters revealed in the 4 corner boxes and the centermost box. The user then has to find 6 words in total: 3 across and 3 down.

<img src="./public/normal_mode_grid.png" height="250" width="200">

## Hard mode:

The user is presented with a 5x5 grid with no revealed characters. Similarly, the user then has to find 6 words in total: 3 across and 3 down.

<img src="./public/hard_mode_grid.png" height="250" width="200">

## Installation

To use, please download the files and run npm install. Run npm start to run on your local machine at localhost:3000. Alternatively, visit https://crosswordle-production.herokuapp.com - to view the full site!\
You can find the python code used to generate the solutions here https://github.com/tc1316/crosswordle-solutions