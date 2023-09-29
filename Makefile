up-dev:
	docker-compose -f compose.yaml -f compose.dev.yaml up -d

up-dev-build:
	docker-compose -f compose.yaml -f compose.dev.yaml up -d --build

up-prod:
	docker-compose -f compose.yaml -f compose.prod.yaml up -d

up-prod-build:
	docker-compose -f compose.yaml -f compose.prod.yaml up -d --build

test:
	docker-compose -f compose.yaml -f compose.test.yaml up

test-build:
	docker-compose -f compose.yaml -f compose.test.yaml up --build

down:
	docker-compose down