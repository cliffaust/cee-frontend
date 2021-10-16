<template>
  <client-only>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <template
          v-if="$route.name === 'lands-search' || $route.name === 'saved-lands'"
        >
          <img :src="image.land_image" class="w-full h-full" />
        </template>
        <template v-else>
          <img :src="image.home_image" class="w-full h-full" />
        </template>
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

<style lang="postcss" scoped>
.swiper-container {
  height: 100%;
  overflow: hidden;
  border-radius: 0.75rem;
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
  width: 2rem;
  height: 2rem;
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

.swiper-pagination >>> .swiper-pagination-bullet {
  opacity: 1;
  border: #fca311 solid 1px;
  background-color: transparent;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #fca311;
}

@media only screen and (max-width: 400px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
