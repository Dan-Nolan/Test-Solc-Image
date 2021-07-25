FROM node:12-alpine

RUN set -ex; \
    mkdir /workspace;

COPY . /workspace

RUN chmod 755 /workspace/solc-linux-amd64-v0.7.5+commit.eb77ed08
RUN chmod 755 /workspace/solc-linux-amd64-v0.7.6+commit.7338295f

WORKDIR /workspace
RUN node index.js;
