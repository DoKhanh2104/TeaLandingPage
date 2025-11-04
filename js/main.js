import { productList, partnerLogoBasePath, partnerLogos } from "./data.js"
// Partner logo
$(function () {
    const container = document.getElementById('partner-logo-list');
    partnerLogos.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = partnerLogoBasePath + item.fileName;
        img.alt = item.alt
        img.classList.add("logo-ticket-image");
        container.appendChild(img)
    })
})

//Tab

//Change color
$(function () {
    //Add activeTab into first li
    $("li:first").addClass("activeTab");

    //Chang color when click
    $("li").on("click", function () {
        $("li").removeClass("activeTab")
        $('div[id="products-tabs"] ul .r-tabs-state-active').addClass("activeTab")
    });

    $("#products-tabs").responsiveTabs({
        animation: "slide",
    });
}
);