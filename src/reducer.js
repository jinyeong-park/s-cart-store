// state
export const initialState = {
  cart: [],
  user: null,
  allItems: [
    {
      id:'1',
      title:'Diptyque Perfume Doson',
      price:90,
      condition:'Almost new',
      image:'https://mercari-images.global.ssl.fastly.net/photos/m76577444376_1.jpg?1602650326&w=200&h=200&fitcrop&sharpen',
      rating:5
    },
    {
      id:'2',
      title:'[Refurbished] Apple - MacBook Pro - 16" Display with Touch Bar - Intel Core i7 - 16GB Memory - 512GB SSD - Space Gray',
      price:1100,
      condition:'Good',
      image:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366564_sd.jpg',
      rating:4
    },
    {
      id:'3',
      title:'CHANEL Aged Calfskin Quilted 2.55 Reissue 226 Flap Black',
      price:4050,
      condition:'Good',
      image:'https://www.fashionphile.com/images/product-images/thumb/3ab0b98ff0565c8e099a5e8e6c0b2bf9/1ba36119ee329bec22ae0714e9a287a0.jpg',
      rating:4
    },
    {
      id:'4',
      title:'[Used] Apple Watch 38mm Series 2 Aluminum GPS with Sport Band MP0D2LL/A',
      price:120,
      condition:'Good',
      image:'https://i5.walmartimages.com/asr/378bb73b-0705-4493-9941-35e24101047c_1.c5ed98ac6aca7a05e1a785ed146c3677.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
      rating:3
    },
    {
      id:'5',
      title:'Tadwick Patio 3 Piece Bistro Set',
      price:299,
      condition:'New',
      image:'https://secure.img1-fg.wfcdn.com/im/53410039/resize-h250%5Ecompr-r85/6757/67571957/Tadwick+Patio+3+Piece+Bistro+Set.jpg',
      rating:4
    },
    {
      id:'6',
      title:'39 in. x 16 in. "Classic Orchid" by Graham and Brown Printed Canvas Wall Art',
      price:39.55,
      condition:'New',
      image:'https://images.homedepot-static.com/productImages/43486047-8534-4c33-9ef7-be6de132d5de/svn/blue-graham-brown-posters-art-prints-41-542-e1_600.jpg',
      rating:3
    }
  ],
  displayItems: [
    {
      id:'1',
      title:'Diptyque Perfume Doson',
      price:90,
      condition:'Almost new',
      image:'https://mercari-images.global.ssl.fastly.net/photos/m76577444376_1.jpg?1602650326&w=200&h=200&fitcrop&sharpen',
      rating:5
    },
    {
      id:'2',
      title:'[Refurbished] Apple - MacBook Pro - 16" Display with Touch Bar - Intel Core i7 - 16GB Memory - 512GB SSD - Space Gray',
      price:1100,
      condition:'Good',
      image:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366564_sd.jpg',
      rating:4
    },
    {
      id:'3',
      title:'CHANEL Aged Calfskin Quilted 2.55 Reissue 226 Flap Black',
      price:4050,
      condition:'Good',
      image:'https://www.fashionphile.com/images/product-images/thumb/3ab0b98ff0565c8e099a5e8e6c0b2bf9/1ba36119ee329bec22ae0714e9a287a0.jpg',
      rating:4
    },
    {
      id:'4',
      title:'[Used] Apple Watch 38mm Series 2 Aluminum GPS with Sport Band MP0D2LL/A',
      price:120,
      condition:'Good',
      image:'https://i5.walmartimages.com/asr/378bb73b-0705-4493-9941-35e24101047c_1.c5ed98ac6aca7a05e1a785ed146c3677.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
      rating:3
    },
    {
      id:'5',
      title:'Tadwick Patio 3 Piece Bistro Set',
      price:299,
      condition:'New',
      image:'https://secure.img1-fg.wfcdn.com/im/53410039/resize-h250%5Ecompr-r85/6757/67571957/Tadwick+Patio+3+Piece+Bistro+Set.jpg',
      rating:4
    },
    {
      id:'6',
      title:'39 in. x 16 in. "Classic Orchid" by Graham and Brown Printed Canvas Wall Art',
      price:39.55,
      condition:'New',
      image:'https://images.homedepot-static.com/productImages/43486047-8534-4c33-9ef7-be6de132d5de/svn/blue-graham-brown-posters-art-prints-41-542-e1_600.jpg',
      rating:3
    }
  ]
}

// selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

// REDUCER = always listening
const reducer = (state, action) => {
  console.log('action in reducer', action)

  switch(action.type) {
    case 'REFRESH_DISPLAY_PRODUCTS':
      return {
        ...state,
        displayItems: state.allItems
      }

    case 'UPDATE_DISPLAY_PRODUCTS':

      const filterItem = state.displayItems.filter(item =>
        item.title.toLowerCase().includes(action.searchword.toLowerCase())

      )
      console.log('filteredItem in reducer', filterItem)

      return {
        ...state,
        displayItems: filterItem
      }

    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      };

    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        cartItem => cartItem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);

      } else {
        console.log(
          `cannot remove product (id: ${action.id}) as it is not in the cart`
        )
      }

      return {
        ...state,
        cart: newCart
      }

      case 'SET_USER':
        return {
          ...state,
          user: action.user
        }




    default:
      return state;
  }
}

export default reducer;