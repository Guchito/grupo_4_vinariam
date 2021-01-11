CREATE TABLE users (
	id int unsigned primary key auto_increment,
    name varchar(50) not null,
    last_name varchar(50) not null,
    user_name varchar(50) not null unique,
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
    brand_id int unsigned,
    
    

	created_at datetime default current_timestamp,
    updated_at datetime on update current_timestamp,
    deleted_at datetime
);

CREATE TABLE categories (
	id int unsigned primary key auto_increment,
    name varchar(50) not null,
    
    created_at datetime default current_timestamp,
    updated_at datetime on update current_timestamp,
    deleted_at datetime
);

CREATE TABLE product_category (
	id int unsigned primary key auto_increment,
    product_id int unsigned not null,
    category_id int unsigned not null,
    
    created_at datetime default current_timestamp,
    updated_at datetime on update current_timestamp,
    deleted_at datetime
);

CREATE TABLE sizes (
	id int unsigned primary key auto_increment,
    name int not null,
    
    created_at datetime default current_timestamp,
    updated_at datetime on update current_timestamp,
    deleted_at datetime    
);

CREATE TABLE product_size (
	id int unsigned primary key auto_increment,
    product_id int unsigned not null,
    size_id int unsigned not null,
    
    created_at datetime default current_timestamp,
    updated_at datetime on update current_timestamp,
    deleted_at datetime
);

CREATE TABLE brands (
	id int unsigned primary key auto_increment,
    name varchar(50),
    
    created_at datetime default current_timestamp,
    updated_at datetime on update current_timestamp,
    deleted_at datetime
);