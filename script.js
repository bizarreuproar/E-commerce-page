let menu_part = document.querySelector(".menu_part");

const openMenu = () => {
	menu_part.classList.add("active");
}
const closeMenu = () => {
	menu_part.classList.remove("active");
}

// ------ light box functions ------- //

let light_box = document.querySelector("#light_box");

const openGallery = () => {
	if (window.innerWidth > 800) {
    	light_box.style.display = "flex";
	}
}

const closeGallery = () => {
    light_box.style.display = "none";
}

let cart = document.querySelector("#checkout_box");

const openCart = () => {
	if (cart.style.display == "flex") {
		cart.style.display = "none";
	}
	else {
		cart.style.display = "flex";
	}
}
let image_preview = document.querySelectorAll(".image_preview")

let images_smallbox = document.querySelectorAll(".images_smallbox")

// ------ Node listing both of the small box images divs. ------ //
let images1 = images_smallbox[0].querySelectorAll("img");
let images2 = images_smallbox[1].querySelectorAll("img");

images1[0].className = "active";

const changeImage = (x) =>{
	let src = x.src;
	let alt = x.alt;
	
	switch(alt){
		case "image_1":
				for(i in image_preview){
					image_preview[i].src = "./images/image-product-1.jpg";
					image_preview[i].alt = "image_1";
				}

				for(i in images1){
					if(images1[i].alt == "image_1"){
						images1[i].className = "active";
						images2[i].className = "active";
					}else{
						images1[i].classList.remove("active");
						images2[i].classList.remove("active");
					}
				}
				break;
		
		case "image_2":
				for(i in image_preview){
					image_preview[i].src = "./images/image-product-2.jpg";
					image_preview[i].alt = "image_2";

				}

				for(i in images1){
					if(images1[i].alt == "image_2"){
						images1[i].className = "active";
						images2[i].className = "active";
					}else{
						images1[i].classList.remove("active");
						images2[i].classList.remove("active");
					}
				}
				break;

		case "image_3":
				for(i in image_preview){
					image_preview[i].src = "./images/image-product-3.jpg";
					image_preview[i].alt = "image_3";

				}

				for(i in images1){
					if(images1[i].alt == "image_3"){
						images1[i].className = "active";
						images2[i].className = "active";
					}else{
						images1[i].classList.remove("active");
						images2[i].classList.remove("active");
					}
				}
				break;

		case "image_4":
				for(i in image_preview){
					image_preview[i].src = "./images/image-product-4.jpg";
					image_preview[i].alt = "image_4";

				}
				for(i in images1){
					if(images1[i].alt == "image_4"){
						images1[i].className = "active";
						images2[i].className = "active";
					}else{
						images1[i].classList.remove("active");
						images2[i].classList.remove("active");
					}
				}
				break;
	}
}
// ----- prev and next button carousel ----- //
let i = 0;
const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
];

const change = (n) => {
	i += n;
	if (i < 0) {
		i += images.length;
	} else if (i >= images.length) {
		i -= images.length ;
	}
	for (let j = 0; j<image_preview.length; j++) {
		image_preview[j].src = images[i];
	}
}

var checkout_box = elem(".btn")
var	item_part = document.querySelector(".item_part");
var checkout_part = document.querySelector(".checkout_part");
const checkout = () =>{
	item_part.style.display = "block";
	item_part.innerHTML = `
			<div>
				<p class="empty_text">Thanks your order for ${val} has been received :)</p>
			</div>
			`;
	checkout_part.style.display = "none";
}