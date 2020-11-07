FROM node as node

WORKDIR /opt/app

ADD client .

RUN npm i && npm run build

FROM marekhanzal/buffalo as build

WORKDIR /opt/app

COPY --from=node /opt/app/build /opt/app/src/main/resources/client/
ADD . .
RUN \
	gradle --no-daemon build --warning-mode all && \
	mkdir -p dist && tar x --strip-components=1 -f build/distributions/*.tar -C dist && \
	rm dist/bin/*.bat && mv dist/bin/* dist/bin/app

FROM marekhanzal/debian

ENV \
	JAVA_HOME="/usr/local/java"

WORKDIR /opt/app

RUN groupadd -r app && useradd -rg app app

ADD rootfs/runtime /

COPY --from=build /opt/app/dist .
COPY --from=build /usr/local/sdkman/candidates/java/current /usr/local/java

RUN chown app:app -R /opt/app

RUN /usr/local/java/bin/java -version
