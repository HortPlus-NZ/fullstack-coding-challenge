# HortPlus Full Stack Coding Challenge

## Requirements

 - PHP
 - Composer
 - npm
 - Docker

Suggest using Gitpod - https://gitpod.io/#https://github.com/HortPlus-NZ/fullstack-coding-challenge

## Development

### Running the application

#### Backend

Create a `.env` file using the example

Starting the backend:

```bash
composer install
npm install
./vendor/bin/sail up -d
./vendor/bin/sail artisan key:generate
```

Update `.env` file
```
APP_URL={your app URL}
```
In the case of gitpod this will be something like ```https://5000-kumquat-dove-w9otk2hh.ws-us11.gitpod.io/``` where 5000- refers to the port number.

--

Stopping the backend:

```bash
./vendor/bin/sail down
```

#### Frontend

The front end is a simple ReactJS application.  

The following command will automatically rebuild the frontend assets whenever you save a file, you will need to refresh the website to see the changes.

```bash
npm run watch
```

#### Database

Migrate and seed the database.

```bash
./vendor/bin/sail artisan migrate
./vendor/bin/sail artisan db:seed --class StationSeeder
```

## The Task

Please note that you are not expected to know this framework! You have full access to the internet and we can help you with any problems you might encounter, we are interested in your approach to solving this problem.  

Good Luck :)

### Backend

We want to track the history of a weather stations name, latitude, and longitude. You will need to make a change to the data structure and API to achieve this.

### Frontend

Now that we are tracking the changes to weather stations the ReactJS front end should display this history.
