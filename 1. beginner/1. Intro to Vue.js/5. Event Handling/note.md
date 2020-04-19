- The `v-on` directive is used to allow elements to listen for events
- The shorthand for `v-on` is `@`
- You can specify the type of event to listen for:
  - click
  - mouseover
  - any other DOM event
- The `v-on` directive can trigger a method
- Triggered methods can take in arguments
- `this` refers to the current Vue instance’s data as well as other methods declared inside the instance
---
Event Handling
- prefer short directive `@`
- put in method :
```javascript
methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if(this.cart>0) this.cart -= 1
        }
    }
```
