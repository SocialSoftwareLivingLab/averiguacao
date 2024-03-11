#!/bin/bash

DB_NAME="averiguacao"
DB_USER="dev"
DB_PASSWORD="ABC123abc!@#"

if sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='$DB_USER'" | grep -q 1; then
    echo "User $DB_USER already exists. Skipping user creation."
else
    # Create a PostgreSQL user using the default PostgreSQL user and password
    echo "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';" | sudo -u postgres psql
    echo "ALTER USER $DB_USER CREATEDB;" | sudo -u postgres psql
fi

echo "CREATE DATABASE $DB_NAME WITH OWNER = $DB_USER;" | sudo -u postgres psql
echo "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;" | sudo -u postgres psql
