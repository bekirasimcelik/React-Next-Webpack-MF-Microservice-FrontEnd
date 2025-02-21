# Stage 1: Build the Module Federation application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build output to the working directory
COPY --from=builder /app/dist ./dist

# Install serve to serve the static files
RUN npm install -g serve

# Expose port 3001
EXPOSE 3001

# Start the application
CMD ["serve", "-s", "dist", "-l", "3001"]
