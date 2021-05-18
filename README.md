# baltomsdn-docker-k8s

## This demostration is using Docker Desktop version 20.10.5, build 55c4c88

[Presentation on google slides here](https://docs.google.com/presentation/d/1Ssd8NyXdNxCZLZHM3V7Bp8NEpSpq45yYJ6kmPEYuRrI/edit?usp=sharing)
# Start with Docker Desktop K8s turned off

To prep for demonstration run ```./clean.sh```

This is a repo for demonstrating docker concepts for the [BaltoMSDN presentation on May 19th, 2021](https://www.meetup.com/BaltoMSDN/events/278021224/)

1. The most simple container to make sure docker is working on your computer
```
# docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete
Digest: sha256:f2266cbfc127c960fd30e76b7c792dc23b588c0db76233517e1891a4e357d519
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

This command will check if the image named hello-world exists in your local repository, if not it pull it from docker hub. The container will be created from the image and executed.

Now if you execute:
```
# docker images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    d1165f221234   2 months ago   13.3kB
```
Notice we now have the hello-world image in our local repository.

If you run the container again you will no longer see the 'Unable to find image  hello-world:latest' locally
latest: Pulling from library/hello-world

```
# docker run hello-world
```

Checking the docker images running we see that none are running. This is because the container
started and then exited.
```
# docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

We can also check for all processes with the -a switch and see the last container run and that it existed some seconds ago

```
# docker ps -a
CONTAINER ID   IMAGE         COMMAND    CREATED         STATUS                     PORTS     NAMES
b3a9f6cb1c41   hello-world   "/hello"   8 seconds ago   Exited (0) 8 seconds ago             sweet_cannon
```

## Another example of a docker image

```
# docker run alpine echo "hello world"
```

This will again check if the `apline` image exists locally, if not pull it from docker hub, create a container and start but this time passing the command `echo "hello world"`

```
# docker images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
alpine        latest    6dbb9cc54074   3 weeks ago    5.61MB
hello-world   latest    d1165f221234   2 months ago   13.3kB
```

## A more advanced container using .NETCore:

```
# docker run --rm -it -p 8000:80 mcr.microsoft.com/dotnet/samples:aspnetapp
Unable to find image 'mcr.microsoft.com/dotnet/samples:aspnetapp' locally
aspnetapp: Pulling from dotnet/samples
f7ec5a41d630: Pull complete
dbcaaf8b5596: Pull complete
9b8013b17b7e: Pull complete
d8d50a433506: Pull complete
1396b16d0d87: Pull complete
df21055ef612: Pull complete
cdcd70517634: Pull complete
Digest: sha256:559226d2d0ec98a83d3119904a3a34853e852c5878fbaf534d9e256b164c243c
Status: Downloaded newer image for mcr.microsoft.com/dotnet/samples:aspnetapp
warn: Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository[60]
      Storing keys in a directory '/root/.aspnet/DataProtection-Keys' that may not be persisted outside of the container. Protected data will be unavailable when container is destroyed.
warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]
      No XML encryptor configured. Key {80b2c513-d1bb-4cc7-b83a-40d5df04494d} may be persisted to storage in unencrypted form.
info: Microsoft.Hosting.Lifetime[0]
      Now listening on: http://[::]:80
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Production
info: Microsoft.Hosting.Lifetime[0]
      Content root path: /app
```
This time the container is pulled from DockerHub and started but it does not exit. You can see that it is listening on port 80 inside the container and we have mapped 8000 to port 80 when the container was started. The container was given a name of `aspnetcore_sample`

Visit http://localhost:8080/ to see the ASP.Net application running.

The code for this sample application can be found [dotnet-docker/samples](https://github.com/dotnet/dotnet-docker/tree/main/samples/aspnetapp/aspnetapp)

Now kill the docker container with Ctr-C.

Notice now if you try and refresh the webpage that the container is no longer serving the application.

Now launch again but this time we will add the -d flag to detach the process.

```
# docker run --rm -it -p 8000:80 -d mcr.microsoft.com/dotnet/samples:aspnetapp
a662388e370c1de41321ae7aa68fb49b2334ec4bcb48657073acc05eebf199e5
```

Check the docker container process:
```
# docker ps
CONTAINER ID   IMAGE                                        COMMAND                  CREATED          STATUS          PORTS                  NAMES
a662388e370c   mcr.microsoft.com/dotnet/samples:aspnetapp   "dotnet aspnetapp.dll"   54 seconds ago   Up 54 seconds   0.0.0.0:8000->80/tcp   jolly_chebyshev
```

You can stop this container using the container id or a portion of it that is unique:
```
# docker stop a66
```

### Start a local database
`./scripts.start-db.sh`

### create the database using the ORM 
`dotnet ef database update`

### start the service
`dotnet run`

### call API
`curl localhost:5000/beer | jq`

## Review Dockerfile
### Create a docker image
`docker build . -t beer-core`
### Show it cannot connect to the local database
`docker run -p 5000:5000 beer-core`

## Review docker-compose.yml

### Start postgres, pgadmin and beer-node
`docker-compose up`

### Push to docker hub
`docker tag beer-core marklindell/baltomsdn:beer-core`
`docker push marklindell/baltomsdn:beer-core`

### Show Docker images
https://hub.docker.com/repository/registry-1.docker.io/marklindell/baltomsdn/tags?page=1&ordering=last_updated

### Start a local database
`./start-db.sh`

### create the database using the ORM 
`npm run migrate`

### start the service
`npm start`

### Use swagger ui to create beer
http://localhost:3000/api

## Review Dockerfile
### Create a docker image
`docker build . -t beer-node`

### Show it cannot connect to the local database
`docker run beer-node`

### Review docker-compose.yml

### Start postgres, pgadmin and beer-node
`docker-compose up`

### Push to docker hub
`docker tag beer-node marklindell/baltomsdn:beer-node`
`docker push marklindell/baltomsdn:beer-node`

### Show docker hub
https://hub.docker.com/repository/registry-1.docker.io/marklindell/baltomsdn/tags?page=1&ordering=last_updated

# Kubernetes

## prep
`k delete namespace baltomsdn && k delete pv postgres-pv-volume`

`docker volume rm $(docker volume ls -q )`

### create the namespace
`kubectl create namespace baltomsdn`

# you will type 'kubectl' alot! consider adding to your .bashrc
`alias k=kubectl`
# set the current context to the namespace
`kubectl config set-context --current --namespace=baltomsdn`

# faster way to set the namespace
https://github.com/ahmetb/kubectx

`k ns baltomsdn`

## Review the poastgres.yaml

### create a postgres instance
`k apply -f postgres.yaml`

### show the deployment
`k get deployment`

`k get pods`

## Show Infra App
https://infra.app/

## review the beer-core.yaml
### deploy beer core
`k apply -f beer-core.yaml`

### get the node port
`export NODE_PORT=$(kubectl get services/beer-core -o go-template='{{(index .spec.ports 0).nodePort}}')`

`curl localhost:$NODE_PORT/beer | jq`

## Helm demonstraton

### add repository and update
`helm repo add cetic https://cetic.github.io/helm-charts`

`helm repo update`

### install postgres
`helm install my-postgres cetic/postgresql`

## Show in Infra App
