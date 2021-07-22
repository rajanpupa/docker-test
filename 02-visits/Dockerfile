FROM node:alpine

WORKDIR /usr/app

# copy package.json and install dependencies
COPY package*.json /usr/app/
RUN npm install

# copy everything else
COPY . /usr/app/

# Default command
CMD ["npm", "start"]
