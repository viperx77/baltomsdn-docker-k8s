kubectl create namespace baltomsdn
kubectl config set-context --current --namespace=baltomsdn
  k ns baltomsdn
k apply -f postgres.yaml
k apply -f beerservice.yaml

k expose deployment/beerservice-deployment --type="NodePort" --port 3000
k describe services/beerservice

export NODE_PORT=$(kubectl get services/beerservice -o go-template='{{(index .spec.ports 0).nodePort}}')
echo NODE_PORT=$NODE_PORT


kubectl delete service postgres 
kubectl delete deployment postgres
kubectl delete configmap postgres-config
kubectl delete persistentvolumeclaim postgres-pv-claim
kubectl delete persistentvolume postgres-pv-volume
