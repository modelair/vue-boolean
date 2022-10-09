
# Vue-Boolean

Vue-Boolean is a wrapper for ```<slot/>```

Only for Vue 3 

## Setup


```bash
# install dependencies
npm i vue-boolean

```

## How it works

```ts
import VueBoolean from 'vue-boolean'

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
