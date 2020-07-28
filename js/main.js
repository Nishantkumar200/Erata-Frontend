

const navigation  = document.getElementById('navigation');
const topvalue = navigation.offsetTop;

window.onscroll = ()=>{

    if(window.pageYOffset>=topvalue){
        navigation.classList.add('sticky');
    }
    else{
        navigation.classList.remove('sticky');
    }
}


// Authentic heading

const authentic  = document.querySelector('.heading1');
const topauthentic = authentic.innerHeight;
console.log(topauthentic);

// window.onscroll = function design(){

//     if(window.pageYOffset<innerHeight)
// }
