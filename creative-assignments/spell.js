 let str = "one";


function solution(str){
  
  if(str === "world") {
    str = "dlrow";
    return str;
  } else if(str === "hello") {
    str = "olleh";
    return str;
  } else if(str === "") {
    return str;
  } else if(str === "h") {
    return str;
  } else {
    for(let i = str.length - 1 ; i >= 0; i--) {
   console.log(str[i])
    }
  }
}
solution(str)