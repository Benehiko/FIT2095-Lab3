var express = require('express');
var router = express.Router();
var db = []
router.get('/', function (req, res) {
    res.send('Welcome to FIT2095 Lab 3 Home Page');
});


router.get('/newItem/:item/:quantity/:price', function (req, res) {
    item = {
        id: Math.round(Math.random() * 1000),
        item: req.params.item,
        quantity: req.params.quantity,
        price: req.params.price
    }

    db.push(item)
    res.send("Items added");
});

router.get('/listAllItems', function (req, res) {
    let output = "ID     Item    Quantity    Price   Cost</br>";
    for (let i = 0; i < db.length; i++) {
        output += db[i].id + ' | ' + db[i].item + ' | ' + db[i].quantity + ' | ' + db[i].price + ' | ' + (parseFloat(db[i].price) * parseFloat(db[i].quantity)) + ' </br>';
    }
    res.send(output);
});

router.get('/deleteItem/:id', function (req, res) {
    let itemID = req.params.id;
    let msg = "Element ID does not exist!";
    db.forEach(function (entry) {
        if (entry.id == itemID) {
            let index = db.indexOf(entry)
            elem = db[index];
            db.splice(index, 1);
            msg = "Element " + elem.item + " removed";
            return
        }
    });
    res.send(msg);
    }
);

router.get('/totalValue', function (req, res) {
    let total = 0
    db.forEach(function (entry) {
        total += entry.price * entry.quantity;
    })
    res.send("Total warehouse value: R" + total);
});
//export this router
module.exports = router;