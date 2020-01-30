function link1(){
document.getElementById("cont1").classList.add("active")
document.getElementById("cont2").classList.remove("active")
document.getElementById("cont3").classList.remove("active")

}
function link2(){
    document.getElementById("cont1").classList.remove("active")
    document.getElementById("cont2").classList.add("active")
    document.getElementById("cont3").classList.remove("active")
    
    }
    function link3(){
        document.getElementById("cont1").classList.remove("active")
        document.getElementById("cont2").classList.remove("active")
        document.getElementById("cont3").classList.add("active")
        
        }