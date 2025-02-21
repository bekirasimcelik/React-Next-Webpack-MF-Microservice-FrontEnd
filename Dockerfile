# host/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

WORKDIR /app/host
RUN rm -rf node_modules && npm install && npm i webpack webpack-cli

WORKDIR /app/basket
RUN rm -rf node_modules && npm install

WORKDIR /app/products
RUN rm -rf node_modules && npm install && npm i webpack webpack-cli

WORKDIR /app

# Expose the port used by the host
EXPOSE 3000

# Start the application
CMD ["npm", "start"]