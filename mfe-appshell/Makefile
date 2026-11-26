SHELL := /bin/bash
.DEFAULT_GOAL := help

################################################################################
#  Microfrontend Makefile · npm | Docker
#
#  Same file in every microfrontend of the archetype: the name and version
#  come from package.json, and project-specific settings (port, URLs) live in
#  Docker/compose.yml.
################################################################################

SERVICE_NAME ?= $(shell node -p "require('./package.json').name" 2>/dev/null || basename "$(CURDIR)")
SERVICE_TAG  ?= $(shell node -p "require('./package.json').version" 2>/dev/null || echo latest)
COMPOSE      := docker compose -f Docker/compose.yml

CYAN  := \033[36m
BOLD  := \033[1m
RESET := \033[0m

define title
	@printf '$(BOLD)$(CYAN)==> %s$(RESET)\n' "$(1)"
endef

.PHONY: help install dev lint typecheck test build start \
        docker-build docker-up docker-down docker-logs rebuild clean

help: ## Show this help
	@printf '%s\n' '==========================================================='
	@printf '  %s %s · usage: make <target>\n' "$(SERVICE_NAME)" "$(SERVICE_TAG)"
	@printf '%s\n' '==========================================================='
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-13s$(RESET) %s\n", $$1, $$2}'

# ---------------------------------------------------------------------------
# Development
# ---------------------------------------------------------------------------
install: ## Install dependencies (npm ci)
	$(call title,Installing $(SERVICE_NAME) dependencies)
	npm ci

dev: ## Start the dev server
	npm run dev

lint: ## Lint the code with oxlint
	npm run lint

typecheck: ## Check types
	npm run typecheck

test: ## Run the tests
	npm test

build: ## Build to dist/
	$(call title,Building $(SERVICE_NAME))
	npm run build

start: ## Build and serve the app
	npm start

# ---------------------------------------------------------------------------
# Docker (one container per project)
# ---------------------------------------------------------------------------
docker-build: ## Build the image
	$(call title,Building the $(SERVICE_NAME) image)
	$(COMPOSE) build

docker-up: ## Build and start the container
	$(call title,Starting $(SERVICE_NAME))
	$(COMPOSE) up -d --build
	$(COMPOSE) ps

docker-down: ## Stop and remove the container
	$(COMPOSE) down

docker-logs: ## Follow the container logs
	$(COMPOSE) logs -f

rebuild: ## Recreate the image and container without cache
	$(call title,Recreating $(SERVICE_NAME))
	$(COMPOSE) down
	$(COMPOSE) build --no-cache
	$(COMPOSE) up -d

# ---------------------------------------------------------------------------
# Cleanup (this project only)
# ---------------------------------------------------------------------------
clean: ## Remove dist/, coverage/, the container and the image
	$(call title,Cleaning $(SERVICE_NAME))
	-$(COMPOSE) down --volumes --rmi all
	rm -rf dist coverage
