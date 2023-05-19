
// const clicked=() =>
// {
//     console.log(1);
//     modal.classList.add("active");
//     overlay.classList.add("activeoverlay");

// }
const share = document.querySelectorAll(".sharebutton");
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
for (let i = 0; i < share.length; i++) {
     share[i].addEventListener("click", ()=> {
        modal.classList.add("active");
        overlay.classList.add("activeoverlay");
     });
 }
const closeMod=() =>
{
    modal.classList.remove("active");
    overlay.classList.remove("activeoverlay");
}


function validation()
{

    let username  = document.getElementById('username2').value
let password  = document.getElementById("password1").value ;
let cpass     = document.getElementById("Cpassword").value;
let info = document.getElementById("info")
let unerror= document.getElementById("uid")
let  passerror = document.getElementById("passid")
let cpasserror = document.getElementById("cpassid")

if(username.length < 5)
{
    unerror.innerHTML ="username is too short "
  return false;
}
else
{
    unerror.innerHTML=""
}

if(password.length < 8)
{
    passerror.innerHTML="password is too short"
    
  return false;
}
else if( password !=  cpass)
{
    passerror.innerHTML=""
    cpasserror.innerHTML = "password and confirm password doesn't match"
    
    return false;
}
else{
    cpasserror.innerHTML=""
    
    return true;
}
}


// <!-- Code injected by live-server -->
// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}



const displayMessage=document.querySelector("#message");
let send=document.querySelector(".sendicon");
send.addEventListener("click", ()=>
{
    
    let messagecontent=document.querySelector(".typedMessage");
    let messageStr=messagecontent.value;
    if(messageStr.length>0)
    {
        
        displayMessage.textContent=messageStr;
        displayMessage.classList.remove("hidden");
        messagecontent.value="";

    }
    
})

const chat=document.querySelector(".chat");
const onchat=document.querySelector(".contactContainer");

onchat.addEventListener("click",()=>
{
    console.log(chat);
    if( chat.classList.contains("hidden"))
    {
        chat.classList.remove("hidden");
        overlay.classList.add("activeoverlay");
    }
    else
    {
        chat.classList.add("hidden");
        overlay.classList.remove("activeoverlay");

    }
       
})
overlay.addEventListener("click",()=>{
    overlay.classList.add("hidden");
    if(!chat.classList.contains("hidden"))
       chat.classList.add("hidden");
       
    if(modal.classList.contains("active"))
       modal.classList.removve("active");
       
})

// const login=document.querySelector("#login");
// const loginbox=document.querySelector("#loginbox");
// login.addEventListener("click",()=>{
//     loginbox.classList.remove("hidden");

// })