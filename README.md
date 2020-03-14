
<br />
<p align="center">

  <h3 align="center">Notes</h3>

  <p align="center">
    Simple Notes app build on Node.js
    <br />
    <a href="https://github.com/DukeKan/Notes.git">View Demo</a>
    ·
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)


<!-- ABOUT THE PROJECT -->
## About The Project

Simple Notes app for educational purposes. 

### Built With

* [node.js](https://nodejs.org/en/)
* [knex.js](http://knexjs.org/)
* [express.js](https://expressjs.com/)


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation and running
 
1. Clone the repo
```sh
git clone https://github.com/DukeKan/Notes.git
```
2. Install NPM packages
```sh
npm install
```

3. Install MySql database server and create 'notes' database

4. Install knex globally
```sh
npm i knex -g
```

5. Create database tables
```sh
knex migrate:latest
```

5. Run app
```sh
node .
```