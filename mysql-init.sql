CREATE USER IF NOT EXISTS 'aipdia'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
GRANT ALL PRIVILEGES ON aipdiaa_db.* TO 'aipdia'@'%';
FLUSH PRIVILEGES;