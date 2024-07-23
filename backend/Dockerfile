# Dockerfile

FROM python:3.10

# Definir diretório de trabalho
WORKDIR /app

# Copiar requirements.txt e instalar dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código da aplicação
COPY . .

# Expor a porta usada pela aplicação
EXPOSE 8000

# Comando padrão para executar a aplicação
CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
