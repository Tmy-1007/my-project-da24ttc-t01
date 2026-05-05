//khai báo mảng đối tượng
const productlist= [
	{id: "01", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "02", name: "Bánh Velvet", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "03", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "04", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "05", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "06", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "07", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "08", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "09", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
	{id: "10", name: "Bánh Black Swan", price= "$260", image= "../assets/images/blackswancake.jpg", productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi"},
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
	productPrice.appendChild(productPricetext);
}