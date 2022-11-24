FROM node:latest

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "yarn","start" ]