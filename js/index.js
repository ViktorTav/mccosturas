let siteOrientation;

const setOrientation = ()=>{

    if (window.innerHeight > window.innerWidth) siteOrientation = "portrait";
    else siteOrientation = "landscape";

}

const limparLiSelecionado = ()=>{

    $("nav#menu ul li").each(function(){

        if ($(this).hasClass("selecionado")){

            $(this).removeClass("selecionado");
            return false;

        }

    });

}

const selecionarLi = (elemento)=>{

    $(elemento).parent().parent().addClass("selecionado");

}

$(document).on("scroll",(e)=>{

    let sectionId;

    const elementos = document.elementsFromPoint(0,window.screenY);
    sectionId = elementos.length == 5 ? elementos[1].id : elementos[0].id;

    if (siteOrientation == "landscape"){

        if (scrollY > 1800) sectionId = "contato";

    }

    limparLiSelecionado();
    selecionarLi(`nav#menu ul li span a[href="#${sectionId}"]`)

    if ($("section#inicio")[0].getBoundingClientRect().top < -660){

        $("div#header").addClass("black");

    }else $("div#header").removeClass("black");

})

$("body").click((event)=>{

    if (event.target != $("img#menu")[0]){

        if ($("nav#menu").hasClass("visible")){

            $("nav#menu").toggleClass("visible");

        }

    } else{

        $("nav#menu").toggleClass("visible");

    }

})

$(window).resize(setOrientation);
setOrientation();

$("span#ano").text(new Date().getFullYear());