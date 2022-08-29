export function priceFormat (price, locale='us-Us',currency = 'USD') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(price)
}