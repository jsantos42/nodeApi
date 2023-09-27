up:
	docker-compose up -d

up-prod:
	docker-compose -f compose.yaml -f compose.prod.yaml up -d

down:
	docker-compose down