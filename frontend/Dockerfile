FROM node:14.12.0

WORKDIR /usr/server/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]