ALTER USER 'root'@'localhost' IDENTIFIED BY 'root'; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS `Todo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `desc` varchar(128) NOT NULL,
  `isComplete` boolean not null,
  PRIMARY KEY (`id`)
);
