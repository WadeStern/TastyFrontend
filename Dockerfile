FROM node:18.13.0
ENV NODE_ENV=development
WORKDIR /react-app
COPY ./package.json /react-app
RUN npm install
EXPOSE 3000
EXPOSE 7200

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start
