---
id: application-instances-update
title: Updating application instances
tags: [update, application, configuration]
---
Application instances update is an important part of day to day job of a SaaS offering.
KuberLogic supports instance upgrade by providing a new version of container image and allows to accomplish this task in a several ways.

# Updating all application instances by changing `docker-compose.yml`
The simplest way to upgrade application instances is to update container image in `docker-compose.yml` and reconfigure KuberLogic.

Example:
```yaml
services:
  demo:
    image: demo:v1 # change this to demo:v2 to upgrade applications to v2
```

This option has some drawbacks though:
* All application instances will attempt to upgrade at the same time. This might result in hitting container registry limits or exhausting network
* All application will go down if there are any issues with the new version. It will not be possible to test the upgrade.

# Updating application instances by setting the version in KuberLogic
It is also possible to trigger an update of an individual instance by setting `--version` option (or `version` field in REST API call) when editing or creating the application instance.
This, of course, requires `docker-compose.yml` changes to be made in advance and provided to KuberLogic (see installation guide):

```yaml
services:
  demo:
    image: demo:{{ default .Version "v1" }} # when a `version` field is not set use v1
```

The snippet above uses Go template support for `docker-compose.yml`. To learn more see the [configuration guide](/docs/configuring/docker-compose)

Then, to change the instance version use command:
`kuberlogic edit --id <application instance id>  --version <new version>`
