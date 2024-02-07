# # Use a Node.js base image
# FROM node:16.17.0-alpine

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the TypeScript code
# RUN npm run build

# # Expose the port your app runs on
# EXPOSE 3000

# # Command to run the application
# CMD ["npm", "start"]


FROM openjdk:8-jdk
VOLUME /tmp
ADD target/spannerdemo-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]