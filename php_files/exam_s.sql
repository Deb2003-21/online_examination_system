-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2024 at 06:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam_s`
--

-- --------------------------------------------------------

--
-- Table structure for table `join_requst`
--

CREATE TABLE `join_requst` (
  `email` varchar(30) NOT NULL,
  `teacher_id` varchar(5) NOT NULL,
  `status` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `join_requst`
--

INSERT INTO `join_requst` (`email`, `teacher_id`, `status`) VALUES
('bgdbg@dsvfv', 'D1135', 'ok'),
('bgdbg@dsvfv', 'R1235', 'ok'),
('deb@123', 'D1135', 'ok'),
('deb@123', 'D1235', 'ok'),
('deb@123', 'R1235', 'ok'),
('debkrishnahatua21@gmail.com', 'D1135', 'ok'),
('ratnahatua1975@gmail.com', 'D1135', 'ok'),
('ratnahatua1975@gmail.com', 'D1235', 'ok'),
('ratnahatua1975@gmail.com', 'R1235', 'ok'),
('ratnahatua1978@gmail.com', 'D1135', 'ok');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `no` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `examid` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `checked` int(11) NOT NULL,
  `wrong` int(11) NOT NULL,
  `not_attmp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`no`, `email`, `examid`, `score`, `checked`, `wrong`, `not_attmp`) VALUES
(1, 'deb@123', 1000, 5, 3, 1, 1),
(2, 'debkrishnahatua21@gmail.com', 1000, 10, 5, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `email` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `edu` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`email`, `name`, `password`, `mobile`, `edu`) VALUES
('deb@123', 'dhdtr', 'GcCpNiDSQH', '7894560230', 'srgrsg'),
('debkrishnahatua21@gmail.com', 'debkrishna', 'QTIQ1LoyWf', '9230239260', 'graduation (ongoing)'),
('ratnahatua1971@gmail.com', 'debkrishna', 'JDw6zemozu', '3', ''),
('ratnahatua1975@gmail.com', 'debkrishna', 'wcekArw6QT', '8100234865', 'fdffdfdf'),
('ratnahatua1978@gmail.com', 'debkrishna', 'rPjbCiRlAg', '5', ''),
('vefg@eff', 'efrg', '', '6', '');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_rofile`
--

CREATE TABLE `teacher_rofile` (
  `teacher_id` varchar(20) NOT NULL,
  `tname` varchar(50) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `subject` varchar(20) DEFAULT NULL,
  `password` varchar(10) NOT NULL,
  `exp` varchar(10) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher_rofile`
--

INSERT INTO `teacher_rofile` (`teacher_id`, `tname`, `mobile`, `subject`, `password`, `exp`, `email`) VALUES
('713003', 'sdvfs fsvfsv', '0990352842', 'frs', '9H3De', '', 'vfsvs@dcdsc'),
('D1135', 'sam das', '915345245', 'cs', '12345', '20+', 'b'),
('D1235', 'sabu', '6565154145', 'math', '', '', 'a'),
('G3004', 'sdvfs fsvfsv', '0810023486', 'frs', 'I9GZk', '', 'vfsvs@dcdsc1'),
('R1235', 'debl', '95345245', 'cs', '', '', 'c'),
('S3005', 'pratik mondal', '9903254789', 'cs', 'PiuXy', '20+', 'ratnahatua1975@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `qid` int(11) NOT NULL,
  `exam_id` int(11) NOT NULL,
  `tqno` int(11) NOT NULL,
  `question` varchar(100) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `option1` varchar(25) NOT NULL,
  `option2` varchar(25) NOT NULL,
  `option3` varchar(25) NOT NULL,
  `option4` varchar(25) NOT NULL,
  `answer` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`qid`, `exam_id`, `tqno`, `question`, `image`, `option1`, `option2`, `option3`, `option4`, `answer`) VALUES
(2000, 1000, 1, '4+1', 'http://localhost/pg/project/uploads/', '5', '6', '7', '8', 'A'),
(2001, 1000, 2, '8+2', 'http://localhost/pg/project/uploads/', '9', '10', '11', '12', 'B'),
(2002, 1000, 3, '4+4', 'http://localhost/pg/project/uploads/', '5', '6', '8', '9', 'C'),
(2003, 1000, 4, '7+2+(9*8)', 'http://localhost/pg/project/uploads/', '81', '78', '55', '22', 'A'),
(2004, 1000, 5, '1+1\r\nshow the result base on javascript', 'http://localhost/pg/project/uploads/', '11', '56', '22', '2', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `test_join`
--

CREATE TABLE `test_join` (
  `teacher_id` varchar(5) NOT NULL,
  `exam_id` bigint(20) NOT NULL,
  `paper` varchar(15) NOT NULL,
  `time` int(11) NOT NULL,
  `totalQues` int(11) NOT NULL,
  `posetive` float NOT NULL,
  `negetive` float NOT NULL,
  `submit_date` varchar(20) DEFAULT NULL,
  `pdf_acpt` int(11) DEFAULT NULL,
  `cer_accpt` int(11) DEFAULT NULL,
  `e_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test_join`
--

INSERT INTO `test_join` (`teacher_id`, `exam_id`, `paper`, `time`, `totalQues`, `posetive`, `negetive`, `submit_date`, `pdf_acpt`, `cer_accpt`, `e_date`) VALUES
('R1235', 2, 'math', 2, 4, 1.5, 0.5, NULL, NULL, NULL, NULL),
('D1135', 1000, 'math set1', 15, 5, 2, 1, 'today', 1, 1, '2024-06-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `join_requst`
--
ALTER TABLE `join_requst`
  ADD PRIMARY KEY (`email`,`teacher_id`) USING BTREE,
  ADD KEY `fk_teacherid` (`teacher_id`) USING BTREE;

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`no`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- Indexes for table `teacher_rofile`
--
ALTER TABLE `teacher_rofile`
  ADD PRIMARY KEY (`teacher_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`qid`);

--
-- Indexes for table `test_join`
--
ALTER TABLE `test_join`
  ADD PRIMARY KEY (`exam_id`),
  ADD KEY `exam_id` (`exam_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `join_requst`
--
ALTER TABLE `join_requst`
  ADD CONSTRAINT `fk_teacherid` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_rofile` (`teacher_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
