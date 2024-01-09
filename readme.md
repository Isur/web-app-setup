# About
### What is this repo?
Repository contains example setup for web application with docker compose file.

It might be used to spin up development server without much config.

### What you can find here?
- docker-compose.yml with config for:
    - postgresql
    - nginx
    - backend
    - frontend
    - certbot
- configs
    - nginx.conf for server without ssl certs
    - nginx.conf for server with ssl certs

# Prerequisites
To use this you will need:
- server, vps
    - docker 
    - docker compose
- some knowledge of using ssh
- some apps that you can run here
    - front
    - backend

Optional:
- domain

# Basic setup
- In docker compose change values for:
    - docker image names
    - docker container names
    - (if you want use ssl) certbot {email} and {domain}
- Setup
    - environment variables for your projects
- nginx config
    - set correct domain
    - change other settings if needed
- images
    - upload images of containers or upload them to registry

# Profiles
Docker compose file has 3 profiles:
- ssl - to run app with ssl - starts frontend, backend, nginx, database
- no-ssl - to run app without ssl - starts frontend, backend, nginx, database,
- certbot - to just run a certbot

To run specific profile use `--profile` flag when running docker compose.

If domain is setup, use cerbot to generate certificates.

# SSL
If you want to have SSL certs you need a domain. Setup it in `config/nginx/nginx.conf`.
Change certbot command in `docker-compose.yml`, replace `{domain}` and `{email}`.

After those changes just run:
```bash
docker compose --profile certbot up
```

Certs are generated for some time only, so you need to refresh them from time to time! You can use cron or do it manually.

# Usage
Few commands to start apps in detach mode:

To run web without ssl:
```bash
docker compose --profile no-ssl up -d
```

To run web with ssl:
```bash
docker compose --profile ssl up -d
```


# Images
Uploading images with apps:

```bash
docker save image_name | ssh -C username@hostname docker load
```

Or use other ways to create or download images.

After updating the images remeber about restarting the container!

```bash
docker compose up -d
```
