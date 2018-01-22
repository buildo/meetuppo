FROM node:6

ENV SUPPRESS_NO_CONFIG_WARNING noconfig

ADD dist/ /srv
ADD node_modules /srv/node_modules
ADD config /config

CMD node /srv/index.js