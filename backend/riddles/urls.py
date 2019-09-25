from django.urls import path

from . import views

# Register your urls here.
urlpatterns = [
    path('users', views.get_users, name='users')
]

app_name = ""
