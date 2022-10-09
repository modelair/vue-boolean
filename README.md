
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
>when modelValue set to true, slot class will be set to "checked"
with model

props:
```

@change - fires on state change
:checked
v-model
event - "click" by default

```
### With model
```vue 
<VueBoolean v-model="booleanModel">
    <button>With model</button> 
</VueBoolean>
```
when clicked it renders to: 
```html
<button class="checked">With model</button> 
```
### without model
```vue 
<VueBoolean>
    <button>without model</button> 
</VueBoolean>
```
### with true by default
```vue 
<VueBoolean :checked="true">
    <button>with default</button> 
</VueBoolean>
```
### with event 
```vue 
<VueBoolean :event="mouseover" v-model="booleanModel">
    <button>with event </button> 
</VueBoolean>
```
