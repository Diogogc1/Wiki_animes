//ASK
var ask_sim = document.querySelector("#ask_sim");
var ask_nao = document.querySelector("#ask_nao");
var radar_sound = new Audio("/Sounds/radardragon_sound.mp3");

ask_sim.addEventListener("click",
    function(){
        document.querySelector("#ask").style.display = "none";
        document.querySelector("main").style.display = "block";
        radar_sound.play();
        radar_sound.pause();

        radar_sound.loop = true;

        var titulo_section = document.querySelectorAll(".titulo_section");

        titulo_section.forEach(
            function(element){
                element.addEventListener("mouseenter",
                    function(){
                        radar_sound.play();
                    }
                )

                element.addEventListener("mouseleave",
                    function(){
                        radar_sound.pause();
                        radar_sound.currentTime = 0;
                    }
                )
            }
        )
    }
)

ask_nao.addEventListener("click",
    function(){
        document.querySelector("#ask").style.display = "none";
        document.querySelector("main").style.display = "block";
    }
)

//SECTION_HISTORY
var click_history = false;

document.querySelector(".history").addEventListener("click",
    function(){
        if(!click_history)
        {
            document.querySelector("#section_history").style.display = "block";
            click_history = true;
        }
        else
        {
            document.querySelector("#section_history").style.display = "none";
            click_history = false;
        }
    }
)

//SECTION MANGÁ
var click_manga = false;

document.querySelector(".manga").addEventListener("click",
    function(){
        if(!click_manga)
        {
            document.querySelector("#section_manga").style.display = "flex";
            click_manga = true;
        }
        else
        {
            document.querySelector("#section_manga").style.display = "none";
            click_manga = false;
        }
    }
)

//SECTION PERSONAGEM
var click_personagens = false;

document.querySelector(".personagens").addEventListener("click",
    function(){
        if(!click_personagens)
        {
            document.querySelector("#section_personagens").style.display = "flex";
            click_personagens = true;
        }
        else
        {
            document.querySelector("#section_personagens").style.display = "none";
            click_personagens = false;
        }
    }
)

//SECTION EPISÓDIOS
var click_episodios = false;

document.querySelector(".episodios").addEventListener("click",
    function(){
        if(!click_episodios)
        {
            document.querySelector("#section_episodios").style.display = "flex";
            click_episodios = true;
        }
        else
        {
            document.querySelector("#section_episodios").style.display = "none";
            click_episodios = false;
        }
    }
);

//SECTION ABERTURAS
var click_aberturas = false;

document.querySelector(".aberturas").addEventListener("click",
    function(){
        if(!click_aberturas)
        {
            document.querySelector("#section_aberturas").style.display = "flex";
            click_aberturas = true;
        }
        else
        {
            document.querySelector("#section_aberturas").style.display = "none";
            click_aberturas = false;
        }
    }
)