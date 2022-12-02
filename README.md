# ORM-ECOMM

## USER STORY/OVERVIEW:

AS A manager at an internet retail company

I WANT a back end for my e-commerce website that 

uses the latest technologies 

SO THAT my company can compete with other e-commerce companies

## ACCEPTANCE CRITERIA:

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username,

and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database

## LIVE LINK:

GITHUB REPO:

https://github.com/JonSno29/ORM-ECOMM.git


IMAGES:

/Users/jonsnover/Desktop/ORM-ECOMM/img/catcomm.png

/Users/jonsnover/Desktop/ORM-ECOMM/img/firstcomm.png

/Users/jonsnover/Desktop/ORM-ECOMM/img/image1comm.png

/Users/jonsnover/Desktop/ORM-ECOMM/img/img0comm.png

/Users/jonsnover/Desktop/ORM-ECOMM/img/img2comm.png


## INSTALLATION, USAGE & MOCK-UP:

Type npm i or npm install in the integrated terminal to install all depencies for this program.

This Application is utilizing a .env file. You will notice a file named ".env.EXAMPLE". Rename 

the file ".env" and fill in the DB_USER and DB_PASSWORD with your mysql login information.

Open mysql with command mysql -u root -p in order to log in to your mysql. Run the schema with 

source db/schema.sql

Exit your sequal and return to your integrated terminal where you will run the seeds with node 

seeds and run the server with node server.js

Open Insomnia and import the template.json file inside of the insomnia file, by selecting 

create and importing from file.

🎗 Node.js

🎗 Console.Table

🎗 MYSQL

🎗 MYSQL2

🎗 dotenv package

🎗 Inquire Package

🎗 Sequalize Package

🎗 Insomnia Package

## CREDITS:

Jon Snover


## LICENSE:

MIT License
 

## FEATURES:

🎗 Uses images to show features.

🎗 Acessable design.

🎗 Visually appealing.

🎗 These features enhance user experience.

## HOW TO CONTRIBUTE:

Fork my repositories so I can fork yours:

Use the "scout rule" to help others.

## TESTS:

🎗 Trial and error

🎗 VScode to test my code

🎗 JEST

## CONTACT:

Snoverjon@gmail.com
