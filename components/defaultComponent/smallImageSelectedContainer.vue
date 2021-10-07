<template>
  <div class="backdrop">
    <div class="selected-image-option">
      <div class="save-and-share">
        <font-awesome-icon
          v-if="like"
          :icon="['fas', 'heart']"
          class="icon-1 icon-like"
          @click="changeUnlikeState"
        />
        <font-awesome-icon
          v-else
          :icon="['far', 'heart']"
          class="icon-1 icon-unlike"
          @click="changeLikeState"
        />
        <!-- <font-awesome-icon v-if="like" :icon="['far', 'heart']" class="icon-1 icon" /> -->
        <font-awesome-icon
          :icon="['far', 'share-square']"
          class="icon icon-2"
          @click="showModalShare"
        />
      </div>

      <font-awesome-icon
        :icon="['fas', 'times']"
        class="icon"
        @click="closeImage"
      />
    </div>
    <h3 class="total-images">
      {{ parseInt(selectedNumImage) + 1 }} of {{ totalImages }}
    </h3>
    <div class="image-content">
      <img :src="selectedImage" alt="Home Image" class="photo" />
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

<style lang="scss" scoped>
.photo {
  width: 100%;
  height: 330px;
  object-fit: cover;
}

.total-images {
  z-index: 30;
  color: #fff;
  font-size: 2rem;
  margin-left: 20px;
  margin-top: 30px;
}

.icon-1 {
  transition: 0.2s ease;
  margin-right: 10px;

  &:hover {
    color: none;
  }
}

.icon-2 {
  transition: 0.2s ease;

  &:hover {
    color: $primary-bgcolor-2;
  }
}

.icon-unlike {
  width: 2.6rem;
  height: 2.6rem;
  color: #fff;
  z-index: 100;
  cursor: pointer;
}
.icon-like {
  width: 2.6rem;
  height: 2.6rem;
  color: #e63946;
  z-index: 100;
  cursor: pointer;
}

.image-content {
  cursor: pointer;
  position: fixed;
  top: 50%;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
}

.backdrop {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;

  .selected-image-option {
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    margin-top: 70px;
    .icon {
      width: 27px;
      height: 27px;

      color: #fff;

      z-index: 30;

      cursor: pointer;
    }
  }
}
</style>
