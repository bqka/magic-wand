const wand = document.querySelector(".wand");
const img = document.querySelectorAll("img");
const imageBox = document.getElementsByClassName("image-box");

window.onmousemove = e => {
    const wandX = e.clientX*1.3 - (window.innerWidth * 0.15);
        wandY = window.innerHeight*0.1 + e.clientY*0.6,
        mouseXAsDecimal = (e.clientX)/(window.innerWidth);

    wand.animate({
        left: `${wandX}px`,
        top: `${wandY}px`,
        rotate: `${-10 + 20*mouseXAsDecimal}deg`
    }, { duration:400, fill:"forwards" });

    for(const box of img){
        const dimensions = box.getBoundingClientRect();
     
        const relativeWandX = wandX - dimensions.left >= 0? wandX - dimensions.left : 0;
            relativeWandXAsDecimal = relativeWandX/dimensions.width;
    
        const opacity = Math.min(relativeWandXAsDecimal, 1);
            blur = Math.max(1 - relativeWandXAsDecimal, 0);
    
        box.style.setProperty("--opacity", opacity);
        box.style.setProperty("--blur", blur);
    }
}

