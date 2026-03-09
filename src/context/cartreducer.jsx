export const CartReducer = (state, action ) => {
    switch (action.type) {
        case "ADD": {
            const produit = action.payload
            const ixist = state.items.find((item) => item.id === produit.id)
            let newItems;

            if (ixist) {
                newItems = state.items.map((item) => 
                    (item.id === produit.id)
                        ? { ...item, quantite: item.quantite + 1 }
                        : item
                )
            } else {
                newItems = [...state.items, { ...produit, quantite: 1 }]
            }

            return { ...state, items: newItems }
        };

        case "REMOVE": {
            const produit = action.payload

            return { ...state, items: state.items.filter((item) => item.id !== produit.id) }
        };

        case "INCREASE": {
            const produit = action.payload
            return {
                ...state, items: state.items.map((item) => 
                    item.id === produit.id
                        ? { ...item, quantite: item.quantite + 1 }
                        : item
                )
            }

        };
        case "DECREASE": {
            const produit = action.payload
            return {
                ...state, items: state.items.map((item) => 
                    item.id === produit.id
                        ? { ...item, quantite: item.quantite - 1 }
                        : item
                ).filter((item)=> item.quantite > 0)
            }

        };
        case "CLEAR":{
            return {...state, items:[]}
        };
        default:
            return state

    }
}