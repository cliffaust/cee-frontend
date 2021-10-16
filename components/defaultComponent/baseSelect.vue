<template>
  <div class="flex flex-col">
    <label v-if="label" class="text-sm mb-2 font-bold">{{ label }}</label>
    <select
      class="leading-tight bg-gray-200 border-2 border-gray-200 focus:outline-none rounded-lg h-12 px-4 text-gray-700 w-full text-sm"
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
    >
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: '',
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
