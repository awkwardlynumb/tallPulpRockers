//get to api/search route
//submitting search fields as an object
//use a get in the controller to submit the query using json from api/search route

$("#searchBtn").on("click", function () {
  const keyword = $("#keyword").val();
  const diffArr = [];
  const diffs = [...$("#difChoices input:checked")];
  diffs.forEach((diff) => diffArr.push(diff.value));
  console.log(diffs);
  let queryString = "?";
  if (keyword !== "") {
    queryString += "keyword=" + keyword;
  }
  if (diffArr.length > 0 && queryString !== "?") {
    diffArr.forEach((diff) => (queryString += "&difficulty=" + diff));
  } else if (diffArr.length > 0) {
    diffArr.forEach((diff) => (queryString += "difficulty=" + diff));
  }
  fetch("/api/search" + queryString);
  console.log("QUERY STRING: ", queryString);
});
//const passport = require("../config/passport");
// const posture = {
//   all: function (cb) {
//     passport.all("poses", function (res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function (cols, vals, cb) {
//     passport.create("poses", cols, vals, function (res) {
//       cb(res);
//     });
//   },
//   update: function (objColVals, condition, cb) {
//     passport.update("poses", objColVals, condition, function (res) {
//       cb(res);
//     });
//   }
// };
// // Export the database functions for the controller (Controller.js).
// module.exports = posture;


$.ajax({
  "method" :"GET",
  url:"poses/:id'"
})
