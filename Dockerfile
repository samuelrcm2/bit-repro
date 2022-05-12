FROM node:lts-alpine AS BUILD_IMAGE

WORKDIR /usr/app

# install java to build antlr
RUN apk update && apk add openjdk8

# copy npm and package.json files to local
# https://docs.npmjs.com/docker-and-private-modules
# accept token parameter from outside
# COPY .production.npmrc .npmrc
COPY .npmrc .npmrc
COPY package.json package.json

# Expose port used in Storybook
EXPOSE 3000

# install dependencies
RUN yarn install --legacy-peer-deps --silent
RUN npm install http-server
# Copy application
COPY . .

# Build storybook
RUN npm run build-storybook -- -o ./dist

# delete custom npmrc to avoid token hijacking
RUN rm -f .npmrc

# Run storybook
CMD npx http-server ./dist -p 3000
