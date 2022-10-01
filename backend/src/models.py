from django.db import models

# Create your models here.
class Geography(models.Model):
    id=models.AutoField(primary_key=True,editable=False)
    image=models.ImageField(null=True,blank=True)
    slug=models.SlugField(null=True,blank=True)
    desc=models.TextField(null=True,blank=True)

    
class History(models.Model):
    id=models.AutoField(primary_key=True,editable=False)
    image=models.ImageField(null=True,blank=True)
    slug=models.SlugField(null=True,blank=True)
    desc=models.TextField(null=True,blank=True)

class Culture(models.Model):
    id=models.AutoField(primary_key=True,editable=False)
    desc=models.TextField(null=True,blank=True)
    slug=models.SlugField(null=True,blank=True)
    image=models.ImageField(null=True,blank=True)

class Language(models.Model):
    id=models.AutoField(primary_key=True,editable=False)
    desc=models.TextField(null=True,blank=True)
    slug=models.SlugField(null=True,blank=True)
    image=models.ImageField(null=True,blank=True)