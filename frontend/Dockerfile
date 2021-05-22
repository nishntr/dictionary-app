FROM node:15.14-alpine
WORKDIR /react
COPY . .

RUN npm install -g npm@7.14.0
RUN npm fund

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install -g serve
RUN npm run build