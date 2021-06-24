//_________________________________________________________________________
//Grid Tile
class Tile {
  constructor(r, c, side, txt, clr) {
    this.r = r;
    this.c = c;
    this.side = side;

    this.posX = r * side;
    this.posY = c * side;
    this.txt = txt;
    this.clr = clr;
  }

  draw_tile() {
    push();
    fill(this.clr);
    //noStroke();
    stroke(255);
    strokeWeight(2);
    square(this.posX, this.posY, side);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.txt, this.posX + this.side / 2, this.posY + this.side / 2);
    pop();
  }

  isInside(x, y) {
    if (
      x > this.posX &&
      x < this.posX + this.side &&
      y > this.posY &&
      y < this.posY + this.side
    ) {
      return true;
    } else return false;
  }

  setTxt(txt) {
    this.txt = txt;
  }

  setClr(clr) {
    this.clr = clr;
  }
}

//_________________________________________________________________________
//Button class
class Button {
  constructor(
    x,
    y,
    width,
    height,
    txt,
    fillClr,
    txtClr,
    txtSize = "20",
    corners = 20,
    font,
    borderClr = "rgb(0,0,0)",
    frame = false
  ) {
    this.posX = x;
    this.posY = y;
    this.width = width;
    this.height = height;
    this.txt = txt;
    this.fillClr = fillClr;
    this.txtClr = txtClr;
    this.txtSize = txtSize;
    this.corners = corners;
    this.enable = true; //used to enable and disable buttons
    this.borderClr = borderClr;
    this.font = font;
    this.frame = frame;
  }

  drawButton() {
    push();
    if (this.frame) {
      imageMode(CENTER);
      image(this.frame, this.posX, this.posY, 300, 50);
    }

    fill(this.fillClr);
    stroke(this.borderClr);
    rect(this.posX, this.posY, this.width, this.height, this.corners);
    pop();
    push();
    textAlign(CENTER, CENTER);
    textSize(this.txtSize);
    fill(this.txtClr);
    if (this.font) {
      textFont(this.font);
    }
    text(this.txt, this.posX, this.posY);
    pop();
  }

  isClicked(x, y) {
    if (this.enable === true) {
      if (
        x > this.posX - this.width / 2 &&
        x < this.posX + this.width / 2 &&
        y > this.posY - this.height / 2 &&
        y < this.posY + this.height / 2
      ) {
        soundButtonClick.play();
        return true;
      }
    } else {
      if (this.enable === false) {
        console.log("Button disabled");
      }
      return false;
    }
  }

  isHovered(x, y) {
    if (this.enable === true) {
      if (
        x > this.posX - this.width / 2 &&
        x < this.posX + this.width / 2 &&
        y > this.posY - this.height / 2 &&
        y < this.posY + this.height / 2
      ) {
        console.log("HOvering");
      }
    } else {
      if (this.enable === false) {
        console.log("Button disabled");
      }
      return false;
    }
  }

  disable() {
    this.enable = false;
    this.txt = "";
    this.fillClr = 255;
  }

  enableButton() {
    this.enable = true;
  }

  setBorderClr(clr) {
    this.borderClr = clr;
  }
}
//_________________________________________________________________________
//Exit Button class
class ExitButton {
  constructor(rx, ry, rw, rh) {
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;
    this.enable = true;
  }

  drawExitButton() {
    image(ImageExitButton, this.rx, this.ry, this.rw, this.rh);
  }

  isClicked(x, y) {
    if (this.enable === true) {
      if (
        x > this.rx &&
        x < this.rx + this.rw &&
        y > this.ry &&
        y < this.ry + this.rh
      ) {
        soundButtonClick.play();
        return true;
      }
    } else {
      if (this.enable === false) {
        console.log("Button disabled");
      }
      return false;
    }
  }
}

class ImageButton {
  constructor(rx, ry, rw, rh, Icon) {
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;
    this.enable = true;
    this.Icon = Icon;
  }

  drawImageButton() {
    push();
    imageMode(CENTER);
    image(this.Icon, this.rx, this.ry, this.rw, this.rh);
    pop();
  }

  IsClicked(x, y) {
    let d = dist(x, y, this.rx, this.ry);
    if (d < this.rw) {
      soundButtonClick.play();
      return true;
    }
  }
}

//_________________________________________________________________________
//OnScreen Interface
class OnScreenFrame {
  constructor(
    rx,
    ry,
    rw,
    rh,
    frame,
    bckclr = "white",
    deduct = 5,
    extendedFrame
  ) {
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;

    this.backBtn = new Button(
      this.rx - this.rw / 2 + 35,
      this.ry - this.rh / 2 + 20,
      45,
      30,
      "Back",
      0,
      255,
      0,
      0,
      false,
      Primary
    );

    this.frame = frame;
    this.extendedFrame = extendedFrame;

    this.bckclr = bckclr;
    this.deduct = deduct;
  }

  drawScreen() {
    if (this.frame) {
      push();
      imageMode(CENTER);
      image(this.frame, this.rx, this.ry, this.rw * 1.15, this.rh * 1.1);
      pop();
    }

    if (this.bckclr) {
      push();
      fill(this.bckclr);
      rectMode(CENTER);
      rect(this.rx, this.ry, this.rw - 5, this.rh - this.deduct, 15);
      pop();
    }
  }

  drawExtendedFrame() {
    push();
    imageMode(CENTER);
    image(
      this.extendedFrame,
      this.rx + 110,
      this.ry + 22,
      this.rw * 1.42,
      this.rh * 1.15
    );
    pop();
  }

