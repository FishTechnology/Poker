FROM node:14 AS builder

WORKDIR /app

COPY package*.json  ./
COPY tsconfig*.json  ./
COPY .browserslistrc ./
COPY angular.json ./

RUN npm install

COPY . .

RUN npm run build --prod

RUN npm prune --production


FROM nginx:1.17-alpine as prod-stage

WORKDIR /app

COPY --from=builder /app /app

COPY nginx.config /etc/nginx/conf.d/default.conf


