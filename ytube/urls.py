from django.conf.urls import url
from . views import get_video_title
urlpatterns=[
	url(r'^$',get_video_title,name="gvt")
]