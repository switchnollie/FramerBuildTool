var fs = require("fs");
var glob = require("glob");
var exec = require("child_process").exec;
var path = require("path");
var devServerPath = path.join(
  ".",
  "node_modules",
  ".bin",
  "webpack-dev-server"
);
console.log(devServerPath);

var appDirectory = glob.sync("./framerPrototype/*.framer/app.js")[0];
fs.readFile(appDirectory, "utf8", function(err, data) {
  if (err) {
    throw err;
  }
  var line = data.match(/^.*Framer\.Importer\.load.*$/m)[0];
  console.log(line);
  var childProcess = exec(
    "node " + devServerPath + " --open --mode=development --hot",
    {
      env: {
        myLayersVar: line
      }
    }
  ).on("error", function(err) {
    throw err;
  });

  childProcess.stdout.on("data", function(data) {
    console.log("stdout", data.toString("utf8"));
  });
  childProcess.stderr.on("data", function(data) {
    console.log("stderr", data.toString("utf8"));
  });
  childProcess.on("close", function(code) {
    console.log("Process terminated with exit code ", code);
  });
});
