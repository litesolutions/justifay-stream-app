ARG RELEASE_TAG=development
FROM node:16-alpine

ARG RELEASE_TAG

RUN apk --no-cache add git # just in case some modules needs to be installed using git

RUN mkdir /build
WORKDIR /build

RUN git clone --branch ${RELEASE_TAG} --single-branch --depth 1 https://github.com/litesolutions/justifay-stream-app

RUN touch /build/justifay-stream-app/beta/.env

WORKDIR /build/justifay-stream-app

ENV NODE_ENV=development

RUN npm install
RUN npm install npm@latest -g

RUN npm run build # bankai build to beta/dist

EXPOSE 3000

CMD ["npm", "start"]
