$(document).ready(function(){
    $(".icon-but").click(function(){
        $(".o").toggle(500)
    })
})

document.querySelector(".joining").addEventListener("click", function(){
    document.querySelector(".log").style.display="block"
})
window.addEventListener("load", function(){
    this.setTimeout(function(){
      document.querySelector(".log").style.display="block"
    },2000)
})
document.querySelector(".cut").addEventListener("click", function(){
    document.querySelector(".log").style.display="none"
})