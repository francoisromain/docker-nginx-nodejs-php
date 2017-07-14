# Setup Node.js, Apache and an nginx reverse-proxy with Docker

Related to [this article on Medium](https://medium.com/@francoisromain/setup-node-js-apache-and-an-nginx-reverse-proxy-with-docker-1f5a5cb3e71e).

    $ git clone https://github.com/francoisromain/docker-nginx-nodejs-php.git && cd docker-nginx-nodejs-php
    $ docker-compose up

Go to http://localhost:8000 and see the result: 

 - An nginx reverse-proxy forward incoming traffic to the appropriate server and directly serves static assets (images and scripts).
 - A Node.js server build pages with content pre-fetched from the PHP api (server side rendering).
 - A PHP Api running on Apache provides content as Json.