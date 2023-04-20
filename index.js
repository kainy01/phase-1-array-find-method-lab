// code your solution here


function superbowlWin(arr) {
let val= arr.find((element, index, array) => {
    return element.result === 'W'
  });
  if (!!val ){
    return val.year
  }else return undefined
}
