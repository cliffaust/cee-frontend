<template>
  <div class="flex items-center">
    <input
      id="others"
      v-bind="$attrs"
      class="input"
      type="checkbox"
      :value="value"
      @change="change"
    />
    <label v-if="label" for="others" class="font-bold ml-2 text-sm">{{
      label
    }}</label>
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
    value: {
      type: [String],
      required: true,
    },
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.checked ? 'true' : 'false')
    },
  },
}
</script>
