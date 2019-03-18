
[![Build Status](https://travis-ci.org/nshutijonathan/EPIC-Mail.svg?branch=develop)](https://travis-ci.org/nshutijonathan/EPIC-Mail)
[![Coverage Status](https://coveralls.io/repos/github/nshutijonathan/EPIC-Mail/badge.svg?branch=ch-set-server-%23164463160)](https://coveralls.io/github/nshutijonathan/EPIC-Mail?branch=ch-set-server-%23164463160)

# EPIC-Mail
Epic Mail is web application  that helps people exchange messages/information over the internet.

## UI Technologies
* HTML.
* CSS.
* Javascript.


### UI link
 [EPIC-Mail](https://nshutijonathan.github.io/EPIC-Mail/ui/html/)

### Heroku link Example

[EPIC Email link](https://epic-mail-one.herokuapp.com)

### clone the Application

[Github](https://github.com/nshutijonathan/EPIC-Mail)


## API ENDPOINTS

| Ressource URL | Methods  | Description  |
| ------- | --- | --- |
| / | GET | The index (welcome message) |
| /api/v1/messages | GET | Fetch all emails |
| /api/v1/messages/:id | GET | Fetch a specific email |
| /api/v1/messages | POST | Create an email |
| /api/v1/messages/message/:id | DELETE | Delete a specific email |
| /api/v1/contacts | GET | Get all contacts |
| /api/v1/contacts/:id | GET | Get a specific contact |
| /api/v1/contacts | POST | Create a contact |
| /api/v1/contacts/:id | DELETE | Delete a contact |
| /api/v1/users|GET |Get all users|
| /api/v1/users/:id | GET | Get  a specific contact users |
| /api/v1/users/| POST | Create Users |
| /api/v1/users/:id| Delete | Delete a user |

## Required features
* User should Create a user account.
* User should Sign in
* User should Get all received emails 
* User should Get all emails sent 

 
## Tools Used

### Language
```
*Javascript*
```
### Server Environment
```
 *NodeJS* 
 ```
### Framework
```
 *Express* 
 ```
### Testing Framework
```
 *Mocha* and *Chai*
 ```
### Style Guide
```
*Airbnb*
```
### Continuous Integration
```
Travis CI
```
### Test Coverage
```
nyc
```
### Git badge
```
coveralls
```
### Deployment
```
Heroku
```
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
To install the software on your local machine, you need first to clone the repository or download the zip file and once this is set up you are going to need this packages. [NodeJS]

```
 [Node Package Installer - NPM] this usually comes with Node.
```

## Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

```
> npm install
```

It will install the node_modules which will help you run the project on your local machine.

## Run the server
```
> npm start
```
## Run the test
```
> npm test
```


**Version 1.0.0**

## Contributor
Jonathan Nshuti <nshutijonathan130@gmail.com>

---

## License & copyright
Copyright (c) Jonathan NSHUTI, Software developer
 