  drawPageArrows() {
    push();
    imageMode(CENTER);
    image(
      ImageArrowLeft,
      this.rx - this.rw / 14,
      this.ry + this.rh / 2.5,
      50,
      50
    );
    pop();

    push();
    imageMode(CENTER);
    image(
      ImageArrowRight,
      this.rx + this.rw / 18,
      this.ry + this.rh / 2.5,
      50,
      50
    );
    pop();

    push();
    fill(255);
    text(`${pageEnabled}`, this.rx + this.rw / 2 - 30, this.ry + this.rh / 2.3);
    pop();
  }

  arrowLeftIsClicked(x, y) {
    let d = dist(x, y, this.rx - this.rw / 14, this.ry + this.rh / 2.5);

    if (d < 25) {
      soundButtonClick.play();
      return true;
    }
  }

  arrowRightIsClicked(x, y) {
    let d = dist(x, y, this.rx + rw / 18, this.ry + this.rh / 2.5);

    if (d < 25) {
      soundButtonClick.play();
      return true;
    }
  }
}

//_________________________________________________________________________
//Icon / Image Class
class Icon {
  constructor(Img, rx, ry, width, height) {
    this.rx = rx;
    this.ry = ry;
    this.width = width;
    this.height = height;
    this.img = Img;

    image(this.img, this.rx, this.ry, this.width, this.height);
  }
}

//_________________________________________________________
//ship class
class Ship {
  constructor(
    ship_Fleet_ID,
    GridPage,
    Ship_on_Mission,
    Ship_UnderRepair,
    Ship_Health,
    Ship_Under_Construction,
    shipId,
    r,
    c,
    gridStartX,
    gridStartY,
    side,
    width,
    height,
    shipOnMissionIconPath
  ) {
    this.ship_Fleet_ID = ship_Fleet_ID;
    this.Ship_on_Mission = Ship_on_Mission;
    this.Ship_UnderRepair = Ship_UnderRepair;
    this.Ship_Health = Ship_Health;
    this.Ship_Under_Construction = Ship_Under_Construction;
    this.shipId = shipId;
    this.page = GridPage;

    this.iconpath;
    this.r = r; //place in grid (number eg. 5,2,3)
    this.c = c;
    this.side = side; //side of the tile
    this.width = width; //image width
    this.height = height; //image height
    this.gridStartX = gridStartX;
    this.gridStartY = gridStartY;
    this.available = true;
    this.shipOnMissionIconPath = ImageShipOnMission;
    this.removeImages = true;

    this.posX = this.gridStartX * side + this.c * side;
    this.posY = this.gridStartY * side + this.r * side; //place in px (500px, 200px...)
  }

  drawShip() {
    if (this.page === gridPageEnable) {
      switch (this.shipId) {
        case 3:
          this.iconpath = ImageWarShip;
          break;
        case 4:
          this.iconpath = ImageMiningShip;
          break;
        case 5:
          this.iconpath = ImageTransportShip;
          break;
        case 6:
          this.iconpath = ImageExploarationShip;
          break;
        default:
          this.iconpath = ImageEmptyIcon;
      }

      push();
      imageMode(CENTER);
      image(this.iconpath, this.posX, this.posY, this.width, this.height);
      pop();

      if (this.available === false) {
        image(
          this.shipOnMissionIconPath,
          this.posX - this.side / 2,
          this.posY - this.side / 2,
          20,
          25
        );
      }
    }
  }

  blockShip() {
    this.available = false;
  }

  unblockShip() {
    this.available = true;
  }

  removeImages() {
    img.remove();
    img2.remove();
  }
}

class DrawInfoShipfleet {
  constructor(x, y, w, h, InputPeople, InputOre, shipId) {
    this.posX = x;
    this.posY = y;
    this.w = w;
    this.h = h;
    this.name;
    this.inputpeople = InputPeople;
    this.inputore = InputOre;
    this.shipId = shipId;
    this.iconpath;
    this.inputpeopleIconpath = ImagePeopleIcon;
    this.inputoreIconpath = ImageOreIcon;

    this.font = ftRetroGaming;
    this.backClr = Primary;
    this.AccetntClr = "rgb(60, 253, 47)";
    this.frameClr = "rgb(46, 51, 101)";
  }

  draw_shipfleetInfo() {
    switch (this.shipId) {
      case 3:
        this.iconpath = ImageWarShip;
        this.name = "War Ship";
        break;
      case 4:
        this.iconpath = ImageMiningShip;
        this.name = "Mining Ship";
        break;
      case 5:
        this.iconpath = ImageTransportShip;
        this.name = "Transport Ship";
        break;
      case 6:
        this.iconpath = ImageExploarationShip;
        this.name = "Exploration Ship";
        break;
      default:
        this.iconpath = ImageEmptyIcon;
        this.name = "   ";
    }

    console.log("HELOOOOOOOOOOOO" + this.iconpath);
    fill(this.backClr);
    stroke(255, 255, 255);
    rect(this.posX, this.posY, this.w, this.h);

    fill(0);
    textSize(18);
    textFont(this.font);
    noStroke();
    text(this.name, this.posX + 30, this.posY - 60);

    textSize(16);
    text("Need: ", this.posX, this.posY - 20);

    fill("red");
    textSize(13);
    strokeWeight(2);
    textFont(this.font);
    text("-" + this.inputpeople, this.posX - 70, this.posY + 10);

    image(this.inputpeopleIconpath, this.posX - 40, this.posY - 8, 20, 30);

    text("-" + this.inputore, this.posX + 20, this.posY + 10);

    image(this.inputoreIconpath, this.posX + 50, this.posY - 8, 20, 30);

    fill(0);
    textSize(18);
    textFont(this.font);
    noStroke();
    text("Get: ", this.posX, this.posY + 30);

    fill("green");
    strokeWeight(2);
    textFont(this.font);
    textSize(13);
    text(this.name, this.posX, this.posY + 60);

    image(this.iconpath, this.posX + 80, this.posY + 40, 20, 30);
    image(this.iconpath, this.posX - 120, this.posY - 70, 50, 70);
  }
}

