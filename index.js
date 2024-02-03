
let status1=1
let status2=0
let status3=0
let i=0
let element1, element2, element3;


function eswap(){
    
    document.querySelector(".frame-content-child").src="images/e-comm.jpg"
    document.querySelector(".e-commerce-store-parent").addEventListener("mouseout", function() {
        document.querySelector(".frame-content-child").src = "images/pg1.png";
    });
}
function onlineswap(){
    
    document.querySelector(".frame-content-child").src="images/online.jpg"
    document.querySelector(".online-ordering-parent").addEventListener("mouseout", function() {
        document.querySelector(".frame-content-child").src = "images/pg1.png";
    });
}
function tab1(){
    if(status1==1){
        i=0
    }
    else if(status2== 1){
        i=1
    }
    else{
        i=2
    }
    call(i)

    if(status1%2==0){
        element1.style.cursor="pointer"
        element1.addEventListener("click",function(){
            
            element1.style.backgroundColor=" #fdb913"
            element1.style.boder="none"
        
            element2.style.backgroundColor="rgba(250, 250, 250, 0.15)"
            element2.style.border="1.5px solid #b9b9b9"
            element3.style.backgroundColor="rgba(250, 250, 250, 0.15)"
            element3.style.border="1.5px solid #b9b9b9"
            
            
            
            document.querySelector(".one").style.visibility="visible"
            document.querySelector(".one").style.position="static"
            
    
            status1=1
            status2=0
            status3=0
    
            document.querySelector(".two").style.visibility="hidden"
            document.querySelector(".two").style.position="absolute"
    
            document.querySelector(".three").style.visibility="hidden"
            document.querySelector(".three").style.position="absolute"

  

        })
        
    }
    else{
        element2.style.cursor="pointer"
        element3.style.cursor="pointer"

        element1.addEventListener("click",function(){ 
        
        element2.classList.add('temp-style');
        element3.classList.add('temp-style');
setTimeout(() => {
    element2.classList.remove('temp-style');
    element3.classList.remove('temp-style');
}, 500);
            
        })
        
    }
    

}
function call(i){
    
element1=document.querySelectorAll(".frame-frame")[i]
element2=document.querySelectorAll(".frame-frame1")[i]
element3=document.querySelectorAll(".frame-frame2")[i]
    
    
}
function tab2(){
    if(status1==1){
        i=0
    }
    else if(status2==1){
        i=1
    }
    else{
        i=2
    }
    call(i)

    if(status2%2 ==0){
        element2.style.cursor="pointer"
        element2.addEventListener("click",function(){
            
            element2.classList.remove('frame-frame1')
            element2.classList.add('frame-frame')

            // element2.style.backgroundColor=" #fdb913"
            // element2.style.boder="none"
        
            
            element1.classList.add('greybtn');
            element3.classList.add('greybtn');
         
            
            
            
            document.querySelector(".one").style.visibility="hidden"
            document.querySelector(".one").style.position="absolute"
            
    
            status1=0
            status2=1
            status3=0
    
            document.querySelector(".two").style.visibility="visible"
            document.querySelector(".two").style.position="static"
    
            document.querySelector(".three").style.visibility="hidden"
            document.querySelector(".three").style.position="absolute"

  

        })
        
    }
    else{
        element1.style.cursor="pointer"
        element3.style.cursor="pointer"

        element2.addEventListener("click",function(){ 
        
        element1.classList.add('temp-style');
        element3.classList.add('temp-style');
setTimeout(() => {
    element1.classList.remove('temp-style');
    element3.classList.remove('temp-style');
}, 500);
            
        })
        
    }
    

}
function tab3(){
    if(status1==1){
        i=0
    }
    else if(status2==1){
        i=1
    }
    else{
        i=2
    }
    call(i)

    if(status3%2 ==0){
        element3.style.cursor="pointer"
        element3.addEventListener("click",function(){
            
            element3.style.backgroundColor=" #fdb913"
            element3.style.boder="none"
        
            
            element1.classList.add('greybtn');
            element2.classList.add('greybtn');
         
            
            
            
            document.querySelector(".one").style.visibility="hidden"
            document.querySelector(".one").style.position="absolute"
            
    
            status1=0
            status2=0
            status3=1
    
            document.querySelector(".two").style.visibility="hidden"
            document.querySelector(".two").style.position="absolute"
    
            document.querySelector(".three").style.visibility="visible"
            document.querySelector(".three").style.position="static"

  

        })
        
    }
    else{
        element1.style.cursor="pointer"
        element2.style.cursor="pointer"

        element3.addEventListener("click",function(){ 
        
        element1.classList.add('temp-style');
        element2.classList.add('temp-style');
setTimeout(() => {
    element1.classList.remove('temp-style');
    element2.classList.remove('temp-style');
}, 500);
            
        })
        
    }
    

}