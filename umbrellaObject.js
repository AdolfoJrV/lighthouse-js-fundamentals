let umbrella = {
  color: 'red',
  length: 1,
  isOpen: true,
  open: function() {
    if (umbrella.isOpen === true) {
      return 'The umbrella is open.';
    } else {
      umbrella.isOpen = true;
      return 'Julia opens the umbrella';
    }
  },
  close: function() {
    if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return 'Julia closes the umbrella.';
    } else {
      return 'The umbrella is close.';
    }
  }
}

console.log(umbrella.open());
console.log(umbrella.close());