class DrawInfoDomes {
  constructor(x, y, w, h, rankNeeded, InputMoney, OutputMaxPeople, upgradesId) {
    this.posX = x;
    this.posY = y;
    this.w = w;
    this.h = h;
    this.name;
    this.rankneeded = rankNeeded;
    this.gettingrank = this.rankneeded + 1;
    this.inputmoney = InputMoney;
    this.outputmaxpeople = OutputMaxPeople;

    this.rankIconpath = ImageRankIcon;
    this.moneyIconpath = ImageMoneyIcon;
    this.peopleIconpath = ImagePeopleIcon;
    this.upgradesId = upgradesId;
    this.iconpath;

    this.font = ftRetroGaming;
    this.backClr = Primary;
    this.AccetntClr = "rgb(60, 253, 47)";
  }

  draw_DomesInfo() {
    switch (this.upgradesId) {
      case 1:
        this.iconpath = ImageDomeUpgradeIcon;
        this.name = "Dome";
        break;
      case 2:
        this.iconpath = ImageDomeUpgradeIcon;
        this.name = "Dome";
        break;
      case 3:
        this.iconpath = ImageDomeUpgradeIcon;
        this.name = "Dome";
        break;
      default:
        this.iconpath = ImageEmptyIcon;
        this.name = "   ";
    }

    fill(this.backClr);
    stroke(255, 255, 255);
    rect(this.posX, this.posY, this.w, this.h);

    fill(0);
    textSize(20);
    textFont(this.font);
    noStroke();
    text(this.name, this.posX, this.posY - 60);

    textSize(18);
    text("Need: ", this.posX, this.posY - 20);

    fill("red");
    textSize(15);
    strokeWeight(2);
    textFont(this.font);
    text(this.rankneeded, this.posX - 60, this.posY + 10);

    image(this.rankIconpath, this.posX - 40, this.posY - 8, 20, 30);

    text("-" + this.inputmoney, this.posX + 30, this.posY + 10);

    image(this.moneyIconpath, this.posX + 70, this.posY - 8, 20, 30);

    fill(0);
    textSize(18);
    textFont(this.font);
    noStroke();
    text("Get: ", this.posX, this.posY + 30);

    fill("green");
    strokeWeight(2);
    textFont(this.font);
    textSize(15);
    text(this.gettingrank, this.posX - 60, this.posY + 60);

    image(this.rankIconpath, this.posX - 40, this.posY + 42, 20, 30);

    text("+" + this.outputmaxpeople, this.posX + 30, this.posY + 60);

    image(this.peopleIconpath, this.posX + 70, this.posY + 42, 20, 30);

    image(this.iconpath, this.posX - 90, this.posY - 70, 50, 70);
  }
}

class DrawInfoStorage {
  constructor(
    x,
    y,
    w,
    h,
    rankNeeded,
    InputMoney,
    OutputMaxWater,
    OutputMaxOre,
    upgradesId
  ) {
    this.posX = x;
    this.posY = y;
    this.w = w;
    this.h = h;
    this.name;
    this.rankneeded = rankNeeded;
    this.gettingrank = this.rankneeded + 1;
    this.inputmoney = InputMoney;
    this.outputmaxwater = OutputMaxWater;
    this.outputmaxore = OutputMaxOre;

    this.rankIconpath = ImageRankIcon;
    this.moneyIconpath = ImageMoneyIcon;
    this.oreIconpath = ImageOreIcon;
    this.waterIconpath = ImageWaterIcon;
    this.upgradesId = upgradesId;
    this.iconpath;

    this.font = ftRetroGaming;
    this.backClr = Primary;
    this.AccetntClr = "rgb(60, 253, 47)";
    this.frameClr = "rgb(46, 51, 101)";
  }

  draw_StorageInfo() {
    switch (this.upgradesId) {
      case 4:
        this.iconpath = ImageStorageUpgradeIcon;
        this.name = "Storage";
        break;
      case 5:
        this.iconpath = ImageStorageUpgradeIcon;
        this.name = "Storage";
        break;
      case 6:
        this.iconpath = ImageStorageUpgradeIcon;
        this.name = "Storage";
        break;
      default:
        this.iconpath = ImageEmptyIcon;
        this.name = "   ";
    }

    fill(this.backClr);
    stroke(255, 255, 255);
    rect(this.posX, this.posY, this.w, this.h);

    fill(0);
    textSize(20);
    textFont(this.font);
    noStroke();
    text(this.name, this.posX, this.posY - 60);

    fill(0);
    textSize(18);
    textFont(this.font);
    noStroke();
    text("Need: ", this.posX, this.posY - 20);

    fill("red");
    textSize(15);
    strokeWeight(2);
    textFont(this.font);
    text(this.rankneeded, this.posX - 60, this.posY + 10);

    image(this.rankIconpath, this.posX - 40, this.posY - 8, 20, 35);

    text(this.inputmoney, this.posX + 30, this.posY + 10);

    image(this.moneyIconpath, this.posX + 70, this.posY - 8, 20, 35);

    fill(0);
    textSize(18);
    textFont(this.font);
    noStroke();
    text("Get: ", this.posX, this.posY + 40);

    fill("green");
    strokeWeight(2);
    textFont(this.font);
    textSize(15);
    text(this.gettingrank, this.posX - 90, this.posY + 60);

    image(this.rankIconpath, this.posX - 70, this.posY + 42, 20, 35);

    text("+" + this.outputmaxwater, this.posX - 20, this.posY + 60);

    image(this.waterIconpath, this.posX + 5, this.posY + 42, 20, 35);

    text("+" + this.outputmaxore, this.posX + 50, this.posY + 60);

    image(this.oreIconpath, this.posX + 75, this.posY + 42, 20, 35);

    image(this.iconpath, this.posX - 90, this.posY - 70, 50, 70);
  }
}

