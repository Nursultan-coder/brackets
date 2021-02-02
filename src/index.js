module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  let i,j = 0;
  let check = 0;
  let tmp = [];
  let k=0;
  for(i=0; i<bracketsConfig.length;i++){
    open[i] = bracketsConfig[i][0];
    close[i] = bracketsConfig[i][1];
  }

  for (i=0; i<str.length;i++){
    for(j=0;j<open.length; j++){
      if(open[j]==close[j]&&str[i]==close[j]){
        if(str[i]==close[tmp[tmp.length-1]]){
          tmp.pop();
          check--;
        }
        else{
          tmp.push(j);
          check++;
        }
      }
      else if(str[i]==open[j]){
        tmp.push(j);
        check ++;
      }
      else if(str[i]==close[j]){
        if(j==tmp.pop()){
          check--;
        }
        else return false;
      }
    }
    if(check<0) return false;
  }
  if(check == 0) return true;
  else return false;
}
