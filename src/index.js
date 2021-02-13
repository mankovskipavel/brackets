module.exports = function check(str, bracketsConfig) {
if (str.length%2==1) {return false}
let len=str.length/2
for(let a=0;a<len;a++){
for (let i=0;i<str.length;i++){
if (eq(str[i],str[i+1],bracketsConfig)) 
    {
    str=str.slice(0,i)+str.slice(i+2,str.length)
    
    }
  }

}
if (str=="") return true
return false
}

function eq(st1,st2,bc)
{
  for (let ii=0;ii<bc.length;ii++){
    if((st1==bc[ii][0])&&(bc[ii][1]==st2)){return true}
  }
  return false
}