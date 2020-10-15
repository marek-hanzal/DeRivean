FROM node as node

WORKDIR /opt/app

ADD client .

RUN npm i && npm run build

FROM marekhanzal/buffalo as build

WORKDIR /opt/app

COPY --from=node /opt/app/build /opt/app/src/main/resources/client/
ADD . .
RUN \
	gradle --no-daemon build && \
	mkdir -p dist && tar x --strip-components=1 -f build/distributions/*.tar -C dist && \
	rm dist/bin/*.bat && mv dist/bin/* dist/bin/app

FROM marekhanzal/debian

ENV \
    PATH="/usr/local/java/bin:$PATH"

WORKDIR /opt/app

RUN \
	apt-get update && \
	apt-get install -y --no-install-recommends --no-install-suggests \
		openssh-server

RUN groupadd -r app && useradd -rg app app

ADD rootfs/runtime /

RUN \
    echo 'root:1234' | chpasswd && \
    chmod 600 -R /etc/ssh && \
    chmod 600 -R /root/.ssh && \
    chmod +x -R /usr/local/bin && \
    mkdir -p /var/run/sshd && \
    chmod 0755 -R /var/run/sshd

COPY --from=build /opt/app/dist .
COPY --from=build /usr/local/sdkman/candidates/java/current /usr/local/java

RUN chown app:app -R /opt/app

RUN java -version
