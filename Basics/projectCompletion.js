function projectCompletion (input){
let architectName = input[0];
let projectsToBeCompleted = Number (input[1]);
let hoursPerProject = 3;
let totalHours = hoursPerProject * projectsToBeCompleted;
let result = `The architect ${architectName} will need ${totalHours} hours to complete ${projectsToBeCompleted} project/s.`;
console.log(result);}
projectCompletion(["George","4"])