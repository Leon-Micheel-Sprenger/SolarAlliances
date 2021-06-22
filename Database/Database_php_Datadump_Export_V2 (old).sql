-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 22, 2021 at 06:07 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `solaralliances`
--

-- --------------------------------------------------------

--
-- Table structure for table `accepted_multiplayer_missions`
--

CREATE TABLE `accepted_multiplayer_missions` (
  `amm_Id` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL,
  `amm_MMissions_Id` int(11) NOT NULL,
  `Mission_Time` time NOT NULL,
  `Ship_Fleet_Id` int(11) NOT NULL,
  `Status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accepted_multiplayer_missions`
--

INSERT INTO `accepted_multiplayer_missions` (`amm_Id`, `Player_Id`, `amm_MMissions_Id`, `Mission_Time`, `Ship_Fleet_Id`, `Status`) VALUES
(35, 69, 1, '00:00:00', 65, 0),
(36, 69, 1, '00:00:00', 65, 0),
(37, 69, 1, '00:00:00', 65, 0),
(38, 69, 3, '00:00:00', 66, 0),
(39, 69, 3, '00:00:00', 65, 0),
(40, 69, 3, '04:00:00', 76, 2),
(41, 69, 8, '00:59:00', 65, 2);

-- --------------------------------------------------------

--
-- Table structure for table `accepted_solomissions`
--

CREATE TABLE `accepted_solomissions` (
  `asm_Id` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL,
  `Solo_Mission_Id` int(11) NOT NULL,
  `Mission_Time` time NOT NULL,
  `Ship_Fleet_ID` int(11) NOT NULL,
  `Confirmation_Sent_To_Player` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accepted_solomissions`
--

INSERT INTO `accepted_solomissions` (`asm_Id`, `Player_Id`, `Solo_Mission_Id`, `Mission_Time`, `Ship_Fleet_ID`, `Confirmation_Sent_To_Player`) VALUES
(26, 69, 5, '00:00:00', 66, 1),
(27, 69, 9, '00:00:00', 66, 1),
(28, 69, 2, '00:00:00', 66, 1),
(29, 69, 1, '00:00:00', 67, 1),
(30, 69, 1, '00:00:00', 66, 1),
(31, 69, 1, '00:00:00', 67, 1),
(32, 69, 1, '00:00:00', 67, 1),
(33, 69, 2, '00:00:00', 67, 1),
(34, 69, 2, '00:00:00', 68, 1),
(35, 69, 2, '00:00:00', 67, 1),
(36, 69, 5, '00:00:00', 66, 1),
(37, 69, 5, '00:00:00', 67, 1),
(38, 69, 2, '00:00:00', 67, 1),
(39, 69, 5, '00:00:00', 68, 1),
(40, 69, 9, '00:00:00', 66, 1),
(41, 69, 1, '00:00:00', 70, 1),
(42, 69, 5, '00:00:00', 65, 1),
(43, 69, 2, '00:00:00', 65, 1),
(44, 69, 2, '00:00:00', 65, 1),
(45, 69, 6, '00:00:00', 77, 1),
(46, 69, 9, '00:00:00', 66, 1),
(47, 69, 1, '00:00:00', 65, 1),
(48, 69, 7, '00:00:00', 76, 1),
(49, 69, 3, '00:00:00', 75, 1),
(50, 69, 6, '00:00:00', 77, 1),
(51, 69, 7, '00:00:00', 76, 1),
(52, 69, 1, '00:00:00', 65, 1),
(53, 69, 2, '00:00:00', 66, 1),
(54, 69, 2, '00:00:00', 67, 1),
(55, 69, 6, '00:00:00', 77, 1),
(56, 69, 3, '00:00:00', 75, 1),
(57, 69, 2, '00:00:00', 65, 1),
(58, 69, 9, '00:00:00', 66, 1),
(59, 69, 6, '00:00:00', 77, 1),
(60, 69, 3, '00:00:00', 75, 1),
(61, 69, 5, '00:00:00', 65, 1),
(62, 69, 7, '00:00:00', 76, 1),
(63, 69, 3, '00:00:00', 75, 1),
(64, 69, 2, '00:00:00', 65, 1),
(65, 69, 7, '00:00:00', 76, 1),
(66, 69, 5, '00:00:00', 65, 1),
(67, 69, 4, '00:00:00', 76, 1),
(68, 69, 4, '00:00:00', 76, 1),
(69, 69, 9, '00:00:00', 66, 1),
(70, 69, 11, '00:00:00', 76, 1),
(71, 69, 1, '00:00:00', 65, 1),
(72, 69, 3, '00:00:00', 75, 1),
(73, 69, 4, '00:00:00', 76, 1),
(74, 69, 4, '00:00:00', 76, 1),
(75, 69, 8, '00:00:00', 76, 1),
(76, 69, 9, '00:00:00', 65, 1),
(77, 69, 7, '00:00:00', 76, 1),
(78, 69, 5, '00:00:00', 65, 1),
(79, 69, 9, '00:00:00', 66, 1),
(80, 69, 9, '00:00:00', 66, 1);

-- --------------------------------------------------------

--
-- Table structure for table `computer_trading`
--

CREATE TABLE `computer_trading` (
  `Trading_Id` int(11) NOT NULL,
  `Spaceships_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `factions`
--

CREATE TABLE `factions` (
  `Factions_Id` int(11) NOT NULL,
  `Faction_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `factions`
--

INSERT INTO `factions` (`Factions_Id`, `Faction_Name`) VALUES
(1, 'Earth | United Nations'),
(2, 'Martian Congressional Republic'),
(3, 'Belt | OPA');

-- --------------------------------------------------------

--
-- Table structure for table `multiplayer_missions`
--

CREATE TABLE `multiplayer_missions` (
  `MMissions_Id` int(11) NOT NULL,
  `MMission_Name` varchar(30) NOT NULL,
  `Story` varchar(430) NOT NULL,
  `Time` time NOT NULL,
  `Ship_Id` int(11) NOT NULL,
  `Reward_Water` int(11) DEFAULT NULL,
  `Reward_People` int(11) DEFAULT NULL,
  `Reward_Ore` int(11) DEFAULT NULL,
  `Reward_Money` int(11) DEFAULT NULL,
  `Input_Water` int(11) DEFAULT NULL,
  `Input_People` int(11) DEFAULT NULL,
  `Input_Ore` int(11) DEFAULT NULL,
  `Input_Money` int(11) DEFAULT NULL,
  `Ship_amount` int(11) DEFAULT NULL,
  `Minimum_Money` int(11) DEFAULT NULL,
  `Minimum_Water` int(11) DEFAULT NULL,
  `Minimum_People` int(11) DEFAULT NULL,
  `Minimum_Ore` int(11) DEFAULT NULL,
  `Submitted_Ore` int(11) NOT NULL DEFAULT '0',
  `Submitted_Water` int(11) NOT NULL DEFAULT '0',
  `Submitted_People` int(11) NOT NULL DEFAULT '0',
  `Submitted_Money` int(11) NOT NULL DEFAULT '0',
  `Submitted_Ships` int(11) NOT NULL DEFAULT '0',
  `Rank` int(11) NOT NULL DEFAULT '1',
  `Faction` varchar(3) NOT NULL DEFAULT 'MEB'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `multiplayer_missions`
--

INSERT INTO `multiplayer_missions` (`MMissions_Id`, `MMission_Name`, `Story`, `Time`, `Ship_Id`, `Reward_Water`, `Reward_People`, `Reward_Ore`, `Reward_Money`, `Input_Water`, `Input_People`, `Input_Ore`, `Input_Money`, `Ship_amount`, `Minimum_Money`, `Minimum_Water`, `Minimum_People`, `Minimum_Ore`, `Submitted_Ore`, `Submitted_Water`, `Submitted_People`, `Submitted_Money`, `Submitted_Ships`, `Rank`, `Faction`) VALUES
(1, 'Evacuating EROS', 'On the outer Belter Astroid EROS, the new alien species is spreading a virus to its 100k people. Mars and Earth have decided to join the OPA on the mission to evacuating EROS, before its it too late while ensuring a safe quarantine of the contaminated refugees. ', '01:00:00', 5, 0, 30, 0, 500, 0, 150, 0, 0, 15, 0, 0, 10, 0, 0, 0, 0, 0, 0, 1, 'MEB'),
(3, 'Great Mining Alliance', 'Just 10 clicks south of Ganimed, a Rock Hopper discovered what seems to be a giant Block of Ice larger than Europa. Exploration ships confirmed, that the ice is minable, but only by a fleet of 10 Mining Ships at a time to counterbalance the Weight and ensure the stability of the HO2 molecules. Now the OPA under Fred Johnson is looking for Outer and Inner Contributors to team up and ensure a proper and safe mining process…\r\n', '04:00:00', 4, 400, 0, 300, 0, 0, 100, 0, 0, 10, 0, 0, 10, 0, 0, 0, 80, 700, 7, 1, 'MEB'),
(4, 'Defending Luna', 'Luna is under attack from a some rioting OPA members of the extreme wing. Mars and Earth have decided to take on the challenge together and put an end to the extremist group for good. Be ready to deploy your war ships to upon calling! ', '01:30:00', 3, 0, 0, 350, 0, 0, 0, 0, 1500, 12, 150, 0, 0, 0, 0, 0, 0, 0, 0, 1, 'ME'),
(5, 'Astroid Mining Convoit', 'Earths News Outlets have reported the reoccurance of the famous Comet P/2019 M2 Astroid, also known as ATLAS, in our Solar System. ATLAS only passes our Solar System near Earth every 200 years and is made out of solid Oblevian, the most precious metal in the solar system. The OPA is calling for the advanced technologies of Mars to mine the bypassing Comet. A risky endeavor, that only the bravest of crew members can embark on. ', '00:30:00', 4, 0, 0, 400, 0, 0, 40, 0, 0, 8, 0, 0, 5, 0, 0, 0, 0, 0, 0, 1, 'MB'),
(6, 'Finding new Worlds', 'The great Ring, created by extraterrestrial life 1000 years ago is a portal to other habitable planets. Millions of light years away, the risks and dangerous are great, but those who make groundbreaking discoveries will be create a legacy for thousands of years to come.  ', '05:00:00', 6, 0, 0, 0, 1000, 1000, 0, 0, 0, 5, 0, 200, 0, 0, 0, 0, 0, 0, 0, 1, 'MEB'),
(7, 'Ganymed Refugee Transport', 'After the great Battle between Mars and Earth over Gamymed, all three factions have decided to initiate a ceasefire to evacuate their wounded. While Earth still refuses to work together with Mars in this, the OPA has offered its support for the Martian people on Ganymed. Ships are adviced to have spare water on board to take care of the dehydrated refugees.', '01:00:00', 5, 100, 100, 0, 0, 2000, 0, 0, 0, 20, 0, 100, 0, 0, 0, 0, 0, 0, 0, 1, 'MB'),
(8, 'Trade Federation', 'Due to the wide spreading civil war in the recent years on Earth, the United Nations are in great need for resources to rebuild cities and infrastructure. That\'s why trade ministers of all  factions agreed to a timebound trade federation to deliver ores to earth in exchange for money. ', '00:59:00', 5, 0, 0, 0, 800, 0, 0, 9000, 0, 30, 0, 0, 0, 300, 300, 0, 0, 0, 1, 1, 'MB'),
(9, 'Military Alliance', 'The protests in the outer belt are becoming louder. The OPA is becoming more organized by the day and Earth and Mars have decided to strike against the unlawful rise of the Belters. \r\nA military operation will find and eliminate the biggest Extremist strongholds together with their forces to rebalance the poewer in the system. ', '00:59:00', 3, 200, 0, 200, 0, 0, 0, 0, 4000, 10, 400, 0, 0, 0, 0, 0, 0, 0, 0, 1, 'ME');

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `Player_Id` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(1000) NOT NULL,
  `Rank` int(11) NOT NULL DEFAULT '1',
  `Faction_Id` int(11) NOT NULL DEFAULT '2',
  `In_Game_Date` date NOT NULL DEFAULT '2350-04-15'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`Player_Id`, `Name`, `Email`, `Password`, `Rank`, `Faction_Id`, `In_Game_Date`) VALUES
(1, 'Leon', 'Email', 'Password', 1, 2, '2350-04-15'),
(68, 'Name', 'email', 'Password', 1, 2, '2350-04-15'),
(69, 'Leon1', 'email', '$2b$10$YYMl3sQWoT0TnOxWUuz.DeJAc/Xz7I5MQTRC.8ORBVbxHTIbg/u5O', 1, 2, '2350-04-15'),
(70, 'jimmy', 'email', '$2b$10$QU5SKE9VBJgs4xfOX4tvy.x1FYwvDN27sQhqsIri6eDvX1vSufdRy', 1, 2, '2350-04-15'),
(71, 'Carlotta', 'email', '$2b$10$wiU076PwfTlKZij4IKHFSevhXtCYwiMHto0tQfEGbwzp9dcYnHKhO', 1, 2, '2350-04-15'),
(72, 'heinrich', 'email', '$2b$10$/SVRlLMwkbPKWfKECvlK.eI18X.Tlds.Ikh6w1StwoimS4wpbK6p2', 1, 2, '2350-04-15'),
(73, 'jimmyyy', 'email', '$2b$10$hrgmq9j/yYA/yu/fjUbmO.gnM52KorktSjcnHc/46lPKWS6SKHv.G', 1, 2, '2350-04-15'),
(74, 'henno', 'e', '$2b$10$HMb4pbpYhD1Iay28QNCsI.hXyjU/fgKcSXXAoOA7l1/MXfOlw42OC', 1, 2, '2350-04-15'),
(75, 'tester', '1', '$2b$10$frdILlRB71EsGyRhd4yHvOt696Snqm0Km2JW9XmfedTev3AoLJlTO', 1, 2, '2350-04-15'),
(76, 'test10', '1', '$2b$10$8ewjcHL/CXqJJQ77Hma2QustmY5p3A/q7hogetQV/t.pxw0AFggTm', 1, 2, '2350-04-15'),
(77, 'test100', 'e', '$2b$10$hYRzbBqYGLtMYrnq4/DtZOfv0IdhLJ07QbYnQXQ8lmUvUqm38jwOi', 1, 2, '2350-04-15'),
(78, 'test3', 'd', '$2b$10$HF85nzRSLfsVdqYDR8rbheGayRGwakJ4kWB7GaPifeoArFNadVx32', 1, 2, '2350-04-15'),
(79, 'test5', '1', '$2b$10$aE43gZkCGiuFQ9o7WU3Fv.D20fsdrSXgPDz76Z9Y5erpepNDbnjEC', 1, 2, '2350-04-15'),
(80, 'test11', 'email', '$2b$10$V.LvwDMgTFdY8FfNID3auuYl0Y1PfKRI34A4nHuEYnux35SJ3IDJm', 1, 2, '2350-04-15'),
(81, 'test1000', 'e', '$2b$10$EhCakgCsmjcMIs0XpeeuielgRjJ48QvuCjR6TRYuuWI7Hpu3C5xXm', 1, 2, '2350-04-15'),
(82, 'test1111', '1', '$2b$10$.B5ucOoJ5KtHbob9e35LuusGXGUNeyvIirN34Q/SW59X0xx6iVIXG', 1, 2, '2350-04-15'),
(83, 'test10000', '1', '$2b$10$cLDPvtusy3r5U61uOTZx2uuSZD52JASOH.Jz3yCCyDXm6BUf121M6', 1, 2, '2350-04-15'),
(84, 'tes1023', '123', '$2b$10$l6sf49eoJUm9gol67AgkB.FG3FUnGjaIj.IQ1smokdKZ/o4GcuCs6', 1, 2, '2350-04-15'),
(85, 'test4', '1', '$2b$10$4te8.A1CM5hOPY5wSudb0uTzdLSkPtGKegypeYG.Muu2Z1RvS/UOS', 1, 2, '2350-04-15'),
(86, 'test7', 'e', '$2b$10$bVNNXYT8SMCUINtjGxkf6OnWxTZ2q9.6/lkRC9DGP2usNn0AgWdqe', 1, 2, '2350-04-15');

-- --------------------------------------------------------

--
-- Table structure for table `player_missions`
--

CREATE TABLE `player_missions` (
  `Player_Mission_Id` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL,
  `Mission1` int(11) NOT NULL,
  `Mission2` int(11) NOT NULL,
  `Mission3` int(11) NOT NULL,
  `Mission4` int(11) NOT NULL,
  `Mission5` int(11) NOT NULL,
  `RespawnMissionTime` time NOT NULL DEFAULT '00:05:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `player_missions`
--

INSERT INTO `player_missions` (`Player_Mission_Id`, `Player_Id`, `Mission1`, `Mission2`, `Mission3`, `Mission4`, `Mission5`, `RespawnMissionTime`) VALUES
(3, 1, 10, 2, 9, 36, 4, '00:03:10'),
(21, 68, 11, 12, 1, 7, 9, '00:03:10'),
(22, 69, 11, 6, 4, 2, 10, '00:03:10'),
(23, 70, 1, 36, 12, 9, 4, '00:03:10'),
(24, 71, 10, 1, 2, 12, 8, '00:03:10'),
(25, 72, 36, 4, 6, 7, 8, '00:03:10'),
(26, 73, 8, 1, 11, 12, 10, '00:03:10'),
(27, 74, 6, 10, 12, 2, 4, '00:03:10'),
(28, 75, 11, 4, 8, 2, 1, '00:03:10'),
(29, 76, 6, 3, 9, 11, 1, '00:03:10'),
(30, 77, 9, 1, 7, 2, 3, '00:03:10'),
(31, 78, 4, 11, 10, 36, 2, '00:03:10'),
(32, 79, 5, 1, 36, 12, 7, '00:03:10'),
(33, 80, 8, 4, 36, 12, 6, '00:03:10'),
(34, 81, 12, 6, 7, 10, 5, '00:03:10'),
(35, 82, 1, 2, 6, 3, 10, '00:03:10'),
(36, 83, 1, 3, 12, 7, 8, '00:03:10'),
(37, 84, 36, 9, 1, 3, 11, '00:03:10'),
(38, 85, 1, 5, 3, 6, 10, '00:03:10'),
(39, 86, 1, 12, 3, 11, 4, '00:03:10');

-- --------------------------------------------------------

--
-- Table structure for table `player_resources`
--

CREATE TABLE `player_resources` (
  `PResource_Id` int(11) NOT NULL,
  `Money` int(11) NOT NULL,
  `Water` int(11) NOT NULL,
  `Ore` int(11) NOT NULL,
  `People` int(11) NOT NULL,
  `Max_People` int(11) NOT NULL,
  `Max_Ore` int(11) NOT NULL,
  `Max_Water` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `player_resources`
--

INSERT INTO `player_resources` (`PResource_Id`, `Money`, `Water`, `Ore`, `People`, `Max_People`, `Max_Ore`, `Max_Water`, `Player_Id`) VALUES
(12, 350, 370, 500, 1650, 150, 1050, 1050, 1),
(30, 200, 90, 200, 1680, 100, 1000, 1000, 68),
(31, 14750, 650, 670, 1000, 1000, 1000, 1000, 69),
(32, 1800, 1000, 1000, 100, 100, 1000, 1000, 70),
(33, 200, 200, 200, 95, 100, 1000, 1000, 71),
(34, 200, 200, 200, 95, 100, 1000, 1000, 72),
(35, 200, 200, 200, 95, 100, 1000, 1000, 73),
(36, 200, 200, 200, 95, 100, 1000, 1000, 74),
(37, 200, 200, 200, 95, 100, 1000, 1000, 75),
(38, 200, 200, 200, 95, 100, 1000, 1000, 76),
(39, 200, 200, 200, 95, 100, 1000, 1000, 77),
(40, 200, 200, 200, 95, 100, 1000, 1000, 78),
(41, 200, 200, 200, 95, 100, 1000, 1000, 79),
(42, 200, 200, 200, 95, 100, 1000, 1000, 80),
(43, 200, 200, 200, 95, 100, 1000, 1000, 81),
(44, 200, 200, 200, 95, 100, 1000, 1000, 82),
(45, 200, 200, 200, 95, 100, 1000, 1000, 83),
(46, 200, 200, 200, 95, 100, 1000, 1000, 84),
(47, 200, 200, 200, 95, 100, 1000, 1000, 85),
(48, 200, 200, 200, 95, 100, 500, 500, 86);

-- --------------------------------------------------------

--
-- Table structure for table `player_upgrades`
--

CREATE TABLE `player_upgrades` (
  `Id` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL,
  `SSUpgrade_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ship_fleet`
--

CREATE TABLE `ship_fleet` (
  `Ship_Fleet_ID` int(11) NOT NULL,
  `Ship_on_Mission` int(11) NOT NULL,
  `Ship_UnderRepair` int(11) NOT NULL,
  `Ship_Health` int(11) NOT NULL,
  `Ship_UnderConstruction` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL,
  `Spaceships_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ship_fleet`
--

INSERT INTO `ship_fleet` (`Ship_Fleet_ID`, `Ship_on_Mission`, `Ship_UnderRepair`, `Ship_Health`, `Ship_UnderConstruction`, `Player_Id`, `Spaceships_Id`) VALUES
(1, 0, 0, 100, 0, 1, 5),
(59, 0, 0, 100, 0, 1, 5),
(60, 0, 0, 100, 0, 1, 5),
(61, 0, 0, 100, 0, 1, 5),
(62, 0, 0, 100, 0, 68, 5),
(63, 0, 0, 100, 0, 68, 5),
(64, 0, 0, 100, 0, 68, 5),
(65, 1, 0, 100, 0, 69, 5),
(66, 0, 0, 100, 0, 69, 5),
(67, 1, 0, 100, 0, 69, 5),
(68, 0, 0, 100, 0, 69, 5),
(69, 0, 0, 100, 0, 70, 5),
(70, 0, 0, 100, 0, 69, 5),
(71, 0, 0, 100, 0, 69, 5),
(72, 0, 0, 100, 0, 69, 5),
(73, 0, 0, 100, 0, 69, 5),
(74, 0, 0, 100, 0, 71, 5),
(75, 0, 0, 100, 0, 69, 3),
(76, 1, 0, 100, 0, 69, 4),
(77, 0, 0, 100, 0, 69, 6),
(78, 0, 0, 100, 0, 72, 5),
(79, 0, 0, 100, 0, 73, 5),
(80, 0, 0, 100, 0, 74, 5),
(81, 0, 0, 100, 0, 75, 5),
(82, 0, 0, 100, 0, 76, 5),
(83, 0, 0, 100, 0, 77, 5),
(84, 0, 0, 100, 0, 78, 5),
(85, 0, 0, 100, 0, 79, 5),
(86, 0, 0, 100, 0, 69, 3),
(87, 0, 0, 100, 0, 80, 5),
(88, 0, 0, 100, 0, 81, 5),
(89, 0, 0, 100, 0, 82, 5),
(90, 0, 0, 100, 0, 83, 5),
(91, 0, 0, 100, 0, 84, 5),
(92, 0, 0, 100, 0, 85, 5),
(93, 0, 0, 100, 0, 86, 5);

-- --------------------------------------------------------

--
-- Table structure for table `solo_missions`
--

CREATE TABLE `solo_missions` (
  `Solo_Missions_Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Story` varchar(800) NOT NULL,
  `Time` time NOT NULL,
  `Input_Money` int(11) DEFAULT NULL,
  `Input_People` int(11) DEFAULT NULL,
  `Input_Ore` int(11) DEFAULT NULL,
  `Input_Water` int(11) DEFAULT NULL,
  `Ships_Id` int(11) NOT NULL,
  `Reward_Money` int(11) DEFAULT NULL,
  `Reward_People` int(11) DEFAULT NULL,
  `Reward_Ore` int(11) DEFAULT NULL,
  `Reward_Water` int(11) DEFAULT NULL,
  `Rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `solo_missions`
--

INSERT INTO `solo_missions` (`Solo_Missions_Id`, `Name`, `Story`, `Time`, `Input_Money`, `Input_People`, `Input_Ore`, `Input_Water`, `Ships_Id`, `Reward_Money`, `Reward_People`, `Reward_Ore`, `Reward_Water`, `Rank`) VALUES
(1, 'Cargo Transport', 'Description and story', '00:05:00', 0, 5, 0, 50, 5, 300, 0, 0, 0, 1),
(2, 'VIP Transport', 'Description and story', '00:07:00', 0, 10, 0, 0, 5, 500, 0, 0, 0, 1),
(3, 'War Mission', 'Description and story', '00:10:00', 0, 15, 0, 70, 3, 700, 0, 150, 0, 1),
(4, 'Mining Mission', 'Description and story', '00:05:00', 100, 5, 0, 0, 4, 0, 0, 200, 150, 1),
(5, 'Refugee Rescue', 'Description and story', '00:05:00', 0, 0, 0, 80, 5, 0, 25, 0, 0, 1),
(6, 'Extrasolar Exploration', 'Description and story', '00:12:00', 200, 0, 0, 60, 6, 0, 0, 200, 150, 1),
(7, 'Ice Mining', 'Description and story', '00:05:00', 0, 5, 30, 0, 4, 0, 0, 0, 200, 1),
(8, 'Silver Mining', 'Description and story', '00:05:00', 0, 5, 0, 20, 4, 0, 0, 200, 0, 1),
(9, 'Refugee Rescue', 'Description and story', '00:10:00', 0, 0, 0, 150, 5, 0, 50, 0, 0, 1),
(10, 'Astroid Mining', 'Description and story', '00:05:00', 0, 5, 0, 0, 4, 0, 0, 20, 0, 1),
(11, 'Ice Transport from Earth', 'Description and story', '00:05:00', 0, 5, 0, 0, 4, 0, 0, 0, 25, 1),
(12, 'Escort of Martian President', 'Description and story', '00:05:00', 0, 5, 0, 0, 5, 50, 0, 0, 0, 1),
(13, 'Cargo Transport', 'Description and story', '00:10:00', 0, 15, 0, 100, 5, 400, 0, 0, 0, 2),
(14, 'VIP Transport', 'Description and story', '00:12:00', 0, 20, 0, 0, 5, 500, 0, 0, 0, 2),
(15, 'War Mission', 'Description and story', '00:15:00', 0, 20, 0, 70, 3, 800, 0, 200, 0, 2),
(16, 'Mining Mission', 'Description and story', '00:10:00', 150, 10, 0, 0, 4, 0, 0, 250, 200, 2),
(17, 'Refugee Rescue', 'Description and story', '00:10:00', 0, 0, 0, 120, 5, 0, 40, 0, 0, 2),
(18, 'Extrasolar Exploration', 'Description and story', '00:15:00', 350, 0, 0, 150, 6, 0, 0, 350, 300, 2),
(19, 'Ice Mining', 'Description and story', '00:14:00', 0, 15, 75, 0, 4, 0, 0, 0, 350, 2),
(20, 'Mining Mission', 'Description and story', '00:20:00', 300, 5, 0, 0, 4, 0, 0, 400, 350, 3),
(21, 'Refugee Rescue', 'Description and story', '00:17:00', 0, 0, 0, 200, 5, 0, 50, 0, 0, 3),
(22, 'Extrasolar Exploration', 'Description and story', '00:25:00', 400, 5, 0, 60, 6, 0, 0, 500, 400, 3),
(23, 'Ice Mining', 'Description and story', '00:20:00', 0, 20, 150, 0, 4, 0, 0, 0, 600, 3),
(24, 'Silver Mining', 'Description and story', '00:18:00', 0, 30, 0, 100, 4, 0, 0, 450, 0, 3),
(25, 'Refugee Rescue', 'Description and story', '00:20:00', 0, 0, 0, 250, 5, 0, 80, 0, 0, 3),
(26, 'Astroid Mining', 'Description and story', '00:22:00', 0, 20, 0, 0, 4, 0, 0, 400, 0, 3),
(27, 'Ice Transport from Earth', 'Description and story', '00:15:00', 0, 30, 0, 0, 4, 0, 0, 0, 350, 3),
(28, 'Ice Mining', 'Description and story', '00:35:00', 0, 75, 150, 0, 4, 0, 0, 0, 400, 4),
(29, 'Astroid Mining', 'Description and story', '00:42:00', 0, 75, 0, 0, 4, 0, 0, 600, 0, 4),
(30, 'Ice Transport from Earth', 'Description and story', '00:35:00', 0, 50, 0, 0, 4, 0, 0, 0, 300, 4),
(31, 'Escort of Martian President', 'Description and story', '00:35:00', 0, 50, 0, 0, 5, 450, 0, 0, 0, 4),
(32, 'Cargo Transport', 'Description and story', '00:28:00', 0, 45, 0, 250, 5, 800, 0, 0, 0, 4),
(33, 'Refugee Rescue', 'Description and story', '00:40:00', 0, 0, 0, 400, 5, 0, 100, 0, 0, 4),
(34, 'Ice Mining', 'Description and story', '00:40:00', 0, 70, 250, 0, 4, 0, 0, 0, 650, 4),
(35, 'Mining Mission', 'Description and story', '00:45:00', 700, 50, 0, 0, 4, 0, 0, 500, 500, 4),
(36, 'Extrasolar Exploration', 'Description and story', '00:45:00', 600, 5, 0, 200, 6, 0, 0, 600, 250, 1);

-- --------------------------------------------------------

--
-- Table structure for table `spaceships`
--

CREATE TABLE `spaceships` (
  `Spaceships_Id` int(11) NOT NULL,
  `Type` text NOT NULL,
  `Time_Build` time NOT NULL,
  `Time_Repair` time NOT NULL,
  `Price_Min` int(11) NOT NULL,
  `Price_Max` int(11) NOT NULL,
  `Input_Crew` int(11) NOT NULL,
  `Input_Ore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spaceships`
--

INSERT INTO `spaceships` (`Spaceships_Id`, `Type`, `Time_Build`, `Time_Repair`, `Price_Min`, `Price_Max`, `Input_Crew`, `Input_Ore`) VALUES
(3, 'War Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(4, 'Mining Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(5, 'Transport Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(6, 'Exploration Ship', '00:00:30', '00:00:30', 100, 200, 20, 50);

-- --------------------------------------------------------

--
-- Table structure for table `space_station`
--

CREATE TABLE `space_station` (
  `SSUpgrade_Id` int(11) NOT NULL,
  `Upgrade_Type` text NOT NULL,
  `Upgrade_Level` int(11) NOT NULL,
  `Spaceships_Id` int(11) DEFAULT NULL,
  `Price` int(11) NOT NULL,
  `Increase_People` int(11) DEFAULT NULL,
  `Increase_Water` int(11) DEFAULT NULL,
  `Increase_Ore` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `space_station`
--

INSERT INTO `space_station` (`SSUpgrade_Id`, `Upgrade_Type`, `Upgrade_Level`, `Spaceships_Id`, `Price`, `Increase_People`, `Increase_Water`, `Increase_Ore`) VALUES
(1, 'Dome', 1, NULL, 100, 50, NULL, NULL),
(2, 'Dome', 2, NULL, 200, 100, NULL, NULL),
(3, 'Dome', 3, NULL, 300, 150, NULL, NULL),
(4, 'Storage', 1, NULL, 100, NULL, 50, 50),
(5, 'Storage', 2, NULL, 200, NULL, 100, 100),
(6, 'Storage', 3, NULL, 300, NULL, 150, 150),
(7, 'Shipyard', 1, 4, 100, NULL, NULL, NULL),
(8, 'Shipyard', 2, 3, 200, NULL, NULL, NULL),
(9, 'Shipyard', 3, 6, 300, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accepted_multiplayer_missions`
--
ALTER TABLE `accepted_multiplayer_missions`
  ADD PRIMARY KEY (`amm_Id`),
  ADD KEY `MMissions_Id` (`amm_MMissions_Id`);

--
-- Indexes for table `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  ADD PRIMARY KEY (`asm_Id`),
  ADD KEY `Player_Id` (`Player_Id`),
  ADD KEY `Solo_Mission_Id` (`Solo_Mission_Id`),
  ADD KEY `Ship_Fleet_ID` (`Ship_Fleet_ID`);

--
-- Indexes for table `computer_trading`
--
ALTER TABLE `computer_trading`
  ADD PRIMARY KEY (`Trading_Id`),
  ADD KEY `Spaceships_Id` (`Spaceships_Id`);

--
-- Indexes for table `factions`
--
ALTER TABLE `factions`
  ADD PRIMARY KEY (`Factions_Id`);

--
-- Indexes for table `multiplayer_missions`
--
ALTER TABLE `multiplayer_missions`
  ADD PRIMARY KEY (`MMissions_Id`),
  ADD KEY `Ship_Id` (`Ship_Id`);

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`Player_Id`),
  ADD KEY `Faction` (`Faction_Id`),
  ADD KEY `Faction_2` (`Faction_Id`);

--
-- Indexes for table `player_missions`
--
ALTER TABLE `player_missions`
  ADD PRIMARY KEY (`Player_Mission_Id`),
  ADD KEY `Mission1` (`Mission1`),
  ADD KEY `Mission2` (`Mission2`),
  ADD KEY `Mission3` (`Mission3`),
  ADD KEY `Mission4` (`Mission4`),
  ADD KEY `Mission5` (`Mission5`),
  ADD KEY `Player_Id` (`Player_Id`);

--
-- Indexes for table `player_resources`
--
ALTER TABLE `player_resources`
  ADD PRIMARY KEY (`PResource_Id`),
  ADD KEY `Player` (`Player_Id`);

--
-- Indexes for table `player_upgrades`
--
ALTER TABLE `player_upgrades`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Player_Id` (`Player_Id`),
  ADD KEY `SSUpgrade_Id` (`SSUpgrade_Id`);

--
-- Indexes for table `ship_fleet`
--
ALTER TABLE `ship_fleet`
  ADD PRIMARY KEY (`Ship_Fleet_ID`),
  ADD KEY `Player` (`Player_Id`),
  ADD KEY `Spaceships` (`Spaceships_Id`);

--
-- Indexes for table `solo_missions`
--
ALTER TABLE `solo_missions`
  ADD PRIMARY KEY (`Solo_Missions_Id`),
  ADD KEY `Ships` (`Ships_Id`);

--
-- Indexes for table `spaceships`
--
ALTER TABLE `spaceships`
  ADD PRIMARY KEY (`Spaceships_Id`);

--
-- Indexes for table `space_station`
--
ALTER TABLE `space_station`
  ADD PRIMARY KEY (`SSUpgrade_Id`),
  ADD KEY `Spaceships_Id` (`Spaceships_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accepted_multiplayer_missions`
--
ALTER TABLE `accepted_multiplayer_missions`
  MODIFY `amm_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  MODIFY `asm_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `computer_trading`
--
ALTER TABLE `computer_trading`
  MODIFY `Trading_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `factions`
--
ALTER TABLE `factions`
  MODIFY `Factions_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `multiplayer_missions`
--
ALTER TABLE `multiplayer_missions`
  MODIFY `MMissions_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `Player_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `player_missions`
--
ALTER TABLE `player_missions`
  MODIFY `Player_Mission_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `player_resources`
--
ALTER TABLE `player_resources`
  MODIFY `PResource_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `player_upgrades`
--
ALTER TABLE `player_upgrades`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ship_fleet`
--
ALTER TABLE `ship_fleet`
  MODIFY `Ship_Fleet_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `solo_missions`
--
ALTER TABLE `solo_missions`
  MODIFY `Solo_Missions_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `spaceships`
--
ALTER TABLE `spaceships`
  MODIFY `Spaceships_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `space_station`
--
ALTER TABLE `space_station`
  MODIFY `SSUpgrade_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  ADD CONSTRAINT `accepted_solomissions_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);

--
-- Constraints for table `computer_trading`
--
ALTER TABLE `computer_trading`
  ADD CONSTRAINT `computer_trading_ibfk_1` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Constraints for table `multiplayer_missions`
--
ALTER TABLE `multiplayer_missions`
  ADD CONSTRAINT `Ship_Id` FOREIGN KEY (`Ship_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Constraints for table `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `player_ibfk_1` FOREIGN KEY (`Faction_Id`) REFERENCES `factions` (`Factions_Id`);

--
-- Constraints for table `player_missions`
--
ALTER TABLE `player_missions`
  ADD CONSTRAINT `player_missions_ibfk_1` FOREIGN KEY (`Mission1`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_2` FOREIGN KEY (`Mission2`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_3` FOREIGN KEY (`Mission3`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_4` FOREIGN KEY (`Mission4`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_5` FOREIGN KEY (`Mission5`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_6` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);

--
-- Constraints for table `player_resources`
--
ALTER TABLE `player_resources`
  ADD CONSTRAINT `Player_Rank` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`),
  ADD CONSTRAINT `player_resources_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);

--
-- Constraints for table `player_upgrades`
--
ALTER TABLE `player_upgrades`
  ADD CONSTRAINT `player_upgrades_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`),
  ADD CONSTRAINT `player_upgrades_ibfk_2` FOREIGN KEY (`SSUpgrade_Id`) REFERENCES `space_station` (`SSUpgrade_Id`);

--
-- Constraints for table `ship_fleet`
--
ALTER TABLE `ship_fleet`
  ADD CONSTRAINT `ship_fleet_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`),
  ADD CONSTRAINT `ship_fleet_ibfk_2` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Constraints for table `solo_missions`
--
ALTER TABLE `solo_missions`
  ADD CONSTRAINT `solo_missions_ibfk_1` FOREIGN KEY (`Ships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Constraints for table `space_station`
--
ALTER TABLE `space_station`
  ADD CONSTRAINT `space_station_ibfk_1` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
