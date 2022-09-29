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
kuberlogic service add --id tenant1 --type docker-compose
```

#### Delete application

```bash
kuberlogic service delete --id demo
```
