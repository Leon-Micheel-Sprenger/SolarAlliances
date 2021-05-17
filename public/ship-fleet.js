let shipclr;
let shipId;

//ships
    if (shipId == 3){
        shipclr="#EC221C"
    }else if (shipId == 4){
        shipclr="#13F408"
    }else if (shipId == 5){
        shipclr="#08E2F4"
    }else if (shipId == 6){
        shipclr="#B008F4"
    }

    /*function create_grid(){
        let x=0;
        let y=0;
        for(let r=0;r<5;r++){
            arrtiles[r]=[];
            if(r==0){
                x=100;
            }else{
                x=x+side;
            }
            for(let c=0;c<2;c++){
                if(c==0){
                    y=200;
                }else{
                    y=y+side;
                }
                arrtiles[r][c]=new Tile(r,c,x,y,side)
            }
        }
    }

    function draw_Shipfleet(){
        for(let r=0;r<5;r++){
            for(let c=0;c<2;c++){
                arrtiles[r][c].drawCharacter();
            }
        }
    }*/