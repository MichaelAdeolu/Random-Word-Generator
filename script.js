// Get the viewport height
(function load(){
  document.getElementById("panel1").classList.add("hidden");
  document.getElementById("panel2").classList.add("hidden");
    
})();

var inc=1;
num3=0;

backup1=[];
        backup2=[];

function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('visible');
      document.querySelectorAll('#begin, img, h1').forEach(element => {
            element.classList.add('hidden');
        });



      
    } else {
        element.classList.remove('visible');
        element.classList.add('hidden');
    }
}


function toggleVisibility2(elementId) {
  input= document.querySelectorAll('input');   
    
    
   if(input[0].value!=='' && input[1].value!==''){
        firstVals=[];
         secondVals=[];

      
                  firstWords=input[0].value;
                  firstSplit= firstWords.replaceAll('"', '');
                 firstOnes=firstSplit.split(","); 

           //next processess are, a toggle for the see translation button.

              secondWords=input[1].value;
                  secondSplit= secondWords.replaceAll('"', '');
                   secondOnes=secondSplit.split(","); 



                  num1=firstOnes.length;
                  num2=secondOnes.length;


inc=1;


  
                  
                
                       
                  //for loops arou but where it is also vwhere ts ztzeubngfs  gfrshgfs iblend here
                  
                 
                   
        if (firstOnes.length==secondOnes.length) {
       //pre defined randoms. Thats the main idea. 
            while (num1 > 0) {
               pos= Math.floor(Math.random() * (num1));
       firstVals.push(firstOnes[pos]);
           secondVals.push(secondOnes[pos]);
           firstOnes.splice(`${pos}`, 1);
       secondOnes.splice(`${pos}`, 1);
num1--;
       }}
        else{
                       alert("Please, recheck your submission.");
                    return;
                   }

          


       
       num3=firstVals.length;
                     num4=secondVals.length;
                  document.getElementById("number").textContent=`${inc} of ${num3} words` ;
                  document.getElementById("random").textContent=`${firstVals[0]}`;
                  document.getElementById("tr").textContent=`${secondVals[0]}`;
     var element = document.getElementById(elementId);

     if (element.classList.contains('hidden') && firstVals.length==secondVals.length) {
         element.classList.remove('hidden'); 
      element.classList.add('visible');
         document.getElementById("tr").classList.add('hidden');
       document.querySelectorAll('#panel1').forEach(element => {
             element.classList.add('hidden');
//what is different about this code now
         }
                                                   
                                                    
                                                   );

 


         

     } 
       else{
          alert("Please, recheck your submission.");

           }
     
   }  

    else{
   alert("Please, recheck your submission.");

    }
arrow();
} 

function showTranslation() {
        tr= document.getElementById("tr");
    if(tr.classList.contains("hidden")){
        
    
    document.getElementById("tr").classList.remove('hidden');
     document.getElementById("tr").classList.add('visible');
}
    else{
        document.getElementById("tr").classList.remove('visible');
         document.getElementById("tr").classList.add('hidden');
        
    }
  
}







function arrow1(){


        inc++;


        document.getElementById("number").textContent=`${inc} of ${num4} words` ;
      document.getElementById("random").textContent=`${firstVals[inc-1]}`;
                      document.getElementById("tr").textContent=`${secondVals[inc-1]}`;


}

function arrow2(){
 



         inc--;

                     document.getElementById("number").textContent=`${inc} of ${num4} words` ;
                                          document.getElementById("random").textContent=`${firstVals[inc-1]}`;
                                     document.getElementById("tr").textContent=`${secondVals[inc-1]}`;









    
}
