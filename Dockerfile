FROM node:lts AS builder-ui

RUN mkdir /srv/code

COPY . /srv/code

WORKDIR /srv/code

RUN yarn install
RUN yarn parse
RUN yarn glossary
RUN yarn build

FROM nginx:1.17.5
COPY --from=builder-ui /srv/code/build /usr/share/nginx/html
