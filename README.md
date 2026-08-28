# Lieferando-Beispiel

A fullstack livecoding project built to teach JavaScript fundamentals while demonstrating how a frontend talks to a backend over a REST API. It's a small food-ordering app ("Bestellapp"): a vanilla JS/HTML/CSS frontend backed by a Django REST Framework API.

## Project structure

```
.
├── Frontend/              # Vanilla HTML/CSS/JS ordering UI
│   ├── index.html
│   └── scripts/
│       ├── db.js          # local mock meal data
│       ├── script.js      # app logic: rendering, basket, ordering
│       └── templates.js   # HTML template string helpers
└── LieferandoBackend/     # Django REST API
    ├── manage.py
    ├── requirements.txt
    ├── LieferandoBackend/ # project settings & root urls
    ├── main/              # Meal model + /api/meals/ endpoint
    └── authentication/    # scaffolded app, not wired up yet
```

## Frontend

### Description

A plain HTML/CSS/JavaScript single-page app — no framework, no build step, no `package.json`, on purpose, to keep the focus on core JS (DOM manipulation, template strings, array methods, `async`/`await`, `fetch`).

The meal list and basket are currently rendered from local mock data in `db.js`. On load, the app also calls the backend's `GET /api/meals/` endpoint and logs the result to the console, as a live demo of `fetch` talking to a real API — wiring that response into the rendered meal list is left as a teaching exercise.

### Prerequisites

- Any modern browser
- Optionally, the [backend](#backend) running locally if you want to see the `/api/meals/` fetch succeed in the console (CORS is fully open for local dev)

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

- Meals are grouped by category (`mainDishes`, `desserts`, `drinks`)
- Click **+** on a meal to add it to the basket
- The basket panel shows quantity controls (**+ / − / ✕**) and a running subtotal + flat 5$ delivery fee
- **Bestellen** ("Order") clears the basket — this is a frontend-only demo and does not send the order to the backend

## Backend

### Description

A Django project exposing a small REST API via Django REST Framework:

- **`main`** — the `Meal` model (`title`, `price`) and a read-only `GET /api/meals/` list endpoint
- **`authentication`** — scaffolded (model, serializer, view and url files exist but are empty and not included in the root urlconf yet); a starting point for a future auth lesson

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

The API is now available at `http://127.0.0.1:8000/api/meals/`.

To see meals in the API (and therefore in the frontend's console log), create an admin user and add some via the Django admin:

```bash
python manage.py createsuperuser
```

Then visit `http://127.0.0.1:8000/admin/` and add `Meal` entries.

### API

| Method | Endpoint       | Description                          |
| ------ | -------------- | ------------------------------------- |
| GET    | `/api/meals/`  | List all meals (`id`, `title`, `price`) |

### Running tests

```bash
python manage.py test
```

### Editor setup (VS Code)

This repo commits `.vscode/settings.json`, which points the Python interpreter, Pylance/basedpyright and the Black formatter at the backend's venv. After creating the venv above:

1. Run **Python: Select Interpreter** in VS Code and choose `LieferandoBackend/env`
2. Reload the window if imports still show as unresolved

### Known limitations

- `SECRET_KEY` and `DEBUG = True` in `settings.py` are Django's insecure dev-only defaults — do not deploy as-is
- `authentication` has no live endpoints yet
- The frontend's order button doesn't persist orders to the backend

## Tech stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript (`async`/`await`, `fetch`)
- **Backend:** Django, Django REST Framework, SQLite, `django-cors-headers`
