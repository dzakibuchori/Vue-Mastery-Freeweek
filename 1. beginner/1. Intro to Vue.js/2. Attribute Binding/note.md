- Data can be bound to HTML attributes.
- Syntax is v-bind: or : for short.
- The attribute name that comes after the : specifies the attribute we’re binding data to.
- Inside the attribute’s quotes, we reference the data we’re binding to.
---
Binding
- prefer using :
```html
<img :src="image" />
<a :href="link" target="_blank">More products like this</a>

```
- putting in data
```vue
data: {
        product: 'Socks',
        image: 'vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
    }
```