//_________________________________________________________________________
//Solo Mission Class:
class SoloMissionBox {
  constructor(
    rx,
    ry,
    rw,
    rh,
    missionId,
    Name = "Cargo Transport",
    Story,
    Time,
    InputMoney,
    InputPeople,
    InputOre,
    InputWater,
    InputShip,
    RewardMoney,
    RewardPeople,
    RewardOre,
    RewardWater,
    Rank = "1"
  ) {
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;

    //Mission Input
    this.missionId = missionId;
    this.name = Name;
    this.Story = Story;
    this.time = Time;
    this.InputMoney = InputMoney;
    this.InputPeople = InputPeople;
    this.InputOre = InputOre;
    this.InputWater = InputWater;
    this.InputShip = InputShip; //Ship Id
    this.RewardMoney = RewardMoney;
    this.RewardPeople = RewardPeople;
    this.RewardOre = RewardOre;
    this.RewardWater = RewardWater;
    this.Rank = Rank;

    //Input resources
    this.InputResource1;
    this.InputResource2;

    this.InputResource1Name;
    this.InputResource2Name;
    //input resource icons
    this.inputResource1IconPath;
    this.inputResource2IconPath;
    //input icon
    this.inputShipIconPath;

    //Reward resources
    this.RewardResource1;
    this.RewardResource2;
    //reward resource icons
    this.rewardResource1IconPath;
    this.rewardResource2IconPath = emptyIconPath;

    //AcceptButton
    this.acceptButton;

    this.accepted = false;

    //Design:

    this.font = ftRetroGaming;
    this.backClr = Primary;
    this.AccetntClr = "rgb(60, 253, 47)";
    this.frameClr = "rgb(46, 51, 101)";
  }

