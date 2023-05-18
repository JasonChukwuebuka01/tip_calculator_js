window.onload=()=>{

 const billInput = document.querySelector("#bill_input") ;
 const guestInput = document.querySelector("#guest_input");
 const calButton = document.querySelector("#calculate");
 const quality = document.querySelector("#quality");
 const tipAmount= document.querySelector("#tip_amount");
 const choose = document.querySelector("#choose");
 let num= 0;
 
 calButton.addEventListener("click",()=>{
     num+=1;
      calc();
      
      if(num === 1){
          calButton.style.animation="shake .4s ease";
      }else if(num === 2){
          calButton.style.animation="shaker .4s ease";
          num=0;
      }
 });
 
 
 
 
 
 // CASE 1:(A () that evaluates tip amount(bill * services /number of guest = tipAmount));
 calc=()=>{
    let tip =((billInput.value * quality.value) / (guestInput.value)).toFixed(2);
    
    billInput.value ="";
    guestInput.value="";
    quality.value="";
    choose.style.visibility="visible";
    
      if(tip !== "NaN"){
        tipAmount.innerHTML = ` $${tip} tip each `; 
          showvisibility();
        
      }else{
          tipAmount.innerHTML = ` Input fields to calculate Tip amount `; 
          showvisibility();     
      }
         
 }// End of Case 1.     
    
    
    
    
//Case 1.1(() that toggles tipAmount class name from active to NO CLASS in 3 seconds); 
 showvisibility =()=>{
    
    tipAmount.className="active";
    
    setTimeout(()=>{
    tipAmount.className= tipAmount.className.replace("active","");
        
    },3000);
          
 };// End of Case 1.1
    
    
    
    
    

//CASE 2:(event that turns ptag(choose) to hidden);
     quality.addEventListener("click",()=>{
        choose.style.visibility="hidden" ;
     })
    
    
    
}//End of General()✅
