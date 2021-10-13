<template>
  <div
    :class="[
      {
        'h-screen overflow-hidden': modal,
      },
      { 'h-screen overflow-hidden': modalMessage },
      { 'h-screen overflow-hidden': modalShare },
    ]"
  >
    <navbar></navbar>
    <div v-show="$route.query.media !== 'all'">
      <div class="h-325 relative">
        <img :src="land.cover_image" class="w-full h-full" alt="land Image" />
        <div
          class="cursor-pointer flex items-center gap-4 p-2 absolute bottom-6 right-4 bg-gray-700 bg-opacity-70 rounded-lg"
          @click="seeAllImages"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
            <title>photo</title>
            <desc>Created with Sketch.</desc>
            <defs />
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Artboard-4"
                transform="translate(-664.000000, -159.000000)"
              >
                <g id="35" transform="translate(664.000000, 159.000000)">
                  <rect
                    id="Rectangle-433"
                    stroke="#fff"
                    stroke-width="2"
                    x="1"
                    y="4"
                    width="22"
                    height="16"
                    rx="1"
                  />
                  <circle id="Oval-39" fill="#333333" cx="6" cy="9" r="2" />
                  <path
                    id="Path-54"
                    d="M21,10 C20,10 17,10 14,12 C11,14 11,17 11,18"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Path-55"
                    d="M4,18 C4,17 5,15 7.5,14 C10,13 13,13 13,13"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </g>
          </svg>
          <p class="text-xl text-white font-bold">See all</p>
        </div>
        <div class="flex absolute top-6 right-4 gap-4 items-center">
          <div class="cursor-pointer" @click.stop>
            <svg
              v-if="like"
              width="28px"
              height="28px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#e63946"
              @click.stop="changeLandLikeState"
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
              @click.stop="changeLandUnLikeState"
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
      </div>
      <div class="p-4" @click.self="modal = false">
        <div>
          <div class="text-3xl truncate font-mono font-bold">
            {{ land.address }}
          </div>
          <div class="flex mb-3">
            <div class="mr-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8 4h10a2 2 0 0 1 2 2v10m-.584 3.412a1.994 1.994 0 0 1 -1.416 .588h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.052 .586 -1.414"
                ></path>
                <path d="M3 3l18 18"></path>
              </svg>
              <span v-if="land.land_size" class="text-xl"
                >{{ land.land_size }}sqft</span
              >
              <span v-else class="text-xl">No data</span>
            </div>
          </div>
          <div class="text-2xl font-mono font-bold">
            GH¢{{ land.land_price.toLocaleString() }}
          </div>
          <nuxt-link
            v-if="inSaves"
            v-slot="{ href, navigate }"
            to="/saved-lands"
            custom
          >
            <button
              :href="href"
              class="text-xl my-4 text-blue-700 font-bold flex items-center gap-2"
              @click="navigate"
            >
              View in saved lands
            </button>
          </nuxt-link>
          <button
            v-else
            :disabled="disableSaveBtn"
            class="text-xl my-4 text-blue-700 font-bold flex items-center gap-2"
            @click="saveLand"
          >
            Save this land
          </button>
        </div>
        <div class="flex flex-col gap-4 my-4">
          <ButtonPrimary
            class="w-full !py-5 text-xl"
            @click="modalMessage = true"
            >Message</ButtonPrimary
          >
          <div class="flex gap-4">
            <ButtonPrimaryOpen
              class="w-full !py-5 text-xl"
              @click="modal = true"
              >Call</ButtonPrimaryOpen
            >
            <ButtonPrimaryOpen class="w-full !py-5 text-xl"
              >Tour</ButtonPrimaryOpen
            >
          </div>
        </div>
        <div>
          <div
            v-if="land.like_count > 4"
            class="text-xl mb-2 font-bold text-blue-700"
          >
            This listing has been liked by {{ land.like_count }} users
          </div>
          <div class="text-xl font-bold">
            You have a problem with this listing? Report it
            <a href="#" class="underline text-blue-600">here</a>
          </div>
        </div>
        <div class="mt-6">
          <h1 class="font-bold font-mono text-3xl">Overview</h1>
          <div class="flex mt-2 gap-4">
            <div class="p-4 text-xl bg-gray-50 rounded-lg">
              Posted on 2nd September 2020
            </div>
            <div class="p-4 text-xl bg-gray-50 rounded-lg">
              Common monthly dues: GH¢{{ land.land_dues }}
            </div>
          </div>
          <div class="mt-6">
            <h1 class="font-bold font-mono text-3xl">Description</h1>
            <p v-if="land.describe_land.length < 500" class="text-xl mt-4">
              {{ land.describe_land }}
            </p>
            <template v-if="land.describe_land.length >= 500">
              <p v-if="readMore" class="text-xl mt-4">
                {{ land.describe_land }}
              </p>
              <p v-else class="text-xl mt-4">
                {{ land.describe_land.slice(0, 500) }}....
              </p>
              <button
                v-if="readMore"
                class="text-xl my-4 text-blue-700 font-bold flex items-center gap-2"
                @click="readMore = false"
              >
                Read Less
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                v-else
                class="text-xl my-4 text-blue-700 font-bold flex items-center gap-2"
                @click="readMore = true"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </template>
          </div>
        </div>
      </div>
      <modal v-if="modal" @close="close">
        <h1 class="font-bold font-mono text-3xl mt-2">Contact List</h1>
        <div class="mt-10">
          <div
            v-for="(contact_number, index) in home.contact_numbers"
            :key="index"
            class="flex items-center mb-4 bg-gray-100 justify-between box-content px-4 py-4 rounded-lg"
          >
            <div class="text-xl font-bold">{{ contact_number.number }}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div class="text-xl font-bold mt-6">
            By making a call, you are agreeing to our
            <a class="text-blue-700" href="#">call terms and conditions</a>
          </div>
        </div>
      </modal>
      <modal v-if="modalMessage" @close="closeMessage">
        <div>
          <h1 class="font-bold font-mono text-3xl mt-2">
            Request on this listing
          </h1>
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
          <div class="mt-8">
            <ButtonPrimary :class="['w-full', '!py-5', 'text-xl']"
              >Send</ButtonPrimary
            >
          </div>
        </div>
      </modal>
    </div>
    <modal v-show="modalShare" @close="closeShareModal">
      <div>
        <h1 class="font-bold font-mono text-3xl mt-2">Email this home</h1>
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
        <div class="mt-8">
          <ButtonPrimary class="w-full h-16 text-xl">Share</ButtonPrimary>
          <ButtonPrimaryOpen
            class="w-full h-16 text-xl mt-4"
            @click="closeShareModal"
            >Cancel</ButtonPrimaryOpen
          >
        </div>
        <div
          class="flex items-center gap-1 px-4 py-4 rounded-lg bg-gray-100 mt-6"
        >
          <div class="text-xl font-bold truncate">
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
        <div class="flex flex-col mt-10">
          <div class="text-3xl font-bold font-mono">
            Or, Share This Home Via:
          </div>
          <div class="flex gap-6 justify-center items-center mt-6">
            <a
              ref="facebookBtn"
              class="w-20 h-20 rounded-full shadow-xl bg-white flex justify-center items-center cursor-pointer"
            >
              <svg
                width="32px"
                height="32px"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z"
                  fill="#6681eb"
                />
              </svg>
            </a>
            <a
              ref="twitterBtn"
              class="w-20 h-20 rounded-full shadow-xl bg-white flex justify-center items-center cursor-pointer"
            >
              <svg
                width="32px"
                height="32px"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Twitter</title>
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  fill="#1DA1F2"
                />
              </svg>
            </a>

            <a
              ref="whatsappBtn"
              class="w-20 h-20 rounded-full shadow-xl bg-white flex justify-center items-center cursor-pointer"
            >
              <svg
                width="32px"
                height="32px"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>WhatsApp</title>
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  fill="#25D366"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </modal>
    <client-only>
      <div v-show="$route.query.media === 'all'">
        <smallImageContainer
          v-for="(images, index) in land.land_images"
          :key="index"
          :image="images.land_image"
          :num="index"
          @selectImageNum="imageNum"
        ></smallImageContainer>
        <div v-if="imageSelectedNum !== null">
          <smallImageSelectedContainer
            :selected-image="land.land_images[imageSelectedNum].land_image"
            :total-images="land.land_images.length"
            :selected-num-image="imageSelectedNum"
            @closeSelectedImage="closeSelectedImage"
            @showModalShare="showModalShare"
          ></smallImageSelectedContainer>
        </div>
        <div class="w-full px-5 fixed bottom-10">
          <ButtonPrimary class="w-full !py-5 text-xl">
            Request a tour</ButtonPrimary
          >
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import navbar from '~/components/homeInstance/navbar'
import modal from '~/components/defaultComponent/modal'
import baseInput from '~/components/defaultComponent/baseInput'
import baseTextArea from '~/components/defaultComponent/baseTextArea'
import ButtonPrimary from '~/components/defaultComponent/button-primary.vue'
import ButtonPrimaryOpen from '~/components/defaultComponent/button-primary-open.vue'
import smallImageContainer from '~/components/defaultComponent/smallImageContainer'
import smallImageSelectedContainer from '~/components/defaultComponent/smallImageSelectedContainer'
import landCardMixin from '~/mixins/landCardMixin'
export default {
  components: {
    navbar,
    modal,
    baseInput,
    baseTextArea,
    smallImageContainer,
    smallImageSelectedContainer,
    ButtonPrimary,
    ButtonPrimaryOpen,
  },
  mixins: [landCardMixin],
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
      like: this.$store.state.land.land.has_user_liked,
      copyToolkit: false,
      disableSaveBtn: false,
    }
  },
  async fetch({ store, params, error }) {
    const token = store.state.signin.token
    let exist = false
    try {
      if (token) {
        try {
          const { data } = await axios.get(
            `${process.env.baseUrl}/user-saved-lands/`,
            {
              headers: {
                Authorization: 'Token ' + token,
              },
            }
          )

          exist = data.results.some((val) => {
            return val.land.slug === params.address
          })
        } catch (error) {
          console.log(error.response)
        }
        store.commit('ALREADY_IN_SAVES', exist)
      } else if (store.state.saved_lands_in_cookies) {
        let land = store.state.saved_lands_in_cookies
        land = JSON.parse(decodeURIComponent(land))

        exist = land.some((val) => {
          return val.slug === params.address
        })
        store.commit('ALREADY_IN_SAVES', exist)
      }
      await store.dispatch('land/addLand', {
        slug: params.address,
        token: store.state.signin.token,
      })
    } catch (e) {
      error({ statusCode: 503 })
    }
  },
  computed: {
    ...mapState({
      land: (state) => state.land.land,
    }),
    ...mapState(['inSaves']),
    formatLink() {
      return process.client ? window.location.href : ''
    },
  },
  mounted() {
    const postUrl = encodeURI(location.href)
    const postTitle = `Check out this land for ${
      this.land.land_status === 1 ? 'sale' : 'rent'
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

<style lang="postcss" scoped>
.list-features {
  @apply flex list-none mt-4 flex-wrap;
}

.item-features {
  @apply flex items-center gap-2 text-xl w-6/12;
}

.features {
  @apply mb-4;
}

.input-container {
  @apply mt-8;
}

.heading {
  @apply font-bold text-2xl;
}

.copy-link {
  @apply inline-flex items-center justify-center h-auto px-3 text-center text-xl font-bold text-blue-700 cursor-pointer whitespace-nowrap;
}
</style>
