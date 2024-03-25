const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function sumFunc(accumulator,item){
    return accumulator+=item
}
const totalBatteries=batteryBatches.reduce(sumFunc,0);