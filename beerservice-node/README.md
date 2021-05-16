# Start a local database
`./start-db.sh`

# create the database using the ORM 
`npm run migrate`

# start the service
`npm start`

# Use swagger ui to create beer
http://localhost:3000/api

# Review Dockerfile
# Create a docker image
`docker build . -t beer-node`

# Show it cannot connect to the local database
`docker run beer-node`

# Review docker-compose.yml

# Start postgres, pgadmin and beer-node
`docker-compose up`

# Push to docker hub
`docker tag beer-node marklindell/baltomsdn:beer-node`
`docker push marklindell/baltomsdn:beer-node`

# Show docker hub
https://hub.docker.com/repository/registry-1.docker.io/marklindell/baltomsdn/tags?page=1&ordering=last_updated





