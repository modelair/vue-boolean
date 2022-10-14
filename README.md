
# Vue-Boolean

Vue-Boolean it is a renderer for child component

Only for Vue 3  

## Setup


```bash
npm i vue-boolean
```
## Demo
[Demo at codesandbox.io](https://codesandbox.io/s/vueboolean-demo-yj03wy?file=/src/App.vue)
## Usage



### Composition API

```vue

<script setup>
import { VueBoolean } from 'vue-boolean'
import { ref } from 'vue'

const booleanModel = ref(false)
</script>

<template>
  <vue-boolean v-model="booleanModel">
    <button>Press to true</button>
  </vue-boolean>
</template>
```
### Options API
```vue

<script>
import { VueBoolean } from 'vue-boolean'

export default {
  components: {
    VueBoolean
  },
  data() {
    return {
      booleanModel: false
    }
  }
}
</script>

<template>
  <vue-boolean v-model="booleanModel">
    <button>Press to true</button>
  </vue-boolean>
</template>
```

With Nuxt 3


```ts
// plugins/vue-boolean.ts

import { defineNuxtPlugin } from 'nuxt/app'
import VueBoolean from 'vue-boolean'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueBoolean)

})


```
### Behaivor
>when state set to true, slot class will be set to "checked"
with model

props:
```
@change - fires on state change
:checked - set default state. default - false
v-model - modelled state
event - custom event to change state. "click" by default
className - custom class to add. default - checked
```
### With v-model
```vue 
<vue-boolean v-model="booleanModel">
    <button>With model</button> 
</vue-boolean>
```
when clicked it renders to: 
```html
<button class="checked">With model</button> 
```
### Without v-model
```vue 
<vue-boolean>
    <button>without model</button> 
</vue-boolean>
```
### With true by default
```vue 
<vue-boolean :checked="true">
    <button>with default</button> 
</vue-boolean>
```
### With custom event 
```vue 
<vue-boolean :event="mouseover">
    <button>with event</button> 
</vue-boolean>
```
### With custom class 

```vue 
<vue-boolean class-name="state-checked" v-model="booleanModel">
    <button>With custom class</button> 
</vue-boolean>
```
renders to
```html
<button class="state-checked">With custom class</button> 
```
