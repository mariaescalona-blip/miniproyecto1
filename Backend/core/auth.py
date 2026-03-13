import os
import requests
from jose import jwt

from users.models import UserProfile


SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY")


def get_user_from_token(request):

    auth_header = request.headers.get("Authorization")

    if not auth_header:
        return None

    token = auth_header.split(" ")[1]

    try:
        payload = jwt.get_unverified_claims(token)
        user_id = payload.get("sub")

        user, _ = UserProfile.objects.get_or_create(
            supabase_user_id=user_id
        )

        return user

    except Exception:
        return None