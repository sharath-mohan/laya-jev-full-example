# Scalable FastAPI Template

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.13%2B-3776AB?style=for-the-badge&logo=python" alt="Python 3.13+" />
  <img src="https://img.shields.io/badge/FastAPI-0.142%2B-009688?style=for-the-badge&logo=fastapi" alt="FastAPI" />
  <img src="https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite" alt="SQLite" />
  <img src="https://img.shields.io/badge/SQLAlchemy-2.0%2B-CC2927?style=for-the-badge&logo=sqlalchemy" alt="SQLAlchemy" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License" />
</p>

A modern, scalable, and production-ready FastAPI starter template for building backend services with clean architecture, modular application structure, and developer-friendly defaults.

## Tags

`fastapi` `python` `backend` `api` `rest-api` `template` `scalable` `sqlite` `sqlalchemy` `pydantic` `uvicorn`

## Why this template?

This project is designed to help you start building real-world APIs without repetitive setup. It includes a clear folder structure, configuration management, database integration, and a simple CRUD example so you can focus on business logic instead of boilerplate.

## Features

- FastAPI application setup with modular routing
- SQLAlchemy integration with SQLite by default
- Pydantic models for request/response validation
- Clean separation of routes, models, services, and configuration
- Environment-based configuration using `.env` files
- Uvicorn for local development and production serving
- Easy to extend for authentication, pagination, background jobs, and more

## Tech Stack

- Python 3.13+
- FastAPI
- Pydantic
- SQLAlchemy
- SQLite
- Uvicorn
- Python-dotenv

## Project Structure

```text
fastapi-starter-template/
├── app/
│   ├── api/
│   │   └── user.py
│   ├── core/
│   │   ├── config.py
│   │   └── logging.py
│   ├── db/
│   │   └── schema.py
│   ├── models/
│   │   └── user.py
│   ├── services/
│   │   └── user_service.py
│   ├── __init__.py
│   └── main.py
├── .gitignore
├── .python-version
├── pyproject.toml
├── README.md
├── uv.lock
└── test.db
```

## Getting Started

### Prerequisites

- Python 3.13+
- `uv` (recommended) or `pip`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/fastapi-starter-template.git
cd fastapi-starter-template

# Create and activate a virtual environment
python -m venv .venv
source .venv/bin/activate

# Install project dependencies
python -m pip install --upgrade pip
python -m pip install -e .
```

If you are using `uv`, you can also install dependencies directly from `pyproject.toml`:

```bash
uv sync
```

### Run the application

```bash
uvicorn app.main:app --reload
```

The API will be available at:

- http://127.0.0.1:8000
- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

## API Example

This template includes a user CRUD module under `/api/v1/users`.

### Endpoints

- `GET /api/v1/users`
- `POST /api/v1/users`
- `GET /api/v1/users/{user_id}`
- `PUT /api/v1/users/{user_id}`
- `DELETE /api/v1/users/{user_id}`

### Example request

```bash
curl -X POST "http://127.0.0.1:8000/api/v1/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe"}'
```

## Configuration

The project uses a `Config` class defined in `app/core/config.py` and loads environment variables via `python-dotenv`.

You can create a `.env` file to override defaults:

```env
APP_NAME="ScalableFastAPIProject"
DEBUG=true
DB_NAME="test.db"
```

## Roadmap

- Authentication and authorization
- Role-based access control
- PostgreSQL and MySQL support
- Redis caching integration
- Background task workers
- Docker support
- CI/CD and automated testing

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and validate behavior
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Maintainer

Built for rapid application development and scalable backend engineering.

## Project Status

This repository is a solid starting point for building scalable FastAPI services and can be extended for production workloads, internal APIs, and open-source projects.
