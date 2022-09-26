from django.contrib import admin

# Register your models here.
from src.models import *

admin.site.register(Geography)
admin.site.register(History)
admin.site.register(Culture)
admin.site.register(Language)