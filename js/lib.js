//khai báo mảng đối tượng
const productlist = [
    {
        id: "01",
        name: "Bánh Black Swan",
        price: 260,
        image: "../assets/images/blackswancake.jpg",
        productlink: "https://buttery.asia/blogs/news/banh-black-swan-la-gi",
        desc: "Bánh Black Swan là một kiệt tác nghệ thuật thực thụ trong giới bánh ngọt cao cấp, mang trong mình vẻ đẹp huyền bí và quyền quý của loài thiên nga đen. Với thiết kế tinh xảo, lớp vỏ ngoài thường được bao phủ bởi màu đen tuyền huyền ảo, gợi lên sự sang trọng và đẳng cấp cho bất kỳ bữa tiệc nào. Điểm đặc biệt của món bánh này không chỉ dừng lại ở ngoại hình lộng lẫy mà còn nằm ở sự kết hợp hương vị cực kỳ tinh tế giữa các tầng lớp bánh bên trong. Thông thường, nó sở hữu cốt bánh chocolate đậm đà hòa quyện cùng lớp kem mịn màng được chế tác từ những nguyên liệu nhập khẩu tốt nhất. Mỗi miếng bánh khi thưởng thức sẽ mang lại một cảm nhận khác biệt, từ vị đắng thanh của chocolate đến vị béo ngậy tan chảy của kem tươi. Black Swan không chỉ đơn giản là một món ăn tráng miệng, mà nó còn là biểu tượng của sự sáng tạo không giới hạn và gu thẩm mỹ đỉnh cao. Đây chắc chắn là lựa chọn hoàn hảo nhất cho những ai đang tìm kiếm sự khác biệt và mong muốn để lại ấn tượng sâu sắc trong lòng khách mời tại các sự kiện trọng đại hoặc lễ kỷ niệm đặc biệt."
    },
    {
        id: "02",
        name: "Bánh Red Velvet",
        price: 60,
        image: "../assets/images/red-velvet.jpg",
        productlink: "https://www.pinterest.com/pin/953989133538125108/",
        desc: "Bánh Red Velvet nổi tiếng với sắc đỏ nhung nồng nàn và quyến rũ, luôn là tâm điểm của mọi ánh nhìn trong các tủ bánh ngọt. Màu đỏ đặc trưng của bánh không chỉ đơn thuần là màu sắc trang trí, mà nó còn gợi lên sự nồng cháy và lãng mạn, rất phù hợp cho những dịp lễ tình nhân hay kỷ niệm ngày cưới. Kết cấu của Red Velvet rất đặc biệt với độ ẩm cao, cốt bánh mềm mịn như nhung đúng như cái tên gọi của nó. Sự kết hợp hoàn hảo giữa vị ngọt dịu của cốt bánh và vị chua nhẹ, béo ngậy của lớp kem phô mai (cream cheese) bao phủ bên ngoài tạo nên một bản giao hưởng hương vị tuyệt vời trên đầu lưỡi. Khi thưởng thức, bạn sẽ cảm nhận được sự đối lập thú vị giữa lớp kem mát lạnh và phần bánh ấm áp bên trong. Để tạo nên một chiếc Red Velvet đúng chuẩn, người thợ phải rất tỉ mỉ trong việc cân bằng các nguyên liệu như bột cacao, giấm và buttermilk để tạo nên phản ứng màu sắc tự nhiên. Đây là món quà ngọt ngào và tinh tế giúp bạn gửi gắm tình cảm chân thành nhất đến những người thân yêu trong những phút giây đặc biệt của cuộc sống."
    },
    {
        id: "03",
        name: "Bánh Bông lan trứng muối",
        price: 20,
        image: "../assets/images/bong-lan-trung-muoi.jpg",
        productlink: "https://thuhuongcake.vn/banh-sinh-nhat-cha-bong-trung-muoi",
        desc: "Bánh Bông lan trứng muối là món ăn vặt quốc dân tại Việt Nam, chinh phục thực khách bởi sự kết hợp độc đáo giữa vị ngọt và vị mặn. Cốt bánh bông lan cơ bản được nướng vừa tới để giữ được độ xốp mềm, thơm mùi bơ sữa và trứng gà tươi. Điểm làm nên sức hút không thể cưỡng lại của món bánh này chính là lớp topping phong phú phía trên mặt bánh. Những quả trứng muối vàng óng, bùi bùi và đậm đà được sắp xếp khéo léo bên cạnh lớp chà bông tơi xốp, dai dai. Đặc biệt, lớp sốt bơ vàng rực hoặc sốt phô mai chảy tràn len lỏi vào từng thớ bánh tạo nên độ ẩm mượt và béo ngậy đặc trưng. Mỗi khi cắn một miếng bánh, bạn sẽ cảm nhận được sự hòa quyện tuyệt vời của các tầng hương vị: vị ngọt thanh của bánh, vị mặn mòi của trứng muối và vị đậm đà của chà bông. Món bánh này không chỉ phù hợp để làm quà biếu, sử dụng trong các buổi tiệc sinh nhật mà còn là món điểm tâm lý tưởng cho các buổi tụ tập bạn bè hay đồng nghiệp tại văn phòng. Sức hấp dẫn của bông lan trứng muối nằm ở sự giản dị nhưng đầy tinh tế, mang lại cảm giác gần gũi và ấm áp cho người thưởng thức."
    },
    {
        id: "04",
        name: "Bánh Cheese",
        price: 55,
        image: "../assets/images/cheesecake.webp",
        productlink: "https://www.perfetto.com.vn/huong-dan-lam-banh-cheesecake",
        desc: "Bánh Cheese hay còn gọi là Cheesecake là biểu tượng của sự béo ngậy và tan chảy, luôn nằm trong danh sách những món tráng miệng được yêu thích nhất toàn cầu. Thành phần chủ đạo của bánh chính là lớp phô mai tươi cao cấp được đánh quyện cùng trứng và đường tạo nên kết cấu mịn màng như lụa. Điểm nhấn của một chiếc cheesecake hoàn hảo thường nằm ở lớp đế bánh quy nghiền vụn trộn bơ thơm lừng, mang lại độ giòn tan đối lập hoàn toàn với sự mềm mại của phần kem phô mai phía trên. Tùy theo phong cách chế biến, cheesecake có thể được nướng theo kiểu New York đậm đặc hoặc làm lạnh không nướng theo kiểu mousse thanh mát. Để tăng thêm sự đa dạng cho hương vị và giảm bớt độ ngấy, các thợ làm bánh thường trang trí thêm các loại sốt trái cây như dâu tây, việt quất hoặc chanh dây vàng óng. Khi thưởng thức một miếng cheesecake, vị béo đậm đà lan tỏa khắp khoang miệng mang lại cảm giác thỏa mãn tuyệt đối cho những tín đồ sành ăn. Đây là loại bánh không thể thiếu trong các menu nhà hàng sang trọng hay những buổi trà chiều thư giãn, mang đến sự ngọt ngào và tinh tế trong từng khoảnh khắc thưởng thức cho mọi thực khách."
    },
    {
        id: "05",
        name: "Bánh Chocolate Mousse",
        price: 40,
        image: "../assets/images/chocomousse.jpg",
        productlink: "https://es.pinterest.com/pin/471963235967840183/",
        desc: "Bánh Chocolate Mousse là sự lựa chọn tuyệt mỹ cho những ai trót lòng yêu hương vị nồng nàn và bí ẩn của chocolate đen. Khác với những loại bánh nướng truyền thống, mousse tập trung vào độ nhẹ nhàng, xốp mịn như mây, mang lại cảm giác tan chảy ngay lập tức khi vừa chạm vào đầu lưỡi. Để tạo ra lớp mousse hoàn hảo, người thợ phải khéo léo phối trộn chocolate nguyên chất với lòng trắng trứng và kem tươi theo tỷ lệ vàng, đảm bảo bánh giữ được độ đứng form nhưng vẫn cực kỳ mềm mại. Vị đắng đặc trưng của cacao hòa quyện cùng vị ngọt dịu và cái béo của kem tạo nên một trải nghiệm vị giác đầy lôi cuốn và không bao giờ gây nhàm chán. Thông thường, một chiếc Chocolate Mousse sẽ được trang trí đơn giản nhưng tinh tế bằng một lớp bột cacao mịn màng phía trên hoặc vài miếng chocolate bào mỏng. Đây là món bánh mang đậm phong cách ẩm thực Pháp, tượng trưng cho sự lãng mạn và tinh tế. Thưởng thức Chocolate Mousse trong không gian yên tĩnh cùng một tách cà phê không đường sẽ giúp bạn cảm nhận rõ nét nhất từng nốt hương vị tinh hoa được chắt lọc trong từng miếng bánh, mang lại sự thư giãn tuyệt đối cho tâm hồn sau một ngày làm việc mệt mỏi."
    },
    {
        id: "06",
        name: "Bánh Lava",
        price: 12,
        image: "../assets/images/lava.jpg",
        productlink: "https://www.pinterest.com/kieuoanhnguyen3004/lava-cake-c%C3%A1c-lo%E1%BA%A1i/",
        desc: "Bánh Lava, hay còn được biết đến với tên gọi quyến rũ là Molten Chocolate Cake, là một món bánh đầy bất ngờ thú vị cho bất kỳ ai lần đầu thưởng thức. Vẻ ngoài của bánh trông giống như một chiếc bánh muffin chocolate nhỏ xinh, nhưng điều kỳ diệu thực sự nằm ở bên trong cốt bánh. Khi bạn dùng thìa nhẹ nhàng khía vào tâm bánh, dòng chocolate lỏng ấm nóng, đậm đặc sẽ từ từ trào ra như một dòng nham thạch đang phun trào, tạo nên một hiệu ứng thị giác vô cùng kích thích. Bí quyết để làm nên một chiếc bánh Lava thành công chính là kỹ thuật nướng ở nhiệt độ cao trong thời gian cực ngắn, đủ để lớp vỏ ngoài chín tới nhưng phần nhân bên trong vẫn giữ được trạng thái lỏng hoàn mỹ. Hương vị chocolate nóng hổi tỏa hương thơm nồng nàn, kết hợp với độ mềm ẩm của vỏ bánh tạo nên một sức hút khó cưỡng. Món bánh này thường được phục vụ ngay khi còn nóng, kèm theo một viên kem vani lạnh giá để tạo nên sự tương phản nhiệt độ thú vị trong miệng. Sự kết hợp giữa cái nóng của socola và cái lạnh của kem mang đến một sự bùng nổ vị giác, khiến bánh Lava trở thành món tráng miệng yêu thích của rất nhiều người trên khắp thế giới."
    },
    {
        id: "07",
        name: "Bánh Lemon",
        price: 40,
        image: "../assets/images/lemon.jpg",
        productlink: "https://share.google/riQgjEK9w8uSUFspw",
        desc: "Bánh Lemon mang đến một làn gió tươi mát và sảng khoái cho thực đơn bánh ngọt, là lựa chọn tuyệt vời cho những ai yêu thích hương vị thanh tao, dịu nhẹ. Chiếc bánh này là sự tôn vinh đối với mùi thơm tự nhiên và vị chua thanh khiết của những quả chanh vàng mọng nước. Cốt bánh thường có độ mềm ẩm cao, được bổ sung thêm vỏ chanh bào nhuyễn và nước cốt chanh tươi để tạo nên mùi hương đặc trưng lan tỏa. Phủ lên trên mặt bánh thường là một lớp icing đường mỏng mịn hoặc lớp kem chanh vàng óng, mang lại sự cân bằng hoàn hảo giữa vị chua và vị ngọt. Mỗi miếng bánh Lemon khi thưởng thức không chỉ mang lại cảm giác ngon miệng mà còn giúp kích thích vị giác, làm bừng tỉnh các giác quan nhờ vị chua dịu nhẹ. Đây là món bánh cực kỳ phù hợp để thưởng thức vào những buổi chiều hè oi ả hoặc dùng kèm với một tách trà nóng để xua tan mệt mỏi. Sự giản dị trong hình thức nhưng tinh tế trong hương vị chính là điều tạo nên sức quyến rũ lâu bền của bánh Lemon qua nhiều thế kỷ. Đây chắc chắn là món bánh làm hài lòng cả những thực khách khó tính nhất nhờ sự thanh khiết và nhẹ nhàng mà nó mang lại."
    },
    {
        id: "08",
        name: "Bánh Matcha Entremet",
        price: 20,
        image: "../assets/images/matcha-entremet.jpg",
        productlink: "https://www.facebook.com/share/p/1LdxarM1UZ/",
        desc: "Bánh Matcha Entremet là một kiệt tác của dòng bánh lạnh hiện đại, nơi mà tinh hoa trà xanh Nhật Bản được nâng tầm thành một trải nghiệm ẩm thực đa lớp vô cùng tinh tế. Entremet là dòng bánh đòi hỏi kỹ thuật cao với sự xếp chồng của nhiều tầng nguyên liệu có kết cấu khác nhau. Một chiếc Matcha Entremet điển hình sẽ bao gồm lớp đế giòn, lớp cốt mousse matcha mịn màng, và có thể là một lớp nhân thạch trái cây hoặc kem sữa bên trong để tạo điểm nhấn. Vẻ ngoài của bánh thường được hoàn thiện bằng một lớp tráng gương (mirror glaze) xanh mướt, bóng bẩy, tạo nên vẻ đẹp sang trọng và hiện đại. Vị đắng nhẹ, thanh khiết của bột matcha cao cấp được hòa quyện hoàn hảo với vị béo của kem tươi và vị ngọt vừa phải, tạo nên một tổng thể hài hòa. Khi thưởng thức, bạn sẽ cảm nhận được từng tầng hương vị tan chảy và đan xen vào nhau một cách nhịp nhàng. Đây không chỉ đơn thuần là một món bánh ngọt, mà còn là một tác phẩm nghệ thuật thể hiện sự khéo léo và tỉ mỉ của người nghệ nhân làm bánh. Matcha Entremet mang lại cảm giác bình yên, thanh tịnh và là món quà tuyệt vời cho những tín đồ yêu thích văn hóa trà đạo và phong cách ẩm thực tinh tế."
    },
    {
        id: "09",
        name: "Bánh Opera",
        price: 45,
        image: "../assets/images/opera.jpg",
        productlink: "https://www.la-maison.jp/news/001536.html",
        desc: "Bánh Opera là một trong những loại bánh truyền thống lừng danh nhất của Pháp, mang tên gọi của nhà hát Opera Garnier nổi tiếng tại Paris. Chiếc bánh này là sự kết tinh của sự cầu kỳ và lịch lãm với cấu trúc nhiều lớp xếp chồng lên nhau một cách hoàn hảo. Một lát bánh Opera tiêu chuẩn thường có các lớp bánh bông lan hạnh nhân (Joconde) được tẩm siro cà phê đậm đặc, đan xen với kem bơ cà phê béo ngậy và lớp ganache chocolate mượt mà. Mặt trên cùng của bánh được phủ một lớp glaze chocolate đen bóng loáng, thường được trang trí thêm một chút vàng lá để khẳng định đẳng cấp quý tộc. Hình dáng vuông vức, sắc cạnh của bánh gợi lên sự chỉn chu và sang trọng. Khi thưởng thức, thực khách sẽ được trải nghiệm một bản giao hưởng hương vị mạnh mẽ từ cà phê nồng nàn đến chocolate đắng nhẹ và hạnh nhân bùi bùi. Các tầng lớp tan chảy nhịp nhàng trong miệng, để lại dư vị kéo dài đầy mê hoặc. Bánh Opera không chỉ là món tráng miệng, nó còn là biểu tượng của nền tinh hoa ẩm thực Pháp, đòi hỏi sự kiên nhẫn và đôi tay tài hoa của người thợ để tạo nên những lớp bánh đều đặn và chuẩn xác nhất."
    },
    {
        id: "10",
        name: "Bánh Tiramisu",
        price: 31.2,
        image: "../assets/images/tiramisucake.jpg",
        productlink: "https://share.google/rtDtFBbgyneLXPWDd",
        desc: "Bánh Tiramisu, món tráng miệng huyền thoại đến từ nước Ý, luôn mang trong mình một sức hút mãnh liệt với ý nghĩa tên gọi là 'Hãy mang tôi đi'. Đây là sự kết hợp tài tình giữa những chiếc bánh quy Savoiardi mềm xốp được nhúng đẫm trong hương vị cà phê espresso đậm đặc, đôi khi có thêm chút rượu nhẹ để kích thích vị giác. Các lớp bánh này được ngăn cách bởi một hỗn hợp kem phô mai Mascarpone béo ngậy, mịn màng, tạo nên một kết cấu mềm ẩm và tan chảy ngay khi thưởng thức. Phủ lên trên cùng là một lớp bột cacao nguyên chất đắng nhẹ, giúp cân bằng hoàn hảo vị ngọt béo của lớp kem bên dưới. Tiramisu không cần nướng, giữ được sự tươi mát và hương thơm đặc trưng của cà phê Ý truyền thống. Khi ăn một muỗng bánh, bạn sẽ cảm nhận được sự hòa quyện tuyệt vời của các tầng hương vị: vị đắng của cà phê, vị béo của phô mai và sự mềm mại của bánh quy, mang lại cảm giác phấn chấn và hạnh phúc tức thì. Tiramisu không chỉ đơn giản là một món bánh, nó là biểu tượng cho sự tận hưởng cuộc sống ngọt ngào và là kết thúc hoàn hảo cho mọi bữa tiệc, để lại ấn tượng khó phai trong lòng bất kỳ ai đã từng một lần nếm thử."
    }
];
	
