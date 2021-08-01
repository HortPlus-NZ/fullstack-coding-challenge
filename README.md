# HortPlus Full Stack Coding Challenge
This is a quick coding challange that you can get setup using [GitPod](gitpod.io). It runs a [PHP Laravel](https://laravel.com/) backend API (with [Docker](https://www.docker.com/)) and a [ReactJS](https://reactjs.org/) frontend. 

The repo comes with everything you need to get the website up and running, follow the **Setup** instructions below to get up and running in 30 minutes.

## Setup
Follow these steps to get everything setup and configured - _You only need to do this setup process once._

**Step 1: GitPod**   
Sign up for [GitPod](gitpod.io) a free cloud based IDE - All the instructions that follow will be based around using GitPod.

**Step 2: Setup Repo**   
Get the challange setup on your GitPod account. This is as simple as adding this repo to the end of the url with a `#` eg:
https://gitpod.io/#https://github.com/HortPlus-NZ/fullstack-coding-challenge

This will create a new workspace in your GitPod account and generate a custom domain name for you eg `https://yellow-seahorse-90du6iw7.ws-us13.gitpod.io/` (note this is the url of your GitPod workspace, yours will be different to this example)

**Step 3: Configure**   
The challange uses environment variables and expects these in a `.env` file - note that the `.env` file is not tracked in git so you'll need to create one.

1. Create a new `.env` file and copy the contents of the `.env.example` file into it.
2. Find the `APP_URL` variable and upate this from `http://localhost` to your GitPod custom domain with `5000-` preprended eg `https://5000-yellow-seahorse-90du6iw7.ws-us13.gitpod.io/` (5000- refers to the port number)
3. From the terminal, execute the following commpands:
   - `$ composer install` - install all the PHP packages the backand depends on.
   - `$ npm install` - install all the Node Models the frontend depends on.
   - `$ ./vendor/bin/sail up -d` - start the backend (note that this can take a 10+ minutes to complete)
   - `$ ./vendor/bin/sail artisan key:generate` - generate an app key, filling in the `APP_KEY` in your `.env` file.

**Step 4: Seed Database**
The challange comes with a database migration and seeder to get the tables and data setup for you. 

With the backend running, from the terminal, execute the following commpands:
   - `$ ./vendor/bin/sail artisan migrate` - create the database and tables.
   - `$ ./vendor/bin/sail artisan db:seed --class StationSeeder` - seed the tables with example data.

**Step 5: Test**   
Test that you have set everything up correctly by browsing to the app url with the port number included eg `https://5000-yellow-seahorse-90du6iw7.ws-us13.gitpod.io/` - remember this url is an example, your GitPod url will be different but should work the same.

You should expect to see this:   

<img width="1171" alt="Screen Shot 2021-07-07 at 3 21 50 PM" src="https://user-images.githubusercontent.com/12945777/124695375-2d3b7a00-df37-11eb-8d1f-555a9d81e9ff.png">

## Development
When developing you need to start the backend and the frontend.

**Backend**   
To start the backend run the command below - Note if you have just followed the setup process, the backend will already be running!

```Bash
$ ./vendor/bin/sail up -d
```

- Models are found in `app/Models/` these use [Eloquent](https://laravel.com/docs/8.x/eloquent), an object-relational mapper (ORM) that does all the heavy lifting so the Model classes are small, sometimes empty.
- Controlers are found in `app/Http/Controlers/`.
- MySQL commandline access `$ ./vendor/bin/sail mysql -h localhost -u sail -ppassword password` but consider using [Database Migrations](https://laravel.com/docs/8.x/migrations#introduction)

**Frontend**   
To start the front end run the command below - this will automatically rebuild the frontend assets whenever you save a file, you will not need to refresh the website to see the changes.

```bash
$ npm run watch
```

- The ReactJS files are found in `resources/js/`.

## The Task

Once you have the website running there is a backend and a frontend challange.

Please note that you are not expected to know this framework! Use the internet to research and we can help you with any problems you might encounter, we are interested in your approach to solving this problem and giving it a go.  

Good Luck :)

### Backend

We want to track the history of a weather stations name, latitude, and longitude. You will need to make a change to the data structure and API to achieve this.

### Frontend

Now that we are tracking the changes to weather stations the ReactJS front end should display this history.
