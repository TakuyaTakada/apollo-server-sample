FROM python:3.8 AS development

WORKDIR /app

COPY requirements.txt /app/requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000
CMD python manage.py grpcrunserver 0.0.0.0:8000 --dev
