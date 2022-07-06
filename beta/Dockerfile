ARG RELEASE_TAG=development
ARG API_DOMAIN=stream.justifay.com
ARG APP_HOST=https://stream.justifay.com
ARG OAUTH_HOST=https://id.justifay.com
ARG STATIC_HOSTNAME=dash.justifay.coop
ARG API_BASE=/api
ARG NODE_ENV=development

FROM node:16-alpine

ARG RELEASE_TAG
ARG API_DOMAIN
ARG API_BASE
ARG APP_HOST
ARG OAUTH_HOST
ARG STATIC_HOSTNAME
ARG NODE_ENV

RUN apk --no-cache add git # just in case some modules needs to be installed using git

RUN mkdir /build
WORKDIR /build

RUN git clone --branch ${RELEASE_TAG} --single-branch --depth 1 https://github.com/litesolutions/justifay-stream-app

RUN cp /build/justifay-stream-app/beta/.env.example /build/justifay-stream-app/beta/.env

WORKDIR /build/justifay-stream-app

ENV NODE_ENV=development

RUN npm install
RUN npm install npm@latest -g

ENV API_DOMAIN $API_DOMAIN
ENV API_BASE $API_BASE
ENV APP_HOST $APP_HOST
ENV OAUTH_HOST $OAUTH_HOST
ENV STATIC_HOSTNAME $STATIC_HOSTNAME
ENV NODE_ENV $NODE_ENV

RUN npm run build # bankai build to beta/dist

EXPOSE 3000

CMD ["npm", "start"]
