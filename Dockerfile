# Use NodeJS base image
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./
COPY server.js ./

# Install dependencies
RUN npm install

# Bind the port that the image will run on
EXPOSE 8080

# Define the Docker image's behavior at runtime
CMD ["node", "server.js"]
