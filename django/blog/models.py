from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    writer = models.CharField(max_length=10)
    # Post테이블이 새로 생성 될떄 시간
    created_at = models.DateTimeField(auto_now_add=True) 
    # 수정이 될 때, 그 시간 저장
    update_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    content = models.TextField()
    writer = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
