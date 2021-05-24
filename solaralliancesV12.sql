-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Tempo de geração: 24-Maio-2021 às 08:03
-- Versão do servidor: 5.7.24
-- versão do PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `solaralliances`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `accepted_solomissions`
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
-- Extraindo dados da tabela `accepted_solomissions`
--

INSERT INTO `accepted_solomissions` (`asm_Id`, `Player_Id`, `Solo_Mission_Id`, `Mission_Time`, `Ship_Fleet_ID`, `Confirmation_Sent_To_Player`) VALUES
(260, 50, 1, '00:00:00', 6, 1),
(261, 50, 4, '00:00:00', 8, 1),
(262, 50, 5, '00:00:00', 6, 1),
(263, 50, 3, '00:00:00', 6, 1),
(264, 50, 5, '00:00:00', 8, 1),
(265, 50, 2, '00:00:00', 6, 1),
(266, 50, 1, '00:00:00', 6, 1),
(267, 50, 5, '00:00:00', 8, 1),
(268, 50, 5, '00:00:00', 6, 1),
(269, 50, 1, '00:00:00', 8, 1),
(270, 50, 3, '00:00:00', 6, 1),
(271, 50, 2, '00:00:00', 8, 1),
(272, 50, 3, '00:00:00', 6, 1),
(273, 50, 2, '00:00:00', 8, 1),
(274, 50, 4, '00:00:00', 6, 1),
(275, 50, 2, '00:00:00', 8, 1),
(276, 50, 2, '00:00:00', 6, 1),
(277, 50, 3, '00:00:00', 8, 1),
(278, 50, 3, '00:00:00', 6, 1),
(279, 50, 2, '00:00:00', 8, 1),
(280, 50, 4, '00:00:00', 6, 1),
(281, 50, 1, '00:00:00', 8, 1),
(282, 50, 4, '00:00:00', 6, 1),
(283, 50, 1, '00:00:00', 8, 1),
(284, 50, 1, '00:00:00', 6, 1),
(285, 50, 5, '00:00:00', 8, 1),
(286, 50, 5, '00:00:00', 6, 1),
(287, 50, 3, '00:00:00', 8, 1),
(288, 50, 3, '00:00:00', 6, 1),
(289, 50, 4, '00:00:00', 8, 1),
(290, 50, 1, '00:00:00', 6, 1),
(291, 50, 4, '00:00:00', 8, 1),
(292, 50, 5, '00:00:00', 6, 1),
(293, 50, 1, '00:00:00', 8, 1),
(294, 50, 5, '00:00:00', 6, 1),
(295, 50, 3, '00:00:00', 8, 1),
(296, 54, 4, '00:00:00', 13, 1),
(297, 54, 4, '00:00:00', 13, 1),
(298, 54, 4, '00:00:00', 13, 1),
(299, 54, 4, '00:00:00', 13, 1),
(300, 54, 4, '00:00:00', 13, 1),
(301, 54, 4, '00:00:00', 13, 1),
(302, 54, 3, '00:00:00', 21, 1),
(303, 54, 1, '00:00:00', 22, 1),
(304, 54, 4, '00:00:00', 21, 1),
(305, 54, 3, '00:00:00', 22, 1),
(306, 55, 3, '00:00:00', 23, 1),
(307, 55, 4, '00:00:00', 24, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `computer_trading`
--

CREATE TABLE `computer_trading` (
  `Trading_Id` int(11) NOT NULL,
  `Spaceships_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `factions`
--

CREATE TABLE `factions` (
  `Factions_Id` int(11) NOT NULL,
  `Faction_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `factions`
--

INSERT INTO `factions` (`Factions_Id`, `Faction_Name`) VALUES
(1, 'Earth | United Nations'),
(2, 'Martian Congressional Republic'),
(3, 'Belt | OPA');

-- --------------------------------------------------------

--
-- Estrutura da tabela `multiplayer_missions`
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
-- Estrutura da tabela `player`
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
-- Extraindo dados da tabela `player`
--

INSERT INTO `player` (`Player_Id`, `Name`, `Email`, `Password`, `Rank`, `Faction_Id`, `In_Game_Date`) VALUES
(50, 'Name', 'Email', 'Password', 1, 2, '2350-04-15'),
(51, 'Leon', 'Email', 'Password', 1, 2, '2350-04-15'),
(52, 'gandalfoson', 'Email', 'Password', 1, 2, '2350-04-15'),
(53, 'Leon5', 'Email', 'Password', 1, 2, '2350-04-15'),
(54, '123', '123', '123', 1, 2, '2350-04-15'),
(55, '456', 'Email', '123', 1, 2, '2350-04-15'),
(56, 'aaa', 'Email', '456', 1, 2, '2350-04-15');

-- --------------------------------------------------------

--
-- Estrutura da tabela `player_missions`
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
-- Extraindo dados da tabela `player_missions`
--

INSERT INTO `player_missions` (`Player_Mission_Id`, `Player_Id`, `Mission1`, `Mission2`, `Mission3`, `Mission4`, `Mission5`, `RespawnMissionTime`) VALUES
(3, 50, 4, 2, 3, 5, 1, '00:05:00'),
(4, 51, 1, 3, 3, 5, 5, '00:05:00'),
(5, 52, 1, 3, 3, 5, 5, '00:05:00'),
(6, 53, 4, 3, 5, 2, 1, '00:05:00'),
(7, 54, 4, 3, 1, 2, 5, '00:05:00'),
(8, 55, 4, 3, 1, 5, 2, '00:05:00'),
(9, 56, 3, 1, 2, 4, 5, '00:05:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `player_resources`
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
-- Extraindo dados da tabela `player_resources`
--

INSERT INTO `player_resources` (`PResource_Id`, `Money`, `Water`, `Ore`, `People`, `Max_People`, `Max_Ore`, `Max_Water`, `Player_Id`) VALUES
(12, 350600, 400, 1000, 120, 400, 1300, 1300, 50),
(13, 1000, 1000, 1000, 100, 100, 1000, 1000, 51),
(14, 1000, 1000, 1000, 100, 100, 1000, 1000, 52),
(15, 1000, 980, 1000, 90, 100, 1000, 1000, 53),
(16, 2500, 800, 800, -80, 1300, 1300, 1300, 54),
(17, 1600, 960, 0, 80, 1300, 1300, 1300, 55),
(18, 900, 1000, 950, 80, 150, 1000, 1000, 56);

-- --------------------------------------------------------

--
-- Estrutura da tabela `player_upgrades`
--

CREATE TABLE `player_upgrades` (
  `Id` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL,
  `SSUpgrade_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `player_upgrades`
--

INSERT INTO `player_upgrades` (`Id`, `Player_Id`, `SSUpgrade_Id`) VALUES
(1, 54, 1),
(2, 54, 4),
(3, 54, 3),
(4, 54, 1),
(5, 54, 4),
(6, 54, 5),
(7, 54, 2),
(8, 54, 3),
(9, 54, 2),
(10, 54, 2),
(11, 54, 3),
(12, 54, 3),
(13, 54, 3),
(14, 54, 3),
(15, 54, 3),
(16, 55, 1),
(17, 55, 4),
(18, 55, 4),
(19, 55, 5),
(20, 55, 3),
(21, 55, 2),
(22, 55, 3),
(23, 55, 3),
(24, 55, 3),
(25, 55, 3),
(26, 55, 1),
(27, 55, 3),
(28, 55, 3),
(29, 54, 3),
(30, 54, 3),
(31, 54, 1),
(32, 54, 4),
(33, 54, 2),
(34, 54, 5),
(35, 54, 3),
(36, 54, 3),
(37, 54, 3),
(38, 50, 1),
(39, 50, 4),
(40, 50, 2),
(41, 50, 2),
(42, 50, 3),
(43, 50, 3),
(44, 50, 3),
(45, 50, 3),
(46, 50, 3),
(47, 50, 3),
(48, 50, 3),
(49, 50, 3),
(50, 50, 3),
(51, 50, 3),
(52, 50, 5),
(53, 50, 5),
(54, 50, 5),
(55, 50, 5),
(56, 50, 3),
(57, 50, 3),
(58, 50, 3),
(59, 50, 3),
(60, 50, 3),
(61, 56, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ship_fleet`
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
-- Extraindo dados da tabela `ship_fleet`
--

INSERT INTO `ship_fleet` (`Ship_Fleet_ID`, `Ship_on_Mission`, `Ship_UnderRepair`, `Ship_Health`, `Ship_UnderConstruction`, `Player_Id`, `Spaceships_Id`) VALUES
(6, 0, 0, 100, 0, 50, 5),
(8, 0, 0, 100, 0, 50, 5),
(9, 0, 0, 100, 0, 53, 5),
(10, 0, 0, 100, 0, 50, 3),
(11, 0, 0, 100, 0, 50, 4),
(12, 0, 0, 100, 0, 50, 6),
(13, 0, 0, 100, 0, 54, 5),
(23, 0, 0, 100, 0, 55, 5),
(38, 0, 0, 100, 0, 55, 3),
(39, 0, 0, 100, 0, 55, 3),
(40, 0, 0, 100, 0, 54, 3),
(41, 0, 0, 100, 0, 54, 5),
(42, 0, 0, 100, 0, 54, 5),
(43, 0, 0, 100, 0, 54, 4),
(44, 0, 0, 100, 0, 54, 6),
(45, 0, 0, 100, 0, 56, 5),
(46, 0, 0, 100, 0, 56, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `solo_missions`
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
-- Extraindo dados da tabela `solo_missions`
--

INSERT INTO `solo_missions` (`Solo_Missions_Id`, `Name`, `Story`, `Time`, `Input_Money`, `Input_People`, `Input_Ore`, `Input_Water`, `Ships_Id`, `Reward_Money`, `Reward_People`, `Reward_Ore`, `Reward_Water`, `Rank`) VALUES
(1, 'Cargo Transport', 'Description and story', '00:05:00', 0, 10, 0, 20, 5, 300, 0, 0, 0, 1),
(2, 'VIP Mission', 'Description and story', '00:05:00', 0, 10, 0, 20, 5, 300, 0, 0, 0, 1),
(3, 'War Mission', 'Description and story', '00:05:00', 0, 10, 0, 20, 5, 300, 0, 0, 0, 1),
(4, 'Mining Mission', 'Description and story', '00:05:00', 0, 10, 0, 20, 5, 300, 0, 0, 0, 1),
(5, 'Refugee Transport', 'Description and story', '00:05:00', 0, 10, 0, 20, 5, 300, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `spaceships`
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
-- Extraindo dados da tabela `spaceships`
--

INSERT INTO `spaceships` (`Spaceships_Id`, `Type`, `Time_Build`, `Time_Repair`, `Price_Min`, `Price_Max`, `Input_Crew`, `Input_Ore`) VALUES
(3, 'War Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(4, 'Mining Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(5, 'Transport Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(6, 'Exploration Ship', '00:00:30', '00:00:30', 100, 200, 20, 50);

-- --------------------------------------------------------

--
-- Estrutura da tabela `space_station`
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
-- Extraindo dados da tabela `space_station`
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
-- Estrutura da tabela `submited_mmissions`
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
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  ADD PRIMARY KEY (`asm_Id`),
  ADD KEY `Player_Id` (`Player_Id`),
  ADD KEY `Solo_Mission_Id` (`Solo_Mission_Id`),
  ADD KEY `Ship_Fleet_ID` (`Ship_Fleet_ID`);

--
-- Índices para tabela `computer_trading`
--
ALTER TABLE `computer_trading`
  ADD PRIMARY KEY (`Trading_Id`),
  ADD KEY `Spaceships_Id` (`Spaceships_Id`);

--
-- Índices para tabela `factions`
--
ALTER TABLE `factions`
  ADD PRIMARY KEY (`Factions_Id`);

--
-- Índices para tabela `multiplayer_missions`
--
ALTER TABLE `multiplayer_missions`
  ADD PRIMARY KEY (`MMissions_Id`);

--
-- Índices para tabela `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`Player_Id`),
  ADD KEY `Faction` (`Faction_Id`),
  ADD KEY `Faction_2` (`Faction_Id`);

--
-- Índices para tabela `player_missions`
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
-- Índices para tabela `player_resources`
--
ALTER TABLE `player_resources`
  ADD PRIMARY KEY (`PResource_Id`),
  ADD KEY `Player` (`Player_Id`);

--
-- Índices para tabela `player_upgrades`
--
ALTER TABLE `player_upgrades`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Player_Id` (`Player_Id`),
  ADD KEY `SSUpgrade_Id` (`SSUpgrade_Id`);

--
-- Índices para tabela `ship_fleet`
--
ALTER TABLE `ship_fleet`
  ADD PRIMARY KEY (`Ship_Fleet_ID`),
  ADD KEY `Player` (`Player_Id`),
  ADD KEY `Spaceships` (`Spaceships_Id`);

--
-- Índices para tabela `solo_missions`
--
ALTER TABLE `solo_missions`
  ADD PRIMARY KEY (`Solo_Missions_Id`),
  ADD KEY `Ships` (`Ships_Id`);

--
-- Índices para tabela `spaceships`
--
ALTER TABLE `spaceships`
  ADD PRIMARY KEY (`Spaceships_Id`);

--
-- Índices para tabela `space_station`
--
ALTER TABLE `space_station`
  ADD PRIMARY KEY (`SSUpgrade_Id`),
  ADD KEY `Spaceships_Id` (`Spaceships_Id`);

--
-- Índices para tabela `submited_mmissions`
--
ALTER TABLE `submited_mmissions`
  ADD PRIMARY KEY (`SubmittedMissions_Id`),
  ADD KEY `Submited_ship` (`Submited_shipId`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  MODIFY `asm_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=308;

--
-- AUTO_INCREMENT de tabela `computer_trading`
--
ALTER TABLE `computer_trading`
  MODIFY `Trading_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `factions`
--
ALTER TABLE `factions`
  MODIFY `Factions_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `multiplayer_missions`
--
ALTER TABLE `multiplayer_missions`
  MODIFY `MMissions_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `player`
--
ALTER TABLE `player`
  MODIFY `Player_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de tabela `player_missions`
--
ALTER TABLE `player_missions`
  MODIFY `Player_Mission_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `player_resources`
--
ALTER TABLE `player_resources`
  MODIFY `PResource_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `player_upgrades`
--
ALTER TABLE `player_upgrades`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de tabela `ship_fleet`
--
ALTER TABLE `ship_fleet`
  MODIFY `Ship_Fleet_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de tabela `solo_missions`
--
ALTER TABLE `solo_missions`
  MODIFY `Solo_Missions_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `spaceships`
--
ALTER TABLE `spaceships`
  MODIFY `Spaceships_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `space_station`
--
ALTER TABLE `space_station`
  MODIFY `SSUpgrade_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `accepted_solomissions`
--
ALTER TABLE `accepted_solomissions`
  ADD CONSTRAINT `accepted_solomissions_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);

--
-- Limitadores para a tabela `computer_trading`
--
ALTER TABLE `computer_trading`
  ADD CONSTRAINT `computer_trading_ibfk_1` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Limitadores para a tabela `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `player_ibfk_1` FOREIGN KEY (`Faction_Id`) REFERENCES `factions` (`Factions_Id`);

--
-- Limitadores para a tabela `player_missions`
--
ALTER TABLE `player_missions`
  ADD CONSTRAINT `player_missions_ibfk_1` FOREIGN KEY (`Mission1`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_2` FOREIGN KEY (`Mission2`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_3` FOREIGN KEY (`Mission3`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_4` FOREIGN KEY (`Mission4`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_5` FOREIGN KEY (`Mission5`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_6` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);

--
-- Limitadores para a tabela `player_resources`
--
ALTER TABLE `player_resources`
  ADD CONSTRAINT `player_resources_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);

--
-- Limitadores para a tabela `player_upgrades`
--
ALTER TABLE `player_upgrades`
  ADD CONSTRAINT `player_upgrades_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`),
  ADD CONSTRAINT `player_upgrades_ibfk_2` FOREIGN KEY (`SSUpgrade_Id`) REFERENCES `space_station` (`SSUpgrade_Id`);

--
-- Limitadores para a tabela `ship_fleet`
--
ALTER TABLE `ship_fleet`
  ADD CONSTRAINT `ship_fleet_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`),
  ADD CONSTRAINT `ship_fleet_ibfk_2` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Limitadores para a tabela `solo_missions`
--
ALTER TABLE `solo_missions`
  ADD CONSTRAINT `solo_missions_ibfk_1` FOREIGN KEY (`Ships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Limitadores para a tabela `space_station`
--
ALTER TABLE `space_station`
  ADD CONSTRAINT `space_station_ibfk_1` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);

--
-- Limitadores para a tabela `submited_mmissions`
--
ALTER TABLE `submited_mmissions`
  ADD CONSTRAINT `submited_mmissions_ibfk_1` FOREIGN KEY (`Submited_shipId`) REFERENCES `ship_fleet` (`Ship_Fleet_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
