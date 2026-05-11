//khai báo mảng đối tượng
const productlist= [
	{id: "01", name: "Bánh Black Swan", price: "$260", image: "../assets/images/blackswancake.jpg", productlink: "product-detail.html"},
	{id: "02", name: "Bánh Red Velvet", price: "$60", image: "../assets/images/red-velvet.jpg", productlink: "product-detail.html"},
	{id: "03", name: "Bánh Bông lan trứng muối", price: "$20", image: "../assets/images/bong-lan-trung-muoi.jpg", productlink: "product-detail.html"},
	{id: "04", name: "Bánh Cheese", price: "$55", image: "../assets/images/cheesecake.webp", productlink: "product-detail.html"},
	{id: "05", name: "Bánh Chocolate Mousse", price: "$40", image: "../assets/images/chocomousse.jpg", productlink: "product-detail.html"},
	{id: "06", name: "Bánh Lava", price: "$12", image: "../assets/images/lava.jpg", productlink: "product-detail.html"},
	{id: "07", name: "Bánh Lemon", price: "$40", image: "../assets/images/lemon.jpg", productlink: "product-detail.html"},
	{id: "08", name: "Bánh Matcha Entremet", price: "$20", image: "../assets/images/matcha-entremet.jpg", productlink: "product-detail.html"},
	{id: "09", name: "Bánh Opera", price: "$45", image: "../assets/images/opera.jpg", productlink: "product-detail.html"},
	{id: "10", name: "Bánh Tiramisu", price: "$31.2", image: "../assets/images/tiramisucake.jpg", productlink: "product-detail.html"},
]
function addproduct(id, name, price, image, hyperlink)
{
	//tạo product item
	//1. Tạo khung chứa item
	const productItem= document.createElement("div");
	productItem.setAttribute("clas", "product-item col m-2");

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
	productLink.setAttribute("href", hyperLink);
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