# Getir-Backend Challenge

This project is built in order to meet expectations of employer. It is requested to create a project that handles incoming request to a specific path with a specific pattern. Path and pattern will be explained below with testing and deployment configurations.

## Deployment

### Local

You can use [Docker](https://www.docker.com/) in order to run API inside a container. To do that, follow steps listed below.

1. Build an image with provided Dockerfile

    ```bash script
    [sudo] docker build -t getir-assignment .
    ```

2. Run container locally with port forwarding

    ```bash script
    [sudo] docker run --rm -d -p [container_port]:[host_port] --name getir-assignment getir-assignment
    ```
