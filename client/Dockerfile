FROM node:18.12.1
WORKDIR /app-client
COPY package.json ./
COPY . .
RUN npm install
RUN npm install -g live-server
RUN npm run build
EXPOSE 8080
CMD ["live-server", "--port=8080", "dist"]