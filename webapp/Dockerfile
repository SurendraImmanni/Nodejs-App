# Use the official Node.js image from Docker Hub
FROM node:22

# Create Working Directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application on port 3000
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]