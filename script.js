/** @format */

var bod = document.getElementById("bod");
var buttonRun = document.getElementById("run");
var buttonSit = document.getElementById("sit");
var buttonOff = document.getElementById("off");

buttonRun.onclick = function () {
  bod.className = "running animated";
};
buttonSit.onclick = function () {
  bod.className = "sitting animated";
};
buttonOff.onclick = function () {
  bod.className = "";
};


