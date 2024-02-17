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
    if(window.pageYOffset>=100){
        nav.style.position = "fixed"
        nav.style.background = "#fff"
        nav.style.top = "0px"
        // barraPesquisa.style.position = "fixed"
        logoChange.src = "./assets/imgs/Logo/logoVerde.png"
        btnContact.style.border = "1px solid #222"
        btnContact.style.color = "#222"
        linM("#000000")
        nav.style.boxShadow = "0 2px 2px rgba(0,0,0,.02),0 2px 2px rgba(0,0,0,.02)"
    }else{
        nav.style.position = "absolute"
        nav.style.background = "rgba(0, 0, 0, 0)"
        nav.style.top = "60px"
        // barraPesquisa.style.position = "static"
        logoChange.src = "./assets/imgs/Logo/logoBranco.png"
        btnContact.style.border = "1px solid #ffffff"
        linM("#fff")
        btnContact.style.color = "#ffffff"
        nav.style.boxShadow = "0 2px 2px rgba(0,0,0,0),0 2px 2px rgba(0,0,0,0)"

    }
})

// let bor = window.document.querySelectorAll(".bor")
// let ca = window.document.querySelector(".ca")
// for(let i=0; i<bor.length; i++){
//     bor[i].addEventListener("click", ()=>{
        
//         if(i==0){
//             ca.style.flexDirection = "row"
//             bor[i].backgroundColor = "#00D084"
//             bor[i].border = "1px solid #00D084"
//             bor[1].border = "1px solid #adadad"
//             bor[1].backgroundColor = "rgba(0, 0, 0, 0)"
//             console.log(i)
//         }else{
//             ca.style.flexDirection = "row-reverse"
//             bor[i].backgroundColor = "#00D084"
//             bor[0].backgroundColor = "rgba(0, 0, 0, 0)"
//             bor[i].border = "1px solid #00D084"
//             bor[0].border = "1px solid #adadad"
//             console.log(i)
//         }
//     })
// }


// function slideCleuylar(i, con) {
//     console.log(i)
//     console.log(capaCelular.length)
//     console.log("con = "+con)
//     if(i<capaCelular.length && i>=0){
//         if(con){
//             cond = false
//             capaCelular[0].style.height = "0px"
//             capaCelular[0].style.visibility = "hidden"
//         }else{
//             capaCelular[0].style.height = "450px"
//             capaCelular[0].style.visibility = "visible"
//             cond = true
//         }
//     }else{
//         pos=0
//     }
// }

let silideCelular = window.document.querySelector(".silideCelular")
let capaCelular = document.querySelectorAll(".capaCelular")
let cond = true
let pos = 0

let tmpK = ""
let textdesfa = window.document.querySelectorAll(".textdesfa")
let tituloSolucao = window.document.querySelectorAll(".tituloSolucao")
let logoFotos = window.document.querySelectorAll(".logoFotos")

function zerarConfig() {
    for(let i=0; i<textdesfa.length; i++){
        textdesfa[i].style.boxShadow = "rgba(99, 99, 99, 0) 2px 1px 2px 1px"
        tituloSolucao[i].style.textShadow = "1px 3px 3px rgba(0, 0, 0, 0)"
        logoFotos[i].style.border = "2px solid #ddd"
        logoFotos[i].style.boxShadow = "rgba(0, 0, 0, 0) 0px 4px 8px -1px, rgba(0, 0, 0, 0.06) 0px 2px 8px -1px"
    }
}

function slideVhd() {
    zerarConfig() 
    if(cond){
        
        if(pos<=1){
            capaCelular[pos].style.height = "0px"
            capaCelular[pos].style.visibility = "hidden"
            pos++
            textdesfa[pos].style.boxShadow = "rgba(99, 99, 99, 0.2) 2px 1px 2px 1px"
            tituloSolucao[pos].style.textShadow = "1px 3px 3px rgba(0, 0, 0, 0.2)"
            logoFotos[pos].style.border = "2px solid #ddd"
            logoFotos[pos].style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 4px 8px -1px, rgba(0, 0, 0, 0.06) 0px 2px 8px -1px"
        }else{
            pos=1
            cond = false
        }
    }else{
        if(pos>=0 && pos<=1){
            textdesfa[pos].style.boxShadow = "rgba(99, 99, 99, 0.2) 2px 1px 2px 1px"
            tituloSolucao[pos].style.textShadow = "1px 3px 3px rgba(0, 0, 0, 0.2)"
            logoFotos[pos].style.border = "2px solid #ddd"
            logoFotos[pos].style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 4px 8px -1px, rgba(0, 0, 0, 0.06) 0px 2px 8px -1px"
            capaCelular[pos].style.height = "540px"
            capaCelular[pos].style.visibility = "visible"
            pos--
            
            
        }else{
            pos=0
            cond = true
        }
    }
    console.log('jdsjd  '+pos)
}

silideCelular.addEventListener("mouseover", ()=>{
    tmpK = setInterval(slideVhd, 3000)
})

silideCelular.addEventListener("mouseout", ()=>{
    clearInterval(tmpK)
})