# Start a local database
`./scripts.start-db.sh`

# create the database using the ORM 
`dotnet ef database update`

# start the service
`dotnet run`

# call API
`curl localhost:5000/beer | jq`

# Review Dockerfile
# Create a docker image
`docker build . -t beer-core`

# Show it cannot connect to the local database
`docker run -p 5000:5000 beer-core`

# Review docker-compose.yml

# Start postgres, pgadmin and beer-node
`docker-compose up`

# Push to docker hub
`docker tag beer-core marklindell/baltomsdn:beer-core`
`docker push marklindell/baltomsdn:beer-core`

# Show Docker images
https://hub.docker.com/repository/registry-1.docker.io/marklindell/baltomsdn/tags?page=1&ordering=last_updated