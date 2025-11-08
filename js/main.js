import { productList, partnerLogoBasePath, partnerLogos } from "./data.js"

//Navbar
$(function () {
    // scroll
    $(".navbar").hidescroll();

    // mobile dropdown
    const toggle = $("#toggle_btn");
    const dropdown = $(".dropdown-menu")

    toggle.click(() => {
        dropdown.toggleClass("open")
    })
});

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

//Carousel Best Seller
$(function () {
    $(".slider").slick({
        autoplay: true,
        dots: true,
    });
});

// Stats counter
$(function () {
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const IO = new IntersectionObserver(callback, { threshold: 1 })

    const el = document.querySelectorAll('.counter').forEach((node) => {
        IO.observe(node)
    })

})