function reverseString(str){
    var NewString = "";
    for (var i = str.length-1; i >=0; i --){
        NewString += str[i];
    }
    console.log(NewString);
}
reverseString("Shruti Bajpai");