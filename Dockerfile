FROM mhart/alpine-node:9.5
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "serve"]
EXPOSE 3000
