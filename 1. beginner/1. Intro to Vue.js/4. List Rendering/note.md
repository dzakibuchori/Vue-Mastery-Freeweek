- The `v-for` directive allows us to iterate over an array to display data.
- We use an alias for the element in the array being iterated on, and specify the name of the array we are looping through. Ex: `v-for="item in items"`
- We can loop over an array of objects and use dot notation to display values from the objects.
- When using `v-for` it is recommended to give each rendered element its own unique key.

---
List Rendering
- using array/object
- using `:key` for object is best.
- directive `v-for="item in items"` the var inside tag is `item`
