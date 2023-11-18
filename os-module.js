const os = require('os');
const user = os.userInfo();
console.log(user);

const upTime = os.uptime();
console.log("The system uptime is : ",upTime/60/60/24 ," days ",upTime/60/60," hours", "or", upTime/60, "minutes");

//current os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);