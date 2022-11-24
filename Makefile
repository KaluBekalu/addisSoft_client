build:
	docker build -t front-end .

run:
	docker run -i -d -p 3000:3000 react-app