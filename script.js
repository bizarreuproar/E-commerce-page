let order = document.querySelector(".quantity_value");

const quantity = (x) => {
	order.innerHTML = parseInt(order.innerHTML) + x;
	if (order.innerHTML < 0) {
		order.innerHTML = 0;
	}
}

var checkout_box = document.querySelector(".btn");
var item_part = document.querySelector(".item_part");
var checkout_part = document.querySelector(".checkout_part");


const checkout = () => {
	let num = parseInt(order.innerHTML);
	item_part.style.display = "flex";
	item_part.innerHTML = `
    <div>
      <p class="empty_text">Thanks your order for ${num} has been received :)</p>
    </div>
  `;
	checkout_part.style.display = "none";
}

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
	if (cart.style.display === "flex") {
		cart.style.display = "none";
	} else if (cart.style.display === "none"){
		if (order.innerHTML > 0) {
			cart.style.display = "flex";
		} else {
			cart.style.display = "flex";
			checkout_part.style.display = "none";
			item_part.innerHTML = `
		  <div>
			<p class="empty_text">You have no items in your cart</p>
		  </div>
		`;
		}
	}
}

let image_preview = document.querySelectorAll(".image_preview")
let images_smallbox = document.querySelectorAll(".images_smallbox")
let images1 = images_smallbox[0].querySelectorAll("img");
let images2 = images_smallbox[1].querySelectorAll("img");

images1[0].className = "active";

const changeImage = (x) => {
	let src = x.src;
	let alt = x.alt;

	switch (alt) {
		case "image_1":
			for (i in image_preview) {
				image_preview[i].src = "./images/image-product-1.jpg";
				image_preview[i].alt = "image_1";
			}

			for (i in images1) {
				if (images1[i].alt == "image_1") {
					images1[i].className = "active";
					images2[i].className = "active";
				} else {
					images1[i].classList.remove("active");
					images2[i].classList.remove("active");
				}
			}
			break;

		case "image_2":
			for (i in image_preview) {
				image_preview[i].src = "./images/image-product-2.jpg";
				image_preview[i].alt = "image_2";
			}

			for (i in images1) {
				if (images1[i].alt == "image_2") {
					images1[i].className = "active";
					images2[i].className = "active";
				} else {
					images1[i].classList.remove("active");
					images2[i].classList.remove("active");
				}
			}
			break;

		case "image_3":
			for (i in image_preview) {
				image_preview[i].src = "./images/image-product-3.jpg";
				image_preview[i].alt = "image_3";
			}

			for (i in images1) {
				if (images1[i].alt == "image_3") {
					images1[i].className = "active";
					images2[i].className = "active";
				} else {
					images1[i].classList.remove("active");
					images2[i].classList.remove("active");
				}
			}
			break;

		case "image_4":
			for (i in image_preview) {
				image_preview[i].src = "./images/image-product-4.jpg";
				image_preview[i].alt = "image_4";
			}
			for (i in images1) {
				if (images1[i].alt == "image_4") {
					images1[i].className = "active";
					images2[i].className = "active";
				} else {
					images1[i].classList.remove("active");
					images2[i].classList.remove("active");
				}
			}
			break;
	}
}

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
		i -= images.length;
	}
	for (let j = 0; j < image_preview.length; j++) {
		image_preview[j].src = images[i];
	}
}

const Remove = ()=>{
	
	itembox.style.display = "none";
  	item_part.innerHTML = `
		<div>
		<p class="empty_text">You have no items in your cart</p>
		</div>
	`;
  	checkout_part.style.display = "none";

}

let price = 125;
let itembox = document.querySelector(".item_value");
const addCart = () => {
	let val = parseInt(order.innerHTML);

	if (val > 0) {
		var value = document.querySelector(".quantity");
		itembox.style.display = "flex";
		itembox.innerHTML = val;
		let itemcost = eval(val * price);
		item_part.innerHTML = `
					
					<div class="item_img">
						<img src="images/image-product-1-thumbnail.jpg" alt="item image">
					</div>

					<div class="item_info">
						<p>Fall Limited Edition Sneakers</p>
						<p>$125.00 x <span class="quantity">${val}</span> <span class="total">$${itemcost}.00</span></p>
					</div>

					<div class="delete_btn">
						<button onclick="Remove()"><img src="images/icon-delete.svg" alt="delete button"></button>
					</div>
				
				`;
				checkout_part.style.display = "flex";
	} else {
		itembox.style.display = "none";
	}
}

