# NGINX - load balancing example

# Requirements
 - Docker
 - Docker-Compose

# How it works
 Refer to commits to get explanation. :wink:

# Running it

  - open the terminal and spin up the containers

```sh
  $ docker-compose up
```

  - open another terminal window and run twice:

```sh
  $ curl http://localhost:8080
```
  you'll see that Nginx will balance the server will respond the request.
