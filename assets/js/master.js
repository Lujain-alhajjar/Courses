let programming=document.querySelector(".programming");
let design=document.querySelector(".design");
let webDevelopment=document.querySelector(".web-development");
let projectManagement=document.querySelector(".project-management");
let nursing=document.querySelector(".nursing");
let languages=document.querySelector(".languages");
let accounting=document.querySelector(".accounting");
let algorithms=document.querySelector(".algorithms");

programming.addEventListener("click",()=>{
    let programmingPage=document.createElement("div");
    programmingPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/8jLOx1hD3_o";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/@freecodecamp";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    programmingPage.append(insideDiv);
    document.body.appendChild(programmingPage);
    X.addEventListener("click",()=>{
        programmingPage.remove();
    })
        
})
design.addEventListener("click",()=>{
    let programmingPage=document.createElement("div");
    programmingPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/kDt2kUaqgRM";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=kDt2kUaqgRM&list=PL0lNJEnwfVVPs_aO2XpFLII51_fnX-w6l";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    programmingPage.append(insideDiv);
    document.body.appendChild(programmingPage);
     X.addEventListener("click",()=>{
        programmingPage.remove();
    })   
})
webDevelopment.addEventListener("click",()=>{
    let programmingPage=document.createElement("div");
    programmingPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/G3e-cpL7ofc";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/@SuperSimpleDev";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    programmingPage.append(insideDiv);
    document.body.appendChild(programmingPage);
     X.addEventListener("click",()=>{
        programmingPage.remove();
    })
})
projectManagement.addEventListener("click",()=>{
      let programmingPage=document.createElement("div");
    programmingPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/hsMNZd3ssqM";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=hsMNZd3ssqM&list=PLcKLrs4w3zy3q1lMWreyaLixtC2SPoraI";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    programmingPage.append(insideDiv);
    document.body.appendChild(programmingPage);
     X.addEventListener("click",()=>{
        programmingPage.remove();
    })
})
nursing.addEventListener("click",()=>{
      let programmingPage=document.createElement("div");
    programmingPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/PRqNaFjREPY";
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
    programmingPage.append(insideDiv);
    document.body.appendChild(programmingPage);
     X.addEventListener("click",()=>{
        programmingPage.remove();
    })
})
languages.addEventListener("click",()=>{
      let programmingPage=document.createElement("div");
    programmingPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/qYsHLUAlH_8";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/@languagelearningcourses6656";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    programmingPage.append(insideDiv);
    document.body.appendChild(programmingPage);
     X.addEventListener("click",()=>{
        programmingPage.remove();
    })
})
accounting.addEventListener("click",()=>{
      let programmingPage=document.createElement("div");
    programmingPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/VYNTBWBqncU";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=VYNTBWBqncU&list=PLmHVyfmcRKywV8Bk6euT02xxtv8YVDkZs";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    programmingPage.append(insideDiv);
    document.body.appendChild(programmingPage);
     X.addEventListener("click",()=>{
        programmingPage.remove();
    })
})
algorithms.addEventListener("click",()=>{
      let programmingPage=document.createElement("div");
    programmingPage.classList="mainpage";
    let X=document.createElement("i");
    X.classList="fa-regular fa-circle-xmark";
    let insideDiv=document.createElement("div");
    insideDiv.classList="inside-div";
    let video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/ZA-tUyM_y7s";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.classList="video";
    let text=document.createTextNode("Click here for more videos on YouTube");
    let p = document .createElement("a");
    p.classList="text-node";
    p.appendChild(text);
    p.href="https://www.youtube.com/watch?v=ZA-tUyM_y7s&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY";
    insideDiv.appendChild(video);
    insideDiv.appendChild(p);
    insideDiv.append(X);
    programmingPage.append(insideDiv);
    document.body.appendChild(programmingPage);
     X.addEventListener("click",()=>{
        programmingPage.remove();
    })
})
