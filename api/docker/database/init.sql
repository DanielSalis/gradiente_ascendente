SELECT 'CREATE DATABASE hackaton'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'hackaton')\gexec
