FROM node:18-alpine AS BUILD_IMAGE

RUN apk update && apk add --no-cache curl bash && rm -rf /var/cache/apk/*

ARG APP_DIR=/application

WORKDIR $APP_DIR

COPY package.json ./

# install dependencies
RUN npm i

COPY . .

EXPOSE 80

ENTRYPOINT ["npm", "start:dev"]
