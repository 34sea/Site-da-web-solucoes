let imagensSlide = window.document.querySelectorAll(".imagensSlide")

let slideBar = window.document.querySelectorAll(".slideBar")

let imgsRolando = window.document.querySelector(".imgsRolando")

let textoPublicidadeBannner = window.document.querySelectorAll(".textoPublicidadeBannner")

let tam = 300
let tempoConta =2


for(let i=0; i<slideBar.length; i++){
    slideBar[i].addEventListener("click", ()=>{
        for(let c=0; c<slideBar.length; c++){
            slideBar[c].style.background = "rgba(0, 0, 0, 0)"
        }
        imgsRolando.style.flexDirection= "row"
        slideBar[i].style.background = "#fff"
        if(i==0){

            imagensSlide[2].style.display = "flex"
            imagensSlide[0].style.display = "flex"
            imagensSlide[1].style.display = "flex"
            textoPublicidadeBannner[1].style.top = "0%"
            textoPublicidadeBannner[1].style.position = "static"
            textoPublicidadeBannner[2].style.top = "0%"
            textoPublicidadeBannner[2].style.position = "static"
            imgsRolando.style.width = `300%`
            textoPublicidadeBannner[0].style.position = "absolute"
            textoPublicidadeBannner[0].style.top = "30%"
        }else if(i==1){
            tam-=100
            textoPublicidadeBannner[0].style.top = "0%"
            textoPublicidadeBannner[0].style.position = "static"
            textoPublicidadeBannner[2].style.top = "0%"
            textoPublicidadeBannner[2].style.position = "static"
            imagensSlide[0].style.display = "none"
            imagensSlide[1].style.display = "flex"
            imgsRolando.style.width = `200%`
            tempoConta--
            textoPublicidadeBannner[1].style.position = "absolute"
            textoPublicidadeBannner[1].style.top = "30%"

        }else if(i==2){
            tam-=100
            textoPublicidadeBannner[1].style.top = "0%"
            textoPublicidadeBannner[1].style.position = "static"
            textoPublicidadeBannner[0].style.top = "0%"
            textoPublicidadeBannner[0].style.position = "static"
            imagensSlide[0].style.display = "none"
            imagensSlide[1].style.display = "none"
            imgsRolando.style.width = `100%`
            imgsRolando.style.flexDirection= "row-reverse"
            tempoConta--
            textoPublicidadeBannner[2].style.position = "absolute"
            textoPublicidadeBannner[2].style.top = "30%"
        }
        
    })

   
}