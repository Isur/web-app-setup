# About
### What is this repo?
Repository contains example setup for web application with docker compose file.

It might be used to spin up development server without much config.

There are example apps and github workflows with testing and deployment.

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
- github workflows
    - Testing on all branches for backend and frontend
    - Deployment on master for backend and frontend
- apps
    - example frontend app with nextjs
    - example backend app with nestjs
- deploy script
    - it will restart app after uploading new image

# Prerequisites
To use this you will need:
- server, vps
    - docker 
    - docker compose
- some knowledge of using ssh

Optional:
- domain - so you can use certbot
- github - so github actions can be run

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
- apps
    - adjust to your needs
- workflows
    - adjust to your needs
- github
    - setup secrets that will be used in workflows
- deploy
    - you might want to change profile that is used for deployment (ssl, no-ssl)

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
docker compose --profile {profile you want to use} up -d
```

# Automation
There are prepared github workflows that will upload image to the server and run restart script. 

You migth want to adjust names/script/profiles so everything is correctly setup.
