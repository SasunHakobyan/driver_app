const createTableQuery = `

CREATE TABLE IF NOT EXISTS client (
    id SERIAL,
    username varchar(128) NOT NULL,
    password varchar(128) NOT NULL,
    card_credentials varchar(128) NOT NULL,
    register_date date NOT NULL
);

CREATE TABLE IF NOT EXISTS admin (
    id SERIAL,
    username varchar(128) NOT NULL,
    password varchar(128) NOT NULL,
    owner boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS driver (
    id SERIAL,
    username varchar(128) NOT NULL,
    password varchar(128) NOT NULL,
    tariff varchar(128) NOT NULL,
    rating smallint NOT NULL,
    register_date date NOT NULL
);
`

module.exports = {
    createTableQuery
};