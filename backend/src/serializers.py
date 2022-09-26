from rest_framework import serializers
from src.models import *

class GeographySerializers(serializers.ModelSerializer):
    class Meta:
        model=Geography
        fields="__all__"

class HistorySerializers(serializers.ModelSerializer):
    class Meta:
        model=History
        fields="__all__"

class CultureSerializers(serializers.ModelSerializer):
    class Meta:
        model=Culture
        fields="__all__"

class LanguageSerializers(serializers.ModelSerializer):
    class Meta:
        model=Language
        fields="__all__"