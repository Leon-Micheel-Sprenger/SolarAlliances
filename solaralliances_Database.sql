
create database solaralliances;

use solaralliances;

-- Default settings for Database:
-------------------------------------------------------------------------
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


--Create all table entities of the database
--------------------------------------------------------------------------

--Create table player 
CREATE TABLE `player` (
  `Player_Id` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Rank` int(11) NOT NULL DEFAULT '1',							--determines, which missions will be displayed and can be upgraded by station upgrades
  `Faction_Id` int(11) NOT NULL DEFAULT '2',
  `In_Game_Date` date NOT NULL DEFAULT '2350-04-15'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Create table accepted_solomissions --> stores all Solo missions, that have been accepted by the players (running and finished).
CREATE TABLE `accepted_solomissions` (
  `asm_Id` int(11) NOT NULL,										  	              --accepted-solomissions
  `Player_Id` int(11) NOT NULL,											
  `Solo_Mission_Id` int(11) NOT NULL,			
  `Mission_Time` time NOT NULL,									                	--time to finish mission (determines, how long ship will be blocked)
  `Ship_Fleet_ID` int(11) NOT NULL,										
  `Confirmation_Sent_To_Player` tinyint(1) NOT NULL DEFAULT '0'		--0 means not sent, 1 means sent
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--Create Table computer_trading --> not used for this prototype
CREATE TABLE `computer_trading` (
  `Trading_Id` int(11) NOT NULL,
  `Spaceships_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Create table for Factions 
CREATE TABLE `factions` (
  `Factions_Id` int(11) NOT NULL,
  `Faction_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--Create table Multiplayer Missions (not used for prototype)
--Input resources are costs of the mission, reward resources are profits. 
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


--Create table for Solo Missions --> 5 solo missions, that are displayed to the player in the solo missions interface (updated every 5 minutes)
CREATE TABLE `player_missions` (
  `Player_Mission_Id` int(11) NOT NULL,
  `Player_Id` int(11) NOT NULL,
  `Mission1` int(11) NOT NULL,
  `Mission2` int(11) NOT NULL,
  `Mission3` int(11) NOT NULL,
  `Mission4` int(11) NOT NULL,
  `Mission5` int(11) NOT NULL,
  `RespawnMissionTime` time NOT NULL DEFAULT '00:05:00'				--all handled through the server so far. 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--Create table player_resources --> holds all resources as well as maximum capacity of resources of the players 
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


--Create table player_upgrades --> all upgrades, that the player did!
CREATE TABLE `player_upgrades` (	
  `Id` int(11) NOT NULL,		
  `Player_Id` int(11) NOT NULL,
  `SSUpgrade_Id` int(11) NOT NULL					--coming from space_station (SSUpgrade_Id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--Create table ship_fleet --> all ships, that the player owns (available and on a mission)
CREATE TABLE `ship_fleet` (
  `Ship_Fleet_ID` int(11) NOT NULL,
  `Ship_on_Mission` int(11) NOT NULL,				    --0 means not on mission, 1 means on mission
  `Ship_UnderRepair` int(11) NOT NULL,				  --0 not repairing, 1 is repairing
  `Ship_Health` int(11) NOT NULL,					      --between 0 and 100
  `Ship_UnderConstruction` int(11) NOT NULL,		--0 not under construction, 1 under construction
  `Player_Id` int(11) NOT NULL,
  `Spaceships_Id` int(11) NOT NULL					    --coming from spaceships (Spaceships_Id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--Create table solo_missions --> stores all available solo_missions, that can be generated in the solo missions interface
--Input resources are costs of the mission, reward resources are profits. 
CREATE TABLE `solo_missions` (
  `Solo_Missions_Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Story` varchar(800) NOT NULL,
  `Time` time NOT NULL,						      	--time, how long mission will run
  `Input_Money` int(11) DEFAULT NULL,
  `Input_People` int(11) DEFAULT NULL,
  `Input_Ore` int(11) DEFAULT NULL,
  `Input_Water` int(11) DEFAULT NULL,
  `Ships_Id` int(11) NOT NULL,				    --coming from spaceships (Spaceships_Id)
  `Reward_Money` int(11) DEFAULT NULL,
  `Reward_People` int(11) DEFAULT NULL,
  `Reward_Ore` int(11) DEFAULT NULL,
  `Reward_Water` int(11) DEFAULT NULL,
  `Rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--Create table spaceships --> lists all available ships of the game
CREATE TABLE `spaceships` (
  `Spaceships_Id` int(11) NOT NULL,		
  `Type` text NOT NULL,
  `Time_Build` time NOT NULL,
  `Time_Repair` time NOT NULL,	
  `Price_Min` int(11) NOT NULL,				--to buy ship on trading bot (will generate an offer between price min and price max)
  `Price_Max` int(11) NOT NULL,
  `Input_Crew` int(11) NOT NULL,			--amount of people, that will be deducted when the ship is bought or build
  `Input_Ore` int(11) NOT NULL				--amount of ore needed to build the ship in the shipyard
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--Create table space_station --> holds all available station upgrades
CREATE TABLE `space_station` (
  `SSUpgrade_Id` int(11) NOT NULL,
  `Upgrade_Type` text NOT NULL,					--Dome or Storage or Shipyard
  `Upgrade_Level` int(11) NOT NULL,				-- 1, 2 or 3 --> determining the rank
  `Spaceships_Id` int(11) DEFAULT NULL,			--coming from spaceships (to unlock new ships)
  `Price` int(11) NOT NULL,						--money cost of the upgrade
  `Increase_People` int(11) DEFAULT NULL,		--increase in max amount people
  `Increase_Water` int(11) DEFAULT NULL,		--increase in max amount water
  `Increase_Ore` int(11) DEFAULT NULL			--increase in max amount ore
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--Create table submitted_missions --> holds amount of submitted resources in the multiplayer missions
CREATE TABLE `submited_mmissions` (
  `SubmittedMissions_Id` int(11) NOT NULL,
  `Submited_water` int(11) DEFAULT NULL,
  `Submited_people` int(11) DEFAULT NULL,
  `Submited_ore` int(11) DEFAULT NULL,
  `Submited_money` int(11) DEFAULT NULL,
  `Submited_shipId` int(11) DEFAULT NULL			--amount of ships submitted
) ENGINE=InnoDB DEFAULT CHARSET=utf8;





--Default Inserts to start game
---------------------------------------------------------------------------------------------

--Insert factions into factions
INSERT INTO `factions` (`Factions_Id`, `Faction_Name`) VALUES
(1, 'Earth | United Nations'),
(2, 'Martian Congressional Republic'),							--only playable faction so far
(3, 'Belt | OPA');


--Insert Test Player into player
INSERT INTO `player` (`Player_Id`, `Name`, `Email`, `Password`, `Rank`, `Faction_Id`, `In_Game_Date`) VALUES
(1, 'Name', 'Email', 'Password', 1, 2, '2350-04-15');


--Insert available solo_missions, that can be generated
INSERT INTO `solo_missions` (`Solo_Missions_Id`, `Name`, `Story`, `Time`, `Input_Money`, `Input_People`, `Input_Ore`, `Input_Water`, `Ships_Id`, `Reward_Money`, `Reward_People`, `Reward_Ore`, `Reward_Water`, `Rank`) VALUES
(1, 'Cargo Transport', 'Description and story', '00:05:00', 0, 5, 0, 50, 5, 300, 0, 0, 0, 1),
(2, 'VIP Transport', 'Description and story', '00:07:00', 0, 10, 0, 0, 5, 500, 0, 0, 0, 1),
(3, 'War Mission', 'Description and story', '00:10:00', 0, 15, 0, 70, 3, 700, 0, 150, 0, 1),
(4, 'Mining Mission', 'Description and story', '00:05:00', 100, 5, 0, 0, 4, 0, 0, 200, 150, 1),
(5, 'Refugee Rescue', 'Description and story', '00:05:00', 0, 0, 0, 50, 5, 0, 25, 0, 0, 1),
(6, 'Extrasolar Exploration', 'Description and story', '00:12:00', 200, 5, 0, 60, 6, 0, 0, 200, 150, 1),
(7, 'Ice Mining', 'Description and story', '00:05:00', 0, 5, 30, 0, 4, 0, 0, 0, 200, 1),
(8, 'Silver Mining', 'Description and story', '00:05:00', 0, 5, 0, 20, 4, 0, 0, 200, 0, 1),
(9, 'Refugee Rescue', 'Description and story', '00:10:00', 0, 0, 0, 100, 5, 0, 50, 0, 0, 1);


--Insert possible spaceships into spaceships
INSERT INTO `spaceships` (`Spaceships_Id`, `Type`, `Time_Build`, `Time_Repair`, `Price_Min`, `Price_Max`, `Input_Crew`, `Input_Ore`) VALUES
(3, 'War Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(4, 'Mining Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(5, 'Transport Ship', '00:00:30', '00:00:30', 100, 200, 20, 50),
(6, 'Exploration Ship', '00:00:30', '00:00:30', 100, 200, 20, 50);


--Insert Upgrades
--Dome upgrades increase max people and storage upgrades max water/ore and Shipyard upgrades unlock ships
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





--Test player Inserts
------------------------------------------------------------------------
--Insert Missions for Test Player
INSERT INTO `player_missions` (`Player_Mission_Id`, `Player_Id`, `Mission1`, `Mission2`, `Mission3`, `Mission4`, `Mission5`, `RespawnMissionTime`) VALUES
(3, 1, 4, 2, 3, 5, 1, '00:05:00');


--Insert Resources for Test Player
INSERT INTO `player_resources` (`PResource_Id`, `Money`, `Water`, `Ore`, `People`, `Max_People`, `Max_Ore`, `Max_Water`, `Player_Id`) VALUES
(12, 1000, 1000, 1000, 100, 100, 1000, 1000, 1);


--Insert Ship for Test player
INSERT INTO `ship_fleet` (`Ship_Fleet_ID`, `Ship_on_Mission`, `Ship_UnderRepair`, `Ship_Health`, `Ship_UnderConstruction`, `Player_Id`, `Spaceships_Id`) VALUES
(6, 0, 0, 100, 0, 1, 5),
(8, 0, 0, 100, 0, 1, 4);



--Alterations on the tables (assigning primary and secondary keys)
----------------------------------------------------------------------
ALTER TABLE `accepted_solomissions`
  ADD PRIMARY KEY (`asm_Id`),
  ADD KEY `Player_Id` (`Player_Id`),
  ADD KEY `Solo_Mission_Id` (`Solo_Mission_Id`),
  ADD KEY `Ship_Fleet_ID` (`Ship_Fleet_ID`);


ALTER TABLE `computer_trading`
  ADD PRIMARY KEY (`Trading_Id`),
  ADD KEY `Spaceships_Id` (`Spaceships_Id`);
  

ALTER TABLE `factions`
  ADD PRIMARY KEY (`Factions_Id`);


ALTER TABLE `multiplayer_missions`
  ADD PRIMARY KEY (`MMissions_Id`);
  

ALTER TABLE `player`
  ADD PRIMARY KEY (`Player_Id`),
  ADD KEY `Faction` (`Faction_Id`),
  ADD KEY `Faction_2` (`Faction_Id`);
  

ALTER TABLE `player_missions`
  ADD PRIMARY KEY (`Player_Mission_Id`),
  ADD KEY `Mission1` (`Mission1`),
  ADD KEY `Mission2` (`Mission2`),
  ADD KEY `Mission3` (`Mission3`),
  ADD KEY `Mission4` (`Mission4`),
  ADD KEY `Mission5` (`Mission5`),
  ADD KEY `Player_Id` (`Player_Id`);


ALTER TABLE `player_resources`
  ADD PRIMARY KEY (`PResource_Id`),
  ADD KEY `Player` (`Player_Id`);
  
  
ALTER TABLE `player_upgrades`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Player_Id` (`Player_Id`),
  ADD KEY `SSUpgrade_Id` (`SSUpgrade_Id`);
  
  
ALTER TABLE `ship_fleet`
  ADD PRIMARY KEY (`Ship_Fleet_ID`),
  ADD KEY `Player` (`Player_Id`),
  ADD KEY `Spaceships` (`Spaceships_Id`);


ALTER TABLE `solo_missions`
  ADD PRIMARY KEY (`Solo_Missions_Id`),
  ADD KEY `Ships` (`Ships_Id`);


ALTER TABLE `spaceships`
  ADD PRIMARY KEY (`Spaceships_Id`);


ALTER TABLE `space_station`
  ADD PRIMARY KEY (`SSUpgrade_Id`),
  ADD KEY `Spaceships_Id` (`Spaceships_Id`);


ALTER TABLE `submited_mmissions`
  ADD PRIMARY KEY (`SubmittedMissions_Id`),
  ADD KEY `Submited_ship` (`Submited_shipId`);
  
  
--Alterations on the tables (assigning auto increments)
----------------------------------------------------------------------

ALTER TABLE `accepted_solomissions`
  MODIFY `asm_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=308;


ALTER TABLE `computer_trading`
  MODIFY `Trading_Id` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `factions`
  MODIFY `Factions_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `multiplayer_missions`
  MODIFY `MMissions_Id` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `player`
  MODIFY `Player_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;


ALTER TABLE `player_missions`
  MODIFY `Player_Mission_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;


ALTER TABLE `player_resources`
  MODIFY `PResource_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;


ALTER TABLE `player_upgrades`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;


ALTER TABLE `ship_fleet`
  MODIFY `Ship_Fleet_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;


ALTER TABLE `solo_missions`
  MODIFY `Solo_Missions_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;


ALTER TABLE `spaceships`
  MODIFY `Spaceships_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;


ALTER TABLE `space_station`
  MODIFY `SSUpgrade_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;



--Alterations on the tables (assigning foreign keys)
----------------------------------------------------------------------

ALTER TABLE `accepted_solomissions`
  ADD CONSTRAINT `accepted_solomissions_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);


ALTER TABLE `computer_trading`
  ADD CONSTRAINT `computer_trading_ibfk_1` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);


ALTER TABLE `player`
  ADD CONSTRAINT `player_ibfk_1` FOREIGN KEY (`Faction_Id`) REFERENCES `factions` (`Factions_Id`);


ALTER TABLE `player_missions`
  ADD CONSTRAINT `player_missions_ibfk_1` FOREIGN KEY (`Mission1`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_2` FOREIGN KEY (`Mission2`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_3` FOREIGN KEY (`Mission3`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_4` FOREIGN KEY (`Mission4`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_5` FOREIGN KEY (`Mission5`) REFERENCES `solo_missions` (`Solo_Missions_Id`),
  ADD CONSTRAINT `player_missions_ibfk_6` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);


ALTER TABLE `player_resources`
  ADD CONSTRAINT `player_resources_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`);


ALTER TABLE `player_upgrades`
  ADD CONSTRAINT `player_upgrades_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`),
  ADD CONSTRAINT `player_upgrades_ibfk_2` FOREIGN KEY (`SSUpgrade_Id`) REFERENCES `space_station` (`SSUpgrade_Id`);


ALTER TABLE `ship_fleet`
  ADD CONSTRAINT `ship_fleet_ibfk_1` FOREIGN KEY (`Player_Id`) REFERENCES `player` (`Player_Id`),
  ADD CONSTRAINT `ship_fleet_ibfk_2` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);


ALTER TABLE `solo_missions`
  ADD CONSTRAINT `solo_missions_ibfk_1` FOREIGN KEY (`Ships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);


ALTER TABLE `space_station`
  ADD CONSTRAINT `space_station_ibfk_1` FOREIGN KEY (`Spaceships_Id`) REFERENCES `spaceships` (`Spaceships_Id`);


ALTER TABLE `submited_mmissions`
  ADD CONSTRAINT `submited_mmissions_ibfk_1` FOREIGN KEY (`Submited_shipId`) REFERENCES `ship_fleet` (`Ship_Fleet_ID`);


COMMIT;