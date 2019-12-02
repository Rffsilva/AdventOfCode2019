function fuelCalc(v){
    var r =  Math.floor(parseInt(v) / 3) - 2 
    if(r > 8)
        return r + fuelCalc(r)
    return r 
}

document.getElementsByTagName("pre")[0].textContent.split("\n").map(v => fuelCalc(v)).filter(v => Number.isInteger(v)).reduce((t,v)=> t+v)