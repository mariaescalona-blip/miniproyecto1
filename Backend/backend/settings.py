import os
from pathlib import Path
import dj_database_url


# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent


# SECURITY
SECRET_KEY = "django-insecure-secret-key"

DEBUG = True

ALLOWED_HOSTS = ["*"]


# APPLICATIONS
INSTALLED_APPS = [

    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "corsheaders",
    "rest_framework",

    "activities",

]


# MIDDLEWARE
MIDDLEWARE = [

    "corsheaders.middleware.CorsMiddleware",

    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",

    "django.middleware.csrf.CsrfViewMiddleware",

    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",

]


ROOT_URLCONF = "backend.urls"


# CORS (para conectar React en Vercel)
CORS_ALLOW_ALL_ORIGINS = True


# TEMPLATES
TEMPLATES = [

    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",

        "DIRS": [],

        "APP_DIRS": True,

        "OPTIONS": {

            "context_processors": [

                "django.template.context_processors.debug",

                "django.template.context_processors.request",

                "django.contrib.auth.context_processors.auth",

                "django.contrib.messages.context_processors.messages",

            ],

        },

    },

]


WSGI_APPLICATION = "backend.wsgi.application"


# DATABASE (SUPABASE POSTGRESQL)
DATABASES = {

    "default": dj_database_url.parse(
        "postgresql://postgres:adminproyecto123@db.ucpfienyknheehsaccwu.supabase.co:5432/postgres"
    )

}


# PASSWORD VALIDATION
AUTH_PASSWORD_VALIDATORS = []


# LANGUAGE
LANGUAGE_CODE = "es"


# TIME ZONE
TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# STATIC FILES
STATIC_URL = "/static/"


# DEFAULT PRIMARY KEY
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