function addProduct(id, name, price, image, hyperLink)
{
	//Tạo một product item
	//1. Tạo khung chứa 1 item
	const productItem = document.createElement("div");
	productItem.setAttribute("class","product-item col m-4");

	//2. Tạo khung chưa hình
	const productImage = document.createElement("div");
	productImage.setAttribute("class","product-image h-75");

	//3. Tạo đối tượng hình ảnh
	const Image = document.createElement("img");
	Image.setAttribute("src", image);
	Image.setAttribute("alt", name);
	Image.setAttribute("class", "img-fluid object-fit-cover h-100");

	//4. Gán hình vào khung
	productImage.appendChild(Image);

	//5. Tạo khung chưa thông tin
	const productInfo = document.createElement("div");
	productInfo.setAttribute("class","product-info h-25 text-center");

	//Tạo paragraph 1
	const productName = document.createElement("p");
	const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

	//Tạo paragraph 2
	const productPrice = document.createElement("p");
	const productPriceText = document.createTextNode(price);
	productPrice.appendChild(productPriceText);

	//Tạo hyperLink
	const productLink = document.createElement("a");
	const productLinkText = document.createTextNode("Xem chi tiết");

	productLink.appendChild(productLinkText);
	productLink.setAttribute("href", hyperLink +"?id="+id);
	productLink.setAttribute("class", "btn btn-info");

	//Gắn paragraph 1, 2 và Link vào khung 
	productInfo.appendChild(productName);
	productInfo.appendChild(productPrice);
	productInfo.appendChild(productLink);

	//6. Gắn khung hình và thông tin vào product item
	productItem.appendChild(productImage);
	productItem.appendChild(productInfo);

	//Gắn product item vào product list
	document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
	const container = document.getElementById('product-list');

	container.innerHTML = "";

	products.forEach(item => {
		//Tạo element cha bằng createElement
		const productItem = document.createElement('div');

		//productItem.setAttribute("class", "product-item col-md-3 col-sm-6");
		//Sử dụng Template Literal nạp dữ liệu vào 
		productItem.innerHTML = `
			<div class="product-image ratio ratio-1x1 overflow-hidden">
				<img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover">
			</div>
			<div class="product-info p-2 text-center">
				<p class="product-name mb-1">${item.name}</p>
				<p class="product-price text-danger fw-bold mb-2">
					${item.price.toLocaleString('en-US')} $
				</p>
				<a href= "../html/detail.html?id=${item.id}" class= "btn btn-sm btn-outline-primary w-100">Xem chi tiết
				</a>
			</div>
		`;
		container.appendChild(productItem);
	});
}
showProduct(productlist);

