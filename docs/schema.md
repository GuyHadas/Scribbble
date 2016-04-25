# Schema Information

## designs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
design_url  | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
x_pos       | integer   | not null
y_pos       | integer   | not null
user_id     | integer   | not null, foreign key (references users), indexed
design_id   | integer   | not null, foreign key (references designs), indexed


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