  drawBox() {
    //check, which resources are there for input and Reward of the mission and change resource values and icon paths accordingly.
    let InputArr = [
      this.InputMoney,
      this.InputPeople,
      this.InputOre,
      this.InputWater,
    ];
    let RewardArr = [
      this.RewardMoney,
      this.RewardPeople,
      this.RewardOre,
      this.RewardWater,
    ];

    //Assign the two Input Resources and their Icons:
    for (let i = 0; i < InputArr.length; i++) {
      if (InputArr[i]) {
        if (this.InputResource1 && InputArr[i] !== this.InputResource1) {
          this.InputResource2 = InputArr[i];

          switch (i) {
            case 0:
              this.inputResource2IconPath = ImageMoneyIcon;
              break;
            case 1:
              this.inputResource2IconPath = ImagePeopleIcon;
              break;
            case 2:
              this.inputResource2IconPath = ImageOreIcon;
              break;
            case 3:
              this.inputResource2IconPath = ImageWaterIcon;
              break;
            default:
              this.inputResource1IconPath = ImageEmptyIcon;
          }
        } else {
          this.InputResource1 = InputArr[i];
          switch (i) {
            case 0:
              this.inputResource1IconPath = ImageMoneyIcon;
              break;
            case 1:
              this.inputResource1IconPath = ImagePeopleIcon;
              break;
            case 2:
              this.inputResource1IconPath = ImageOreIcon;
              break;
            case 3:
              this.inputResource1IconPath = ImageWaterIcon;
              break;
            default:
              this.inputResource1IconPath = ImageEmptyIcon;
          }
        }
      }
    }

    //Assign Input Ship Icon:
    if (this.InputShip) {
      switch (this.InputShip) {
        case 3:
          this.inputShipIconPath = ImageWarShip;
          break;
        case 4:
          this.inputShipIconPath = ImageMiningShip;
          break;
        case 5:
          this.inputShipIconPath = ImageTransportShip;
          break;
        case 6:
          this.inputShipIconPath = ImageExploarationShip;
          break;
        default:
          this.inputShipIconPath = ImageEmptyIcon;
      }
    }

    //Assign the two Reward Resources and Icons:
    for (let i = 0; i < RewardArr.length; i++) {
      if (RewardArr[i]) {
        if (this.RewardResource1 && RewardArr[i] !== this.RewardResource1) {
          this.RewardResource2 = RewardArr[i];
          switch (i) {
            case 0:
              this.rewardResource2IconPath = ImageMoneyIcon;
              break;
            case 1:
              this.rewardResource2IconPath = ImagePeopleIcon;
              break;
            case 2:
              this.rewardResource2IconPath = ImageOreIcon;
              break;
            case 3:
              this.rewardResource2IconPath = ImageWaterIcon;
              break;
            default:
              this.rewardResource2IconPath = ImageEmptyIcon;
          }
        } else {
          this.RewardResource1 = RewardArr[i];
          switch (i) {
            case 0:
              this.rewardResource1IconPath = ImageMoneyIcon;
              break;
            case 1:
              this.rewardResource1IconPath = ImagePeopleIcon;
              break;
            case 2:
              this.rewardResource1IconPath = ImageOreIcon;
              break;
            case 3:
              this.rewardResource1IconPath = ImageWaterIcon;
              break;
            default:
              this.rewardResource1IconPath = ImageEmptyIcon;
          }
        }
      }
    }

    //Draw Frame of Mission Box
    push();
    rectMode(CENTER);
    fill(this.backClr);
    stroke(255, 255, 255);

    rect(this.rx, this.ry, this.rw, this.rh);
    pop();

    // Draw Mission Info and Inputs
    push();

    //Rank
    fill(0);
    rect(this.rx - this.rw / 2 + 30, this.ry, 40, 60);
    textAlign(CENTER, CENTER);
    fill(255);
    textFont(this.font);
    text(this.Rank, this.rx - this.rw / 2 + 30, this.ry);

    //Mission Name
    push();
    fill(0);
    textSize(18);
    textFont(this.font);
    noStroke();
    text(this.name, this.rx - rw / 5, this.ry, this.rw * 0.3, this.rh * 0.8);
    pop();

    //Input Resource 1 with icon
    image(this.inputResource1IconPath, this.rx - 20, this.ry - 30, 20, 34);

    push();
    fill("red");
    textSize(15);
    text("-" + this.InputResource1, this.rx - 20 + 40, this.ry - 25 / 2);
    pop();

    //Input Resource 2 with icon
    if (this.InputResource2) {
      image(this.inputResource2IconPath, this.rx - 20, this.ry + 10, 20, 34);

      push();
      fill("red");
      textFont(this.font);
      textSize(15);
      text("-" + this.InputResource2, this.rx - 20 + 40, this.ry + 10 + 25 / 2);
      pop();
    }

    //InputShip Icon and Time deployed
    image(this.inputShipIconPath, this.rx + 80, this.ry - 50, 40, 57);
    push();
    fill(this.AccetntClr);
    textFont(this.font);
    textSize(15);
    text(this.time, this.rx + 100, this.ry + 10 + 25 / 2);
    pop();

    //Reward Resource 1
    image(
      this.rewardResource1IconPath,
      this.rx + this.rw / 2 - 100,
      this.ry - 40,
      15,
      25
    );

    push();
    fill("green");
    strokeWeight(2);
    textFont(this.font);
    textSize(15);
    text("+" + this.RewardResource1, this.rx + this.rw / 2 - 60, this.ry - 25);
    pop();

    //Reward Resource 2
    if (this.RewardResource2) {
      image(
        this.rewardResource2IconPath,
        this.rx + this.rw / 2 - 100,
        this.ry - 10,
        15,
        25
      );

      push();
      fill("green");
      strokeWeight(2);
      textFont(this.font);
      textSize(15);
      text("+" + this.RewardResource2, this.rx + this.rw / 2 - 60, this.ry);
      pop();
    }

    //Accept Button
    this.acceptButton = new Button(
      this.rx + this.rw / 2 - 50,
      this.ry + 30,
      75,
      30,
      "Accept",
      0,
      255,
      15
    );
    push();
    this.acceptButton.drawButton();
    pop();

    //Accepted Mission changes (yellow and accept button disabled)
    if (this.accepted === true) {
      this.acceptButton.disable();
      push();
      imageMode(CENTER);
      image(ImageStoneLayer, this.rx, this.ry, this.rw, this.rh);
      noFill();
      rectMode(CENTER);
      rect(this.rx, this.ry, this.rw, this.rh);
      pop();
    }

    pop();
  }

  acceptedMission() {
    this.accepted = true;
  }
}

