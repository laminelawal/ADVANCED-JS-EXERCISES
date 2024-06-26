const result = document.querySelector(".result");
const body = document.querySelector("body");
body.style.backgroundColor = "black";
console.log(body);
let character = "#";
let count = 8;
let rows = [];

// function padRow(rowNumber, rowCount) {}

for (let i = 1; i <= count; i++) {
  //To invert the tree you can use unshift by replacing push.
  rows.push(
    ".".repeat(count - i) + character.repeat(2 * i - 1) + ".".repeat(count - i)
  );
}

//Before u print the value in your HTML div check it in the console while you
// are working on it.

// for (const row of rows) {
//   result = restest + "\n" + row;
// }

rows.forEach((e) => {
  let p = document.createElement("p");

  p.style.color = "darkblue";
  p.style.padding = "0 20px";
  p.append(e);

  result.appendChild(p);
});

console.log(character, count, "ROWS", rows, "RESTEST", result);
