digits = [9,9,3];
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
   if(digits[0] == 0) {
       return [1, ...digits];
   }
    return digits;
};

console.log(plusOne(digits));

