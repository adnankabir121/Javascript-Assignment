// 1. Feet To Mile Conversion 
function feetToMile(feet){
    if(feet >= 0 ){
        var mile = feet * 0.000189394;
        return mile;
    }
    else{
        console.log("Feet cannot be a negative value");
    }
}

// 2. Wood Calculator
function woodCalculator(chairNumber,tableNumber,bedNumber){

    if(chairNumber >= 0 && tableNumber >= 0 && bedNumber >= 0){
        var woodForChair = chairNumber * 1;
        var woodForTable = tableNumber * 3;
        var woodForBed = bedNumber * 5;
        var totalWoodNumber = woodForChair + woodForTable + woodForBed;
        return totalWoodNumber;
    }
    else{
        console.log("Negative value is not acceptable");
    }
}

// 3. Brick Calculator
function brickCalculator(floorNumber){

    if(floorNumber > 0){
        var feet;
        var totalFeet;
        var numberOfBrick;
        
        //Floor 1 - 10
        if((floorNumber >= 1) && (floorNumber <= 10)){
            feet = 15;
            totalFeet = floorNumber * feet;
            numberOfBrick = totalFeet * 1000; 
            return numberOfBrick;
        }

        //Floor 1-20
        if((floorNumber >= 11) && (floorNumber <= 20)){
            var temp;
            var totalFeet2;
            for(var i=1; i<=10;i++){
                temp = i;
                feet = 15;
                totalFeet = temp * feet; 
            }
            for(var j=11; j<=floorNumber;j++){
                temp = j-10;
                feet = 12;
                totalFeet2 = temp * feet; 
            }
            totalFeet = totalFeet + totalFeet2;
            numberOfBrick = totalFeet * 1000;
            return numberOfBrick;
        }

        //Floor More than 20
        if(floorNumber > 20){
            var temp;
            var totalFeet2;
            var totalFeet3;
            for(var i=1; i<=10;i++){
                temp = i;
                feet = 15;
                totalFeet = temp * feet; 
            }
            for(var j=11; j<=20;j++){
                temp = j-10;
                feet = 12;
                totalFeet2 = temp * feet; 
            }
            for(var k=21; k<=floorNumber;k++){
                temp = k-20;
                feet = 10;
                totalFeet3 = temp * feet; 
            }
            totalFeet = totalFeet + totalFeet2 + totalFeet3;
            numberOfBrick = totalFeet * 1000;
            return numberOfBrick;
        }
    }
    else{
        console.log("Error! Floor Number cannot be zero or negative");
    }
}

// 4. Tiny Friend
function tinyFriend(friendsName){

    if(friendsName.length != 0){
        var smallestName = friendsName[0];
        for(var i=0; i<friendsName.length; i++){
            var currentName = friendsName[i];
            if(currentName.length < smallestName.length){
                smallestName = currentName;
            }
        }
        return smallestName;
    }    
}