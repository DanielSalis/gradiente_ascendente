# pull official base image
FROM node:18.17.1
ENV NODE_ENV development

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . /app

EXPOSE 3000

# start app
CMD ["npm", "run", "serve"]
