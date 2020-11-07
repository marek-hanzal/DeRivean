FROM node as node

WORKDIR /opt/app

ADD client .

RUN npm i && npm run build

FROM marekhanzal/buffalo as build

WORKDIR /opt/app

COPY --from=node /opt/app/build /opt/app/src/main/resources/client/
RUN echo "$VERSION" > /opt/app/src/main/resources/client/version.json
ADD . .
RUN \
	gradle --no-daemon build --warning-mode all && \
	mkdir -p dist && tar x --strip-components=1 -f build/distributions/*.tar -C dist && \
	rm dist/bin/*.bat && mv dist/bin/* dist/bin/app

FROM alpine

RUN apk add --update supervisor openjdk11-jre && rm  -rf /tmp/* /var/cache/apk/*

WORKDIR /opt/app

RUN adduser --disabled-password --home /opt/app app app

ADD rootfs/runtime /

COPY --from=build /opt/app/dist .

RUN chown app:app -R /opt/app

RUN java -version

CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]
