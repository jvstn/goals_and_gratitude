FROM node:lts-slim

WORKDIR /server

COPY package.json .
COPy tsconfig.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build
CMD ["yarn", "start"]
