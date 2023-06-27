function apple(x){
    let hotterTHanSun= x ** 2
    if (hotterTHanSun > 1000){
        return "It\'s Hotter than the sun!!"
    } else {
        return "Help yourself to a honeycomb Yorkie for the glovebox."
    }
}

console.log(apple(10))


//the solution that others used

/**
 function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}
**/
