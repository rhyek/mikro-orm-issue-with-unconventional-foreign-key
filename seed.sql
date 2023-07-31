create table `person` (
  `id` int unsigned not null auto_increment primary key,
  `name` varchar(255) not null
);
create table `person_detail` (
  `id` int unsigned not null primary key,
  `age` int not null,
  foreign key (`id`) references `person`(`id`)
);