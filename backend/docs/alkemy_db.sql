-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2022 at 07:10 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alkemy_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `movements`
--

CREATE TABLE `movements` (
  `id` int(10) UNSIGNED NOT NULL,
  `concept` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `date` datetime DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movements`
--

INSERT INTO `movements` (`id`, `concept`, `amount`, `date`, `type`, `createdAt`, `updatedAt`, `user_id`) VALUES
(29, 'sdas', '23123.00', '2022-08-02 00:00:00', 'Ingreso', '2022-08-03 14:02:48', '2022-08-03 14:02:48', NULL),
(30, 'asd', '12.00', '2022-08-02 00:00:00', 'Ingreso', '2022-08-03 16:33:23', '2022-08-03 16:33:23', NULL),
(31, 'id', '125555.00', '2022-08-01 00:00:00', 'Egreso', '2022-08-03 16:35:00', '2022-08-03 16:35:00', NULL),
(32, 'id2', '12.00', '2022-08-02 00:00:00', 'Ingreso', '2022-08-03 16:35:27', '2022-08-03 16:35:27', NULL),
(47, 'baño primer piso', '12000.00', '2022-08-02 00:00:00', 'Egreso', '2022-08-04 13:24:55', '2022-08-04 13:33:43', 29),
(50, 'sueldo', '150000.00', '2022-08-01 00:00:00', 'Ingreso', '2022-08-05 12:54:35', '2022-08-07 17:06:40', 24),
(52, 'hopla', '123123.00', '2022-08-02 00:00:00', 'Egreso', '2022-08-05 14:21:43', '2022-08-05 14:21:43', 24),
(53, 'lucas', '12.00', '2022-08-01 00:00:00', 'Egreso', '2022-08-05 14:21:54', '2022-08-05 14:21:54', 24),
(54, 'ttt', '121212.00', '2022-08-03 00:00:00', 'Ingreso', '2022-08-05 14:22:05', '2022-08-05 14:22:05', 24),
(55, 'per', '150000.00', '2022-08-02 00:00:00', 'Egreso', '2022-08-05 14:22:17', '2022-08-05 14:22:17', 24),
(56, 'tttttt', '1212.00', '2022-08-03 00:00:00', 'Ingreso', '2022-08-05 14:22:33', '2022-08-05 14:22:33', 24),
(57, 'eee', '33.00', '2022-08-03 00:00:00', 'Egreso', '2022-08-05 14:22:43', '2022-08-05 14:22:43', 24),
(58, '333', '12.00', '2022-08-03 00:00:00', 'Ingreso', '2022-08-05 14:22:57', '2022-08-05 14:22:57', 24),
(59, 'tre', '1544.00', '2022-08-04 00:00:00', 'Ingreso', '2022-08-05 14:23:09', '2022-08-05 14:23:09', 24),
(60, 'la ultima', '158888.00', '2022-08-04 00:00:00', 'Ingreso', '2022-08-05 14:23:27', '2022-08-05 14:23:27', 24),
(61, 'asas', '1212.00', '2022-08-02 00:00:00', 'Ingreso', '2022-08-05 14:24:13', '2022-08-05 14:24:13', 24),
(62, 'hola', '123.00', '2022-08-01 00:00:00', 'Ingreso', '2022-08-07 17:03:53', '2022-08-07 17:03:53', 24);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `createdAt`, `updatedAt`, `email`) VALUES
(1, 'Lucas Silva', 'lucas', NULL, NULL, 'l.silva8692@gmail.com'),
(16, 'lucas', '$2a$10$ki9nFWbcClMp/TrQ.Iaj5ei4DbL3.yrh3X3bcb/E.cQx5xGb.OzZS', '2022-08-02 14:17:09', '2022-08-02 14:17:09', 'lucas'),
(17, 'lucas1', '$2a$10$WLrhweYIPx5EJH6NPYV3xeyqTyNaG3Qs2wWi.uArs2yuC5ZHN9tnu', '2022-08-02 14:17:45', '2022-08-02 14:17:45', 'lucas1'),
(18, 'as', '$2a$10$zKlgmCJqF3ec1krgFdE7C.2/F5GvXZ/YOV4v31xA3KvWBDsQiUASa', '2022-08-02 14:18:34', '2022-08-02 14:18:34', 'ass'),
(19, 'as', '$2a$10$d7C8IeP8bjXsvSEOgixVyuZiKJa257fTGgxnPZyrTUMr94LERk4XS', '2022-08-02 14:20:34', '2022-08-02 14:20:34', 'ass1'),
(20, 'as', '$2a$10$2EHRzB91nLUdh1fo.upYPuiYZa4TgIHMxjBXxP0A78/HiuFKCjZYK', '2022-08-02 14:21:18', '2022-08-02 14:21:18', 'assasasas'),
(21, 'as', '$2a$10$8UWh1zs6AEcE1o3R4Pkzo.Z692ntTUflBwuPxA9E3zq02DTp5wdgy', '2022-08-02 14:22:09', '2022-08-02 14:22:09', '12'),
(22, 'as', '$2a$10$tYIlUc9yHh0lYUd8uGUkbeEUKRns0cg9JZ3SnAW27GtROYFlEkkLy', '2022-08-02 14:23:02', '2022-08-02 14:23:02', '22222'),
(23, 'as', '$2a$10$k2/6sLdj5Iqq0HolGwGt5.AHUH43SCNMPiQtyhE0ik.mF6Esk6b2.', '2022-08-02 14:23:59', '2022-08-02 14:23:59', '21'),
(24, 'lucas', '$2a$10$JB0ES6lW6/F.w.AYn.S7s.l3rfn9klTAbDDtbRN2jauiNmLevqj4y', '2022-08-02 14:36:43', '2022-08-02 14:36:43', 'lucas@gmail.com'),
(25, 'candela palomba', '$2a$10$Xe9.2f3bizoIfKMRRk0m8.yCVWZSUTxhICXlA8YvKGGUiBuM8goQS', '2022-08-02 19:45:03', '2022-08-02 19:45:03', 'can@gmail.com'),
(26, 'c', '$2a$10$X8.CTNlH9UACNFMXXs7aIegcUx4R149yS.GAsWJp1HHSNbWWVVYq.', '2022-08-02 19:50:10', '2022-08-02 19:50:10', 'ca@gmail.com'),
(27, 's', '$2a$10$CtnLefELTtLQrm.6HQh3buvIxo.DDrJclFsllnIxU3jY9SuA4Bhmi', '2022-08-02 19:51:43', '2022-08-02 19:51:43', 'sdsd'),
(28, 'laura', '$2a$10$Bfn0AXdQ0KLDFGhaaEhNWu2uHHw4wftDiebMFdDjrqUTEbf4ugKcS', '2022-08-03 13:13:58', '2022-08-03 13:13:58', 'lau@gmail.com'),
(29, 'ramon silva', '$2a$10$4eW98yyWrvkEOLcvV5y1D.Kp9voFczjvzEhNymI6Sn/sMpXn7ah/O', '2022-08-04 13:13:57', '2022-08-04 13:13:57', 'ramon@gmail.com'),
(30, 'as', '$2a$10$GtO2l2GMHE5SLE29SUXKD.wQrfwawoLo9vddwUIRBzknfHdAbBeJ2', '2022-08-04 13:15:16', '2022-08-04 13:15:16', 'as'),
(31, 'Lucas Silva', '$2a$10$6fkhIzH0.5IGtqDpLL2ZxOALIBG4P4XozAlvLC3coZlTsy9MCxwQm', '2022-08-04 21:13:07', '2022-08-04 21:13:07', 'l.silva862@gmail.com'),
(32, 'can', '$2a$10$jlkhuvizzFmYzTxcejwa6OZhcBvOWMB/CdxVEnjrkpcAoSg.N2Sqy', '2022-08-07 17:07:21', '2022-08-07 17:07:21', 'c@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movements`
--
ALTER TABLE `movements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movements`
--
ALTER TABLE `movements`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movements`
--
ALTER TABLE `movements`
  ADD CONSTRAINT `movements_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
