FROM abiosoft/caddy:0.11.1

ADD ./Caddyfile /etc/Caddyfile
ADD ./site/ /srv/

EXPOSE 8080
