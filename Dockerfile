FROM node as node

WORKDIR /opt/app

ADD client .

RUN npm i && npm run build

FROM marekhanzal/buffalo as build

WORKDIR /opt/app

COPY --from=node /opt/app/build /opt/app/src/main/resources/client/
ADD src .
ADD build.gradle .
ADD gradle.properties .
ADD settings.gradle .
RUN \
	gradle --no-daemon distTar && \
	mkdir -p dist && tar x --strip-components=1 -f build/distributions/*.tar -C dist && \
	rm dist/bin/*.bat && mv dist/bin/* dist/bin/app

FROM marekhanzal/debian

WORKDIR /opt/app

RUN \
	apt-get update && \
	apt-get install -y --no-install-recommends --no-install-suggests \
		default-jdk
RUN groupadd -r app && useradd -rg app app

ADD rootfs/runtime /

COPY --from=build /opt/app/dist .

CMD ["tail", "-f"]
