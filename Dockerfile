# Use official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Build Next.js app
RUN npm run build

# Tell Next.js to use the dynamic PORT assigned by Heroku
ENV PORT 8080

# Expose the dynamic port (Heroku uses its own PORT env var)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
