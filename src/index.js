module.exports = function toReadable (number) {
let  arr1 = ["zero", "one", "two", "tree", "four", "five", "six", "seven", "eight", "nine", "ten"]
let  arr2 = [["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
[10,11,12,13,14,15,16,17,18,19]];
let arr3 = [["twenty", "thirty", "fourty","fifty", "sixty", "seventy", "eighty", "ninety"],
[20, 30, 40, 50, 60, 70, 80, 90]];
let arr4 = [["hundred"],[100]];
len = String(number).length;
    if(len == 1){
        for(i=0;i<=arr1.length;i++){
            if(i == number)
                return arr1[i];
        }
    }
    if(len == 2 && String(number)[0] == 1){
        for(i=0;i<=arr2.length; i++){
            for(j=0;j<arr2[i].length; j++){
                if(arr2[1][j] == number)
                    return arr2[0][j];
            }
        }
    }
    if(len == 2 && String(number)[0] >= 2){
        for(i=0;i<=arr3.length; i++){
            for(j=0;j<arr3[i].length; j++){
                if(String(arr3[1][j])[0] == String(number)[0])
                    str = arr3[0][j];
            }
        }
        for(k=0;k<=arr1.length;k++){
            if(k == String(number)[1] )
                str = str + " " + arr1[k];
                
        } 
        return str;
    }
    if(len == 3){

        for(k=0;k<=arr1.length;k++){
            if(k == String(number)[1] )
                str2 = arr1[k];     
        } 
        str2 = str2 + " hundred";
        for(i=0;i<=arr3.length; i++){
            for(j=0;j<arr3[i].length; j++){
                if(String(arr3[1][j])[0] == String(number)[1])
                    str2 = str2 + " " + arr3[0][j];
            }
        }
        for(l=0;l<=arr1.length;l++){
            if(l == String(number)[2] )
                str2 = str2 + " " + arr1[l];     
        } 
        return str2;
    }
}
