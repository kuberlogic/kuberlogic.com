---
id: application-configuration
title: Configuring managed application instances
tags: [configuration, application, configuration]
---

KuberLogic runs application in Kubernetes pods.
It expects that an application container image will be self-contained and will have everything that the application requires.

Still, applications need to be configured and there are a number of ways to do so.
All examples show how to configure an application via `docker-compose.yml`.

# Environment variables
Standard de-facto in a Kubernetes world. Application container will have the environment variable `TOKEN` set to `test`.

```yaml
version: "3"
services:
  - name: my-service
    image: my-image
    environment:
      - TOKEN=test
```

You can also use templating functions that are provided by Kuberlogic:
```yaml
version: "3"
services:
  - name: my-service
    image: my-image
    environment:
      - BASE_URL={{ Endpoint "localhost" }}
```

To learn more about templating, see [this page](/docs/configuring/docker-compose).

# Providing secret configuration parameters
An example above shows how to configure a static environment variable.
This method has one downside: all your application instances will have environment variable `TOKEN` set to the same value.

This can be changed, when using combining templating with `x-kuberlogic-secrets` extension.

```yaml
version: "3"
x-kuberlogic-secrets: # this extension can only be set at the root of docker-compose
  token: "{{ GenerateKey 16 }}"

services:
  - name: my-service
    image: my-image
    environment:
      - TOKEN={{ Secrets "token" }} # we reference a secret `token` defined in `x-kuberlogic-secrets` extension.
```

In this example all application instances will have a `TOKEN` variable set to the random 16 characters string.

:::note
Secrets defined in `x-kuberlogic-secrets` are static during the application instance lifetime.
They will not be updated if already set.
:::

# Providing configuration files
Some applications also require config files to be available locally.
Configuration files content can be set with `x-kuberlogic-file-configs` extension on the service level.

Example:
```yaml
version: "3"
x-kuberlogic-secrets:
  key: {{ GenerateKey 16 }}

services:
  - name: web
    image: my-image
    x-kuberlogic-file-confis:
      /etc/app.cfg: |
        app=web
        api-key={{ Secret "key" }}
  - name: api
    image: my-api
    x-kuberlogic-file-configs:
      /etc/app.cfg: |
        app=api
        api-key={{ Secret "key" }}
```

In the example above, both container will have the file `/etc/web.cfg` available locally, but the content will be specific for each service.

:::tip
You can also you `docker-compose.yml` templating when providing configuration files content.
:::