const button1=document.getElementById('yes');
const button2=document.getElementById('no');
const image1=document.getElementById('img');
const image2=document.getElementById('hidden-image');
const text=document.querySelector('p');
let img = document.createElement("img");  
img.src = "https://media.tenor.com/16JLRwPfDfAAAAAj/dudu-bubu-dancing-so-cute.gif";

function change1(){
    image1.setAttribute("src","https://media.tenor.com/9xjoMfxR5sYAAAAj/bubu-dudu-sseeyall.gif");
    document.querySelector(".image").appendChild(img);
    document.body.style.backgroundImage="url('https://media3.giphy.com/media/gdxAE8xnASs6SWUpmz/giphy.gif?cid=6c09b952wz61w5zien36gvthdbp8kw57ijhzj3jy21zyh65n&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s')";
    //document.body.style.backgroundColor="#ff7575";
    
    button1.remove();
    button2.remove();
    text.innerHTML="<p>❤️ ⋆｡  🎀  𝒴𝒶𝓎𝓎 𝓎❁𝓊 𝒶𝓇𝑒 𝓂𝓎 𝒱𝒶𝓁𝑒𝓃𝓉𝒾𝓃𝑒  🎀  ｡⋆ ❤️</p>";
    text.style.color="rgb(157, 21, 21)";
}

let clickCount = 0;

function change2() {
    image1.setAttribute("src", "https://media.tenor.com/D6q1qVIBMVUAAAAj/dudu-heating-bubu-angry-dudu.gif");

    var currwidth1 = button1.clientWidth;
    var currHeight1 = button1.clientHeight;
    var currwidth2 = button2.clientWidth;
    var currHeight2 = button2.clientHeight;

    button1.style.width = (currwidth1 + 90) + "px";
    button1.style.height = (currHeight1 + 90) + "px";
    button2.style.width = (currwidth2 - 100) + "px";
    button2.style.height = (currHeight2 - 40) + "px";
    button2.style.fontSize = (currHeight2 / 4) + "px";
    button1.style.fontSize=(currHeight1*0.2)+"px";

    text.innerHTML = "<p> 😭😭😭😭😭 𝙰𝚗𝚝𝚑𝚎 𝚗𝚊 𝚙𝚛𝚎𝚖𝚊 😭😭😭😭😭</p>";

    clickCount++; // Increment click counter

    if (clickCount === 5) {
        button2.remove(); // Remove button2 after 4 clicks
    }
}

button1.addEventListener('click',change1);


button2.addEventListener('click',change2);

