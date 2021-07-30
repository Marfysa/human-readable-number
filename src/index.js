module.exports = function toReadable (number) {
   let toNineteen = ['', 'one', 'two', 'three','four','five','six', 'seven','eight','nine','ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen','nineteen'];
   let tens = ['', '','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
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
         string = tens.Math.floor[number / 10] + ((number % 10 > 0) ? " " + toNineteen[number % 10] : "");
         return string;
     }
     if (number <= 999 && number % 100 == 0) {
         return hundreds.Math.floor[number / 100]
     }
     else
     {
         let newHun = hundreds.Math.floor[number / 100] + ' ' + ((readable % 100 > 0) ? toNineteen[readable % 100] : "");
         return newHun;
     }
}
