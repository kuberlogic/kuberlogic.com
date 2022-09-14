# Uninstalling KuberLogic

1. Uninstall KuberLogic

```shell
kubectl delete ns kuberlogic
```

2. Cleanup all KuberLogic resources

```bash
# delete all KuberLogic resources
kubectl delete kuberlogic --all
# check and delete any PVs if there any left
kubectl get pv
kubectl delete pv <NAME>
```