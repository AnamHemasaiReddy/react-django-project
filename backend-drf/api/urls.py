from django.urls import path,include
from acounts import views as UserViews


urlpatterns = [
    path('register/',UserViews.RegisterView.as_view()),
]
