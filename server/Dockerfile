FROM node:14.15-slim

WORKDIR /app-server 

COPY package*.json ./
COPY . .

ENV JWT_SECRET=mustafa_test_public
ENV CLIENT_URL=http://localhost:3000
ENV REDIS_PORT=6379
ENV DB_URI=mongodb://mongodb:27017/kartaca-test
ENV PORT=4000

RUN npm install
CMD ["npm", "run", "dev" ]
