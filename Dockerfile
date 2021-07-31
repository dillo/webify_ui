FROM node:14-alpine as builder

LABEL project="webify_ui"

ENV DOCKER_APP_ROOT=/app PORT=7000

RUN mkdir -p /app

WORKDIR $DOCKER_APP_ROOT

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE $PORT

CMD ["yarn", "start"]
