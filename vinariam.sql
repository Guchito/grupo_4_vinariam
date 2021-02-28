-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-01-2021 a las 06:50:33
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "-03:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vinariam`
--
CREATE DATABASE IF NOT EXISTS `vinariam` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vinariam`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Lopez', '2021-01-12 18:56:49', NULL, NULL),
(2, 'Bressia', '2021-01-12 18:57:14', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Malbec', '2021-01-12 18:59:06', NULL, NULL),
(2, 'Cabernet Sauvignon', '2021-01-12 18:59:20', NULL, NULL),
(4, 'Rosado', '2021-01-12 18:59:22', NULL, NULL),
(5, 'Blanco', '2021-01-12 18:59:23', NULL, NULL),
(6, 'Blend', '2021-01-12 18:59:23', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `detail` text DEFAULT NULL,
  `price` decimal(10,0) UNSIGNED NOT NULL,
  `discount` int(10) UNSIGNED DEFAULT 0,
  `stock` int(10) UNSIGNED NOT NULL,
  `img` varchar(255) NOT NULL,
  `class` varchar(20) DEFAULT 'no',
  `brand_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `detail`, `price`, `discount`, `stock`, `img`, `brand_id`, `created_at`, `updated_at`, `deleted_at`, `class`) VALUES
(1, 'Lopez Cabernet Sauvignon', 'Creado en 2011 para sumarse a la clásica marca. Añejado en toneles de roble francés. De color rubí profundo, con leves tonos caoba y aromas intensos. Excelente estructura, taninos suaves, untuoso y de largo final. Ideal para acompañar carnes rojas y comidas con salsas suaves.', '180', 0, 10, '1.png', 1, '2021-01-12 19:27:53', NULL, NULL, 'no'),
(2, 'Lopez Dulce Natural Blanco', 'Exquisito, fresco, equilibrado y delicado. Elaborado con uvas Torrontés Riojano, Moscatel y Viognier. Menos alcohol, más dulce natural. Disfrutalo bien frío y en todo momento. Ideal para compartir acompañado de platos dulces y como aperitivo.', '178', 0, 10, '2.png', 1, '2021-01-12 19:40:17', '2021-01-13 02:49:31', NULL, 'destacado'),
(3, 'Lopez Malbec', 'Emblemático vino argentino que desde su creación en 1973 conserva intacta la calidad convirtiéndose en un clásico indiscutible. Este Malbec, armónico y bien equilibrado, es añejado en grandes toneles de roble francés.', '144', 0, 10, '3.png', 1, '2021-01-12 19:41:43', NULL, NULL, 'no'),
(4, 'Lopez Rincon Famoso Blend', 'Cepas Sangiovese, Merlot y Malbec dan origen a este clásico vino argentino. Añejado en toneles de roble francés. Equilibrado, de taninos maduros y un largo final.', '245', 0, 10, '4.png', 1, '2021-01-12 19:48:55', '2021-01-13 02:49:38', NULL, 'destacado'),
(5, 'Lopez Chateau Vieux Blend', 'Destacado Blend Gran Reserva. Una cuidada combinación de uvas Cabernet Sauvignon, Merlot y Pinot Noir que se conserva desde sus primeras cosechas a principios del siglo XX. Añejado en grandes toneles de roble francés. Redondo, armónico y equilibrado.', '437', 0, 10, '5.png', 1, '2021-01-12 19:51:08', '2021-01-13 02:50:03', NULL, 'destacado'),
(6, 'Lopez Rincon Famoso Rosado', 'De color rosado pálido debido a su corta maceración. Una combinación entre Malbec y Pinot Noir, un blend fresco y frutado.', '247', 0, 10, '6.png', 1, '2021-01-12 19:51:46', NULL, NULL, 'no'),
(7, 'Lopez Montchenot 5 Años Blend', 'Su menor tiempo de guarda define una personalidad distinta. Más joven e intenso, de un particular color rojo brillante con destellos granate, suave aroma, armónico y con un largo final. Equilibrio entre crianza y frescura con mayor cuerpo y carácter.', '464', 0, 10, '7.png', 1, '2021-01-12 20:09:21', NULL, NULL, 'no'),
(8, 'Lopez Montchenot 10 Años Blend', 'De uvas excepcionales, añejado en grandes toneles y luego en su botella por 5 años más. Blend donde los aromas y sabores se unieron en una expresión profunda y delicada que conecta con el pasado descubriendo equilibrio y complejidad en cada trago.', '712', 0, 10, '8.png', 1, '2021-01-12 19:54:33', '2021-01-13 02:50:13', NULL, 'destacado'),
(9, 'Bressia Monteagrelo Cabernet Sauvignon', 'Color rojo intenso con tonalidades púrpuras propias del varietal. Perfecto equilibrio entre fruta y madera, muy pimentoso y especiado. Muy buen cuerpo, carnoso, con final de boca balanceado. Sin aristas, maduro y armónico.', '1356', 0, 10, '9.png', 2, '2021-01-12 20:06:41', NULL, NULL, 'no'),
(10, 'Bressia Monteagrelo Malbec', 'Este delicado Malbec impacta de inmediato por su color rojo intenso, con tonalidades púrpuras y entorno negro. En nariz es fuertemente atractivo, al ofrecer una combinación exquisita de aromas de frutos rojos y negros, combinados con la vainilla, el chocolate y el café, gracias a su paso por roble.', '955', 0, 10, '10.png', 2, '2021-01-12 20:07:49', NULL, NULL, 'no');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_category`
--

CREATE TABLE `product_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_category`
--

INSERT INTO `product_category` (`id`, `product_id`, `category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 2, '2021-01-12 20:14:50', NULL, NULL),
(2, 2, 5, '2021-01-12 20:15:03', NULL, NULL),
(3, 3, 1, '2021-01-12 20:15:21', NULL, NULL),
(4, 4, 6, '2021-01-12 20:15:35', NULL, NULL),
(5, 5, 6, '2021-01-12 20:15:47', NULL, NULL),
(6, 6, 4, '2021-01-12 20:16:20', NULL, NULL),
(7, 7, 6, '2021-01-12 20:17:08', NULL, NULL),
(8, 8, 6, '2021-01-12 20:17:16', NULL, NULL),
(9, 9, 2, '2021-01-12 20:17:53', NULL, NULL),
(10, 10, 1, '2021-01-12 20:18:03', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_size`
--

CREATE TABLE `product_size` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `size_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_size`
--

INSERT INTO `product_size` (`id`, `product_id`, `size_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, '2021-01-12 20:19:50', NULL, NULL),
(2, 2, 1, '2021-01-12 20:20:01', NULL, NULL),
(3, 3, 1, '2021-01-12 20:20:02', NULL, NULL),
(4, 4, 1, '2021-01-12 20:20:04', NULL, NULL),
(5, 5, 1, '2021-01-12 20:20:06', NULL, NULL),
(6, 6, 1, '2021-01-12 20:20:09', NULL, NULL),
(7, 8, 1, '2021-01-12 20:20:11', NULL, NULL),
(8, 9, 2, '2021-01-12 20:20:14', NULL, NULL),
(9, 10, 2, '2021-01-12 20:20:18', NULL, NULL),
(10, 7, 1, '2021-01-12 20:20:21', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 750, '2021-01-12 19:00:13', NULL, NULL),
(2, 1000, '2021-01-12 19:00:16', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `rol` int(11) NOT NULL DEFAULT 10,
  `dob` date DEFAULT NULL,
  `auth` tinyint DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `user_name`, `email`, `password`, `avatar`, `rol`, `dob`, `auth`, `created_at`, `updated_at`, `deleted_at`) VALUES
