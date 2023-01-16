module.exports = function toReadable (number) {
let  arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
let  arr2 = [["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
[10,11,12,13,14,15,16,17,18,19]];
let arr3 = [["twenty", "thirty", "forty","fifty", "sixty", "seventy", "eighty", "ninety"],
[20, 30, 40, 50, 60, 70, 80, 90]];
let arr4 = [["hundred"],[100]];
len = String(number).length;

    //числа от  0 до 9
    if(len == 1){
        return arr1[number];
    }
    //числа от  10 до 19
    if(len == 2 && String(number)[0] == 1){
            for(j=0;j<arr2[1].length; j++){
                if(arr2[1][j] == number)
                    return arr2[0][j];
            }
    }
    // числа от 20 до 99
    if(len == 2 && String(number)[0] >= 2){
        //str4 = String(number)[1] + String(number)[2];
        for(j=0;j<arr3[1].length; j++){
            if(String(arr3[1][j])[0] == String(number)[0])
                str = arr3[0][j];
        }

        if (String(number)[1] == 0 ){
            return str;
        }else{
            return str = str + " " + arr1[String(number)[1]];
        }
    }
    if(len == 3){
        str2 = arr1[String(number)[0]] + " hundred";     
        for(j=0;j<arr3[1].length; j++){
            if(String(arr3[1][j])[0] == String(number)[1]){
                str2 = str2 + " " + arr3[0][j];
            }
        }
        if (String(number)[2] == 0 && String(number)[1] != 1){
            return str2;
        }
        if (String(number)[1] == 1){
            str3 = String(number)[1] + String(number)[2];
            for(j=0;j<arr2[1].length; j++){
                if(arr2[1][j] ==  str3){
                    str2 = str2 + " " + arr2[0][j];
                }
            }
            return str2;
        }else {
            return str2 = str2 + " " + arr1[String(number)[2]]; 
        } 
    }
}
