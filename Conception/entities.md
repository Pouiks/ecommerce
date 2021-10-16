# Entities (object / class)
User
``` javascript
Abstract class User {
    name String
    firstname String
    role = consumer
    mail String!
    adress String!
    shippingAdress String!
    facturationAdress String!
    city String!
    country String!
    zipCode String!
    dataConservation Bool = false
    validatedShippindCart INT = 0


    Admin extend User{
        role = admin!
    }


    visitor != User // (jusqu'a enregistrement)
}
```
Product_item
```javascript
Abstract class Product_item {
    identificationNumber String! // (eg: clav_007 category+product_id)
    name String!
    category String!
    type String!
    quantity INT = 0
    image String   //url cloudinary
    priceHT FLOAT!
    reduction INT
    color = [Color]
    size = [Size]
    brand String
    supplier String
}
```
Comment
```javascript
Abstract Comment = {
    content String!
    notation INT!
}
```
Category
```javascript
class Category {
    name String!
    color String
}
```

Size
```javascript
class Size {
    name String
}
```
ShoppingCart
```javascript
ShoppingCart {
    productList = []
}
```

### A reflechir: 

- Rajouter la livraison ultérieurement
- Ajout de fournisseur
  - Entité fournisseur fournis dans l'object product_item pour le moment



