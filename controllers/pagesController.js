const { Computer, Phone } = require("../models")

exports.home = (req, res) => {
  const title = "Binar Store",
    subTitle = "Welcome to Binar Store!";

  res.render("index", { title, subTitle });
};

exports.phones = (req, res) => {
  Phone.findAll().then(phones => {
  res.render("phones", { title: "Phones", phones });
});
};
 
exports.computers = (req, res) => {
  Computer.findAll().then(computers => {
    res.render("computers", { title: "Computers", computers });
  });
};