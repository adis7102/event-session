# EVENT SESSION

EVENT SESSION is a web that contain list of sessions.

This web is using `REACT.JS` and `json-server`.

In this page you can:
* Add new Session
* Add new Lesson
* Delete Session
* Delete Lesson
* Sort Session by drag and dropping the card
* Sort Lesson by drag and dropping the lesson

## Table of Contents
1. [Requirements](#requirements)
2. [Getting Started](#getting-started)

## Requirements
* node `v14.15.1 (LTS)`
* npm `6.14.9`


## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements),
you can start the site by running these commands:

```bash
$ npm install                   # Install project dependencies
$ npm run dev                     # Compile and launch on development environment
```

This web app is using `json-server` to mock the API.
Therefore you will need to run the `json-server` before starting the app.

first you have to open the second terminal in your command line,
And then start the `json-server` by running this command:

`npm run start-server`

To run the `REACT JS` you simply only need to run:

`npm run start`

While developing, you will probably rely mostly on `npm run start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start` |Serves your app at `localhost:3000`.|
|`start-server` |Serves your `json-server` at `localhost:4000`.|
|`build`|Compiles the application for deployment purpose.|
|`test`|Runs all tests in sequence|