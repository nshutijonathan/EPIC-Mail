
[![Build Status](https://travis-ci.org/nshutijonathan/EPIC-Mail.svg?branch=develop)](https://travis-ci.org/nshutijonathan/EPIC-Mail)
[![Coverage Status](https://coveralls.io/repos/github/nshutijonathan/EPIC-Mail/badge.svg?branch=ch-set-server-%23164463160)](https://coveralls.io/github/nshutijonathan/EPIC-Mail?branch=ch-set-server-%23164463160)
[![Maintainability](https://api.codeclimate.com/v1/badges/7b5bdedbfe7dded4e8fe/maintainability)](https://codeclimate.com/github/nshutijonathan/EPIC-Mail/maintainability)

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

## ENDPOINTS

| / | GET | The index (welcome Messages) |
| /api/v1/messages/message/:id | GET | Fetch a specific email |
| /api/v1/messages/unread/messages | GET | Fetch all unread messages |
| /api/v1/messages | POST | Create an email |
| /api/v1/messages/message/:id | DELETE | Delete a specific email |
 
## Tools Used

### Language
```
*Javascript*
```
### Server Environment
```
 *NodeJS* (run time Environment for running JS codes)
 ```
### Framework
```
 *Express* (used for building fast APIs)
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
 [Node Package Installer - NPM] this usually comes with Node or YARN in case NPM doesn't work.
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
 
