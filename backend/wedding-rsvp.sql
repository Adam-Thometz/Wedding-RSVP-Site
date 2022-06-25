\echo 'Delete and recreate wedding db?'
\prompt 'Return for yes or control-C to cancel > '

DROP DATABASE wedding_rsvp;
CREATE DATABASE wedding_rsvp;
\connect wedding_rsvp

\i guest-schema.sql
\i guest-list.sql