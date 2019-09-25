from django.urls import path

from . import views

# Register your urls here.
urlpatterns = [
    path('users', views.get_users, name='users'),
    path('upgrade-to-level-1', views.upgrade_to_level_1, name='upgrade_to_level_1'),
]

app_name = ""
