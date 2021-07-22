# Specify base image
FROM node:alpine

# Install some dependencies
# new node version and base image require to copy files in this folder and work here
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

# Default command
CMD ["npm", "start"]

# Run docker build
# docker build -t rajanpupa/simpleweb .
# Run the image
# docker run -p 8080:8080 rajanpupa/simpleweb 
# On windows, localhost:8080 may not be the docker ip : docker-machine ip
# http://192.168.99.100:8080/ 
