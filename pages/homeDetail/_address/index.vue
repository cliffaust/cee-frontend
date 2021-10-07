<template>
  <div
    :class="[
      {
        'main-container': modal,
      },
      { 'main-container': modalMessage },
      { 'main-container': modalShare },
    ]"
  >
    <navbar></navbar>
    <div v-show="$route.query.media !== 'all'">
      <div class="image-container">
        <img
          :src="home.home_images[0].home_image"
          class="image"
          alt="Home Image"
        />
        <div class="icon-container-1" @click="seeAllImages">
          <font-awesome-icon :icon="['fas', 'image']" class="icon" />
          <p class="text">See all</p>
        </div>
        <div class="icon-container-2 noSelect">
          <div class="icon-container-save" @click.stop>
            <font-awesome-icon
              v-if="like"
              :icon="['fas', 'heart']"
              class="icon-like"
              @click="changeUnlikeState"
            />
            <font-awesome-icon
              v-else
              :icon="['far', 'heart']"
              class="icon-unlike"
              @click="changeLikeState"
            />
          </div>
          <font-awesome-icon
            :icon="['far', 'share-square']"
            class="icon"
            @click="modalShare = true"
          />
        </div>
      </div>
      <div class="container" @click.self="modal = false">
        <div class="description">
          <div class="address">{{ home.address }}</div>
          <div class="features">
            <div class="description-icon">
              <font-awesome-icon :icon="['fas', 'bed']" class="icon" />
              <span class="text">{{ home.number_bedrooms }}bd</span>
            </div>
            <div class="description-icon">
              <font-awesome-icon :icon="['fas', 'bath']" class="icon" />
              <span class="text">{{ home.number_bathrooms }}ba</span>
            </div>
            <div class="description-icon">
              <font-awesome-icon :icon="['fas', 'crop-alt']" class="icon" />
              <span v-if="home.home_size" class="text"
                >{{ home.home_size }}sqft</span
              >
              <span v-else class="text">No data</span>
            </div>
          </div>
          <div class="price">
            GH¢{{ home.home_price }}
            <span v-if="home.home_status === 0" class="home-status-text"
              >FOR RENT</span
            >
            <span v-if="home.home_status === 1" class="home-status-text"
              >FOR SALE</span
            >
          </div>
        </div>
        <div class="btn-container">
          <baseButton button-class="btn-primary" @click="modalMessage = true"
            >Message</baseButton
          >
          <div class="btn-container-1">
            <baseButton
              class="btn-call"
              button-class="btn-open"
              @click="modal = true"
              >Call</baseButton
            >
            <baseButton class="btn-tour" button-class="btn-open"
              >Tour</baseButton
            >
          </div>
        </div>
        <div class="popularity-report">
          <div class="popularity">
            This listing has been saved by {{ home.save_count }} users
          </div>
          <div class="report">
            You have a problem with this listing? Report it
            <a href="#">here</a>
          </div>
        </div>
        <div class="overview">
          <h1 class="heading">Overview</h1>
          <div class="overview__vitals">
            <div class="date-posted">Posted on 2nd September 2020</div>
            <div class="dues">
              Common monthly dues: GH¢{{ home.common_dues }}
            </div>
          </div>
          <div class="overview__description">
            <p v-if="home.describe_home.length < 500" class="text">
              {{ home.describe_home }}
            </p>
            <template v-if="home.describe_home.length >= 500">
              <p v-if="readMore" class="text">
                {{ home.describe_home }}
              </p>
              <p v-else class="text">
                {{ home.describe_home.slice(0, 500) }}....
              </p>
              <button
                v-if="readMore"
                class="read-more"
                @click="readMore = false"
              >
                Read Less
                <font-awesome-icon :icon="['fas', 'chevron-up']" class="icon" />
              </button>
              <button v-else class="read-more" @click="readMore = true">
                Read More
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  class="icon"
                />
              </button>
            </template>
          </div>
        </div>
        <template
          v-if="
            home.general_home_features.length +
              home.room_features.length +
              home.sitting_room_features.length +
              home.kitchen_features.length >
            0
          "
        >
          <div class="features">
            <div class="heading">Fact and Features</div>
            <div
              v-if="home.room_features.length > 0"
              class="room-features"
              :style="[
                readMoreFeature
                  ? { 'margin-bottom': '2rem' }
                  : { 'margin-bottom': '1rem' },
              ]"
            >
              <div class="feature-heading">Room Features</div>
              <ul class="list-features">
                <template
                  v-if="home.room_features.length > 15 && !readMoreFeature"
                >
                  <li
                    v-for="(room_feature, index) in home.room_features.slice(
                      0,
                      3
                    )"
                    :key="index"
                    class="item-features"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      class="icon"
                    />{{ room_feature.room_feature }}
                  </li>
                </template>
                <template v-else>
                  <li
                    v-for="(room_feature, index) in home.room_features"
                    :key="index"
                    class="item-features"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      class="icon"
                    />{{ room_feature.room_feature }}
                  </li>
                </template>
              </ul>
            </div>
            <div
              v-if="
                home.sitting_room_features.length > 0 &&
                (home.room_features.length < 15 || readMoreFeature)
              "
              class="sitting-room-features"
            >
              <div class="feature-heading">Sitting room Features</div>
              <ul class="list-features">
                <li
                  v-for="(
                    sitting_room_feature, index
                  ) in home.sitting_room_features"
                  :key="index"
                  class="item-features"
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-right']"
                    class="icon"
                  />{{ sitting_room_feature.sitting_room_feature }}
                </li>
              </ul>
            </div>
            <div
              v-if="
                home.kitchen_features.length > 0 &&
                (home.room_features.length + home.sitting_room_features.length <
                  15 ||
                  readMoreFeature)
              "
              class="kitchen-features"
            >
              <div class="feature-heading">Kitchen Features</div>
              <ul class="list-features">
                <li
                  v-for="(kitchen_feature, index) in home.kitchen_features"
                  :key="index"
                  class="item-features"
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-right']"
                    class="icon"
                  />{{ kitchen_feature.kitchen_feature }}
                </li>
              </ul>
            </div>
            <div
              v-if="
                home.general_home_features.length > 0 &&
                (home.room_features.length +
                  home.sitting_room_features.length +
                  home.kitchen_features.length <
                  15 ||
                  readMoreFeature)
              "
              class="general-features"
            >
              <div class="feature-heading">Other Features</div>
              <ul class="list-features">
                <li
                  v-for="(
                    general_home_feature, index
                  ) in home.general_home_features"
                  :key="index"
                  class="item-features"
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-right']"
                    class="icon"
                  />{{ general_home_feature.home_feature }}
                </li>
              </ul>
            </div>
          </div>
        </template>
        <template
          v-if="
            home.room_features.length +
              home.sitting_room_features.length +
              home.kitchen_features.length +
              home.general_home_features.length >=
            15
          "
        >
          <button
            v-if="readMoreFeature"
            class="read-more"
            @click="readMoreFeature = false"
          >
            Read Less Features
            <font-awesome-icon :icon="['fas', 'chevron-up']" class="icon" />
          </button>
          <button v-else class="read-more" @click="readMoreFeature = true">
            Read More Features
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="icon" />
          </button>
        </template>
      </div>
      <modal v-if="modal" @close="close">
        <h1 class="modal-heading">Contact List</h1>
        <div class="contact-list">
          <div
            v-for="(contact_number, index) in home.contact_numbers"
            :key="index"
            class="contact"
          >
            <div class="number">{{ contact_number.number }}</div>
            <div class="phone-icon">
              <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
            </div>
          </div>
          <div class="text">
            By making a call, you are agreeing to our
            <a href="#">call terms and conditions</a>
          </div>
        </div>
      </modal>
      <modal v-if="modalMessage" @close="closeMessage">
        <div class="message">
          <h1 class="message-header">Request on this listing</h1>
          <div class="input-container">
            <baseInput
              v-model="name"
              label="Full Name"
              placeholder="Enter your name"
            ></baseInput>
          </div>
          <div class="input-container">
            <baseInput
              v-model="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
            ></baseInput>
          </div>
          <div class="input-container">
            <baseInput
              v-model="number"
              label="Phone Number"
              placeholder="Enter your phone number"
            ></baseInput>
          </div>
          <div class="input-container">
            <baseTextArea
              v-model="message"
              label="Message"
              placeholder="Enter your message"
            ></baseTextArea>
          </div>
          <div class="send-btn">
            <baseButton button-class="btn-secondary">Send</baseButton>
          </div>
        </div>
      </modal>
    </div>
    <modal v-show="modalShare" @close="closeShareModal">
      <div class="share">
        <h1 class="share-header">Email this home</h1>
        <div class="input-container">
          <baseInput
            v-model="shareRecipientEmail"
            label="Recipient's email"
            placeholder="Enter email"
          ></baseInput>
        </div>
        <div class="input-container">
          <baseInput
            v-model="youShareEmail"
            label="Your Email"
            placeholder="Enter email"
            type="email"
          ></baseInput>
        </div>
        <div class="btn-cancel-share">
          <baseButton button-class="btn-open" @click="closeShareModal"
            >Cancel</baseButton
          >
          <baseButton button-class="btn-secondary">Share</baseButton>
        </div>
        <div class="link">
          <div class="url">
            {{ formatLink }}
          </div>
          <button
            v-clipboard:copy="formatLink"
            v-clipboard:success="displayCopyToolkit"
            v-clipboard:error="errorCopyToolkit"
            class="copy-link"
          >
            Copy Link
          </button>
          <div v-if="copyToolkit" class="copy-toolkit">Copied!</div>
        </div>
        <div class="share-social">
          <div class="text">Or, Share This Home Via:</div>
          <div class="icon-link">
            <a ref="facebookBtn" href="#">
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="icon-facebook"
              />
            </a>
            <a ref="twitterBtn" href="#">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="icon-twitter"
              />
            </a>

            <a ref="whatsappBtn" href="#">
              <font-awesome-icon
                :icon="['fab', 'whatsapp']"
                class="icon-whatsapp"
              />
            </a>
          </div>
        </div>
      </div>
    </modal>
    <client-only>
      <div v-show="$route.query.media === 'all'">
        <smallImageContainer
          v-for="(images, index) in home.home_images"
          :key="index"
          :image="images.home_image"
          :num="index"
          @selectImageNum="imageNum"
        ></smallImageContainer>
        <div v-if="imageSelectedNum !== null">
          <smallImageSelectedContainer
            :selected-image="home.home_images[imageSelectedNum].home_image"
            :total-images="home.home_images.length"
            :selected-num-image="imageSelectedNum"
            @closeSelectedImage="closeSelectedImage"
            @showModalShare="showModalShare"
          ></smallImageSelectedContainer>
        </div>
        <div class="tour-container">
          <div class="btn-container-tour">
            <baseButton button-class="btn-close btn-rounded">
              Request a tour</baseButton
            >
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Cookies from 'js-cookies'
import navbar from '~/components/homeInstance/navbar'
import modal from '~/components/defaultComponent/modal'
import baseInput from '~/components/defaultComponent/baseInput'
import baseTextArea from '~/components/defaultComponent/baseTextArea'
import baseButton from '~/components/defaultComponent/baseButton'
import smallImageContainer from '~/components/defaultComponent/smallImageContainer'
import smallImageSelectedContainer from '~/components/defaultComponent/smallImageSelectedContainer'
import saveListing from '~/mixins/saveListing'
export default {
  components: {
    navbar,
    modal,
    baseInput,
    baseTextArea,
    baseButton,
    smallImageContainer,
    smallImageSelectedContainer,
  },
  mixins: [saveListing],
  validate({ route }) {
    if (route.query.media === 'all' || !route.query.media) {
      return true
    } else {
      return false
    }
  },
  data() {
    return {
      readMore: false,
      modal: false,
      modalMessage: false,
      readMoreFeature: false,
      message: '',
      name: '',
      email: '',
      number: '',
      imageSelectedNum: null,
      shareRecipientEmail: '',
      youShareEmail: this.$store.state.user_profile.email || '',
      modalShare: false,
      like: this.$store.state.home.home.has_user_saved,
      copyToolkit: false,
    }
  },
  async fetch({ store, params, error }) {
    try {
      await store.dispatch('home/addHome', {
        slug: params.address,
        token: store.state.signin.token,
      })
    } catch (e) {
      error({ statusCode: 503 })
    }
  },
  computed: {
    ...mapState({
      home: (state) => state.home.home,
    }),
    formatLink() {
      return process.client ? window.location.href : ''
    },
  },
  mounted() {
    const postUrl = encodeURI(location.href)
    const postTitle = `Check out this home for ${
      this.home.home_status === 1 ? 'sale' : 'rent'
    } at ${postUrl}`
    this.$refs.facebookBtn.setAttribute(
      'href',
      `https://www.facebook.com/sharer.php?u=${postUrl}
    `
    )
    this.$refs.twitterBtn.setAttribute(
      'href',
      `https://twitter.com/share?url=${postUrl}&text=${postTitle}
    `
    )
    this.$refs.whatsappBtn.setAttribute(
      'href',
      `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}
    `
    )
  },
  methods: {
    close() {
      this.modal = false
    },
    closeShareModal() {
      this.modalShare = false
    },
    closeMessage() {
      this.modalMessage = false
    },
    seeAllImages() {
      this.$router.push({ query: { media: 'all' } })
    },
    imageNum(num) {
      this.imageSelectedNum = num
    },
    goBack() {
      this.$router.push({ query: { media: null } })
    },
    closeSelectedImage() {
      this.imageSelectedNum = null
    },
    showModalShare() {
      this.modalShare = true
    },
    displayCopyToolkit() {
      this.copyToolkit = true
      setTimeout(() => {
        this.copyToolkit = false
      }, 1500)
    },
    errorCopyToolkit() {
      alert('Failed to copy texts')
    },
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  height: 30rem;
  position: relative;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .icon-container-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: #00233393;
    padding: 0.8rem 1rem;
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-radius: 6px;
    width: 9.5rem;

    .icon {
      width: 15px;
      height: 15px;
      color: #ffffff;
    }

    .text {
      font-size: 1.6rem;
      color: #ffffff;
      font-weight: 600;
    }
  }
  .icon-container-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.8rem 1rem;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 6px;
    width: 9rem;

    .icon {
      width: 25px;
      height: 25px;
      color: #ffffff;
      transition: 0.2s ease;

      &:hover {
        color: $primary-bgcolor-2;
      }
    }
  }
}

