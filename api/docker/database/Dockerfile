FROM postgres:15.1-alpine

LABEL author="Mateus Siqueira Carneiro"
LABEL description="Postgres Image for Hackaton API"
LABEL version="1.0"

COPY *.sql /docker-entrypoint-initdb.d/
