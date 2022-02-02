const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let morseCode = [];
    for (let i = 0; i <= expr.length+1; i += 10) {
      const first = expr.slice(i, i + 10);
      const second = first.slice(first.indexOf("1"));
      let result = "";
      for (let i = 0; i <= second.length+1; i += 2) {
          const each = second.slice(i, i + 2);
          switch (each) {
              case "10":
                  result += ".";
                  break;
              case "11":
                  result += "-";
                  break;
              case "*":
                  result += " ";
                  break;
          }
      }
      morseCode.push(result);
    }

    return morseCode
      .map(el => {return el === " " ? " " : MORSE_TABLE[el]})
      .join("");
  
}

module.exports = {
    decode
}