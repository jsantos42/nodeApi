COMPOSE_FILES = -f compose.yaml
COMPOSE_FILES_DEV = $(COMPOSE_FILES) -f compose.dev.yaml
COMPOSE_FILES_TEST = $(COMPOSE_FILES) -f compose.test.yaml
RUN_MIGRATION = docker compose exec api npx sequelize-cli db:migrate
RUN_SEEDING = docker compose exec api npx sequelize-cli db:seed:all
RUN_TEST = docker compose exec api npm test
BUILD_PROD = npm --prefix ./src run build

up-dev:
	docker-compose $(COMPOSE_FILES_DEV) up -d && $(RUN_MIGRATION)

up-dev-build:
	docker-compose $(COMPOSE_FILES_DEV) up -d --build \
	&& $(RUN_MIGRATION) && $(RUN_SEEDING)

up-prod:
	$(BUILD_PROD) && docker-compose $(COMPOSE_FILES) up -d \
	&& $(RUN_MIGRATION)

up-prod-build:
	$(BUILD_PROD) && docker-compose $(COMPOSE_FILES) up -d --build \
	&& $(RUN_MIGRATION)

test:
	docker-compose $(COMPOSE_FILES_TEST) up -d --build \
	&& $(RUN_MIGRATION) && $(RUN_TEST) && $(MAKE) down

down:
	docker-compose down

clean:
	docker compose exec api npx sequelize-cli db:migrate:undo:all; \
	docker-compose down
