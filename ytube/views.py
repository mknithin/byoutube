from django.shortcuts import render
from django.http import HttpResponse
from django import forms

class SearchForm(forms.Form):
	Search_string=forms.CharField()

def get_video_title(request):
	return render(request,'ytube/get_video_title.html',{'form':SearchForm})


