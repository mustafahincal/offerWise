FROM node:16-alpine

WORKDIR /app-client

COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY . .

ENV NEXT_PUBLIC_BASE_ENDPOINT=http://localhost:4000/api
ENV NEXT_PUBLIC_ENDPOINT=http://localhost:4000

CMD ["yarn", "dev"]
