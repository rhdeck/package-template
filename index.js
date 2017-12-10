const fs = require("fs");
const Path = require("path");
const templateName = "template-package";
function init(name) {
  if (!name) name = templateName;
  return {
    name: name,
    version: "0.0.1",
    private: true
  };
}

function write(package, path) {
  if (!path) path = process.cwd();
  if (!fs.existsSync(path)) return false;
  if (fs.statSync(path).isDirectory) {
    fs.writeFileSync(
      Path.resolve(path, "package.json"),
      JSON.stringify(package, null, 2)
    );
    return true;
  }
  return false;
}
module.exports = {
  init,
  write
};
