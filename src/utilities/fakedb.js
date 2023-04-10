// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJob[id] = newQuantity;
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

/* const removeFromDb = id => {
    const shoppingCart = getAppliedJob();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
} */

const getAppliedJob = () => {
    let appliedJob = {};

    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job');
    if (storedCart) {
        appliedJob = JSON.parse(storedJob);
    }
    return appliedJob;
}

/* const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
} */

export {
    addToDb,
    removeFromDb,
    getAppliedJob as getAppliedJob,
    deleteShoppingCart
}