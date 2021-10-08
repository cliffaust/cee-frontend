<template>
  <client-only>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image.home_image" class="w-full h-full" />
      </swiper-slide>
      <font-awesome-icon
        slot="button-prev"
        :icon="['fas', 'chevron-circle-left']"
        class="swiper-button-prev"
      />
      <font-awesome-icon
        slot="button-next"
        :icon="['fas', 'chevron-circle-right']"
        class="swiper-button-next"
      />
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </client-only>
</template>

<script>
export default {
  props: {
    images: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
}

.swiper-container:hover .swiper-button-next {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.swiper-container:hover .swiper-button-prev {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.swiper-button-next,
.swiper-button-prev {
  width: 3.2rem;
  height: 3.2rem;
  color: #eee;
  transition: 0.2s ease;
}

.swiper-button-next {
  opacity: 0;
  transform: translateX(10px);
  visibility: hidden;
}

.swiper-button-prev {
  opacity: 0;
  transform: translateX(-10px);
  visibility: hidden;
}

.swiper-pagination {
  /deep/ &-bullet {
    opacity: 0.8;
    &-active {
      background-color: $primary-bgcolor-2;
    }
  }
}

@media only screen and (max-width: 400px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
