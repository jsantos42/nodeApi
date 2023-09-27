FROM node:18-alpine as base

COPY package*.json ./

RUN npm install

FROM base as production

RUN npm run build