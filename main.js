var numbers=[];
function submit(){
    var display_student_array=[];
    for(var i=1; i<=6; i++){
        var Inputs=document.getElementById("#"+i).value;
        console.log(Inputs);
        numbers.push(Inputs);
    }
    console.log(student_name_array);
   var length_array=student_name_array.length;
   console.log(length_array); 
   for(var j=0; j<length_array; j++){
       display_student_array.push("<h4>Name -"+student_name_array[j]+"</h4>"); 
       console.log(display_student_array);  
        
   }
   console.log(display_student_array);
   document.getElementById("display_name_with_commas").innerHTML=display_student_array; 
   var remove_camma=display_student_array.join(" ");
   console.log(remove_camma);
   document.getElementById("display_name_without_commas").innerHTML=remove_camma;
   document.getElementById("submit_button").style.display="none"; 
   document.getElementById("sort_button").style.display="inline-block"; 
}
function sorting(){
    student_name_array.sort();
    console.log(student_name_array);
    var display_student_sorting_array=[];
    var length_array=student_name_array.length;
    console.log(length_array); 
    for(var j=0; j<length_array; j++){
        display_student_sorting_array.push("<h4>Name -"+student_name_array[j]+"</h4>"); 
        console.log(display_student_sorting_array);  
        var remove_camma=display_student_sorting_array.join(" ");
    }
    var remove_camma=display_student_sorting_array.join(" ");
    console.log(remove_camma);
    document.getElementById("display_name_without_commas").innerHTML=remove_camma;
}