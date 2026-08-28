# Lieferando-Beispiel

A fullstack livecoding project built to teach JavaScript fundamentals while demonstrating how a frontend integrates with a backend over a REST API. It's built as a small food-ordering app ("Bestellapp") — a vanilla JS/HTML/CSS frontend backed by a Django REST Framework API — grown incrementally session by session.

Treat this README as a map to the project's goals and how to get it running, not a changelog of exactly what's implemented right now — that changes with every session.

## Project structure

```
.
├── Frontend/              # Vanilla HTML/CSS/JS ordering UI
│   ├── index.html
│   └── scripts/
└── LieferandoBackend/     # Django REST API
    ├── manage.py
    ├── requirements.txt
    ├── LieferandoBackend/ # project settings & root urls
    └── main/, authentication/, ...  # Django apps, added as the course progresses
```

## Frontend

### Goal

A plain HTML/CSS/JavaScript single-page app — no framework, no build step, no `package.json`, on purpose, to keep the focus on core JS (DOM manipulation, template strings, array methods, `async`/`await`, `fetch`). It renders meals, manages a basket, and demonstrates calling the backend API.

### Prerequisites

- Any modern browser
- Optionally, the [backend](#backend) running locally to exercise the API calls

### Quickstart

```bash
cd Frontend
# open directly in a browser
open index.html          # macOS
# or serve it locally
python3 -m http.server 5500
# then visit http://localhost:5500
```

### Usage

Browse the meals, add them to your basket, and place a mock order. The exact flow and feature set evolve as the course progresses — read `scripts/script.js` for the current behavior.

## Backend

### Goal

A Django project exposing a REST API via Django REST Framework that the frontend consumes. It starts small (serving meal data) and grows new apps/endpoints (e.g. authentication) as later sessions build on it.

### Prerequisites

- Python 3.12+ (the committed venv config targets 3.14)
- pip

### Quickstart

```bash
cd LieferandoBackend
python3 -m venv env
source env/bin/activate        # Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The API is now available at `http://127.0.0.1:8000/`. Check the `urls.py` files under `LieferandoBackend/` and each app for the current set of endpoints — new ones get added throughout the course.

To manage data via the Django admin, create an admin user first:

```bash
python manage.py createsuperuser
```

Then visit `http://127.0.0.1:8000/admin/`.

### Running tests

```bash
python manage.py test
```

### Editor setup (VS Code)

This repo commits `.vscode/settings.json`, which points the Python interpreter, Pylance/basedpyright and the Black formatter at the backend's venv. After creating the venv above:

1. Run **Python: Select Interpreter** in VS Code and choose `LieferandoBackend/env`
2. Reload the window if imports still show as unresolved

### Note

This is a learning project, not a production one — e.g. the dev `SECRET_KEY`/`DEBUG=True` in `settings.py` are Django's insecure defaults and features are intentionally left incomplete between sessions.

## Tech stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript (`async`/`await`, `fetch`)
- **Backend:** Django, Django REST Framework, SQLite, `django-cors-headers`