//__________________________________________________________________________
//Multiplayer Missions
class MultipiplayerMission {
  constructor(
    rx,
    ry,
    page,
    rw,
    rh,
    missions_Id,
    Name,
    Story,
    Time,
    InputShipId,
    RewardWater,
    RewardPeople,
    RewardOre,
    RewardMoney,
    InputWater,
    InputPeople,
    InputOre,
    InputMoney,
    ShipAmount,
    Minimum_Water,
    Minimum_Money,
    Minimum_People,
    Minimum_Ore,
    Submitted_Ore,
    Submitted_Water,
    Submitted_People,
    Submitted_Money,
    Submitted_Ships,
    Rank,
    Faction
  ) {
    this.rx = rx;
    this.ry = ry;
    this.page = page;
    this.rw = rw;
    this.rh = rh;

    //Mission Input
    this.missions_Id = missions_Id;
    this.name = Name;
    this.Story = Story;
    this.time = Time;
    this.InputMoney = InputMoney;
    this.InputPeople = InputPeople;
    this.InputOre = InputOre;
    this.InputWater = InputWater;
    this.InputShipId = InputShipId;
    this.RewardMoney = RewardMoney;
    this.RewardPeople = RewardPeople;
    this.RewardOre = RewardOre;
    this.RewardWater = RewardWater;
    this.Rank = Rank;
    this.MinMoney = Minimum_Money;
    this.MinWater = Minimum_Water;
    this.MinOre = Minimum_Ore;
    this.MinPeople = Minimum_People;
    this.ShipAmount = ShipAmount; //number of ships needed!
    this.SubmittedOre = Submitted_Ore;
    this.SubmittedWater = Submitted_Water;
    this.SubmittedPeople = Submitted_People;
    this.SubmittedMoney = Submitted_Money;
    this.SubmittedShips = Submitted_Ships;
    this.Faction = Faction;

    this.openBtn = new Button(
      this.rx,
      this.ry + this.rh / 4,
      85,
      30,
      "Open",
      0,
      255,
      20,
      20,
      false,
      Primary
    );
    this.openBtnEnable = false;
    this.openContributionBtn = new Button(
      width * 0.5,
      height * 0.35,
      200,
      40,
      "Contribute to this Mission",
      0,
      255,
      12,
      20
    );

    this.contributeToMissionBtn;
    this.factionImagePath1;
    this.factionImagePath2;
    this.factionImagePath3;
    this.open = false;

    //maximum of 1 input resource and 2 reward resources can be granted.

    this.InputResource;
    this.inputResourceIconPath;

    this.RewardResource1;
    this.rewardResource1IconPath;

    this.RewardResource2;
    this.rewardResource2IconPath;

    this.inputShipIconPath;

    this.SubmittedResource;

    this.MinResource;

    //Contribution Variables
    this.contributeMoney = 0;
    this.contributePeople = 0;
    this.contributeWater = 0;
    this.contributeOre = 0;

    //Accepted Status
    this.acceptedStatus = false;
    this.status;

    // assign faction symbols based on the input given:

    switch (this.Faction) {
      case "MEB":
        this.factionImagePath1 = ImageMarsFactionIcon;
        this.factionImagePath2 = ImageEarthFactionIcon;
        this.factionImagePath3 = ImageBeltFactionIcon;
        break;
      case "M":
        this.factionImagePath1 = ImageEmptyFaction;
        this.factionImagePath2 = ImageMarsFactionIcon;
        this.factionImagePath3 = ImageEmptyFaction;
        break;
      case "B":
        this.factionImagePath1 = ImageEmptyFaction;
        this.factionImagePath2 = ImageBeltFactionIcon;
        this.factionImagePath3 = ImageEmptyFaction;
        break;
      case "E":
        this.factionImagePath1 = ImageEmptyFaction;
        this.factionImagePath2 = ImageEarthFactionIcon;
        this.factionImagePath3 = ImageEmptyFaction;
        break;
      case "ME":
        this.factionImagePath1 = ImageMarsFactionIcon;
        this.factionImagePath2 = ImageEmptyFaction;
        this.factionImagePath3 = ImageEarthFactionIcon;
        break;
      case "MB":
        this.factionImagePath1 = ImageMarsFactionIcon;
        this.factionImagePath2 = ImageEmptyFaction;
        this.factionImagePath3 = ImageBeltFactionIcon;
        break;
      case "EB":
        this.factionImagePath1 = ImageEarthFactionIcon;
        this.factionImagePath2 = ImageEmptyFaction;
        this.factionImagePath3 = ImageBeltFactionIcon;
        break;
    }

    //check, which resources are there for input and Reward of the mission and change resource values and icon paths accordingly.
    let InputArr = [
      this.InputMoney,
      this.InputPeople,
      this.InputOre,
      this.InputWater,
    ];
    let RewardArr = [
      this.RewardMoney,
      this.RewardPeople,
      this.RewardOre,
      this.RewardWater,
    ];
    let SubmittedArr = [
      this.SubmittedMoney,
      this.SubmittedPeople,
      this.SubmittedOre,
      this.SubmittedWater,
    ];
    let MinArr = [this.MinMoney, this.MinPeople, this.MinOre, this.MinWater];

    //Assign the Input Resource and  Icons:
    for (let i = 0; i < InputArr.length; i++) {
      if (InputArr[i]) {
        this.InputResource = InputArr[i];

        switch (i) {
          case 0:
            this.inputResourceIconPath = ImageMoneyIcon;
            break;
          case 1:
            this.inputResourceIconPath = ImagePeopleIcon;
            break;
          case 2:
            this.inputResourceIconPath = ImageOreIcon;
            break;
          case 3:
            this.inputResourceIconPath = ImageWaterIcon;
            break;
          default:
            this.inputResourceIconPath = ImageEmptyIcon;
        }
      }
    }

    //Assign the two Reward Resources and Icons:
    for (let i = 0; i < RewardArr.length; i++) {
      if (RewardArr[i]) {
        if (this.RewardResource1) {
          this.RewardResource2 = RewardArr[i];
          switch (i) {
            case 0:
              this.rewardResource2IconPath = ImageMoneyIcon;
              break;
            case 1:
              this.rewardResource2IconPath = ImagePeopleIcon;
              break;
            case 2:
              this.rewardResource2IconPath = ImageOreIcon;
              break;
            case 3:
              this.rewardResource2IconPath = ImageWaterIcon;
              break;
            default:
              this.rewardResource2IconPath = ImageEmptyIcon;
          }
        } else {
          this.RewardResource1 = RewardArr[i];
          switch (i) {
            case 0:
              this.rewardResource1IconPath = ImageMoneyIcon;
              break;
            case 1:
              this.rewardResource1IconPath = ImagePeopleIcon;
              break;
            case 2:
              this.rewardResource1IconPath = ImageOreIcon;
              break;
            case 3:
              this.rewardResource1IconPath = ImageWaterIcon;
              break;
            default:
              this.rewardResource1IconPath = ImageEmptyIcon;
          }
        }
      }
    }

    //Assign Input Ship Icon:
    if (this.InputShipId) {
      switch (this.InputShipId) {
        case 3:
          this.inputShipIconPath = ImageWarShip;
          break;
        case 4:
          this.inputShipIconPath = ImageMiningShip;
          break;
        case 5:
          this.inputShipIconPath = ImageTransportShip;
          break;
        case 6:
          this.inputShipIconPath = ImageExploarationShip;
          break;
        default:
          this.inputShipIconPath = ImageEmptyIcon;
      }
    }

    //Assign Submitted Resources;
    for (let i = 0; i < SubmittedArr.length; i++) {
      if (SubmittedArr[i]) {
        this.SubmittedResource = SubmittedArr[i];
      }
    }
    if (!this.SubmittedResource) {
      this.SubmittedResource = 0;
    }

    //Assiging Minimum Resource;
    for (let i = 0; i < MinArr.length; i++) {
      if (MinArr[i]) {
        this.MinResource = MinArr[i];
      }
    }
    if (!this.MinResource) {
      this.MinResource = 0;
    }
  }

