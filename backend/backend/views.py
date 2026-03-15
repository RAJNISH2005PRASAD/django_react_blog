from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Django Backend API. Visit /posts/ for posts or /admin/ for admin.")