FROM node:16-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

EXPOSE 4000
CMD [ "npm", "run" , "start:dev" ]
