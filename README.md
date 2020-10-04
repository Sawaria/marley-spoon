# Marley Spoon coding challenge

This repository consist of two micro services:
* [Recipes server](./recipes-server) - Ruby on rails bakend REST apis
* [Recipes client](./recipes-client) - React frontend

## Prerequisites
1. ruby 2.6.6
2. node v10+
3. docker compose (not mandatory)

## Getting Started
### Running Locally
#### Recipes server
It is a ruby on rails application and runs on port 4000
```
1. go to recipes-server folder
2. bundle install
3. rails s
```
#### Recipes client
It is a react application and runs on port 3000
```
1. go to recipes-client folder
2. yarn install
3. yarn start
```

### Run with Docker
Open http://localhost:3000 in browser
```
docker-compose up
```
