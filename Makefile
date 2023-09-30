up-dev:
	docker-compose -f compose.yaml -f compose.dev.yaml up -d

up-dev-build:
	docker-compose -f compose.yaml -f compose.dev.yaml up -d --build \
	&& docker compose exec api npx sequelize-cli db:migrate \
	&& docker compose exec api npx sequelize-cli db:seed:all

up-prod:
	npm --prefix ./src run build \
	&& docker-compose -f compose.yaml up -d \
	&& docker compose exec api npx sequelize-cli db:migrate

up-prod-build:
	npm --prefix ./src run build \
	&& docker-compose -f compose.yaml up -d \
	&& docker compose exec api npx sequelize-cli db:migrate

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

clean:
	docker compose exec api npx sequelize-cli db:migrate:undo:all; \
	docker-compose down
