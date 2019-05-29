//в задании с телефонами сочетать phones.map с filter/forEach

var phones = [
    {
        name:"s10",
        brand: "Samsung",
        price: 40000,
        colors: ["blue", "black", "grey"],
        path:"https://i.citrus.ua/uploads/shop/4/7/471be9c817ebdbbc3b78764cb6026776.jpg",
    },
    {
        name:"s10+",
        brand: "Samsung",
        price: 30000,
        colors: ["blue", "black"],
        path:"https://i.citrus.ua/uploads/shop/4/7/471be9c817ebdbbc3b78764cb6026776.jpg",
    },
    {
        name:"xs max",
        brand: "Iphone",
        price: 45000,
        colors: "black",
        path:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154",
    },
    {
        name:"X",
        brand: "Iphone",
        price: 23000,
        colors: "black",
        path:"https://i1.rozetka.ua/goods/3267959/33550871_images_3267959847.jpg",
    }
];


var priceSort = phones
        .map(function(elem){
            return elem.price;
        })
        .sort(function(a, b){
            if(a>b) return 1;
            if(a<b) return -1;
        });
console.log(priceSort);
//
//var priceSort = [];
//for(var i = 0; i<phones.length; i++){
//    priceSort.push(phones[i].price);
//}
//priceSort = priceSort.sort(function(a, b){
//    if(a>b) return 1;
//    if(a<b) return -1;
//})
//console.log(priceSort);
//
//var phonesSort = [];
//for(var j = 0; j<priceSort.length; j++){
//    for(var i=0; i<phones.length; i++){
////        if(phones[i].price == priceSort[j]) phonesSort[j]==phones[i];
//        if(phones[i].price == priceSort[j]) phonesSort.push(phones[i]);
//    }
//}
//console.log(phonesSort);
//
//var phonesSort2 = phonesSort.slice().reverse();
//console.log(phonesSort2);



////ДО НГ ОСТАЛОСЬ
//var NY = [12, 31, 23, 59, 59];
//var interval = setInterval(function(){
//    var today = new Date();
//    var arr = today.toLocaleDateString()
//        .split('.')
//        .reverse()
//        .concat(today.toLocaleTimeString()
//        .split(':'));
//    arr.shift();
//    var timing = arr.map(function(elem, i){
//        return NY[i] - elem;
//    });
//    document.getElementById('newYear').innerHTML = 'До Нового года осталось: ' + timing.join(' - ');
//}, 1000);