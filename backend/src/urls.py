from .views import *
from rest_framework.routers import DefaultRouter


app_name="src"

router=DefaultRouter()
router.register('geography',GeographyList,basename='Geography')
router.register('culture',CultureList,basename='Culture')
router.register('history',HistoryList,basename='History')
router.register('language',LanguageList,basename='Language')

urlpatterns=router.urls