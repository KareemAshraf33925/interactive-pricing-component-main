var views=document.querySelector(".views");
var price=document.querySelector(".price");
var range=document.querySelector(".range");
var check=document.getElementById("check");
var swtich=document.querySelector(".swtich");
var lb=document.querySelector(".lb");

check.addEventListener("click",()=>{
    lb.classList.toggle("active");
})

function updateprice(){
    if(range.value == 8){
        if(check.checked == true){
            price.innerHTML="$"+72+".00";
            swtich.innerHTML="/year"
            
        }else{
            price.innerHTML= "$"+8+".00"
            swtich.innerHTML="/month"
        }
        views.innerHTML="10k PAGEVIEWS"
    }
    if(range.value == 12){
        if(check.checked == true){
            price.innerHTML="$"+108+".00";
            swtich.innerHTML="/year"
        }else{
            price.innerHTML= "$"+12+".00"
            swtich.innerHTML="/month"
        }
        views.innerHTML="50k PAGEVIEWS"
    }
    if(range.value == 16){
        if(check.checked == true){
            price.innerHTML="$"+144+".00";
            swtich.innerHTML="/year"
        }else{
            price.innerHTML= "$"+16+".00"
            swtich.innerHTML="/month"
        }
        views.innerHTML="100k PAGEVIEWS"
    }
    if(range.value == 20){
        if(check.checked == true){
            price.innerHTML="$"+180+".00";
            swtich.innerHTML="/year"
        }else{
            price.innerHTML= "$"+20+".00"
            swtich.innerHTML="/month"
        }
        views.innerHTML="150k PAGEVIEWS"
    }
}
range.addEventListener("input",updateprice);
updateprice();