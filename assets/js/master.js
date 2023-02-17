let crash=document.querySelector(".crash");
let crowdsource=document.querySelector(".crowdsource");
let fullstack=document.querySelector(".fullstack");
let git=document.querySelector(".git");
let react=document.querySelector(".react");
let swag=document.querySelector(".swag");


crash.addEventListener("click",()=>{
    let crashPage=document.createElement("div");
    crashPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/3TZYvr0hOlw";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=3TZYvr0hOlw&list=PLnL12rqLPel8JbtL6QghbCyoXd1_W0M5t";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    crashPage.append(insideDiv);
    document.body.appendChild(crashPage);
    X.addEventListener("click",()=>{
        crashPage.remove();
    })
        
})
crowdsource.addEventListener("click",()=>{
    let crashPage=document.createElement("div");
    crashPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/30YCds-aXaw";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=30YCds-aXaw&list=PLnL12rqLPel9-o-xTLmTsGBy8emUGlNdO";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    crashPage.append(insideDiv);
    document.body.appendChild(crashPage);
     X.addEventListener("click",()=>{
        crashPage.remove();
    })   
})
fullstack.addEventListener("click",()=>{
    let crashPage=document.createElement("div");
    crashPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/eYydZioPZLM";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=eYydZioPZLM&list=PLnL12rqLPel9IQapo2zUER20HyevlCOu7";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    crashPage.append(insideDiv);
    document.body.appendChild(crashPage);
     X.addEventListener("click",()=>{
        crashPage.remove();
    })
})
git.addEventListener("click",()=>{
      let crashPage=document.createElement("div");
    crashPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/wr9kXA0zBws";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=wr9kXA0zBws&list=PLnL12rqLPel9mHV04vwD7jMZ8merI6Hyf";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    crashPage.append(insideDiv);
    document.body.appendChild(crashPage);
     X.addEventListener("click",()=>{
        crashPage.remove();
    })
})
react.addEventListener("click",()=>{
      let crashPage=document.createElement("div");
    crashPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/R9vD0uhQJv8";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/@lecturionursing";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    crashPage.append(insideDiv);
    document.body.appendChild(crashPage);
     X.addEventListener("click",()=>{
        crashPage.remove();
    })
})
swag.addEventListener("click",()=>{
      let crashPage=document.createElement("div");
    crashPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/1i_57OEE1zU";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=1i_57OEE1zU&list=PLnL12rqLPel9nbsi5Rk4JCcm7MG5rYPG2";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    crashPage.append(insideDiv);
    document.body.appendChild(crashPage);
     X.addEventListener("click",()=>{
        crashPage.remove();
    })
})