  //Draw Mission Method
  drawMission() {
    //Draw Mission Cards
    push();
    if (this.page === pageEnabled) {
      push();
      strokeWeight(2);
      fill("rgb(186, 170, 101)");
      rectMode(CENTER);
      rect(this.rx, this.ry, this.rw, this.rh);
      fill(0);
      textAlign(CENTER, CENTER);

      textSize(17);
      textStyle(BOLD);
      textFont(ftRetroGaming);
      text(
        `${this.name}`,
        this.rx,
        this.ry - this.rh / 3,
        this.rw * 0.8,
        this.rh
      );
      pop();

      //draw faction symbols
      push();
      imageMode(CENTER);
      image(this.factionImagePath1, this.rx - this.rw / 3, this.ry, 35, 35);
      pop();

      push();
      imageMode(CENTER);
      image(this.factionImagePath2, this.rx, this.ry, 35, 35);
      pop();

      push();
      imageMode(CENTER);
      image(this.factionImagePath3, this.rx + this.rw / 3, this.ry, 35, 35);
      pop();

      //Draw Open Button
      push();
      this.openBtn.drawButton();
      this.openBtnEnable = true;
      pop();

      if (this.acceptedStatus === true) {
        push();

        if (this.status === 2) {
          textSize(10);
          textFont(ftRetroGaming);
          stroke("rgba(97, 237, 114, 1)");
          text(`Waiting for Submissions`, this.rx, this.ry + this.rh / 2.5);
        } else if (this.status === 1) {
          stroke("rgba(218, 66, 245, 1)");
          textFont(ftRetroGaming);
          text(`${this.time}`, this.rx, this.ry + this.rh / 2.5);
        }
        fill(255, 70);
        strokeWeight(8);
        rect(this.rx, this.ry, this.rw, this.rh);
        pop();
      }
    }
    pop();
  }

  drawOpenMission(x, y, width, height) {
    push();
    //draw box
    textFont(ftRetroGaming);

    push();
    textSize(12);
    textStyle(NORMAL);
    fill(255);
    text(`${openMMission.Story}`, x, y - height / 3, width * 0.9, height);
    pop();

    push();
    rectMode(CENTER);
    fill(Primary);
    stroke("white");
    rect(x, y + height / 6, width * 0.9, height * 0.6);
    strokeWeight(2);
    stroke(0);
    line(x, y - height / 10, x, y + height / 2.5);
    pop();

    //create and draw Button
    if (this.acceptedStatus === false) {
      push();
      this.openContributionBtn.setBorderClr("rgb(160, 204, 102)");
      strokeWeight(5);
      this.openContributionBtn.drawButton();
      pop();
    } else if (this.acceptedStatus === true) {
      push();
      fill(TimeClr);
      textStyle(BOLD);
      textFont(ftRetroGaming);
      text("This mission has already been accepted by you!", x, y - height / 6);
      pop();
    }

    push();
    textSize(20);
    textStyle(BOLD);
    fill(TimeClr);
    textFont(ftRetroGaming);
    text(`${this.time}`, x, y - height / 4.25);
    pop();

    //draw Submitted Resources
    push();
    fill(0);
    textSize(17.5);
    textStyle(BOLD);
    text("Submitted Resources", x - width / 4, y - y / 6);
    pop();

    push();
    imageMode(CENTER);
    image(this.inputResourceIconPath, x - width / 2.7, y, 40, 64);
    pop();

    push();
    fill(0);
    textSize(20);
    strokeWeight(3);
    text(`${this.SubmittedResource}`, x - width / 2.7 + 80, y);

    pop();

    push();
    imageMode(CENTER);
    image(this.inputShipIconPath, x - width / 2.7, y + height / 10, 40, 64);
    pop();

    push();
    strokeWeight(3);
    textSize(20);
    fill(0);
    text("" + this.SubmittedShips, x - width / 2.7 + 80, y + height / 10);
    pop();

    //draw Required Resources
    push();
    fill(0);
    textSize(17.5);
    text("Required Resources", x + width / 4, y - y / 6);
    pop();

    push();
    imageMode(CENTER);
    image(this.inputResourceIconPath, x + width / 10, y, 40, 64);
    pop();

    push();
    strokeWeight(3);
    textSize(20);
    fill(0);
    text(this.InputResource, x + width / 10 + 80, y);
    pop();

    push();
    imageMode(CENTER);
    image(this.inputShipIconPath, x + width / 10, y + height / 10, 40, 64);
    pop();

    push();
    strokeWeight(3);
    textSize(20);
    fill(0);
    text("" + this.ShipAmount, x + width / 10 + 80, y + height / 10);
    pop();

    //draw Reward Resources
    push();
    textSize(17.5);
    fill(0);
    text("Reward for Each Player", x + width / 4, y + y / 2.8);
    pop();

    push();
    imageMode(CENTER);
    image(
      this.rewardResource1IconPath,
      x + width / 10,
      y + height / 3.5,
      40,
      64
    );
    pop();

    push();
    stroke(0);
    strokeWeight(3);
    textSize(20);
    fill("green");
    textStyle(BOLD);
    text("+" + this.RewardResource1, x + width / 10 + 80, y + height / 3.5);
    pop();

    push();
    if (this.rewardResource2IconPath) {
      imageMode(CENTER);
      image(
        this.rewardResource2IconPath,
        x + width / 10,
        y + height / 2.7,
        35,
        58
      );

      pop();

      push();
      strokeWeight(3);
      stroke(0);
      textSize(20);
      fill("green");
      textStyle(BOLD);
      text("+" + this.RewardResource2, x + width / 10 + 80, y + height / 2.7);
      pop();
    }

    //Draw Minimum Contribution
    push();
    textSize(17.5);
    fill(0);
    text("Minimum Contribution", x - width / 4, y + y / 2.8);
    pop();

    push();
    imageMode(CENTER);
    image(
      this.inputResourceIconPath,
      x - width / 2.7,
      y + height / 3.5,
      40,
      64
    );
    pop();

    push();
    strokeWeight(3);
    textSize(20);
    fill(0);
    textStyle(BOLD);
    text(this.MinResource, x - width / 2.7 + 80, y + height / 3.5);
    pop();

    push();
    imageMode(CENTER);
    image(this.inputShipIconPath, x - width / 2.7, y + height / 2.7, 40, 64);
    pop();

    push();
    strokeWeight(3);
    textSize(20);
    fill(0);
    textStyle(BOLD);
    text("1", x - width / 2.7 + 80, y + height / 2.7);
    pop();

    pop();
  }

