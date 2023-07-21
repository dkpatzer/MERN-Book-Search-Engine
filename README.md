# MERN-Book-Search-Engine

## Description
This application is a Google Books API search engine demonstrating the use of GraphQL. It highlights the fact that today's websites typically are driven by data and user demands with the ability to present data relevant to the user's personal needs. The application allows users to search for books using the Google Books API and save books to a database.  The user can also delete books from the database. The application was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. Code was given using a RESTful API that was already set up to allow users to save book searches to the back end. The objective of this project was to refactor the code to be a GraphQL API built with Apollo Server and using Apollo client for the front end.

This project gave me the opportunity to compare a RESTful API with one using GraphQL. It required looking at the code closely to understand how the two types of APIs differ and then modifying the code.  GraphQL is a query language that allows the client to request only the data it needs from the server.  It is a more efficient way to retrieve data from the server.  It also allows the client to request data from multiple sources in a single request.  GraphQL is also a strongly typed language which means that the data types of the data being requested must be specified.  This allows the server to know exactly what data is being requested and to return only that data.  GraphQL also allows the client to request data in a nested format which is more efficient than requesting data in a flat format. 

In addition, the project was valuable in understanding a MERN application, its required dependencies, and how to connect files efficiently and seamlessly for the front and back ends to communicate with each other and with MongoDB via Mongoose and GraphQL as well as using an external API. It also gave me the opportunity to learn how to deploy a MERN application to Heroku with a MongoDB database using MongoDB Atlas. 

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Images](#images)
- [Credits](#credits)


## Installation

As discussed above, I was given starter code for this project that was fully functional using a RESTful API which I needed to turn into a modern MERN application using GraphQL.  Initially, I created a repository for the application in GitHub and cloned it into my VS Code editor from the bash terminal. I then cloned the given code into my project. I needed to install the following dependencies to get the application to run: I set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API. I deleted the starter code's files that were solely used for the RESTful API and configured the Apollo Server to use an Express.js server and to work with the Mongoose ODM. I created an Apollo Provider so that requests can communicate with an Apollo Server. The existing authentication middleware was modified to work in the context of a GraphQL API. I created mutations files for the server and client sides along with a queries file for the front end and a typeDefs file for the back end. I tested the client and server side for functionality multiple times. I then deployed the application to Heroku with a MOngoDB database using MongoDB Atlas.  The application is now fully functional and can be used by anyone to search for books and save them to a database.  The application can be found at:  https://murmuring-fjord-29652-0d1a2080f169.herokuapp.com/


## Usage

User Story: AS AN avid reader
I WANT to search for new books to read.
SO THAT I can keep a list of books to purchase

The application is used in the following manner:
GIVEN a book search engine.
WHEN you load the search engine
THEN you are presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN you click on the Search for Books menu option
THEN you are presented with an input field to search for books and a submit button
WHEN you are not logged in and enter a search term in the input field and click the submit button
THEN you are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site.
WHEN you click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN you are presented with three inputs for a username, an email address, a password, and a signup button.
WHEN the toggle is set to Login
THEN you are presented with two inputs for an email address and a password and login button
WHEN you enter a valid email address and create a password and click on the signup button
THEN your user account is created and youare logged in to the site
WHEN you enter your account’s email address and password and click on the login button
THEN the modal closes and you are logged in to the site
WHEN you are logged in to the site
THEN the menu options change to Search for Books, an option to see your saved books and Logout
WHEN you are logged in and enter a search term in the input field and click the submit button
THEN you are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account.
WHEN you click on the Save button on a book
THEN that book’s information is saved to your account
WHEN you click on the option to see your saved books
THEN you are presented with all the books you have saved to your account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from your account.
WHEN you click on the Remove button on a book
THEN that book is deleted from your saved books list

## Images 

![Screenshot Opening page ](./images/Screenshot%20(197).png)

![Screenshot with MERN search](./images/Screenshot%20(198).png)

![Screenshot MERN results](./images/Screenshot%20(199).png)

![Screenshot login ](./images/Screenshot%20(200).png)

![Screenshot incorrect login](./images/Screenshot%20(202).png)

![Screenshot signup ](./images/Screenshot%20(203).png)

![Screenshot save book ](./images/Screenshot%20(206).png)

![Screenshot Delete Book ](./images/Screenshot%20(212).png)

![Screenshot Book Deleted from Saved ](./images/Screenshot%20(213).png)

    ```

## Credits

The MERN Book Search Engine App was developed by David Patzer as part of the NU coding bootcamp. 

I obtained information from many sources: 
https://www.apollographql.com/docs/apollo-server/getting-started/
https://www.apollographql.com/docs/react/get-started/
https://www.apollographql.com/docs/react/data/mutations/
https://www.apollographql.com/docs/react/data/queries/
https://www.apollographql.com/docs/react/data/local-state/
https://www.freecodecamp.org/news/graphql-vs-rest-api/
https://coding-boot-camp.github.io/full-stack/apis/graphql-playground-guide
https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas
https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas
https://www.geeksforgeeks.org/mern-stack/
https://www.w3schools.com/whatis/whatis_fullstack.asp
https://graphql.org/learn/
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

- Stack Overflow: For the community's invaluable insights and solutions.

- https://chat.openai.com/: For text verification and assistance.

- Finally, I got help from reviewing the answers to the challenge given in the NU coding bootcamp.


## Tests

I used Apollo query site, MongoDB Compass, and Postman
