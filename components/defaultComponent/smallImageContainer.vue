<template>
  <div class="cursor-pointer" @click="selectImage">
    <img :src="image" alt="Home Image" class="w-full h-card" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    num: {
      type: Number,
      required: true,
    },
  },

  methods: {
    selectImage() {
      this.$emit('selectImageNum', this.num)
    },
  },
}
</script>
