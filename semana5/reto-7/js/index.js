// crear una variable que guarde al elemento destinetion

const destination = document.querySelector("#destination")
const main = document.querySelector("#main")

let bgmobile = 'bg-[url("./assets/home/background-home-mobile.jpg")]';
let bgdesktop ='md:bg-[url("./assets/home/background-home-desktop.jpg")]'

main.classList.add(bgmobile);
main.classList.add(bgdesktop);

destination.onclick = function(){
    bgdesktop = 'md:bg-[url("./assets/destination/background-destination-desktop.jpg")]'
    main.classList.add(bgdesktop);
}
