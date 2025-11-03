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
$(function () {
    $('#products-tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });
})