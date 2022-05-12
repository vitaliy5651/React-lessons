import { v4 as uuidv4 } from 'uuid';
export const initialState = {
    el:{},
    items: [{
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 11 128GB (PRODUCT)RED™ (красный)',
        description: 'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/17bd189a9b6118a4d159047076f80c2d.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 11 128GB (белый)',
        description: 'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/3270c142a950a37f1242f0d419a318f4.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 11 128GB (зеленый)',
        description: 'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/383d93184d95011c8aeb70bf3cfb8140.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 11 128GB (фиолетовый)',
        description: 'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/6f5ffba85b044dcceb380498ac02c597.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 11 128GB (черный)',
        description: 'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 12 128GB (синий)',
        description: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A14 Bionic, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 2815 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/e4d9b3df1aefa23c1193f230b958bae0.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 12 128GB (черный)',
        description: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A14 Bionic, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 2815 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 12 256GB (белый)',
        description: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A14 Bionic, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 2815 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/4f68c0a86e8254fe09df404e98d56e53.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 12 256GB (зеленый)',
        description: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A14 Bionic, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 2815 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/3f38cc72915132d668c7b3d488e7ab4d.jpeg'
    },
    {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 12 64GB (синий)',
        description: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A14 Bionic, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2815 мАч, 1 SIM',
        urlToImg: 'https://content2.onliner.by/catalog/device/header/e4d9b3df1aefa23c1193f230b958bae0.jpeg'
    }],
    flag: true
}

export default function fetchProductsReducer(state = initialState, action){
    switch (action.type){
        case 'delete_product':
            return {items: state.items.filter(el => el.id !== action.id)}
        case 'Add_products':
            return {items: [action.result, ...state.items]}
        case 'SendproductToUpdate':
            return {items: state.items, el: action.el, flag: false}
        case 'Update_product':
            return {...state,flag:!state.flag, items: state.items.map((el) => { if(el.id === action.result.id){
                el = action.result
            }
            return el
        })}
        case 'SearchProduct':
            return {...state, items: state.items.filter((el) => el.title.toLowerCase().includes(action.item.toLowerCase()))}
        default:
            return state
    }
}