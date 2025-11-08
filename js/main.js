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
    for (let i = 0; i < 2; i++) {
        const container = document.getElementById('partner-logo-list');
        partnerLogos.forEach((item, index) => {
            const img = document.createElement('img');
            img.src = partnerLogoBasePath + item.fileName;
            img.alt = item.alt
            img.classList.add("logo-ticket-image");
            container.appendChild(img)
        })
    }

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

// All product
$(function () {
    productList.map((p) => {
        $("#product-items--container").append(
            `
                        <div data-filterable data-filter-category=${p.category} class="relative col-span-3 overflow-hidden group hover:shadow-md">
                            <div class="portfolio-item">
                                <div>
                                    <img src="${p.img}" alt="">
                                    <div class="product-item-overlay">
                                        <div class="product-details">
                                            <h3>${p.name}</h3>
                                            <p>${p.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            `
        )
    })
    $.fn.filterjitsu();

    function getAllUrlParam(url) {
        url = url || window.location.href;

        const param = {};

        const queryString = url.split("?")[1];

        if (!queryString) {
            return param;
        }

        const [key, value] = queryString.split("=");

        if (key) {
            param[key] = value ? value : "";
        }

        return param;
    }

    const urlParam = getAllUrlParam();

    $("#allProduct-filters a").removeClass("activeFilter");

    const category = urlParam["filter-category"];

    switch (category) {
        case "whitetea":
            $("#f-whitetea").addClass("activeFilter");
            break;
        case "blacktea":
            $("#f-blacktea").addClass("activeFilter");
            break;
        case "oolong":
            $("#f-oolong").addClass("activeFilter");
            break;
        case "matcha":
            $("#f-matcha").addClass("activeFilter");
            break;
        default:
            $("#f-all").addClass("activeFilter");
            break;
    }
})

$(function () {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: "ease-in-out", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: "center-bottom", // defines which position of the element regarding to window should trigger the animation
    });
})
