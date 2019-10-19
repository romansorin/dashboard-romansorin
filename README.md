# rs Dashboard

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Dashboard for managing client invoices, subscriptions, and projects.

This project uses React as the front-end library, and Laravel for back-end and API. 

## Install

This project uses [node](http://nodejs.org), [npm](https://npmjs.com), and [composer](https://getcomposer.org) for package management.

```sh
$ git clone https://github.com/romansorin/dashboard-romansorin
# Clone local copy of repo
$ composer install && npm install
# Install vendor and node packages
```

## Usage

Because React is not traditionally paired with Laravel, two separate processes will need to be run by proxy to take advantage of HMR and webpack.

```sh
$ cp .env.example .env
# Copy and configure .env as needed. The ASSET_URL variable MUST point to the URL of the React server (default: 127.0.0.1:9000) — otherwise, the proxy will not work.
$ php artisan key:generate && php artisan migrate
# Following providing a database in .env, generate the application key and migrate the tables
$ php artisan serve
# Run the back-end server
$ npm run hot
# Run the react server on specified port
```

## Maintainers

[@romansorin](https://github.com/romansorin).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/romansorin/dashboard-romansorin/issues/new) or submit PRs.
