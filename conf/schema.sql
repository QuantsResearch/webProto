CREATE TABLE IF NOT EXISTS TODO (
    ID int,
    TEXT varchar(1000),
    COMPLETED boolean NOT NULL,
    PRIMARY KEY (ID)
);