export const SetProducts = (data) => { return {type: 'Set_Products', data} }

export const DeleteProducts = (el) => { return {type: 'delete_product', el} }

export const  SendProductToUpdate = (el) => {return {type: 'SendproductToUpdate', el}}

export const  AddProducts = (result) => {return { type: 'Add_products', result }}

export const UpdateProduct = (result) => { return { type: "Update_product", result }}

export const SearchProduct = (item) => {return {type: 'SearchProduct', item}}