CREATE DATABASE  IF NOT EXISTS `vinariam` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `vinariam`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vinariam
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Lopez','2021-01-12 18:56:49',NULL,NULL),(2,'Bressia','2021-01-12 18:57:14',NULL,NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Malbec','2021-01-12 18:59:06',NULL,NULL),(2,'Cabernet Sauvignon','2021-01-12 18:59:20',NULL,NULL),(4,'Rosado','2021-01-12 18:59:22',NULL,NULL),(5,'Blanco','2021-01-12 18:59:23',NULL,NULL),(6,'Blend','2021-01-12 18:59:23',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `unit_price` decimal(10,0) unsigned NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  `sub_total` decimal(10,0) unsigned NOT NULL,
  `discount` int(10) unsigned DEFAULT 0,
  `img` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT 0,
  `user_id` int(10) unsigned DEFAULT NULL,
  `product_id` int(10) unsigned DEFAULT NULL,
  `order_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `items_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Lopez Cabernet Sauvignon',180,1,180,0,'1.png',0,21,NULL,1,'2024-10-12 17:20:56','2024-10-12 17:21:30',NULL),(2,'Lopez Cabernet Sauvignon',180,1,180,0,'1.png',0,21,NULL,2,'2024-10-12 17:21:46','2024-10-12 17:21:47',NULL),(5,'Lopez Cabernet Sauvignon',180,1,180,0,'1.png',0,22,NULL,3,'2024-12-27 10:53:20','2024-12-27 10:53:23',NULL),(10,'Lopez Cabernet Sauvignon',180,1,180,0,'1735297621202-.png',0,22,NULL,4,'2024-12-27 11:44:19','2024-12-27 11:44:21',NULL),(11,'Lopez Dulce Natural Blanco',178,1,178,0,'2.png',0,22,NULL,5,'2024-12-28 21:17:19','2024-12-28 21:17:41',NULL),(12,'Lopez Cabernet Sauvignon',180,1,180,0,'1.png',0,22,NULL,6,'2024-12-28 21:45:51','2024-12-28 21:46:00',NULL),(13,'Lopez Dulce Natural Blanco',178,1,178,0,'2.png',0,22,NULL,6,'2024-12-28 21:45:57','2024-12-28 21:46:00',NULL);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `total` decimal(10,0) unsigned NOT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,180,21,'2024-10-12 17:21:30','2024-10-12 17:21:30',NULL),(2,180,21,'2024-10-12 17:21:47','2024-10-12 17:21:47',NULL),(3,180,22,'2024-12-27 10:53:23','2024-12-27 10:53:23',NULL),(4,180,22,'2024-12-27 11:44:21','2024-12-27 11:44:21',NULL),(5,178,22,'2024-12-28 21:17:41','2024-12-28 21:17:41',NULL),(6,358,22,'2024-12-28 21:46:00','2024-12-28 21:46:00',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_category_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_category_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (2,2,5,'2021-01-12 20:15:03',NULL,NULL),(3,3,1,'2021-01-12 20:15:21',NULL,NULL),(4,4,6,'2021-01-12 20:15:35',NULL,NULL),(5,5,6,'2021-01-12 20:15:47',NULL,NULL),(6,6,4,'2021-01-12 20:16:20',NULL,NULL),(7,7,6,'2021-01-12 20:17:08',NULL,NULL),(8,8,6,'2021-01-12 20:17:16',NULL,NULL),(9,9,2,'2021-01-12 20:17:53',NULL,NULL),(10,10,1,'2021-01-12 20:18:03',NULL,NULL),(13,1,2,'2024-12-27 11:07:01','2024-12-27 11:07:01',NULL);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_size`
--

DROP TABLE IF EXISTS `product_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_size` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `size_id` int(10) unsigned NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `size_id` (`size_id`),
  CONSTRAINT `product_size_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_size_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_size`
--

LOCK TABLES `product_size` WRITE;
/*!40000 ALTER TABLE `product_size` DISABLE KEYS */;
INSERT INTO `product_size` VALUES (2,2,1,'2021-01-12 20:20:01',NULL,NULL),(3,3,1,'2021-01-12 20:20:02',NULL,NULL),(4,4,1,'2021-01-12 20:20:04',NULL,NULL),(5,5,1,'2021-01-12 20:20:06',NULL,NULL),(6,6,1,'2021-01-12 20:20:09',NULL,NULL),(7,8,1,'2021-01-12 20:20:11',NULL,NULL),(8,9,2,'2021-01-12 20:20:14',NULL,NULL),(9,10,2,'2021-01-12 20:20:18',NULL,NULL),(10,7,1,'2021-01-12 20:20:21',NULL,NULL),(12,1,1,'2024-12-27 11:07:01','2024-12-27 11:07:01',NULL);
/*!40000 ALTER TABLE `product_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `detail` text DEFAULT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `discount` int(10) unsigned DEFAULT 0,
  `stock` int(10) unsigned NOT NULL,
  `img` varchar(255) NOT NULL,
  `class` varchar(20) DEFAULT 'no',
  `brand_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Lopez Cabernet Sauvignon','Created in 2011 to complement the classic brand. Aged in French oak barrels. Deep ruby color with slight mahogany tones and intense aromas. Excellent structure, smooth tannins, velvety texture, and a long finish. Ideal for pairing with red meats and dishes with mild sauces. ',180,0,10,'1.png','destacado',1,'2021-01-12 19:27:53','2024-12-27 12:56:08',NULL),(2,'Lopez Dulce Natural Blanco','Exquisite, fresh, balanced, and delicate. Made with Torrontés Riojano, Muscat, and Viognier grapes. Lower in alcohol, naturally sweeter. Enjoy it well-chilled and at any time. Perfect for sharing, paired with sweet dishes, or as an aperitif',178,0,10,'2.png','destacado',1,'2021-01-12 19:40:17','2024-12-27 12:14:19',NULL),(3,'Lopez Malbec','An iconic Argentine wine that has preserved its quality since its creation in 1973, becoming an indisputable classic. This harmonious and well-balanced Malbec is aged in large French oak barrels.',144,0,10,'3.png','no',1,'2021-01-12 19:41:43','2024-12-27 12:14:58',NULL),(4,'Rincon Famoso Blend','Sangiovese, Merlot, and Malbec grapes come together to create this classic Argentine wine. Aged in French oak barrels, it is balanced, with mature tannins and a long finish.',245,0,10,'4.png','destacado',1,'2021-01-12 19:48:55','2024-12-27 12:16:01',NULL),(5,'Chateau Vieux Blend','Outstanding Gran Reserva Blend. A carefully crafted combination of Cabernet Sauvignon, Merlot, and Pinot Noir grapes, preserved since its early harvests in the early 20th century. Aged in large French oak barrels. Round, harmonious, and balanced.',437,0,10,'5.png','destacado',1,'2021-01-12 19:51:08','2024-12-27 12:17:39',NULL),(6,'Rincon Famoso Rosado','Pale pink in color due to its short maceration. A blend of Malbec and Pinot Noir, offering a fresh and fruity combination.',247,0,10,'6.png','no',1,'2021-01-12 19:51:46','2024-12-27 12:17:53',NULL),(7,'Montchenot 5 Años Blend','It\'s shorter aging time defines a distinct personality. Younger and more intense, with a unique bright red color and garnet highlights, a subtle aroma, harmonious, and a long finish. A balance between aging and freshness, with greater body and character.',464,0,10,'7.png','no',1,'2021-01-12 20:09:21','2024-12-27 12:18:25',NULL),(8,'Montchenot 10 Años Blend','Made from exceptional grapes, aged in large barrels and then in the bottle for 5 more years. A blend where aromas and flavors come together in a deep and delicate expression that connects with the past, revealing balance and complexity in every sip.',712,0,10,'8.png','destacado',1,'2021-01-12 19:54:33','2024-12-27 12:18:48',NULL),(9,'Monteagrelo Cabernet Sauvignon','Intense red color with purple hues characteristic of the varietal. Perfect balance between fruit and wood, with a peppery and spicy profile. Full-bodied, meaty, with a well-balanced finish. Smooth, mature, and harmonious.',1356,0,10,'9.png','no',2,'2021-01-12 20:06:41','2024-12-27 12:19:00',NULL),(10,'Monteagrelo Malbec','This delicate Malbec immediately impresses with its intense red color, featuring purple hues and a dark backdrop. On the nose, it is strongly captivating, offering an exquisite combination of red and black fruit aromas, complemented by vanilla, chocolate, and coffee, thanks to its aging in oak.',955,0,10,'10.png','no',2,'2021-01-12 20:07:49','2024-12-27 12:19:11',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,750,'2021-01-12 19:00:13',NULL,NULL),(2,1000,'2021-01-12 19:00:16',NULL,NULL);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `rol` int(11) NOT NULL DEFAULT 10,
  `dob` date DEFAULT NULL,
  `auth` tinyint(4) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`user_name`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (15,'admin','admin','admin','admin@admin.com','$2a$10$kfavMTyWVOyIL7tr9pHsh.gxDaSpoOSRXLoKB9vpMzSKXRM2X6vl6','1610487972954-.jpg',20,'1991-01-01',1,'2021-01-12 21:46:13','2021-01-12 18:48:53',NULL),(16,'Agustin','Gaggero','Guchi','a_gaggero@hotmail.com','$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS','1610504257179-.PNG',10,'1987-12-05',1,'2021-01-12 23:34:36','2021-01-13 02:17:37',NULL),(17,'Sofia','Mussi','Sofa','la_sofi@hotmail.com','$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS','1612030038111-.jpeg',10,'1987-12-05',1,'2021-01-12 23:34:36','2021-01-13 02:17:37',NULL),(18,'Violeta','Aguirre','Vilu','viluo@hotmail.com','$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS','1611628893559-.jpg',10,'1987-12-05',1,'2021-01-12 23:34:36','2021-01-13 02:17:37',NULL),(19,'Francisca','Marciano','fran','Fran@hotmail.com','$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS','1612393374757-.jpeg',10,'1987-12-05',1,'2021-01-12 23:34:36','2021-01-13 02:17:37',NULL),(20,'Juan','Carlos','Charly','charly@hotmail.com','$2a$10$HatHEVgu7TDYc3R05Kye5uT6LHoeoCDJb4Jo5Jhpmpfu3ooUCoBiS','1612320329-.jpg',10,'1987-12-05',1,'2021-01-12 23:34:36','2021-01-13 02:17:37',NULL),(21,'Agustin','Gaggero','Look look it works','asda@hotmail.com','$2a$10$fb39Z/2/qYgbU.WJDRED0.wej411./ZIEwUEF0.CX4Yk9UbgBFPg2','1728753465172-.png',20,'2005-01-13',0,'2024-10-12 17:17:45','2024-10-12 19:33:23',NULL),(22,'agustin','gaggero','guchito','guchi@guchi.com','$2a$10$FzebP7HWx9FgepTHd5yuZOxGj4ugDduiGWPzqb65.hGMctru87Lue','1735296758233-.jpg',10,'1987-05-12',0,'2024-12-27 10:52:38','2024-12-27 12:02:03',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-29 20:31:35
