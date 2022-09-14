---
id: cli_app
title: Application management with CLI
tags: [CLI ,application, management]
---

#### Use help command to see the list of commands.
```shell
kuberlogic help
```

#### List all application instances

```bash
kuberlogic service list
```

#### Add application (application provisioning)

```bash
kuberlogic service add --id tenant1 --type docker-compose --replicas 1 --domain productname.site
```

#### Delete application

```bash
kuberlogic service delete --id demo
```

#### Additional parameters

Example:

```bash
kuberlogic service add --id demo --type docker-compose --limits.cpu 50 --host example.com --replicas 1
```

Optionally you may want to enable TLS secured access to a provisioned service:

```bash
kuberlogic service add --id demo --type docker-compose --limits.cpu 50 --host example.com --replicas 1 --tls_enabled
```