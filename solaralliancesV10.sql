-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 18, 2021 at 05:44 PM
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
-- Table structure for table `accepted_solomissions`
--

CREATE TABLE `accepted_solomissions` (
  `asm_Id` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL,
  `Solo_Mission_Id` int(11) NOT NULL,
  `Mission_Time` time NOT NULL,
  `Confirmation_Sent_To_Player` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accepted_solomissions`
--

INSERT INTO `accepted_solomissions` (`asm_Id`, `Player_Id`, `Solo_Mission_Id`, `Mission_Time`, `Confirmation_Sent_To_Player`) VALUES
(173, 50, 3, '00:05:00', 0);

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
  `Story` varchar(800) NOT NULL,
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
  `Minimum_Ore` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `Player_Id` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Rank` int(11) NOT NULL DEFAULT '1',
  `Faction_Id` int(11) NOT NULL DEFAULT '2',
  `In_Game_Date` date NOT NULL DEFAULT '2350-04-15'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`Player_Id`, `Name`, `Email`, `Password`, `Rank`, `Faction_Id`, `In_Game_Date`) VALUES
(50, 'Name', 'Email', 'Password', 1, 2, '2350-04-15'),
(51, 'Leon', 'Email', 'Password', 1, 2, '2350-04-15'),
(52, 'gandalfoson', 'Email', 'Password', 1, 2, '2350-04-15');

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
(3, 50, 3, 5, 1, 4, 2, '00:05:00'),
(4, 51, 1, 3, 3, 5, 5, '00:05:00'),
(5, 52, 1, 3, 3, 5, 5, '00:05:00');

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
(12, 1000, -3280, 1000, -1760, 100, 1000, 1000, 50),
(13, 1000, 1000, 1000, 100, 100, 1000, 1000, 51),
(14, 1000, 1000, 1000, 100, 100, 1000, 1000, 52);

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
(6, 0, 0, 100, 0, 50, 5),
(7, 0, 0, 100, 0, 51, 5),
(8, 0, 0, 100, 0, 52, 5);

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
(1, 'Cargo Transport', 'Description and story', '00:05:00', NULL, 10, NULL, 20, 5, 300, NULL, NULL, NULL, 1),
(2, 'VIP Mission', 'Description and story', '00:05:00', NULL, 10, NULL, 20, 5, 300, NULL, NULL, NULL, 1),
(3, 'War Mission', 'Description and story', '00:05:00', NULL, 10, NULL, 20, 5, 300, NULL, NULL, NULL, 1),
(4, 'Mining Mission', 'Description and story', '00:05:00', NULL, 10, NULL, 20, 5, 300, NULL, NULL, NULL, 1),
(5, 'Refugee Transport', 'Description and story', '00:05:00', NULL, 10, NULL, 20, 5, 300, NULL, NULL, NULL, 1);

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
  `Input_Crew` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spaceships`
--

INSERT INTO `spaceships` (`Spaceships_Id`, `Type`, `Time_Build`, `Time_Repair`, `Price_Min`, `Price_Max`, `Input_Crew`) VALUES
(3, 'War Ship', '00:00:30', '00:00:30', 100, 200, 20),
(4, 'Mining Ship', '00:00:30', '00:00:30', 100, 200, 20),
(5, 'Transport Ship', '00:00:30', '00:00:30', 100, 200, 20),
(6, 'Exploration Ship', '00:00:30', '00:00:30', 100, 200, 20);

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

-- --------------------------------------------------------

--
-- Table structure for table `submited_mmissions`
--

CREATE TABLE `submited_mmissions` (
  `SubmittedMissions_Id` int(11) NOT NULL,
  `Submited_water` int(11) DEFAULT NULL,
  `Submited_people` int(11) DEFAULT NULL,
  `Submited_ore` int(11) DEFAULT NULL,
  `Submited_money` int(11) DEFAULT NULL,
  `Submited_shipId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  ADD PRIMARY KEY (`asm_Id`),
  ADD KEY `Player_Id` (`Player_Id`),
  ADD KEY `Solo_Mission_Id` (`Solo_Mission_Id`);

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
  ADD PRIMARY KEY (`MMissions_Id`);

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
-- Indexes for table `submited_mmissions`
--
ALTER TABLE `submited_mmissions`
  ADD PRIMARY KEY (`SubmittedMissions_Id`),
  ADD KEY `Submited_ship` (`Submited_shipId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  MODIFY `asm_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=174;

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
  MODIFY `MMissions_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `Player_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `player_missions`
--
ALTER TABLE `player_missions`
  MODIFY `Player_Mission_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `player_resources`
--
ALTER TABLE `player_resources`
  MODIFY `PResource_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `player_upgrades`
--
ALTER TABLE `player_upgrades`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ship_fleet`
--
ALTER TABLE `ship_fleet`
  MODIFY `Ship_Fleet_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `solo_missions`
--
ALTER TABLE `solo_missions`
  MODIFY `Solo_Missions_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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

--
-- Constraints for table `submited_mmissions`
--
ALTER TABLE `submited_mmissions`
  ADD CONSTRAINT `submited_mmissions_ibfk_1` FOREIGN KEY (`Submited_shipId`) REFERENCES `ship_fleet` (`Ship_Fleet_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
