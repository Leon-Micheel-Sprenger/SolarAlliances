-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 01, 2021 at 04:52 PM
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
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `factions`
--

INSERT INTO `factions` (`Factions_Id`, `Name`) VALUES
(1, 'Earth | United Nations'),
(2, 'Martian Congressional Republic'),
(3, 'Belt | OPA');

-- --------------------------------------------------------

--
-- Table structure for table `multiplayer_missions`
--

CREATE TABLE `multiplayer_missions` (
  `MMissions_Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Story` varchar(800) NOT NULL,
  `Time` time NOT NULL,
  `Ship_type` varchar(30) NOT NULL,
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
  `Submitted_Money` int(11) DEFAULT NULL,
  `Submitted_Water` int(11) DEFAULT NULL,
  `Submitted_People` int(11) DEFAULT NULL,
  `Submitted_Ore` int(11) DEFAULT NULL
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
  `Faction` int(11) NOT NULL DEFAULT '2',
  `In_Game_Date` date NOT NULL DEFAULT '2350-04-15'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`Player_Id`, `Name`, `Email`, `Password`, `Rank`, `Faction`, `In_Game_Date`) VALUES
(7, 'Leon', 'Email', '123', 1, 2, '2350-04-15'),
(8, 'Name', 'Email', 'Password', 1, 2, '2350-04-15'),
(9, 'Joao', 'Email', '1234', 1, 2, '2350-04-15');

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
  `Player` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `player_resources`
--

INSERT INTO `player_resources` (`PResource_Id`, `Money`, `Water`, `Ore`, `People`, `Max_People`, `Max_Ore`, `Max_Water`, `Player`) VALUES
(1, 999, 1000, 1000, 100, 100, 1000, 1000, 8);

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
  `Player` int(11) NOT NULL,
  `Spaceships` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `Ships` varchar(30) NOT NULL,
  `Reward_Money` int(11) DEFAULT NULL,
  `Reward_People` int(11) DEFAULT NULL,
  `Reward_Ore` int(11) DEFAULT NULL,
  `Reward_Water` int(11) DEFAULT NULL,
  `Rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `spaceships`
--

CREATE TABLE `spaceships` (
  `Spaceships_Id` int(11) NOT NULL,
  `Type` int(11) NOT NULL,
  `Time_Build` int(11) NOT NULL,
  `Time_Repair` int(11) NOT NULL,
  `Price_Min` int(11) NOT NULL,
  `Price_Max` int(11) NOT NULL,
  `Input_Crew` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `space_station`
--

CREATE TABLE `space_station` (
  `SSUpgrade_Id` int(11) NOT NULL,
  `Upgrade_Type` int(11) NOT NULL,
  `Upgrade_Level` int(11) NOT NULL,
  `Ships` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `Increase_People` int(11) NOT NULL,
  `Increase_Water` int(11) NOT NULL,
  `Increase_Ore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

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
  ADD KEY `Faction` (`Faction`),
  ADD KEY `Faction_2` (`Faction`);

--
-- Indexes for table `player_resources`
--
ALTER TABLE `player_resources`
  ADD PRIMARY KEY (`PResource_Id`),
  ADD KEY `Player` (`Player`);

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
  ADD KEY `Player` (`Player`),
  ADD KEY `Spaceships` (`Spaceships`);

--
-- Indexes for table `solo_missions`
--
ALTER TABLE `solo_missions`
  ADD PRIMARY KEY (`Solo_Missions_Id`);

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
  MODIFY `Player_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `player_resources`
--
ALTER TABLE `player_resources`
  MODIFY `PResource_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `player_upgrades`
--
ALTER TABLE `player_upgrades`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ship_fleet`
--
ALTER TABLE `ship_fleet`
  MODIFY `Ship_Fleet_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `solo_missions`
--
ALTER TABLE `solo_missions`
  MODIFY `Solo_Missions_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `spaceships`
--
ALTER TABLE `spaceships`
  MODIFY `Spaceships_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `space_station`
--
ALTER TABLE `space_station`
  MODIFY `SSUpgrade_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `computer_trading`
--
ALTER TABLE `computer_trading`
  ADD CONSTRAINT `computer_trading_ibfk_1` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Constraints for table `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `player_ibfk_1` FOREIGN KEY (`Faction`) REFERENCES `factions` (`Factions_Id`);

--
-- Constraints for table `player_resources`
--
ALTER TABLE `player_resources`
  ADD CONSTRAINT `player_resources_ibfk_1` FOREIGN KEY (`Player`) REFERENCES `player` (`Player_Id`);

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
  ADD CONSTRAINT `ship_fleet_ibfk_1` FOREIGN KEY (`Player`) REFERENCES `player` (`Player_Id`),
  ADD CONSTRAINT `ship_fleet_ibfk_2` FOREIGN KEY (`Spaceships`) REFERENCES `spaceships` (`Spaceships_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
