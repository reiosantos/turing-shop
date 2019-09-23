FROM node:12.4.0
ARG environment=docker
ENV APP_PATH=/usr/src/app NPM_CONFIG_LOGLEVEL=warn HOME=/root ENV=local

RUN echo "Acquire::By-Hash \"yes\"; ">/etc/apt/apt.conf.d/01byhash

RUN apt-get update -y && \
apt-get upgrade -y && \
apt-get install -y nano lsof nmap

WORKDIR $APP_PATH
COPY . $APP_PATH

RUN rm -rf node_modules

RUN npm i -g @angular/cli@8.3.3 && npm i && npm run build:$environment

EXPOSE 90 4200 9876

CMD ./docker/run.sh
