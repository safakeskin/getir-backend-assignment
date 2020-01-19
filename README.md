# Getir-Backend Challenge

This project is built in order to meet expectations of employer. It is requested to create a project that handles incoming request to a specific path with a specific pattern. Path and pattern will be explained below with testing and deployment configurations.

## Project wide dependencies

- [node.js](https://nodejs.org/) (version: 12.14.1) is used for developing app

- [npm](https://www.npmjs.com/) (version: 6.13.4) or [yarn](https://yarnpkg.com/) (version: 1.21.1) is used for testing and running app

- [typescript](https://www.typescriptlang.org/)

- [express](https://expressjs.com/) is used for creating http server

- [mongoose](https://mongoosejs.com/) is used for connecting MongoDB

- [dotenv](https://github.com/motdotla/dotenv#readme) is used for easily using environment variables

## Deployment

### Local with Docker

#### Dependencies

- [Docker](https://www.docker.com/)

You can use [Docker](https://www.docker.com/) in order to run API inside a container. To do that, follow steps listed below.

1. Build an image with provided Dockerfile

    ```bash script
    [sudo] docker build -t getir-assignment .
    ```

2. Run container locally with port forwarding

    ```bash script
    [sudo] docker run --rm -d -p [container_port]:[host_port] --name getir-assignment getir-assignment
    ```

### Local without Docker

You can use run app at your local system by following steps listed below in project directory.

1. Create an .env file in your root directory and enter required values for fields listed below.

    - API_PORT=[port_number]

    - DB_USER=[mongodb_username]

    - DB_PASS=[mongodb_user_password]

    - CASE_PATH=[auth_database]

2. install dependencies

    ```bash script
    npm i
    # or
    # yarn
    ```

3. Run project

    ```bash script
    npm start
    # or
    # yarn start
    ```

## Testing

### Running Tests

In order to test api, you can follow steps listed below.

1. Make sure that dependencies are installed

2. Run `npm test` or `yarn test` command

### Manuel testing

You can send request to your local server or directly test api running at <https://keskinsaf-getir-assignment.herokuapp.com/>. Request path should be `/record/findBetween`, i.e. for local testing, you should send `POST` request to `http://localhost:<port>/record/findBetween`.

Sample request bodies:

**Note that** each should be sent as `POST` request.

- ```json
  {
      "startDate": "2017-01-26",
      "endDate": "2017-01-28",
      "minCount": 2700,
      "maxCount": 3000
  }
  ```

- ```json
  {
      "startDate": "2016-01-26",
      "endDate": "2018-02-02",
      "minCount": 2700,
      "maxCount": 3000
  }
  ```
