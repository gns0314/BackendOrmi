# Generated by Django 4.2.2 on 2023-06-21 06:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_comment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='create_at',
            new_name='created_at',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='create_at',
            new_name='created_at',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='updated_at',
            new_name='update_at',
        ),
    ]
