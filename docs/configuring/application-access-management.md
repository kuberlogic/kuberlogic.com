---
id: application-access-management
title: Providing application access
tags: [ingress, application, configuration, docker-compose]
---

Applications, provisioned by KuberLogic are exposed via Kubernetes `Ingress` objects. That means that only HTTP based applications are supported at the moment.

# HTTPS
Application can be configured to be accessible by HTTPS protocol. Set `--tls_enabled` CLI flag when creating the application (or `tlsEnabled` field when using REST API) to enable HTTPS access.
KuberLogic will use the certificate/key pair that was provided during the installation process to configure secure access.

# Accessing multi-container application
By default, only one `docker-compose.yml` service can be exposed.
`x-kuberlogic-access-http-path` extension allows you to expose more than one service by specifying HTTP path prefixes. Default path prefix is `/`.

:::caution

Duplicates are not allowed and will trigger a service provisioning error.

:::

**Will work:**
```yml
version: "3"
services:
  - name: api # This will be exposed at `/api`
    x-kuberlogic-access-http-path: /api
    image: my-image
    command:
      - "./run.sh"
    ports:
      - "8080:8080"
  - name: web # This will be exposed on `/`
    image: web
    ports:
      - "8080:8080"
```

**Will not work:**
```yml
version: "3"
services:
  - name: api # This will be exposed at `/api`
    x-kuberlogic-access-http-path: /api
    image: my-image
    command:
      - "./run.sh"
    ports:
      - "8080:8080"
  - name: web # Duplicate HTTP path prefix!
    x-kuberlogic-access-http-path: /api
    image: web
    ports:
      - "8080:8080"
```




