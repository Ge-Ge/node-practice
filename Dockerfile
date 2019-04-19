FROM node:8.15

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

# RUN npm i --production

RUN npm i --production --registry=https://registry.npm.taobao.org

COPY . /usr/src/app

EXPOSE 7100

CMD [ "npm", "run", "docker" ]
