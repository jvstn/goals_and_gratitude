FROM node:lts-slim

WORKDIR /client

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN yarn install
COPY . .


# RUN yarn build

CMD ["yarn", "dev"]