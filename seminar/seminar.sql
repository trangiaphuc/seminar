-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 10, 2021 lúc 02:50 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `seminar`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bmi`
--

CREATE TABLE `bmi` (
  `recordId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `weight` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  `createAt` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bmi`
--

INSERT INTO `bmi` (`recordId`, `userId`, `weight`, `height`, `createAt`) VALUES
(1, 4, 60.5, 168, '2021-10-10'),
(2, 4, 54, 168, '2021-10-10'),
(3, 4, 56, 168, '2021-10-10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `userId` int(10) NOT NULL,
  `gmail` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(30) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `createAt` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`userId`, `gmail`, `password`, `firstName`, `lastName`, `birthday`, `createAt`) VALUES
(4, 'phuc@gmail.com', '$2b$10$JmeT2fXTnN16PySk7cwG8.suN/xdd0rUJ2bts4flp5wOx0BMXwEqS', ' Phuc', 'Tran Gia', '2000-06-21', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bmi`
--
ALTER TABLE `bmi`
  ADD PRIMARY KEY (`recordId`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `gmail` (`gmail`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bmi`
--
ALTER TABLE `bmi`
  MODIFY `recordId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
