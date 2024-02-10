let imagensSlide = window.document.querySelectorAll(".imagensSlide")

let slideBar = window.document.querySelectorAll(".slideBar")

let imgsRolando = window.document.querySelector(".imgsRolando")

let textoPublicidadeBannner = window.document.querySelectorAll(".textoPublicidadeBannner")

let tam = 300
let tempoConta =2
let tmp = 0
let l=0

for(let i=0; i<slideBar.length; i++){
    slideBar[i].addEventListener("click", ()=>{
        l=i
        slide(i)
        
    })

   
}

tmp = setInterval(slides, 7000)


function slides(){
    
    if(l<3){
        slide(l)
        l++
    }else{
        l=0
    }
    
}

function slide(i) {
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
}

let nav = document.querySelector(".nav")
let linkMuda = window.document.querySelectorAll(".linkMuda")
let logoChange = window.document.querySelector(".logoChange")
let btnContact = window.document.querySelector(".btnContact")
function linM(cor){
    for(let i=0; i<linkMuda.length; i++){
        linkMuda[i].style.color = cor
    }
}
document.addEventListener("scroll", ()=>{
    console.log(window.pageYOffset)
    if(window.pageYOffset>=100){
        nav.style.position = "fixed"
        nav.style.background = "#fff"
        nav.style.top = "0px"
        // barraPesquisa.style.position = "fixed"
        console.log("Ya")
        logoChange.src = "./assets/imgs/Logo/logoVerde.png"
        btnContact.style.border = "1px solid #00D084"
        btnContact.style.color = "#00D084"
        linM("#000000")
        nav.style.boxShadow = "0 2px 2px rgba(0,0,0,.02),0 2px 2px rgba(0,0,0,.02)"
    }else{
        nav.style.position = "absolute"
        nav.style.background = "rgba(0, 0, 0, 0)"
        nav.style.top = "60px"
        // barraPesquisa.style.position = "static"
        console.log("Nop")
        logoChange.src = "./assets/imgs/Logo/logoBranco.png"
        btnContact.style.border = "1px solid #ffffff"
        linM("#fff")
        btnContact.style.color = "#ffffff"
        nav.style.boxShadow = "0 2px 2px rgba(0,0,0,0),0 2px 2px rgba(0,0,0,0)"

    }
})
