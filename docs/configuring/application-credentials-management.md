---
id: application-credentials-management
title: Providing application credentials management
tags: [credentials, application, configuration, docker-compose]
---
KuberLogic provides a possibility to manage credentials for managed applications.
This can be useful when you want to provide a reset password form for your end user or set user credentials during the application provisioning.

There are some prerequisites that should be met:
1. It should be possible to set credentials by calling a shell command. This command should be available inside the application container.
2. `docker-compose.yml` should be configured to signal that this functionality is supported.

## Providing a shell command for application management
It should be possible to set application credentials by calling `exec` command to the application container.
For example, you are providing an application `demo` and it is possible to set application credentials by calling `curl -X POST -d '{"username": "demo", "password": "demo123"}' <application endpoint>` command.
In this case make sure that `curl` is installed and is available inside the container image.

## Configuring your application `docker-compose.yml`
Following the example from above we now need to provide this configuration to your `docker-compose.yml` by setting `x-kuberlogic-set-password-cmd` parameter.

:::caution

`x-kuberlogic-set-password-cmd` parameter can be set only for one `service`.

:::

Example:
```yaml
---
version: "3.9"

services:
  demo:
    # set `x-kuberlogic-set-password-cmd` parameter here
    x-kuberlogic-set-password-cmd: curl -X POST -d '{"username": "{{ .Data.user }}", "password": {{ .Data.password }}}' <application endpoint>
    image: demo
    
  db:
    image: postgresql
```

`.Data` is a variable that is set by KuberLogic. `user` and `password` are fields of a `.Data` variable.
Fields can be set to any value, they are set dynamically by KuberLogic when it receives `update-credentials` command or REST API call.


### Examples
```shell
kuberlogic service credentials-update --service_id=demo token=test
```
When the command above is executed, `.Data` variable will have one field - `token` that will have the value `test`.

```shell
kuberlogic service credentials-update --service_id=demo username=example password=test123 email=example@example.com
```
When the command above is executed, `.Data` variable will have three fields - `username`, `password` and `email` set to respectful values.
