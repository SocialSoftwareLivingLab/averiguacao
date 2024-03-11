#!/bin/bash

DB_NAME="averiguacao"
DB_USER="dev"
DB_PASSWORD="ABC123abc!@#"
MASTER_SCRIPT="db.sql"

export PGPASSWORD="$DB_PASSWORD"
psql -h localhost -U $DB_USER -d $DB_NAME -W -f $MASTER_SCRIPT
unset PGPASSWORD