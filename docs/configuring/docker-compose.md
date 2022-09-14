---
id: docker-compose
title: Preparing your application
tags: [docker-compose, application, configuration]
---

KuberLogic provides a simple way to deploy your application as SaaS by supporting `docker-compose.yml` structure.

:::caution
KuberLogic only supports a single application type configured via docker-compose.yml. Any change to this file will be propagated to all KuberLogic managed applications.
:::

You will be asked to enter path to the docker-compose.yml during the installation process, otherwise KuberLogic will be provisioned with demo application.

### Limitations
There are few limitations about supported docker-compose.yml:

#### Only one service can have its ports published
**Will work:**
```yml
version: "3"
services:
  - name: my-service
    image: my-image
    command:
      - "./run.sh"
- name: my-service-2
  image: my-image
  ports:
    - "8080:8080"
  command:
    - "./run.sh"
```

**Will not work:**
```yml
version: "3"
services:
  - name: my-service
    image: my-image
    ports:
      - "8080:8080"
    command:
      - "./run.sh"
- name: my-service-2
  image: my-image
  ports:
    - "8080:8080"
  command:
    - "./run.sh"
```

#### Only a single port can be published.
**Will work:**
```yml
version: "3"
services:
  - name: my-service
    image: my-image
    command:
      - "./run.sh"
- name: my-service-2
  image: my-image
  ports:
    - "8080:8080"
  command:
    - "./run.sh"
```

**Will not work:**
```yml
version: "3"
services:
  - name: my-service
    image: my-image
    command:
      - "./run.sh"
- name: my-service-2
  image: my-image
  ports:
    - "8080:8080"
    - "8081:8081"
  command:
    - "./run.sh"
```

#### Local volume mounts are not supported
**Will work:**
```yml
version: "3"
volumes:
  data:

services:
  - name: my-service
    image: my-image
    command:
      - "./run.sh"
    volumes:
      - data:/data
```

**Will not work:**
```yml
version: "3"
services:
  - name: my-service
    image: my-image
    command:
      - "./run.sh"
    volumes:
      - ./data:/data
```

### Templating `docker-compose.yml`
KuberLogic also supports templating certain service fields in `docker-compose.yml` by using Go templates.

Fields that can be templated are:
* `image`
* `command`
* `environment` variables' values

Service parameters that can be accessed in the template are:
* `Name`: The name of the service
* `Namespace`: The namespace of the service
* `Host`: The host of the service
* `Replicas`: The number of replicas of the service
* `VolumeSize`: The size of the volume of the service
* `Version`: The version of the service
* `TLSEnabled`: Whether the service is TLS enabled
* `Parameters`: The advanced parameters of the service

There are also a few functions that can be used for environment variables:
* `Endpoint`: Returns the endpoint of the service
* `Base64`: Encodes string using Base64 algorithm
* `GenerateKey <len: int,optional>`: Generate a random key of the specified length
* `GenerateRSAKey <bits: int,optional>`: Generate a random RSA key of the specified length
* `PersistentSecret <id: string,optional>`: Saves the value of the field in a persistent secret that will be used by the service.

:::caution
`Generate...` functions will generate different values each time the template is rendered. This will result in constant service restarts.

You should use `PersistentSecret` function to store the generated value of the field in a persistent secret. It will never pass secret data to the next chained function.
:::

#### Examples
##### Specify the image version
Provisioned services will use `version` as the image tag or "latest" if not specified.

```yml
version: "3"
services:
  - name: my-service
    image: my-image:{{ default .Version "latest" }}
    command:
      - "./run.sh"
    ports:
      - "8080:8080"
```

##### Configure service URL parameter
```yml
version: "3"
services:
  - name: my-service
    image: my-image
    command:
      - "./run.sh"
    ports:
      - "8080:8080"
    environment:
      - BASE_URL={{ .Endpoint }}
```

##### Generate a random key and save it to the persistent secret
```yml
version: "3"
services:
  - name: my-service
    image: my-image
    command:
      - "./run.sh"
    ports:
      - "8080:8080"
    environment:
      - SECRET_KEY={{ .GenerateKey 30 | PersistentSecret }}
```

##### Generate a random RSA key, encode it with Base64, persist in secret and share it between different services
RSA key will be generated and saved in a persistent secret under the "PRIVATE_RSA_KEY" key.
```yml
version: "3"
services:
  - name: my-service
    image: my-image
    command:
      - "./run.sh"
    ports:
      - "8080:8080"
    environment:
      - SECRET_KEY={{ .GenerateRSAKey 2048 | Base64 | PersistentSecret "PRIVATE_RSA_KEY" }}
  - name: my-service-2
    image: my-image
    command:
      - "./run.sh"
    ports:
      - "8080:8080"
    environment:
      - SECRET_KEY={{ .GenerateRSAKey 2048 | Base64 | PersistentSecret "PRIVATE_RSA_KEY" }}
```

### Supported docker-compose extensions
You can use the following extensions to your docker-compose.yml:

#### `x-kuberlogic-access-http-path`
