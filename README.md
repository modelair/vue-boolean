
# Vue-Boolean

Vue-Boolean is a wrapper for ```<slot/>```

Only for Vue 3 

## Setup


```bash
# install dependencies
npm i vue-boolean

```

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
:checked - default state
v-model - modelled state
event - custom event to change state. "click" by default

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
<vue-boolean :event="mouseover" v-model="booleanModel">
    <button>with event </button> 
</vue-boolean>
```
