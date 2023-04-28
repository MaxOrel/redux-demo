import { CHANGE_VIEW, DECREASE, INCREMENT } from '../types';


export function incrementAction(data) {
    return {
        type: INCREMENT,
        payload: data,
    }
}

export function decreaseAction(data) {
    return {
        type: DECREASE,
        payload: data,
    }
}

export function changeViewAvtion(data) {
    return {
        type: CHANGE_VIEW,
        payload: data,
    }
}

// export function fetchProduct() {
//     return () => {
//         dispatch(setLoading(true))
//         api.getProducts().then(() => {
//             return dispatch(setProduct())
//         })
//         .finally(() => {
//             dispatch(setLoading(false))
//         })
//     }
// }


// dispatch(fetchProduct())