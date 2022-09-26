from django.db import models

# Create your models here.
class Geography(models.Model):
    desc=models.TextField(null=True,blank=True);

class History(models.Model):
    desc=models.TextField(null=True,blank=True);

class Culture(models.Model):
    desc=models.TextField(null=True,blank=True);

class Language(models.Model):
    desc=models.TextField(null=True,blank=True);