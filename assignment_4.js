/* ---------------------------------*\
    Assignment 4 Md Saifur Rahman
\*----------------------------------*/
//console.log('Hello Saifur Test purpose!');

/* ---------------------------------*\
                Problem 1
\*----------------------------------*/

var seer=144;

function seerToMon(seer){
    return seer/40;
}
var maund=seerToMon(seer);
console.log(maund);//3.6

console.log(seerToMon(720));//18
console.log(seerToMon(400));//10
console.log(seerToMon(39));//0.975
console.log(seerToMon(0));//0

console.log(seerToMon(-40));//-1 invalid
console.log(seerToMon(-10));//-0.25 invalid
/* ---------------------------------*\
    Problem 1 test error case solve
\*----------------------------------*/

/*


var seer=144;

function seerToMon(seer){
    if(seer>0)return seer/40;
    else return 0;
}
console.log(seerToMon(12345678900000000));//308641972500000
console.log(seerToMon(39));//0.975
console.log(seerToMon(0));//0
console.log(seerToMon(-40));//0 valid
console.log(seerToMon(-10));//0 valid



*/

/* ---------------------------------*\
               Problem 2
\*----------------------------------*/

const perShirt= 100,perPant= 200,perShoes= 500; 
function totalSales(shirt , pant , shoes){
    return ((shirt * perShirt) + (pant * perPant)+(shoes * perShoes));
}
console.log(totalSales(0,0,0)); //0
console.log(totalSales(1,1,1)); //800
console.log(totalSales(1,0,0)); //100
console.log(totalSales(0,1,0)); //200
console.log(totalSales(0,0,1)); //500
console.log(totalSales(3,2,1)); //1200
console.log(totalSales(3,3,3)); //2400

console.log(totalSales(-1,-3,-10)); //-5700 invalid 

/* ---------------------------------*\
  Problem 2 some test error modified
\*----------------------------------*/
/*


const perShirt= 100,perPant= 200,perShoes= 500;
var total = 0;
function totalSales(shirt , pant , shoes){
    total = ((shirt * perShirt) + (pant * perPant)+(shoes * perShoes));
    if(total >= 0){
        return total;
    }
    else return 0;
}

console.log(totalSales(-1,-3,-10)); //0 valid 


*/




/* ---------------------------------*\
                Problem 3 
\*----------------------------------*/

const deliveryCostfor_100 = 100,deliveryCostfor_Up_100_to_200 =80,deliveryCostfor_Up_200=50;
function deliveryCost(t_shirt){
    if(t_shirt<=100) return t_shirt * deliveryCostfor_100;
    else if(t_shirt<=200)return ((100*deliveryCostfor_100)+((t_shirt-100)*deliveryCostfor_Up_100_to_200));
    else return ((100*deliveryCostfor_100)+(100*deliveryCostfor_Up_100_to_200)+((t_shirt-200)*deliveryCostfor_Up_200));
}
console.log(deliveryCost(67));//6700
console.log(deliveryCost(140));//13200
console.log(deliveryCost(220));//19000
console.log(deliveryCost(-10))//-1000 which is notvalid 


/* ---------------------------------*\
    Problem 3 error case handalling
\*----------------------------------*/
/*



const deliveryCostfor_100 = 100,deliveryCostfor_Up_100_to_200 =80,deliveryCostfor_Up_200=50;
function deliveryCost(t_shirt){
    if(t_shirt>0){
        if(t_shirt<=100) return t_shirt * deliveryCostfor_100;
        else if(t_shirt<=200)return ((100*deliveryCostfor_100)+((t_shirt-100)*deliveryCostfor_Up_100_to_200));
        else return ((100*deliveryCostfor_100)+(100*deliveryCostfor_Up_100_to_200)+((t_shirt-200)*deliveryCostfor_Up_200));
    }
    else return 0;
    
}
console.log(deliveryCost(-10))//0 which is valid 


*/


/* ---------------------------------*\
               Problem 4
\*----------------------------------*/
var str='';
var array =['Rahima','ranu','panu','ave','lojjaboti','rahim','karim'];
function  perfectFriend(perfect){
    for (i=0; i<array.length; i++){
        if(perfect[i].length==5){
            str=perfect[i];
            break;
        }
    }
    return str;
}
console.log(perfectFriend(array));// rahim

/* ---------------------------------*\
    Problem 4 error case handalling
\*----------------------------------*/


/*


var str='';
var array =['Rahima','ranua','panu','ave','lojjaboti','rahim','karim'];
function  perfectFriend(perfect){
    //let test =1; //testing purpose
    for (i=0; i<array.length; i++){
        if(perfect[i].length==5){
            str=perfect[i];
            // console.log(i);
            //console.log(test++);//here the condition check 2 time whice is not accept
            //continue //opps ! now it skip but answer still karim
            return str; //Owao! ranua return ....Hurrah!i solve that error! dinka chika dinka chika ding ding ding...
        }
    }
}
console.log(perfectFriend(array));// karim which is not accept able so must debug it.



*/



/* ---------------------------------*\
    Thank You Programming Hero_Team.
\*----------------------------------*/