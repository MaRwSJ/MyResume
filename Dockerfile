FROM				node:latest

MAINTAINER 	Marwa 

RUN         mkdir -p /var/www/src/
COPY        ./src/ /var/www/src/
WORKDIR     /var/www/src
RUN         npm i

ENTRYPOINT 	npm run-script dev
