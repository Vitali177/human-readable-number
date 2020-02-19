module.exports = function toReadable (number) {

    let obj = {
        'units': ['zero', 'one', 'two', 'three', 'four', 'five',
            'six', 'seven', 'eight', 'nine'],
        'second': ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        'tens': [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 
            'sixty', 'seventy', 'eighty', 'ninety'],
    };

    number = number +'';

  if (number < 10) return obj['units'][number];
  if (number < 20) return obj['second'][+(number.split('')[1])];
    if (number % 10 === 0 && number < 100) return obj['tens'][+(number.split('')[0])];
  if (number < 100) return obj['tens'][+(number.split('')[0])] + ' ' + obj['units'][+(number.split('')[1])];

    if (number % 100 === 0) return obj['units'][+(number.split('')[0])] + ' hundred';

  if (number % 10 === 0) return obj['units'][+(number.split('')[0])] + ' hundred' + ' ' +
     obj['tens'][+(number.split('')[1])];

    if (number % 100 < 10) return obj['units'][+(number.split('')[0])] + ' hundred' + ' ' +
     obj['units'][+(number.split('')[2])];

    if (number % 100 < 20) return obj['units'][+(number.split('')[0])] + ' hundred' + ' ' +
            obj['second'][+(number.split('')[2])]

  return obj['units'][+(number.split('')[0])] + ' hundred' + ' ' +
            obj['tens'][+(number.split('')[1])] + ' ' + obj['units'][+(number.split('')[2])];

}
