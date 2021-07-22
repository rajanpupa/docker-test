# simpleweb

* To build the image

```
docker build -t rajanpupa/simpleweb .
```

* To run the image

```
docker run -p 8080:8080 rajanpupa/simpleweb
```

* To find the ip of docker machine
```
docker-machine ip
```

* To see the webpage
```
http://<ip>:port
```

* To shell access a container 
```
docker run -it rajanpupa/simpleweb sh
docker exec -it <container id> sh
```

* to get the container id
```
docker ps
```