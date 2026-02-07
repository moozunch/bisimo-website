# Gunakan Python ringan
FROM python:3.9-slim

# Set folder kerja
WORKDIR /app

# Copy requirements & Install
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy sisa file (termasuk folder model)
COPY . .

# Buat user baru (Syarat keamanan Hugging Face)
RUN useradd -m -u 1000 user
USER user
ENV HOME=/home/user \
    PATH=/home/user/.local/bin:$PATH

# Buka Port 7860
EXPOSE 7860

# Jalankan
CMD ["python", "chatbot.py"]