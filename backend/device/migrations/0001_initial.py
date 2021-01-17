# Generated by Django 3.1.3 on 2021-01-17 12:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('hume', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Device',
            fields=[
                ('is_attached', models.BooleanField(default=False)),
                ('uuid', models.UUIDField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(blank=True, max_length=258, null=True)),
                ('category', models.IntegerField(choices=[(0, 'Sensor'), (1, 'Actuator'), (2, 'Collection')])),
                ('type', models.IntegerField(choices=[(0, 'Thermometer'), (666, 'Custom')])),
                ('custom_type_name', models.CharField(blank=True, max_length=25, null=True)),
                ('hume', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hume.hume')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='device.device')),
            ],
        ),
        migrations.CreateModel(
            name='DeviceDataSource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_source_id', models.IntegerField()),
                ('name', models.CharField(max_length=50)),
                ('data_type', models.IntegerField(choices=[(0, 'String'), (1, 'Integer'), (2, 'Float'), (3, 'Boolean'), (4, '% Integer'), (5, '% Float')])),
                ('device', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='device.device')),
            ],
            options={
                'unique_together': {('device', 'data_source_id')},
            },
        ),
        migrations.CreateModel(
            name='DeviceReading',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField()),
                ('data', models.CharField(max_length=25)),
                ('data_source', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='device.devicedatasource')),
                ('device', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='device.device')),
            ],
        ),
        migrations.CreateModel(
            name='DeviceAction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action_id', models.IntegerField()),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(blank=True, max_length=258, null=True)),
                ('type', models.IntegerField(choices=[(0, 'Vanilla'), (1, 'Read'), (2, 'Stateful'), (3, 'Parameterized')])),
                ('data_source', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='device.devicedatasource')),
                ('device', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='device.device')),
            ],
            options={
                'unique_together': {('device', 'action_id')},
            },
        ),
    ]