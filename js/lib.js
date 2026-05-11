//khai báo mảng đối tượng
const productlist= [
	{id: "01", name: "Bánh Black Swan", price: "$260", image: "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "02", name: "Bánh Red Velvet", price: "$60", image: "../assets/images/red-velvet.jpg", productlink: "https://www.pinterest.com/pin/953989133538125108/"},
	{id: "03", name: "Bánh Bông lan trứng muối", price: "$20", image: "../assets/images/bong-lan-trung-muoi.jpg", productlink: "https://thuhuongcake.vn/banh-sinh-nhat-cha-bong-trung-muoi"},
	{id: "04", name: "Bánh Cheese", price: "$55", image: "../assets/images/cheesecake.webp", productlink: "https://www.perfetto.com.vn/huong-dan-lam-banh-cheesecake"},
	{id: "05", name: "Bánh Chocolate Mousse", price: "$40", image: "../assets/images/chocomousse.jpg", productlink: "https://es.pinterest.com/pin/471963235967840183/"},
	{id: "06", name: "Bánh Lava", price: "$12", image: "../assets/images/lava.jpg", productlink: "https://www.pinterest.com/kieuoanhnguyen3004/lava-cake-c%C3%A1c-lo%E1%BA%A1i/"},
	{id: "07", name: "Bánh Lemon", price: "$40", image: "../assets/images/lemon.jpg", productlink: "https://share.google/riQgjEK9w8uSUFspw"},
	{id: "08", name: "Bánh Matcha Entremet", price: "$20", image: "../assets/images/matcha-entremet.jpg", productlink: "https://www.facebook.com/share/p/1LdxarM1UZ/"},
	{id: "09", name: "Bánh Opera", price: "$45", image: "../assets/images/opera.jpg", productlink: "https://www.la-maison.jp/news/001536.html"},
	{id: "10", name: "Bánh Tiramisu", price: "$31.2", image: "../assets/images/tiramisucake.jpg", productlink: "https://share.google/rtDtFBbgyneLXPWDd"},
];

function addProduct(id, name, price, image, hyperlink)
{
	//tạo product item
	//1. Tạo khung chứa item
	const productItem= document.createElement("div");
	productItem.setAttribute("class", "product-item col m-2");

	//2. Tạo khung chứa hình
	const productImage= document.createElement("div");
	productImage.setAttribute("class", "product-image h-75 ratio-1x1 overflow-hidden");

	//3.Tạo đối tượng hình ảnh
	const Image= document.createElement("img");
	Image.setAttribute("src", image);
	Image.setAttribute("alt", name);
	Image.setAttribute("class", "img-fluid object-fit-cover h-100");

	//4. Gán hình vào khung
	productImage.appendChild(Image);

	//5. Tạo khung chứa thông tin
	const productInfo= document.createElement("div");
	productInfo.setAttribute("class", "product-info h-25 text-center");
	//Tạo paragraph 1
	const productName= document.createElement("p");
	const productNametext= document.createTextNode(name);
	productName.appendChild(productNametext);
	//Tạo paragraph 2
	const productPrice= document.createElement("p");
	const productPricetext= document.createTextNode(price);
	productPrice.appendChild(productPricetext);
	//Tạo hyperlink
	const productLink= document.createElement("a");
	const productLinktext= document.createTextNode("Xem chi tiết");
	productLink.appendChild(productLinktext);
	productLink.setAttribute("href",hyperlink);
	productLink.setAttribute("class", "btn btn=outline-info btn-sm mt-auto");
	//gán paragraph 1, 2 và link vào khung
	productInfo.appendChild(productName);
	productInfo.appendChild(productPrice);
	productInfo.appendChild(productLink);

	//6. Gán khung hình và khung thông tin vào product item
	productItem.appendChild(productImage);
	productItem.appendChild(productInfo);
	//Gán product item vào product list
	document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
	const container= document.getElementById("product-list");

	container.innerHTML= "";

	products.forEach(item => {
		//tạo element cha bằng creatElement
		const productItem= document.createElement("div");
		productItem.className= 'product-item col-md-3 col-sm-6';
		// tương tự với dòng trên: productItem.setAttribute("class", "product-item col-md-3 col-sm-6");
		//sử dụng Template Literal nạp dữ liệu vào
		productItem.innerHTML = `
			<div class= "product-image ratio-1x1 overflow-hidden">
				<img src= "${item.image}" alt="${item}" class= "img-fluid object-fit-cover">
			</div>
			<div class= "product-info p-2 text-center">
				<p class= "product-name mb-1">${item.name}</p>
				<p class= "product-price text-danger fw-bold mb-2">
					${item.price.toLocalesString('vi-VN')}
				</p>
				<a href= "${item.productLink}" class= "btn btn-sm btn-outline-primary w-100">Xem chi tiết</a>
			</div>
		`;
		container.appendChild(productItem);
	});
}