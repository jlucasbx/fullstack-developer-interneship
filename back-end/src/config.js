
const htmlSearch = {
    products: ".sg-col-4-of-24.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20",
    title: ".a-size-base-plus.a-color-base.a-text-normal",
    image: ".s-image",
    rating: ".a-section.a-spacing-none.a-spacing-top-micro .a-row.a-size-small > span:first-child",
    reviews: ".a-section.a-spacing-none.a-spacing-top-micro .a-row.a-size-small > span:last-child",
}

const site = {
    url: "https://www.amazon.com/s",
    queryParam: "k"
}

module.exports = {htmlSearch,site};