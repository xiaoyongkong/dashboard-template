from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON"}, status=400)

        username = data.get("username")
        password = data.get("password")

        if username == "admin" and password == "123":
            return JsonResponse({"message": "Login successful"}, status=200)
        else:
            return JsonResponse({"message": "Invalid credentials"}, status=401)

    return JsonResponse({"message": "Invalid method"}, status=405)
