# Visits

1. Run Redis container 
```
docker run redis
docker run -d redis // if you want to run in background
```

Our app still cannot connect to redis server

- we can use docker cli to run the networking configurations to connect the containers
- Use docker compose to connect the containers

### Docker Compose

- separate CLI that gets installed along with Docker
- Used to start up multiple Docker contianers at the same time
- Automates some of the long winded arguments we were passing to 'docker run'

`docker-compose.yml`

- can create multiple containers
- can configure containers to connect with each other

#### How does it work
- you specify a version for the `docker-compose` to use in the `docker-compose.yml` file
- you specify the services you want to start (containers)
- By default, docker-compose creates a network, and runs all the containers in the same network
- all services in the network can communicate with each other any way they please
- When creating redis-client in index.js, specify the redis server name rather than http url. Docker will resolve it

#### How to start
```
// start multiple containers at the same time
docker-compose up
// if you want to rebuild image and start
docker-compose up --build
// if you use -d flag, will run in background


// stop multiple containers 
docker-compose down
```

#### How to restart a container if server crash
```
const process = require('process')
process.exit(0); // to make the server crash

we can define a restart policy in docker-compose file
- "no"
- always
- on-failure
- unless-stopped
if you are specifying no, it should be a string "no", because in yml no is interpreted differently
```

```
docker-compose up
```
This command needs a docker-compose file in the local directory, and gives the status of those containers only.