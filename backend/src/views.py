from django.shortcuts import render
from rest_framework import viewsets
from src.models import *
from src.serializers import *
from rest_framework.response import Response
# Create your views here.
class GeographyList(viewsets.ViewSet):
    queryset=Geography.objects.all()
    
    def list(self,request):
        serializer_class=GeographySerializers(self.queryset,many=True)
        return Response(serializer_class.data)

class HistoryList(viewsets.ViewSet):
    queryset=History.objects.all()
    
    def list(self,request):
        serializer_class=HistorySerializers(self.queryset,many=True)
        return Response(serializer_class.data)
 
class CultureList(viewsets.ViewSet):
    queryset=Culture.objects.all()
    
    def list(self,request):
        serializer_class=CultureSerializers(self.queryset,many=True)
        return Response(serializer_class.data)

class LanguageList(viewsets.ViewSet):
    queryset=Language.objects.all()
    
    def list(self,request):
        serializer_class=LanguageSerializers(self.queryset,many=True)
        return Response(serializer_class.data)

