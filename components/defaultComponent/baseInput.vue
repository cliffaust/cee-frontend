<template>
  <div class="flex flex-col">
    <label v-if="label" class="block text-gray-700 text-xl font-bold mb-2">{{
      label
    }}</label>
    <div class="relative">
      <input
        v-bind="$attrs"
        :class="[
          'appearance-none',
          'leading-tight',
          'bg-gray-200',
          'border-2',
          'border-gray-200',
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
      />

      <div v-if="showPassword !== null">
        <svg
          v-if="showPassword"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 cursor-pointer absolute top-2/4 bottom-2/4 -translate-x-1/2 -translate-y-1/2 right-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="changeShowPasswordToFalse"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 cursor-pointer absolute top-2/4 bottom-2/4 -translate-x-1/2 -translate-y-1/2 right-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="changeShowPasswordToTrue"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </div>
    </div>
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
      type: [String, Number],
      required: true,
    },
    errorStyle: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: null,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },

    changeShowPasswordToTrue() {
      this.$emit('changeShowPasswordToTrue')
    },

    changeShowPasswordToFalse() {
      this.$emit('changeShowPasswordToFalse')
    },
  },
}
</script>
