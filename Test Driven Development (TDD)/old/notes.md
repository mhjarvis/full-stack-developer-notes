A basic function: 

    function orderTotal(order) {
        return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
    }

Example test:

    // test 1

    if (orderTotal({
        items: [
            {'name': 'Dragon candy', price: 2, quantity: 3 }
        ]
    }) != 6) {
        throw new Error('Check fail: Quantity')
    }

Example test:

    // test 2

    if (orderTotal({
        items: [
            {'name': 'Dragon candy', price: 3 }
        ]
    }) !== 3) {
        throw new Error('Check fail: No quantity specified')
    }