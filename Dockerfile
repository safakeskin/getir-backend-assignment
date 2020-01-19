FROM node:12.14.1-alpine

LABEL maintainer="keskinsaf@gmail.com"

# set working directory to /app
WORKDIR /app

# copy all files at the current directory into the /app in container
COPY ./ ./

# add typescript to image
RUN npm i -g typescript

# add pm2 and pm2-logrotate
RUN npm i -g pm2 && pm2 install pm2-logrotate

# install dependencies for project
RUN npm i

# compile typescript code into JavaScript
RUN "tsc"

# run in container
CMD ["pm2-runtime", "start", "./dist/bin/www.js", "--name", "api"]
