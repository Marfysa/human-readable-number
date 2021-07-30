module.exports = function toReadable (number) {
   let toNineteen = ['', 'one', 'two', 'three','four','five','six', 'seven','eight','nine','ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen','nineteen'];
   let tens = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let hundreds = ['','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
   let string;
     if (number == 0) { 
     return "zero";
     }
     if (number < 20) {
        return toNineteen[number];
     }
     if (number < 100 && number % 10 == 0) {
         return tens[number / 10]
     }
    if (number < 100 && number % 10 != 0) {
        let first = tens[Math.floor(number / 10)];
        let secondString = toNineteen[(number % 10)];
        return `${first} ${secondString}`;
     }
      if (number <= 999 && number % 100 == 0) {
         return hundreds[Math.floor(number / 100)];
     }
     if (number <= 999 && number % 100 != 0)
     {
         let newHun = hundreds[Math.floor(number / 100)];
         let newSecond = tens[Math.floor(number / 10) % 10];
         let newThird = toNineteen[Math.floor(number / 100)];
         let newEnd = (`${newHun} ${newSecond} ${newThird}`).replace(/ +/g, " ").trim();
         return newEnd;
     }
}
