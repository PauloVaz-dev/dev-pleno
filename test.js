microfone = {
  color: 'black',
  isOn: 'true',
  toggleOnOff: function () {
    if (microfone.isOn) {
      console.log('ligar');
    } else {
      console.log('desligar');
    }
    microfone.isOn = !microfone.isOn;
  },
};

function CreateMicrofone(color = 'black') {
  let isOn = true;
  return {
    color: color,
    toggleOnOff: function () {
      if (isOn) {
        console.log('ligar');
      } else {
        console.log('desligar');
      }
      isOn = !isOn;
    },
  };
}

function createAnimal() {
  console.log('aaaaaaa');
}

function newFunction() {
  console.log('aaaaaaa');
}

const microfoneBack = CreateMicrofone();
const microfoneRed = CreateMicrofone('red');

console.log(microfoneBack);
console.log(microfoneRed);
