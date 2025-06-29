function points(games) {
  let sum =0;
for(let i=0;i<10;i++){

    let newstring = games[i]; 
    let newarr = newstring.split("");   
    let xscore = newarr[0];
    let yscore = newarr[newarr.length-1];
    if(xscore > yscore){
        sum+=3;
    }else if(xscore == yscore){
        sum+=1;
    }
   

  }
  return sum;
}