FROM node:14.12.0

WORKDIR /usr/server/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "start"]