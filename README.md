# MERN-Book-Search-Engine

## Description
This application is a Google Books API search engine demonstrating the use of GraphQL. It highlights the fact that today's websites typically are driven by data and user demands with the ability to present data relevant to the user's personal needs. The application allows users to search for books using the Google Books API, and save books to a database.  The user can also delete books from the database. The application was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. Code was given using a RESTful API that was already set up to allow users to save book searches to the back end. The objective of this project was to refactor the code to be a GraphQL API built with Apollo Server and using Apollo cient for the front end.

This project gave me the opportunity to compare and contrast a RESTful API with one using GraphQL. It required looking at the code closely to understand how the two types of APIs differ and then modifying the code.  GraphQL is a query language that allows the client to request only the data it needs from the server.  It is a more efficient way to retrieve data from the server.  It also allows the client to request data from multiple sources in a single request.  GraphQL is also a strongly typed language which means that the data types of the data being requested must be specified.  This allows the server to know exactly what data is being requested and to return only that data.  GraphQL also allows the client to request data in a nested format which is more efficient than requesting data in a flat format. 

In addition the project was valuable in understanding a MERN application, its required dependencies and how to connect files efficiently and seemlessly for the front and back ends to communicate with each other and with MongoDB via mongoose and GraphQL as well as using an external API. It also gave me the opportunity to learn how to deploy a MERN application to Heroku with a MongoDB database using MongoDB Atlas. 


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

As discussed above, I was given starter code for this project that was fully functional usuing a RESTful API which I needed to turn into a modern MERN application using GraphQL.  Initially I created a repository for the application in GitHub and cloned it into my VS Code editor from the bash terminal. I then cloned the given code into my project. I needed to install the following dependencies to get the application to run: I set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API. I deleted the starter code's  files that were solely used for the RESTful API and configured the Apollo Server to use an Express.js server and to work with the Mongoose ODM. I created an Apollo Provider so that requests can communicate with an Apollo Server. The existing authenification middleware was modified to work in the context of a GraphQL API. I created mutations files for the sever and client sides along with a queries file for the front-end and a typeDefs file for the back-end. I tested the client and server side for functionality multiple times. I then deployed the application to Heroku with a MOngoDB database using MongoDB Atlas.  The application is now fully functional and can be used by anyone to search for books and save them to a database.  The application can be found at:  https://murmuring-fjord-29652-0d1a2080f169.herokuapp.com/



## Usage

User Story: AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

The application is used in the following manner:
GIVEN a book search engine
WHEN you load the search engine
THEN you are presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN you click on the Search for Books menu option
THEN you are presented with an input field to search for books and a submit button
WHEN you are not logged in and enter a search term in the input field and click the submit button
THEN you are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN you click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN youare presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN you are presented with two inputs for an email address and a password and login button
WHEN you enter a valid email address and create a password and click on the signup button
THEN your user account is created and youare logged in to the site
WHEN you enter your account’s email address and password and click on the login button
THEN  the modal closes and you are logged in to the site
WHEN youare logged in to the site
THEN the menu options change to Search for Books, an option to see your saved books, and Logout
WHEN you are logged in and enter a search term in the input field and click the submit button
THEN you are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN you click on the Save button on a book
THEN that book’s information is saved to your account
WHEN you click on the option to see your saved books
THEN you are presented with all of the books you have saved to your account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from your account
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
![Screenshot Book Deleted from Saved ](./images/Screenshot%20(211).png)

    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.