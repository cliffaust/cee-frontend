<template>
  <div class="flex flex-col">
    <label v-if="label" class="block text-gray-700 text-xl font-bold mb-2">{{
      label
    }}</label>
    <textarea
      cols="30"
      rows="10"
      v-bind="$attrs"
      :class="[
        'appearance-none',
        'leading-tight',
        'resize-none',
        'border-2',
        'border-gray-200',
        'bg-gray-200',
        'focus:outline-none',
        'rounded',
        'py-5',
        'px-4',
        'text-gray-700',
        'w-full',
        'text-xl',
        { 'border-red-300': errorStyle },
      ]"
      :value="value"
      @input="updateValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    errorStyle: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
