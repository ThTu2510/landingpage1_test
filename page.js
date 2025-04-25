// Hiệu ứng con trỏ chuột thanh Nav

const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(" ul li a ");

window.addEventListener("mousemove", cursor);
function cursor (e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(function (link){
    link.addEventListener('mouseout', function () {
        mouseCursor.classList.remove("zoom");
        link.classList.remove("hovered");
    });

    link.addEventListener('mouseover', function () {
        mouseCursor.classList.add("zoom");
        link.classList.add("hovered");
    });
});

// hiệu ứng ảnh cho section 1

const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const bgrBlack = document.querySelector(".bgr-black");

smallImg.forEach(function(img){
    img.addEventListener("click", function()  {
        bgrBlack.classList.add("open");
        fullImg.classList.add("open");

        const bigImg = img.getAttribute("alt");
        fullImg.src =`./full/${bigImg}.jpg`;
    
    });
});

bgrBlack.addEventListener("click", function(e){
    if(e.target.classList.contains("bgr-black"));
    bgrBlack.classList.remove("open");
    fullImg.classList.remove("open");
});

//ảnh tương ứng với sự kiện
const serFx = document.querySelectorAll(".list-sv .list");
const galleryImg = document.querySelectorAll(".list-img img");

serFx.forEach(function (e){
    e.addEventListener("click", function(){
        const similarimg = e.getAttribute("data");

        galleryImg.forEach(img => {
            img.classList.remove("active");
        });

        galleryImg.forEach(img => {
            const curAlt = img.getAttribute("alt");

        if(curAlt === similarimg){
            img.classList.add("active");
        }
        });
    });
});

// hiển thị nội dung với tiêu đề mong muốn
// Lấy các phần tử nút "Indicators" và "EA Trading"
const tools = document.querySelectorAll('.tools .indi, .tools .EA'); 
const contentList = document.querySelectorAll('.list-content  div'); // Tất cả các khối nội dung (indi-content và EA-content)

// Lắng nghe sự kiện click vào các phần tử .indi và .EA
tools.forEach(tool => {
    tool.addEventListener('click', function() {
        // Ẩn tất cả các khối nội dung bằng cách loại bỏ lớp .active
        contentList.forEach(content => {
            content.classList.remove('active');
        });

        // Thêm lớp .active vào phần tử tương ứng
        const targetData = tool.getAttribute('data'); // Lấy giá trị 'indi' hoặc 'EA'

        // Tìm phần tử có data trùng khớp và thêm lớp .active
        const targetContent = document.querySelector(`.${targetData}-content`);
        targetContent.classList.add('active'); // Thêm lớp active để hiển thị
    });
});

