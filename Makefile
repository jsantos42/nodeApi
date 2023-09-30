up-dev:
	docker-compose -f compose.yaml -f compose.dev.yaml up -d

up-dev-build:
	docker-compose -f compose.yaml -f compose.dev.yaml up -d --build

up-prod:
	docker-compose -f compose.yaml -f compose.prod.yaml up -d

up-prod-build:
	docker-compose -f compose.yaml -f compose.prod.yaml up -d --build

test:
	docker-compose -f compose.yaml -f compose.test.yaml up -d \
	&& docker compose exec api npx sequelize-cli db:migrate \
	&& docker compose exec api npm test

test-build:
	docker-compose -f compose.yaml -f compose.test.yaml up -d --build \
	&& docker compose exec api npx sequelize-cli db:migrate \
	&& docker compose exec api npm test

down:
	docker-compose down