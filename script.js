var cname = [];
var j=0;
var cweath = [];

async function country(){
    var ctemp = await fetch("https://restcountries.eu/rest/v2/all");
    var jstemp = await ctemp.json()
    for(let i=0;i<jstemp.length;i++){
        cname.push(jstemp[i]);
    }

    for(let i=0;i<cname.length;i++){
        
        var colo = document.createElement('div');
        colo.classList.add('col-sm-6','mystyle');

        var Ccard = document.createElement('div')
        Ccard.classList.add('card');
        Ccard.style.width = "18rem";
    
        var head = document.createElement('h5');
        head.classList.add('card-header');
        head.innerHTML = cname[i].name;
    
        var img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = cname[i].flag;
        img.alt = cname[i].name;
    
        var cbody = document.createElement('div');
        cbody.classList.add('card-body');
    
        var l1 = document.createElement('p');
        l1.classList.add('card-text');
        l1.innerHTML = cname[i].capital;
    
        var l2 = document.createElement('p');
        l2.classList.add('card-text');
        l2.innerHTML = cname[i].region;
    
        var l3 = document.createElement('p');
        l3.classList.add('card-text');
        l3.innerHTML = cname[i].latlng;
    
        var l4 = document.createElement('p');
        l4.classList.add('card-text');
        l4.innerHTML = cname[i].alpha3Code;
        
        var l5 = document.createElement('p');
        l5.id = `ide${j}`;
    
        var bttn = document.createElement("BUTTON");
        bttn.id = `${cname[i].name}`;
        bttn.classList.add('buttn');
        bttn.classList.add('btn','btn-primary');
        var txt = document.createTextNode("Click for Weather");
        bttn.appendChild(txt);
    
        cbody.append(l1, l2, l3, l4, l5, bttn);
        Ccard.append(head, img, cbody);

        colo.appendChild(Ccard);
    
        var app = document.getElementById('coro');
    
        app.appendChild(colo);

        j++;
    }
    var buttons = document.querySelectorAll('.buttn');
    for(const btn of buttons){
    btn.addEventListener('click', async function(wea){
        console.log('execute');
        var we = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${btn.id}&appid=d6e712e51ed8b0ccb1687be201e9a2a0`);
        var wedata = await we.json();
        var temp1 = (wedata.main.temp)-273 ; temp1 = temp1.toFixed(2);
        var temp2 = (wedata.main.feels_like)-273; temp2 = temp2.toFixed(2);
        alert('temperature: '+temp1+' and '+'feels like: '+temp2);
    })
  }
}
country();


    
// var buttons = document.querySelectorAll('.buttn');
// console.log('test');
// console.log(buttons);
// for(const btn of buttons){
//     btn.addEventListener('click', async function(wea){
//         console.log('execute');
//         var we = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${btn.id}&appid=d6e712e51ed8b0ccb1687be201e9a2a0`);
//         var wedata = await we.json();
//         alert('temperature: '+((wedata.main.temp)-273)+' and '+'feels like: '+((wedata.main.feels_like)-273))
//     })
// }

