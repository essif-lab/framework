FROM node:lts

RUN mkdir /srv/code

COPY . /srv/code

WORKDIR /srv/code

RUN yarn global add serve

RUN yarn install
RUN yarn parse
RUN yarn glossary
RUN yarn build

WORKDIR /srv/code/build

CMD serve

EXPOSE 5000
