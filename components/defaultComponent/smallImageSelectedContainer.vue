<template>
  <div class="bg-black bg-opacity-80 fixed top-0 left-0 right-0 bottom-0 z-50">
    <div class="flex justify-between items-center px-6 mt-20">
      <div class="flex gap-4 items-center">
        <div class="cursor-pointer" @click.stop>
          <svg
            v-if="like"
            width="28px"
            height="28px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#e63946"
            @click.stop="changeLikeState"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            width="28px"
            height="28px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            @click.stop="changeUnLikeState"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="cursor-pointer"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          @click="modalShare = true"
        >
          <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
          <title>share</title>
          <desc>Created with Sketch.</desc>
          <defs />
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
          >
            <g
              id="Artboard-4"
              transform="translate(-312.000000, -203.000000)"
              stroke="#fff"
              stroke-width="2"
            >
              <g id="47" transform="translate(312.000000, 203.000000)">
                <path
                  id="Rectangle-460"
                  d="M20,15 L20,18.0026083 C20,19.1057373 19.1073772,20 18.0049107,20 L5.99508929,20 C4.8932319,20 4,19.1073772 4,18.0049107 L4,5.99508929 C4,4.8932319 4.89585781,4 5.9973917,4 L9,4"
                />
                <polyline
                  id="Path-93"
                  stroke-linejoin="round"
                  points="13 4 20.0207973 4 20.0207973 11.0191059"
                />
                <path id="Path-94" d="M19,5 L12,12" stroke-linejoin="round" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27px"
        height="27px"
        class="cursor-pointer z-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
        @click="closeImage"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <h3 class="text-2xl font-mono font-bold mt-8 ml-8 text-white">
      {{ parseInt(selectedNumImage) + 1 }} of {{ totalImages }}
    </h3>
    <div
      class="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full"
    >
      <img :src="selectedImage" alt="Home Image" class="w-full h-325" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import saveListing from '~/mixins/saveListing'
export default {
  mixins: [saveListing],
  props: {
    selectedImage: {
      type: String,
      required: true,
    },
    totalImages: {
      type: Number,
      required: true,
    },
    selectedNumImage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      like: this.$store.state.home.home.has_user_saved,
    }
  },
  computed: {
    ...mapState({
      home: (state) => state.home.home,
    }),
  },
  methods: {
    closeImage() {
      this.$emit('closeSelectedImage')
    },
    showModalShare() {
      this.$emit('showModalShare')
    },
  },
}
</script>
