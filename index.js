function writeCards(string_names, event_name) {
  let array = []
  for (let i=0; i<string_names.length; i++) {
    let message = `Thank you, ${string_names[i]}, for the wonderful ${event_name} gift!`;
    array.push(message)
  }
  return array
}

function countDown(number) {
  let i = 0;
  while (i <= number) {
    console.log(`${number}`);
    number--;
  }
}
