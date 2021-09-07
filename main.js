let dark = document.getElementsByClassName('container');

setInterval(function(){
    if(dark[0].className.includes(' containerBlack')){
        dark[0].className = 'container';
    } else{
        dark[0].className += ' containerBlack';
    }
},1500);