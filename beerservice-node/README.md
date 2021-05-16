./src/scripts.start-db.sh
npm start

docker build . -t beerservice
docker tag beerservice marklindell/baltomsdn:beerservice
docker push marklindell/baltomsdn:beerservice





