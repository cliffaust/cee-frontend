<template>
  <div class="image-content" @click="selectImage">
    <img :src="image" alt="Home Image" class="photo" />
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

<style lang="scss" scoped>
.photo {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.image-content {
  cursor: pointer;
}
</style>
