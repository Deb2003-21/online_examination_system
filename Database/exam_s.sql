-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2024 at 06:25 PM
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
  `mobile` varchar(10) NOT NULL,
  `teacher_id` varchar(5) NOT NULL,
  `status` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `join_requst`
--

INSERT INTO `join_requst` (`email`, `mobile`, `teacher_id`, `status`) VALUES
('bgdbg@dsvfv', '', 'D1135', 'ok'),
('bgdbg@dsvfv', '', 'R1235', 'ok'),
('deb@123', '', 'D1135', 'ok'),
('deb@123', '', 'D1235', 'ok'),
('deb@123', '', 'R1235', 'ok'),
('ratnahatua1975@gmail.com', '', 'D1135', 'ok'),
('ratnahatua1975@gmail.com', '', 'D1235', 'ok'),
('ratnahatua1975@gmail.com', '', 'R1235', 'ok'),
('ratnahatua1977@gmail.com', '', 'D1135', 'wait');

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
(1, 'ratnahatua1975@gmail.com', 1002, 8, 4, 0, 0),
(2, 'bgdbg@dsvfv', 1002, 5, 3, 1, 0),
(3, 'deb@123', 2, 3, 2, 0, 0),
(4, 'deb@123', 1002, 5, 3, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `email` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`email`, `name`, `password`) VALUES
('bgdbg@dsvfv', 'dbdgbg', ''),
('deb@123', 'deb', ''),
('ratnahatua1975@gmail.com', 'xvfv', '$HY1lnRqD-'),
('ratnahatua1978@gmail.com', 'debkrishna', 'rPjbCiRlAg'),
('vefg@eff', 'efrg', '');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_rofile`
--

CREATE TABLE `teacher_rofile` (
  `teacher_id` varchar(20) NOT NULL,
  `tname` varchar(50) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `subject` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher_rofile`
--

INSERT INTO `teacher_rofile` (`teacher_id`, `tname`, `mobile`, `subject`) VALUES
('D1135', 'sam', '915345245', 'cs'),
('D1235', 'sabu', '6565154145', 'math'),
('R1235', 'debl', '95345245', 'cs');

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
(1, 1002, 1, '2+2', 'http://localhost/pg/project/uploads/q171679.png', '1', '2', '3', '4', 'D'),
(2, 1002, 2, '4*4', 'http://localhost/pg/project/uploads/', '16', '45', '78', '22', 'A'),
(4, 1002, 3, 'hello i am devin made by an engineer i will obsolate your jobs and will make an new world.who am i??', 'http://localhost/pg/project/uploads/', 'AI', 'idk', 'software', 'human', 'A'),
(2003, 1002, 4, '5+9', 'http://localhost/pg/project/uploads/', '7', '14', '5', '2', 'B'),
(2004, 2, 1, '4+2', 'http://localhost/pg/project/uploads/', '8', '6', '2', '3', 'B'),
(2005, 2, 2, '5+6', 'http://localhost/pg/project/uploads/', '11', '2', '3', '856', 'A'),
(2006, 1003, 1, '', 'http://localhost/pg/project/uploads/q585808.png', '5', '8', '2', '3', 'B'),
(2007, 1003, 2, '8+9', 'http://localhost/pg/project/uploads/', '4', '17', '8', '2', 'B'),
(2008, 1004, 1, '2+2.\r\nhello w\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n', 'http://localhost/pg/project/uploads/', '4', '7', '5', '6', 'A'),
(2009, 1003, 3, '4+5', 'http://localhost/pg/project/uploads/', '8', '9', '6', '10', 'B'),
(2010, 1003, 4, '7+01', 'http://localhost/pg/project/uploads/', '7', '4', '5', '8', 'D');

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
('R1235', 1, 'cu12', 2, 4, 1.5, 0.5, NULL, NULL, NULL, NULL),
('R1235', 2, 'math', 2, 4, 1.5, 0.5, NULL, NULL, NULL, NULL),
('D1135', 1002, 'math', 54, 4, 2, 1, 'today', 1, 0, '2024-06-08'),
('D1135', 1003, 'fxfh1', 9, 4, 1.6, 1, NULL, NULL, NULL, NULL),
('D1135', 1004, 'math123', 9, 4, 2, 1, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `join_requst`
--
ALTER TABLE `join_requst`
  ADD PRIMARY KEY (`email`,`mobile`,`teacher_id`),
  ADD KEY `fk_teacherid` (`teacher_id`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`no`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `teacher_rofile`
--
ALTER TABLE `teacher_rofile`
  ADD PRIMARY KEY (`teacher_id`);

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
