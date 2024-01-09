# Basic setup
- In docker compose change values for:
    - docker image names
    - docker container names
    - certbot {email} and {domain}
- Setup
    - environment variables for your projects
- select volume with nginx config
    - config/nginx - for ssl connections
    - config/nginx-no-ssl - for connections without ssl
- nginx config
    - set correct domain
    - change other settings if needed

When using certbot - first docker compose up with no ssl config, so certifacates can be created.
