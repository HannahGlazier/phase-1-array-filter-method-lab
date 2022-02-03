// Code your solution here

// Array of drivers
//const drivers = ['Fred', 'Jim', 'Helen', 'Rachel', 'Dan']

function findMatching (drivers, string) {
    return drivers.filter(function(element){
        return element.toLowerCase() === string.toLowerCase() 
    })
}

//console.log(findMatching(drivers, "Jim"))

function fuzzyMatch (drivers, string) {
    return drivers.filter(function(element){
        return element.charAt(0) === string.charAt(0)
    })
}



    //console.log(fuzzyMatch(drivers, "H"))

// Array of driver objects 
const driverObj = [
{
    name: 'Fred',
    hometown: 'Portland',
},
{    
    name: 'Jim',
    hometown: 'Boulder',
},
{
    name: 'Helen', 
    hometown: 'Denver',
},
{
    name: 'Rachel',
    hometown: 'Seattle',
},
{
    name: 'Dan',
    hometown: 'San Diego'
}   
]


function matchName (driverObj, string) {
    return driverObj.filter(driverObj => driverObj.name === string)
}