import cake1 from "../assets/double-layer.png"
import cake2 from "../assets/oreo-cream.png"
import cake3 from "../assets/choco-cake.png"
import cake4 from "../assets/choco-cake2.png"
import cake5 from "../assets/Bunt-cake.png"
import cake6 from "../assets/lemon-choco.png"
import cake7 from "../assets/cocoa-cream.png"
import cake8 from "../assets/choco-deluxe.png"

import pie1 from "../assets/stawberry-pie.png"
import pie2 from "../assets/fruit-pie.png"
import pie3 from "../assets/pie.png"
import pie4 from "../assets/veggie-pie.png"
import donut1 from "../assets/sugar-dusted.png"
import donut2 from "../assets/Donut1.png"
import donut3 from "../assets/jam-donut.png"
import donut4 from "../assets/choco-glaze.png"



/*IMPORTS FOR GALLAREY IMAGES*/ 

import tart from "../assets/Gallery/Tart.png";
import cherry from "../assets/Gallery/cherrypie.png"
import choco from "../assets/Gallery/chocoDonut.png"
import cream from "../assets/Gallery/creampuff.png"
import donut from "../assets/Gallery/donut.png"
import glazed from "../assets/Gallery/glazeddonut.png"
import pie from "../assets/Gallery/pie.png"
import potato from "../assets/Gallery/PotatoPie.png"
import shortcake from "../assets/Gallery/shortcake.png"
import twoTart from "../assets/Gallery/twoTart.png"
import cakeSlice from "../assets/Gallery/varietyCake.png"



export const cakes = [
    {
    name: "CREAM DELIGHT",
    price: 30000,
    description: "Cream filled goodness",
    image: cake1, 
    details: "A rich chocolate cake topped with creamy whipped frosting, perfect for chocolate lovers seeking a decadent treat."
    },

    {
    name: "LEMON COOKIE",
    price: 50000,
    description: "Lemon filled goodness",
    image: cake2, 
    details: "A zesty lemon cake layered with smooth cream frosting, offering a refreshing citrus burst in every bite."
    },

    {
    name: "DARK CHOCO BITE",
    price: 45000,
    description: "Chocolate filled goodness",
    image:cake3, 
    details: "  A deep, dark chocolate cake layered with velvety cocoa frosting, offering an intense chocolate experience for true chocolate lovers."
    },

    {
    name: "CHOCO HAZELNUT",
    price: 40000,
    description: "Hazlenut cocoa crunch ",
    image: cake4,
    details: "A moist chocolate cake infused with hazelnut essence, topped with a silky chocolate ganache for a nutty-chocolate delight."
    },

    {
        name: "FRUITY BLISS",
        price: 30000,
        description: "Fruit lovers party",
        image: cake5, 
        details: "A chocolate cake drizzled with creamy frosting and topped with fresh berries, blending rich cocoa with fruity sweetness."
    },
    
    {
        name: "HONEY CARAMEL",
        price: 50000,
        description: "Sweet honey delight",
        image: cake6, 
        details: " A honey-infused cake with caramel drizzle and a crunchy topping, delivering a sweet and textured experience."
    },
    
    {
        name: "COCOA LOVERS",
        price: 45000,
        description: "Rich and dark, just like cocoa",
        image:cake7, 
        details: " A cake made speacialy for those who love the smell and, bitter taste of cocoa"
    },
    
    {
        name: "CHOCO FANTACY",
        price: 40000,
        description: "Chocolate is the word",
        image: cake8,
        details:" A vanilla cake with a luscious chocolate drip, offering a dreamy combination of creamy vanilla and rich chocolate." 
    },
];

export const pastry = [

    {
        image: donut1,
        name: "CINNAMON SUGAR",
        price: 6000,
        description:"Classic with a twist",
        details: "A classic donut coated in a sweet cinnamon-sugar blend, offering a warm and comforting flavor in every bite."
    },

    {
        image: donut2, 
        name: "POWEDERD DONUT",
        price: 5000,
        description:"Fluffy with powdered sugar",
        details:"A soft, fluffy donut with a light powdered sugar sprinkle, perfect for a simple yet satisfying treat."
    },

    {
        image: donut3,
        name: "RASPBERRY JAM",
        price: 8000,
        description: "Tangy filled raspberry jam",
        details:"A fluffy donut filled with tangy raspberry jam, dusted with powdered sugar for a burst of sweetness."
    },

    {
        image: donut4,
        name: "CHOCO GLAZED",
        price: 8000,
        description:"Classic glazed donut",
        details:"A rich donut dipped in smooth chocolate glaze, perfect for chocolate lovers craving a sweet indulgence."
    },

    {
        image: pie1,
        name:"STRAWBERRY PIE",
        price: 25000,
        description:"Strawberry baked goodness",
        details: " A buttery pie filled with creamy custard and topped with fresh strawberries, offering a perfect balance of sweet and tart."
    },

    {
        image: pie2,
        name: "MIXED-FRUIT PIE",
        price:15000,
        description: "Flavours of mixed fruits",
        details:" A delicate pie bursting with mixed berries, including blueberries and raspberries, for a vibrant and fruity treat."
    },

    {
        image: pie3,
        name: "LEMON CREAM PIE",
        price: 10000,
        description: "Classic lemon cream pie",
        details: " A zesty lemon pie topped with fluffy meringue, offering a refreshing and tangy dessert with a light, airy finish."
    },

    {
        image: pie4,
        name: "VEGGIE PIE",
        price: 10000,
        description: "For lovers of veggies",
        details:"A savory pie filled with spinach, cheese, and herbs, baked in a flaky crust for a hearty and flavorful bite"
    }
]


export const gallery = [
    { id: 1, image: cream, alt: 'Tart' },
    { id: 2, image: cherry, alt: 'Vanilla Cake' },
    { id: 3, image: donut, alt: 'Croissant' },
    { id: 4, image: cakeSlice, alt: 'Danish Pastry' },
    { id: 5, image: shortcake, alt: 'Red Velvet Cake' },
    { id: 6, image: glazed, alt: 'Eclair' },
    { id: 7, image: tart, alt: 'Eclair' },
    { id: 8, image: potato, alt: 'Eclair' },
    { id: 9, image: choco, alt: 'Eclair' },
    { id: 10, image: pie, alt: 'Eclair' },
]

