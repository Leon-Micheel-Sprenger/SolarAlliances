-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 22, 2021 at 07:36 PM
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
(8, 'Trade Federation', 'Due to the wide spreading civil war in the recent years on Earth, the United Nations are in great need for resources to rebuild cities and infrastructure. That is why trade ministers of all  factions agreed to a timebound trade federation to deliver ores to earth in exchange for money. ', '00:59:00', 5, 0, 0, 0, 800, 0, 0, 9000, 0, 30, 0, 0, 0, 300, 0, 0, 0, 0, 0, 1, 'MB'),
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
(69, 'Leon1', 'email', '$2b$10$YYMl3sQWoT0TnOxWUuz.DeJAc/Xz7I5MQTRC.8ORBVbxHTIbg/u5O', 4, 2, '2350-04-15'),
(88, 'Player2', 'email', '$2b$10$5C6.KoLXybchEyvwvPJ8ce1Yuqz264ZvLkjRNJGHCHdL2OLW19vtW', 2, 2, '2364-07-19');

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
(22, 69, 36, 34, 32, 29, 30, '00:05:00'),
(23, 88, 13, 14, 15, 16, 17, '00:05:00');

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
(31, 14750, 800, 800, 300, 400, 950, 950, 69),
(32, 2500, 350, 420, 150, 250, 550, 550, 88);

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
  `Player_Id` int(11) NOT NULL,
  `Spaceships_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ship_fleet`
--

INSERT INTO `ship_fleet` (`Ship_Fleet_ID`, `Ship_on_Mission`, `Player_Id`, `Spaceships_Id`) VALUES
(70, 0, 69, 5),
(71, 0, 69, 5),
(72, 0, 69, 4),
(73, 0, 69, 3),
(75, 0, 69, 3),
(76, 0, 69, 4),
(77, 0, 69, 6),
(78, 0, 88, 5),
(79, 0, 88, 5),
(80, 0, 88, 3),
(81, 0, 88, 4);

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
(25, 'Refugee Rescue', 'Description and story', '00:20:00', 0, 0, 0, 250, 5, 300, 80, 0, 0, 3),
(26, 'Siege Rebels', 'Description and story', '00:22:00', 0, 20, 0, 0, 4, 400, 0, 200, 0, 3),
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
  `Input_Crew` int(11) NOT NULL,
  `Input_Ore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spaceships`
--

INSERT INTO `spaceships` (`Spaceships_Id`, `Type`, `Input_Crew`, `Input_Ore`) VALUES
(3, 'War Ship', 20, 50),
(4, 'Mining Ship', 20, 50),
(5, 'Transport Ship', 20, 50),
(6, 'Exploration Ship', 20, 50);

-- --------------------------------------------------------

--
-- Table structure for table `space_station`
--

CREATE TABLE `space_station` (
  `SSUpgrade_Id` int(11) NOT NULL,
  `Upgrade_Type` text NOT NULL,
  `Upgrade_Level` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `Increase_People` int(11) DEFAULT NULL,
  `Increase_Water` int(11) DEFAULT NULL,
  `Increase_Ore` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `space_station`
--

INSERT INTO `space_station` (`SSUpgrade_Id`, `Upgrade_Type`, `Upgrade_Level`, `Price`, `Increase_People`, `Increase_Water`, `Increase_Ore`) VALUES
(1, 'Dome', 1, 500, 50, NULL, NULL),
(2, 'Dome', 2, 200, 100, NULL, NULL),
(3, 'Dome', 3, 300, 150, NULL, NULL),
(4, 'Storage', 1, 100, NULL, 50, 50),
(5, 'Storage', 2, 200, NULL, 100, 100),
(6, 'Storage', 3, 300, NULL, 150, 150);

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
  ADD PRIMARY KEY (`SSUpgrade_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accepted_multiplayer_missions`
--
ALTER TABLE `accepted_multiplayer_missions`
  MODIFY `amm_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  MODIFY `asm_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

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
  MODIFY `Player_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
