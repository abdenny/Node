let log = {
  info: info => {
    console.log(`info is ${info}`);
  },
  warning: warning => {
    console.log(`warning: ${warning}`);
  },
  error: error => {
    console.log(`error: ${error}`);
  }
};

let digitalcrafts = 'school';
module.exports = log;
