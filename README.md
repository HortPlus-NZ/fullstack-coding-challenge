# HortPlus Full Stack Coding Challenge

## Development

Starting the application

```bash
composer install
npm install
./vendor/bin/sail up -d
```

Initialise the database

```bash
./vendor/bin/sail migrate
./vendor/bin/sail db:seed --class StationSeeder
```

Stop the application

```bash
./vendor/bin/sail down
```
