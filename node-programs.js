const cp = require("child_process");
//cp.execSync('calc');
const os = require("os")
// cp.execSync('start chrome https://www.scaler.com/topics/');
console.log(os.arch()); // for architecture of computer
console.log(os.platform()) // for platform i am on
console.log(os.networkInterfaces());
console.log(os.uptime());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.hostname());

// path module

const path = require('path');
  let ext = path.extname('C:\Users\Manish\Desktop\Leetcode_solutions\f1.txt')
  console.log(ext);
  let basename = path.basename('C:\Users\Manish\Desktop\Leetcode_solutions\f1.txt')

  console.log(basename)