  drawContribution(x, y, width, height) {
    push();

    push();
    textFont(ftRetroGaming);
    textSize(12);
    textStyle(NORMAL);
    fill(255);
    text(`${openMMission.Story}`, x, y - height / 3, width * 0.9, height);
    pop();

    push();
    textFont(ftRetroGaming);
    strokeWeight(1);
    stroke(255);
    rectMode(CENTER);
    fill(Primary);
    rect(x, y + height / 6, width * 0.9, height * 0.6);
    strokeWeight(0);

    if (this.acceptedStatus === false) {
      this.contributeToMissionBtn = new Button(
        x,
        y + height / 2.5,
        220,
        40,
        "Contribute Resources!",
        0,
        255,
        15,
        20
      );
      this.contributeToMissionBtn.drawButton();
    } else if (this.acceptedStatus === true) {
      push();
      textFont(ftRetroGaming);
      this.contributeToMissionBtn.disable();
      fill("green");
      textStyle(BOLD);
      text("Mission Accepted", x, y + height / 2.5);
      pop();

      pop();
    }

    push();
    fill(0);
    textAlign(CENTER);
    textStyle(BOLD);
    textFont(ftRetroGaming);
    textSize(15);
    text(
      "Are you sure, you want to contribute to this Multiplayer Mission?",
      x,
      y - y / 6
    );
    textSize(15);
    text(
      "If you click Contribute Resources, the following Resources and Ships will be commited to this Mission. You wont be able to use your ship until this Multiplayer Mission is finished.",
      x,
      y + y / 8,
      width * 0.7,
      height
    );
    fill("red");
    strokeWeight(2);
    text(
      `NOTE, that the ${this.time} minutes will only start, after 100% of the required resources have been submitted by players`,
      x,
      y + height / 4,
      width * 0.7,
      height
    );
    pop();
    pop();
  }

  acceptMission(status) {
    this.acceptedStatus = true;
    this.openContributionBtn.disable();
    this.status = status;
  }
}

//_________________________________________________________________________
//Message Class
class Message {
  constructor(message, index) {
    this.message = message;

    this.x = width * 0.65;
    this.y = height * 0.25;
    this.rw = 250;
    this.rh = 150;

    this.index = index;

    this.dismissBtn = new Button(
      this.x,
      this.y + this.rh / 3,
      50,
      30,
      "Dismiss",
      0,
      255,
      10,
      10
    );
  }

  drawMessage() {
    if (messages.length > 0) {
      push();

      textFont(ftRetroGaming);
      fill("rgba(255, 255, 255, 0.3)");
      rectMode(CENTER);
      rect(this.x, this.y, this.rw, this.rh, 20);

      circle(this.x + this.rw / 2 + 10, this.y + this.rh / 2, 20);
      circle(this.x + this.rw / 2 + 40, this.y + this.rh / 2 + 30, 20);

      fill(0);
      textAlign(LEFT, CENTER);
      textSize(15);
      text(`${this.message}`, this.x, this.y, this.rw * 0.85, this.rh * 0.9);

      this.dismissBtn.drawButton();
      pop();
    } else {
      console.log("no messages");
    }
  }

  dismissMessage() {
    messageObjects.splice(this.index, 1);
  }
}

//_________________________________________________________________________
//Running Missions Class
class RunningMission {
  constructor(rx, ry, rw, rh, page, name, time, story) {
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;
    this.page = page;
    this.name = name;
    this.time = time;
    this.story = story;
  }

  drawRunningMission() {
    if (this.page === runningMissionPageEnable) {
      push();
      //fill("rgba(242, 209, 41, 0.7)");
      //stroke(255);
      //rect(this.rx, this.ry, this.rw - 5, this.rh - 5, 20);
      fill(TimeClr);
      noStroke();
      textFont(ftRetroGaming);
      text(this.name, this.rx, this.ry - this.rh / 3, 155, 100);
      fill(TimeClr);
      text(this.time, this.rx, this.ry, 200, 100);
      pop();

      //countdown;
    }
  }
}
