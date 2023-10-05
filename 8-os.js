const os = require('os');

//info about user

const user = os.userInfo();
// console.log(user);

//method return the system uptime in seconds

console.log(`The system Uptime is ${os.uptime}`);

const current  = {
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    freemem:os.freemem(),

}

console.log(current);
