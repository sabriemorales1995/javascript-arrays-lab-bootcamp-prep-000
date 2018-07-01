const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function deconstructivelyAppendKitten(name){
  kittens.push(name)
}

function deconstructivelyPrependKitten(name){
  kittens.unshift(name)
}

function deconstructivelyRemoveLastKitten(){
  kitten.pop();
}

function deconstructivelyRemoveFirstKitten(){
  kitten.shift();
}

function appendKitten(name){
  var temp = [...kittens, name];
  return temp;
}

function prependKitten(name){
  var temp = [name, ...kittens];
  return temp;
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}