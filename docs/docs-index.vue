<template>
  <main class="root">
    <section>
      <h1>Vue-Boolean demo</h1>
      <div>
        is checked {{booleanModel}}<br/>
        <VueBoolean v-model="booleanModel">
          <button>With model</button>
        </VueBoolean>

      </div>
      <div>
        <VueBoolean>
          <button>Check Without model</button>
        </VueBoolean>
      </div>
      <div>
        <VueBoolean :checked="true">
          <button>Checked by default</button>
        </VueBoolean>
      </div>
      <div>
        <VueBoolean event="mouseover">
          <div class="area" >move mouse on this area</div>
        </VueBoolean>
        <br/>
        with custom <code>event="mouseover"</code>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const booleanModel = ref(false)
</script>

<style >
button {
  padding: 1em;
  text-transform: uppercase;
  outline: 0;
}
body, html, #vite {
  clear: both;
  font-family: Lato, sans-serif;
  padding: 0;
  margin: 0;
  height: 100%;
  min-height: 100vw;
}
.root {
  height: 100%;
  background-color: #bcdce2;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.area {
  box-sizing: content-box;
  border:1px solid black;
  border-radius: .5em;
  display: flex;
  justify-content: center;

}
.area.checked {

  border-color: red;

}
div {
  padding: 1em
}
button[checked] {
  background-color: aqua;
}
</style>