.container {
  padding: 1rem 2.5rem;
}

.description {
  .address {
    font-size: 2.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
    font-family: $secondary-font-1;
  }
  .features {
    display: flex;
    align-items: center;
    margin: 1.5rem 0;

    .text {
      font-size: 1.6rem;
    }

    .icon {
      width: 1.6rem;
      height: 1.6rem;
    }

    .description-icon {
      margin-right: 1.5rem;
    }
  }

  .price {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: $secondary-font-1;
    display: flex;
    align-items: center;

    .home-status-text {
      font-weight: 700;
      font-size: 1.3rem;
      display: block;
      margin-left: 7px;
      margin-bottom: -5px;
      font-family: $primary-font;
    }
  }
}

.btn-container {
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 2rem auto;

  &-1 {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;

    .btn-call,
    .btn-tour {
      flex: 0 0 46%;
    }
  }
}

.popularity-report {
  .popularity,
  .report {
    font-size: 1.5rem;
  }

  .popularity {
    margin-bottom: 0.6rem;
  }
}

.overview {
  margin: 2rem 0;
  .heading {
    font-size: 2.2rem;
  }
  &__vitals {
    display: flex;
    align-items: center;
    margin-top: 2rem;

    .date-posted {
      font-size: 1.4rem;
      padding: 0 1rem 0 0;
      border-right: 1px solid #eee;
    }

    .dues {
      font-size: 1.4rem;
      padding: 0 0 0 1rem;
    }
  }
  &__description {
    margin-top: 2rem;

    .text {
      font-size: 1.4rem;
      white-space: pre-wrap;
    }
  }
}

