## A simple static web server in Node

### Prerequisites
The static server requires `node` and `npm`. For infos on how to install these, please check, for example, the docs [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Before running the server
The server serves static files from the `/public` folder (this folder should be created in the root folder of the server).

That's why before starting the server, please ensure to:
* Create a `/public` folder inside the server's root folder
* Put all your files that you want in `/public`
* Run the server (see [here](#running-locally))

### Running locally
In order to run the server locally:
```bash
$ git clone git@github.com:mrstanb/node-static-server.git
$ npm install
$ npm start
```