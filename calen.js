const titlet = document.getElementById('titlet')
const tom = document.getElementById('tome')
const datt = document.getElementById('datt')
const Sax = document.getElementById('sax')
function save(val){
    let tit = document.getElementById('ti').value;
    console.log(tit);
    titlet.innerText =  tit;
    let tim = document.getElementById('tim').value;
    console.log(tim);
    tom.innerText = "time: "+tim;
    let da = document.getElementById('dat').value;
    console.log(da);
    datt.innerHTML ="Date: " + da;
    
}
const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a19 = document.getElementById('a19')
const a25 = document.getElementById('a25')
const a4 = document.getElementById('a4')
function sub(){
    var ha = document.createElement('happy').innerHTML = "<img src='happy.png'width='18' height='18'/>";
    a1.innerHTML = ha;
}
function da(){
    var se = document.createElement('sad').innerHTML = "<img src='sad.png'width='18' height='18'/>";
    a2.innerHTML = se;
}
function mo(){
    var om = document.createElement('sad1').innerHTML = "<img src='sad (1).png'width='18' height='18'/>";
    a19.innerHTML = om;
}
function cn(){
    var nz = document.createElement('sceptic').innerHTML = "<img src='sceptic.png'width='18' height='18'/>";
    a25.innerHTML = nz;
}
function sm(){
    var le = document.createElement('smile').innerHTML = "<img src='happy1.png'width='18' height='18'/>";
    a4.innerHTML = le;
}

    
