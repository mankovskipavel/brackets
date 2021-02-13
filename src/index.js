module.exports = function check(str, bracketsConfig) {
  nnn=0
  if (str.length%2==1) {return false}
 while (str!=""){

    for (let i=0;i<str.length;i++)
    {
      if (isClosed(str[i],bracketsConfig)) 
      {
        if (i==0){return false}
        newst=str.slice(0,i*2)
        if (newst!=str){ 
         str=str.slice(i*2,str.length)
        }   else str=""
        break   
      }
    }
    if (checkpart(newst,bracketsConfig)==false){return false}


 }

  
  return true
}


function second (st,bc){
  for (let i=0;i<bc.length;i++){
    if (bc[i][0]==st) return bc[i][1]
  }
}

function checkpart(str,bracketsConfig){
  while (str!=""){
    if (str[str.length-1]!=second(str[0],bracketsConfig)) {return false}
    str=str.slice(1,str.length-1)
  }
  return true
}


function isClosed(st,bc)
{
  
   for (let i=0;i<bc.length;i++)  {    
     
    if (bc[i][1]==st) {
      if (bc[i][0]==bc[i][1]){
        if (nnn==0){
          nnn=1
          return false
        } 
        else 
        {
          nnn=0
          return true
        }
      } else return true
    }
  }
  return false
}