(15, 'admin', 'admin', 'admin', 'admin@admin.com', '$2a$10$kfavMTyWVOyIL7tr9pHsh.gxDaSpoOSRXLoKB9vpMzSKXRM2X6vl6', '1610487972954-.jpg', 20, '1991-01-01', '1', '2021-01-12 21:46:13', '2021-01-12 18:48:53', NULL),
(16, 'Agustin', 'Gaggero', 'Guchi', 'a_gaggero@hotmail.com', '$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS', '1610504257179-.PNG', 10, '1987-12-05', '1', '2021-01-12 23:34:36', '2021-01-13 02:17:37', NULL),
(17, 'Sofia', 'Mussi', 'Sofa', 'la_sofi@hotmail.com', '$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS', '1610504257179-.PNG', 10, '1987-12-05', '1', '2021-01-12 23:34:36', '2021-01-13 02:17:37', NULL),
(18, 'Violeta', 'Aguirre', 'Vilu', 'nono@hotmail.com', '$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS', '1610504257179-.PNG', 10, '1987-12-05', '1', '2021-01-12 23:34:36', '2021-01-13 02:17:37', NULL),
(20, 'Juan', 'Carlos', 'Charly', 'nonasdo@hotmail.com', '$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS', '1610504257179-.PNG', 10, '1987-12-05', '1', '2021-01-12 23:34:36', '2021-01-13 02:17:37', NULL),
(19, 'Franco', 'Marciano', 'Hola', 'lalalao@hotmail.com', '$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS', '1610504257179-.PNG', 10, '1987-12-05', '1', '2021-01-12 23:34:36', '2021-01-13 02:17:37', NULL);


-- ------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `total` decimal(10,0) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit_price` decimal(10,0) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `sub_total` decimal(10,0) UNSIGNED NOT NULL,
  `discount` int(10) UNSIGNED DEFAULT 0,
  `img` varchar(255) NOT NULL,
  `status` boolean DEFAULT 0,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `order_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indices de la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `size_id` (`size_id`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`user_name`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `product_size`
--
ALTER TABLE `product_size`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;



--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);

--
-- Filtros para la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD CONSTRAINT `product_category_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_category_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD CONSTRAINT `product_size_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_size_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `items_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
