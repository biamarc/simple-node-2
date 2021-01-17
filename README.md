# Overview
This is a very simple, bare-bones NodeJS project created for 
testing purpose.

This project is used to test:
- docker build
- docker hub publish
- travis CI integration

# Local Setup
* Install dependencies: `npm install`
* Run server: `node server.js`

# Container Setup
* Build image: `docker build .`
* Run container with image: `docker run {image_id}` where `image_id` can be retrieved by running `docker images` and found under the column `IMAGE ID`

# Container teardown
* Remove container: `docker kill {container_id}` where `container_id` can be retrieved by running `docker ps` and found under the column `CONTAINER ID`

# Docker publish
docker push YOUR_DOCKER_ID/simple-node
