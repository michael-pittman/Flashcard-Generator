function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}
var sky = new BasicCard("the sky colour", "blue");

console.log(sky.front); 
console.log(sky.back); 

//BasicCard("the sky colour", "blue")
//BasicCard("the grass colour", "green")
//BasicCard("the sun colour", "yellow")

module.exports = BasicCard