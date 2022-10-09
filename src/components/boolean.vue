<template>
  <component :is="$slots.default()[0]"
             :class="{[className]: propChecked }"
             @[event]="action"
             :checked="propChecked ? '' : undefined"
  ></component>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue'
import { useVModel } from '../composable/vmodel'


const props = defineProps({
  modelValue: {type: Boolean, default: undefined},
  checked: {type: Boolean, default: undefined},
  event: {type: String, default: 'click'},
  className: {type: String, default: 'checked'}
})
const emit = defineEmits(['update:modelValue', 'change'])
watch(() => props.checked, () => {
  propChecked.value = props.checked
})
const propChecked: Ref = props.modelValue === undefined ? ref(props.checked) : useVModel(props, 'modelValue')

function action(event: Event) {
  propChecked.value = !propChecked.value
  if (!props.modelValue === undefined) {
    emit('update:modelValue', propChecked.value)
  }
  emit('change', event, propChecked.value)

}

</script>
