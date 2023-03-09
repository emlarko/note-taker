# Express.js: Note Taker

Deployed Heroku app: https://fathomless-lake-78730.herokuapp.com/

## Description

The aim of this project was to modify starter code to create an application that can be used to write and save notes. The application uses an Express.js back end and saves and retrieves note data from a JSON file. 

## Installation 

Clone the project onto your machine, then run the following line of code in your terminal to install the needed packages:

```
npm i
```

## Usage 

Once the packages have been installed, run the following line of code in your terminal:

```
node server.js
```

When opening the application, the user will be presented with a landing page with a link to the notes page. 

The notes page displays any existing saved notes in the left-hand column, plus empty fields to enter a new note title and text in the right-hand column. After entering a new note title and text, a save icon appears in the navigation bar at the top of the page. When the save button is clicked, the new note is saved and added to the left-hand column. 

When a note saved in the left-hand column is clicked, the note will re-open to display the saved text. The user can then add a new note by clicking the plus icon in the navigation bar. 

When the delete button is clicked on a saved note, the note is removed from the page. 

![screenshot](public/assets/images/screenshot1.png?raw=true "screenshot showing landing page")

![screenshot](public/assets/images/screenshot2.png?raw=true "screenshot showing how to add note")

![screenshot](public/assets/images/screenshot3.png?raw=true "screenshot showing saved note")
