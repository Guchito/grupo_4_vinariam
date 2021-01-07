CREATE TABLE users (
	id int unsigned primary key auto_increment,
    name varchar(50) not null,
    last_name varchar(50) not null,
    username varchar(50) not null unique,
    email varchar(50) not null unique,
    password varchar(255) not null,
    avatar varchar(255) not null,
    rol int not null default 10,
    dob date,
    
    created_at datetime default current_timestamp,
    updated_at datetime on update current_timestamp,
    deleted_at datetime
);

CREATE TABLE products (
	id int unsigned primary key auto_increment,
    name varchar(255) not null,
    detail text,
    price decimal unsigned not null,
    discount int unsigned default 0,
    stock int unsigned not null,
    img varchar(255) not null,
    category varchar(50) not null,
    
    

	created_at datetime default current_timestamp,
    updated_at datetime on update current_timestamp,
    deleted_at datetime
);