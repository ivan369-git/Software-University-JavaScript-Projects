function  fishTank(input){
let length = Number(input[0]);
let width  = Number(input[1]);
let height  = Number(input[2]);
let percentTaken = Number(input[3]) / 100;
let volumeInCM = length * width * height
let totalVolumeinL = volumeInCM /1000
let volumeTaken = percentTaken * totalVolumeinL
let volumeLeft = totalVolumeinL - volumeTaken
console.log (volumeLeft)
}
fishTank(["85","75","47","17"])