.modal-heading {
  font-size: 2.2rem;
}

.contact-list {
  margin-top: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .text {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &:not(:last-child) {
      margin-bottom: 0.4rem;
    }

    // &::after {
    //   content: '';
    //   position: absolute;
    //   width: 75%;
    //   height: 1px;
    //   background-color: #eee;
    //   bottom: 0.2rem;
    //   left: 50%;
    //   right: 50%;
    //   transform: translateX(-50%);
    // }

    .number {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .icon {
      width: 20px;
      height: 20px;
      color: $primary-bgcolor-2;
    }
  }
}

.phone-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  transition: 0.4s ease;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
}

.read-more {
  font-size: 1.8rem;
  margin-top: 0.8rem;
  cursor: pointer;
  padding: 1rem;
  border: none;
  background-color: #eee;
  transition: 0.3s ease;
  border-radius: 1rem;
  font-family: $secondary-font-1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 20px;
    height: 20px;
    margin-left: 0.8rem;
    margin-bottom: -4px;
  }

  &:focus {
    outline: none;
  }
}

.features {
  .heading {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .room-features,
  .sitting-room-features,
  .kitchen-features,
  .general-features {
    margin-left: 1rem;
    margin-bottom: 2rem;
    .feature-heading {
      font-size: 1.8rem;
      padding: 3px;
      display: inline-block;
      border-bottom: 1px solid #eee;
    }

    .list-features {
      margin-top: 1rem;
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      .item-features {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        flex: 0 0 50%;

        .icon {
          width: 10px;
          height: 20px;
          margin-right: 0.6rem;
        }
      }
    }
  }
}

.share-social {
  margin-top: 2rem;

  .text {
    font-size: 3rem;
    display: block;
    font-family: $secondary-font-3;
  }

  .icon-link {
    display: flex;
    justify-content: space-between;
    width: 18rem;
    margin-top: 0.8rem;

    .icon-facebook {
      color: #3b5998;
    }
    .icon-twitter {
      color: #1da1f2;
    }
    .icon-whatsapp {
      color: #25d366;
    }

    .icon-facebook,
    .icon-twitter,
    .icon-whatsapp {
      width: 2.8rem;
      height: 2.8rem;
      cursor: pointer;
      transition: 0.5s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: #eee;
  margin-top: 2rem;
  position: relative;
}

.url {
  margin-right: 10px;
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.copy-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding-top: 8px;
  padding-bottom: 8px;
  color: inherit;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 2px;
  text-transform: capitalize;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid #333;
  cursor: pointer;
}

.copy-toolkit {
  padding: 1rem 2.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  width: 100px;
  color: $color-white;
  background-color: $primary-bgcolor-1;
  border-radius: 50px;
  position: absolute;
  top: -82%;
  right: 0;

  cursor: pointer;

  &::before {
    content: '';
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1rem solid $primary-bgcolor-1;
    border-bottom: 1rem solid transparent;
    position: absolute;
    bottom: -46%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.message {
  .send-btn {
    margin-top: 1.5rem;
  }
}

.input-container {
  margin-top: 2rem;
}

.tour-container {
  position: fixed;
  margin-bottom: 0;
  width: 100%;
  padding: 1rem;
  margin-top: 0;
  bottom: 0;
  z-index: 50;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}

.btn-container-tour {
  width: 90%;
}

.main-container {
  height: 100%;
  width: 100%;
  position: fixed;
}

.icon-container-save {
  padding: 1rem;
}
.icon-unlike {
  width: 2.6rem;
  height: 2.6rem;
  color: #fff;
  z-index: 100;
}
.icon-like {
  width: 2.6rem;
  height: 2.6rem;
  color: #e63946;
  z-index: 100;
}

.share {
  padding: 1rem;
  margin-top: 5rem;

  &-header {
    font-size: 2.2rem;
    text-align: center;
    font-weight: 500;
  }

  .btn-cancel-share {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
}
</style>
