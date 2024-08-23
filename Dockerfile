FROM node:18 AS Production

WORKDIR /usr/src/ptitdoudounext

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn","start"]