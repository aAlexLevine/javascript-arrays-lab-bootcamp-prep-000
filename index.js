const app = "I don't do much."



function destructivelyAppendKitten(name) {
  kittens.push (name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift (name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
