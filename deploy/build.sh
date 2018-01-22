cd ..
npm i
npm run build
cd deploy

rm -r dist
rm -r node_modules
rm -r config
cp -r ../dist dist
cp -r ../node_modules node_modules
cp -r ../config config

docker build . -t quay.io/buildo/metuppo:latest
docker push quay.io/buildo/metuppo:latest

rm -r dist
rm -r node_modules
rm -r config
