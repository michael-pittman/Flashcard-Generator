
function ClozeCard(text, cloze, fulltext) {
  this.text = text;
  this.cloze = cloze;
  this.fulltext = text +" "+ cloze
}
var sky = new ClozeCard("the sky colour is", "blue");
var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log(sky.text); 
console.log(sky.cloze); 
console.log(sky.fulltext); 





module.exports = ClozeCard;