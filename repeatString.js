function repeat(str, num){
    var output ="";
    if (num>=0){
        for (var i=0; i<num; i++){
            output = output + str;
        }
        console.log(output);    
    }
    else{
        console.log("ERROR");
    }
}

repeat("shruti", 4);
repeat("pooja", "1");
repeat("tanu", 0);
repeat("manu", -2);

//=====================================================================================================================================










