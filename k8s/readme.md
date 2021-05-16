# prep
k delete namespace baltomsdn && k delete pv postgres-pv-volume
docker volume rm $(docker volume ls -q )
# start
kubectl create namespace baltomsdn && k ns baltomsdn
kubectl config set-context --current --namespace=baltomsdn

k apply -f postgres.yaml
k apply -f beer-core.yaml

k get services

export NODE_PORT=$(kubectl get services/beer-core -o go-template='{{(index .spec.ports 0).nodePort}}')
curl localhost:$NODE_PORT/beer | jq

