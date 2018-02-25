FROM node:8.9.4-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN npm -v
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "build/server.js"]
EXPOSE 3000
