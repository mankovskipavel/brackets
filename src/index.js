module.exports = function check(str, bracketsConfig) {
  let newst=""
 // while (str!=""){

    for (let i=0;i<str.length;i++)
    {
      if (isClosed(str[i],bracketsConfig)) 
      {
        if (i==0){return false}
        newst=str.slice(0,i*2)
        if (newst.length!=str.length){ 
         str=str.slice(i*2,str.length)
        }   
        break   
      }
    }
    if (checkpart(newst,bracketsConfig)==false){return false}


 // }

  
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
    if (bc[i][1]==st) {return true}
  }
  return false
}