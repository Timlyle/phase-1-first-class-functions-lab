
function returnFirstTwoDrivers(driversarr){
    return driversarr.slice(0,2)
};

function returnLastTwoDrivers(driversarr){
    return driversarr.slice(-2);

};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function multiplier(x) {
    return x * x;
};

function createFareMultiplier(x){
    return multiplier

};

function fareDoubler(x){
return x * 2;
};

function fareTripler(x){
    return x * 3;
};

function selectDifferentDrivers(driversarr, aFunction){
    return aFunction(driversarr);
};






































/*/let square = () => 2*2
const fareDoubler = (arg) => createFareMultiplier(arg)(2);
const fareTripler = (arg) => createFareMultiplier(arg)(3);

const returnFirstTwoDrivers = function (arrayOfDrivers) {
   return arrayOfDrivers.slice(0,2);
} 
    
const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return (multiplier) => int * multiplier;
}

// defining function
function selectDifferentDrivers(arrayOfDrivers, someFunction) {
    return someFunction(arrayOfDrivers)
}
// calling function
selectDifferentDrivers(['bat', 'cat', 'dog'], returnFirstTwoDrivers)*/