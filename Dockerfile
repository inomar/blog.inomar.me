FROM node:10

RUN mkdir -p /myapp/client

WORKDIR /myapp/client

COPY package.json package.json

RUN set -ex; \
    yarn install

COPY . /myapp/client

RUN yarn build

EXPOSE 8080
# ENTRYPOINT [ "/bin/bash" ]
# CMD "-c \"if [ ! -d \"node_modules\" ]; then yarn; fi; yarn dev\""