FROM node:20.14.0
WORKDIR /nodejs-app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm","run","start"]