array1= ["maria","josefa","ricarda"];
array2= ["misael","jorge",array1,"josefina"];


forLabel:
for (let array in array2){
    if (array == 2){

        for(let array of array1){
            document.write(array + "<br><br>");
            break forLabel;
        }
    }else{
        document.write(array2[array] + "<br><br>");
    }
}

