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
        <img :src="home.cover_image" class="w-full h-full" alt="Home Image" />
        <div
          class="absolute py-1 px-1.5 top-4 text-sm left-5 z-10 bg-green-300 font-bold rounded-md"
        >
          {{ home.home_status }}
        </div>
        <div
          class="cursor-pointer flex items-center gap-4 p-1 absolute bottom-4 right-4 bg-gray-700 bg-opacity-70 rounded-md"
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
          <p class="text-sm text-white font-bold">See all</p>
        </div>
        <div class="flex absolute top-4 right-3 gap-4 items-center">
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
      </div>
      <div class="p-4" @click.self="modal = false">
        <div>
          <div class="text-lg truncate font-mono font-bold">
            {{ home.address }}
          </div>
          <div class="flex mb-2">
            <div class="mr-2.5 flex items-center gap-2 mt-1.5">
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
                <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6"></path>
                <circle cx="7" cy="10" r="1"></circle>
              </svg>
              <span class="text-sm">{{ home.number_bedrooms }}bd</span>
            </div>
            <div class="mr-3 flex items-center gap-2">
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
                  d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7"
                ></path>
                <path d="M11 13v2m0 3v2m4 -5v2m0 3v2"></path>
              </svg>
              <span class="text-sm">{{ home.number_bathrooms }}ba</span>
            </div>
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
              <span v-if="home.home_size" class="text-sm"
                >{{ home.home_size }}sqft</span
              >
              <span v-else class="text-sm">No data</span>
            </div>
          </div>
          <div class="text-sm font-mono font-bold">
            GH¢{{ home.home_price.toLocaleString() }}
          </div>
          <nuxt-link
            v-if="inSaves"
            v-slot="{ href, navigate }"
            to="/saved-homes"
            custom
          >
            <button
              :href="href"
              class="text-sm my-3 text-blue-700 font-bold flex items-center gap-2"
              @click="navigate"
            >
              View in saved homes
            </button>
          </nuxt-link>
          <button
            v-else
            :disabled="disableSaveBtn"
            class="text-sm my-3 text-blue-700 font-bold flex items-center gap-2"
            @click="saveHome"
          >
            Save this home
          </button>
        </div>
        <div class="flex flex-col gap-4 my-3">
          <ButtonPrimary
            class="w-full !py-3 text-sm"
            @click="modalMessage = true"
            >Message</ButtonPrimary
          >
          <div class="flex gap-4">
            <ButtonPrimaryOpen
              class="w-full !py-3 text-sm"
              @click="modal = true"
              >Call</ButtonPrimaryOpen
            >
            <ButtonPrimaryOpen
              class="w-full !py-3 text-sm"
              @click="modalTour = true"
              >Tour</ButtonPrimaryOpen
            >
          </div>
        </div>
        <div>
          <div
            v-if="home.like_count > 4"
            class="text-sm mb-1 font-bold text-blue-700"
          >
            This listing has been liked by {{ home.like_count }} users
          </div>
          <div class="text-sm font-bold">
            You have a problem with this listing? Report it
            <a href="#" class="underline text-blue-600">here</a>
          </div>
        </div>
        <div class="mt-6">
          <h1 class="font-bold font-mono text-base">Overview</h1>
          <div class="flex mt-1.5 gap-4">
            <div class="p-3 text-sm bg-gray-50 rounded-md">
              Posted on 2nd September 2020
            </div>
            <div class="p-3 text-sm bg-gray-50 rounded-md">
              Common monthly dues: GH¢{{ home.hoa_dues }}
            </div>
          </div>
          <div class="mt-4">
            <h1 class="font-bold font-mono text-base">Description</h1>
            <p v-if="home.describe_home.length < 500" class="text-sm mt-3">
              {{ home.describe_home }}
            </p>
            <template v-if="home.describe_home.length >= 500">
              <p v-if="readMore" class="text-sm mt-3">
                {{ home.describe_home }}
              </p>
              <p v-else class="text-sm mt-3">
                {{ home.describe_home.slice(0, 500) }}....
              </p>
              <button
                v-if="readMore"
                class="text-sm my-3 text-blue-700 font-bold flex items-center gap-2"
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
                class="text-sm my-3 text-blue-700 font-bold flex items-center gap-2"
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
        <template
          v-if="
            home.general_home_features.length +
              home.room_features.length +
              home.sitting_room_features.length +
              home.kitchen_features.length >
            0
          "
        >
          <div>
            <h1 class="font-bold font-mono text-base">Features</h1>
            <div class="shadow-md mt-3 p-3 rounded-md">
              <div v-if="home.room_features.length > 0" class="features">
                <div class="heading">Room Features</div>
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
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 10H10V14H14V10Z" fill="currentColor" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9ZM9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9C8 8.44772 8.44772 8 9 8Z"
                          fill="currentColor"
                        /></svg
                      >{{ room_feature.room_feature }}
                    </li>
                  </template>
                  <template v-else>
                    <li
                      v-for="(room_feature, index) in home.room_features"
                      :key="index"
                      class="item-features"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 10H10V14H14V10Z" fill="currentColor" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9ZM9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9C8 8.44772 8.44772 8 9 8Z"
                          fill="currentColor"
                        /></svg
                      >{{ room_feature.room_feature }}
                    </li>
                  </template>
                </ul>
              </div>
              <div
                v-if="
                  home.sitting_room_features.length > 0 &&
                  (home.room_features.length < 15 || readMoreFeature)
                "
                class="features"
              >
                <div class="heading">Sitting room Features</div>
                <ul class="list-features">
                  <li
                    v-for="(
                      sitting_room_feature, index
                    ) in home.sitting_room_features"
                    :key="index"
                    class="item-features"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 10H10V14H14V10Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9ZM9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9C8 8.44772 8.44772 8 9 8Z"
                        fill="currentColor"
                      /></svg
                    >{{ sitting_room_feature.sitting_room_feature }}
                  </li>
                </ul>
              </div>
              <div
                v-if="
                  home.kitchen_features.length > 0 &&
                  (home.room_features.length +
                    home.sitting_room_features.length <
                    15 ||
                    readMoreFeature)
                "
                class="features"
              >
                <div class="heading">Kitchen Features</div>
                <ul class="list-features">
                  <li
                    v-for="(kitchen_feature, index) in home.kitchen_features"
                    :key="index"
                    class="item-features"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 10H10V14H14V10Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9ZM9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9C8 8.44772 8.44772 8 9 8Z"
                        fill="currentColor"
                      /></svg
                    >{{ kitchen_feature.kitchen_feature }}
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
                class="features"
              >
                <div class="heading">Other Features</div>
                <ul class="list-features">
                  <li
                    v-for="(
                      general_home_feature, index
                    ) in home.general_home_features"
                    :key="index"
                    class="item-features"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 10H10V14H14V10Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9ZM9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9C8 8.44772 8.44772 8 9 8Z"
                        fill="currentColor"
                      /></svg
                    >{{ general_home_feature.home_feature }}
                  </li>
                </ul>
              </div>
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
                  v-if="readMore"
                  class="text-sm my-3 text-blue-700 font-bold flex items-center gap-2"
                  @click="readMoreFeature = false"
                >
                  Read Less Features
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
                  class="text-sm my-3 text-blue-700 font-bold flex items-center gap-2"
                  @click="readMoreFeature = true"
                >
                  Read More Features
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
        </template>
      </div>
      <div v-if="home.reviews.length > 0" class="mt-2 ml-4 mr-4 mb-8">
        <div class="text-lg font-mono mb-2.5 mt-5 font-bold">Reviews</div>
        <div class="flex mb-4 items-center">
          <div class="text-xs font-bold font-mono">{{ averageRating }}</div>
          <div class="flex items-center ml-2.5">
            <StarRating :rating="averageRating" :font-size="20"></StarRating>
            <div class="text-xs ml-1 font-bold font-mono">
              {{ home.reviews.length }} Reviews
            </div>
          </div>
        </div>

        <div>
          <div
            v-for="(rate, index) in rates"
            :key="index"
            class="flex items-center mb-2 gap-2"
          >
            <div class="text-xs font-mono text-bold">{{ rate }}</div>
            <div class="flex-grow cursor-pointer" @click="filterReview(rate)">
              <PercentageBar :percent="starPercentage(rate)"></PercentageBar>
            </div>
            <div class="text-xs font-mono fond-bold">
              {{ starPercentage(rate) }}%
            </div>
          </div>
        </div>
        <div
          v-if="filterReviews"
          class="text-blue-700 cursor-pointer inline-block text-sm font-bold mt-2 mb-2 ml-2"
          @click="filterReviews = null"
        >
          Reset Filter
        </div>
        <div v-if="!spinner">
          <template v-if="filterReviews">
            <div
              v-for="review in filterReviews.slice(0, 4)"
              :key="review.id"
              class="mt-5"
            >
              <UserReview :review="review"></UserReview>
            </div>
          </template>
          <template v-else>
            <div
              v-for="review in home.reviews.slice(0, 4)"
              :key="review.id"
              class="mt-5"
            >
              <UserReview :review="review"></UserReview>
            </div>
          </template>
        </div>
      </div>
      <div v-if="spinner">
        <LoadingSpinner></LoadingSpinner>
      </div>
      <div>
        <AllReviews
          :show-modal="showModal"
          :reviews="filterReviews ? filterReviews : home.reviews"
          @close="close"
        ></AllReviews>
      </div>

      <div v-if="!spinner" class="flex justify-center">
        <ButtonPrimaryOpen
          v-if="home.reviews.length > 4"
          class="w-7/7 py-4 text-2xl"
          @click="showModal = true"
          >View All Reviews</ButtonPrimaryOpen
        >
      </div>
      <Footer></Footer>

      <modal v-show="modal" @close="close">
        <h1 class="font-bold font-mono text-base mt-1">Contact List</h1>
        <div class="mt-4">
          <div
            v-for="(contact_number, index) in home.contact_numbers"
            :key="index"
            class="flex items-center mb-3 bg-gray-100 justify-between box-content px-4 py-2 rounded-md"
          >
            <div class="text-sm font-bold">{{ contact_number.number }}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @click="makeAPhoneCall(contact_number.number)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div class="text-sm font-bold mt-6">
            By making a call, you are agreeing to our
            <a class="text-blue-700" href="#">call terms and conditions</a>
          </div>
        </div>
      </modal>
      <modal v-show="modalMessage" @close="closeMessage">
        <div>
          <h1 class="font-bold font-mono text-base mt-1">
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
          <div class="mt-6">
            <ButtonPrimary :class="['w-full', '!py-3', 'text-sm']"
              >Send</ButtonPrimary
            >
          </div>
        </div>
      </modal>
    </div>
    <modal v-show="modalTour" @close="closeTourModal">
      <div>
        <h1 class="font-bold font-mono text-base mt-1">Request for a tour</h1>
        <div class="input-container">
          <baseInput
            v-model="tourName"
            label="Full Name"
            placeholder="Enter your name"
          ></baseInput>
        </div>
        <div class="input-container">
          <baseInput
            v-model="tourEmail"
            label="Email"
            placeholder="Enter your email"
            type="email"
          ></baseInput>
        </div>
        <div class="input-container">
          <baseInput
            v-model="tourNumber"
            label="Phone Number"
            placeholder="Enter your phone number"
          ></baseInput>
        </div>
        <h1 class="font-bold font-mono text-base mt-4 mb-6">
          Select a preffered time
        </h1>
        <client-only>
          <div v-swiper="swiperOption" class="swiper-container">
            <div class="swiper-wrapper">
              <div
                v-for="date_time in home.open_date_time"
                :key="date_time.id"
                :class="[
                  'swiper-slide',
                  'date-time-card',
                  [
                    selectedDateTime === date_time.open_day
                      ? '!bg-primary-yellow'
                      : '',
                  ],
                ]"
                @click="changeSelectedDateTime(date_time.open_day)"
              >
                <div>{{ date_time.open_day }}</div>
                <div>
                  {{ date_time.open_time.split(':').splice(0, 2).join(':') }} -
                  {{ date_time.end_time.split(':').splice(0, 2).join(':') }}
                </div>
              </div>
            </div>
            <svg
              slot="button-prev"
              xmlns="http://www.w3.org/2000/svg"
              class="swiper-button-prev h-5 w-5 -ml-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>

            <svg
              slot="button-next"
              xmlns="http://www.w3.org/2000/svg"
              class="swiper-button-next h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </client-only>
        <div
          v-if="selectedDateTime"
          class="cursor-pointer text-blue-700 font-bold mt-4 text-sm"
          @click="selectedDateTime = null"
        >
          reset
        </div>
        <div class="mt-8">
          <ButtonPrimary class="w-full h-10 text-sm"
            >Request for this time</ButtonPrimary
          >
        </div>
      </div>
    </modal>
    <modal v-show="modalShare" @close="closeShareModal">
      <div class="min-h-screen">
        <h1 class="font-bold font-mono text-base mt-1">Email this home</h1>
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
          <ButtonPrimary class="w-full h-10 text-sm">Share</ButtonPrimary>
        </div>
        <div
          class="flex items-center gap-1 px-3 py-3 rounded-md bg-gray-100 mt-4"
        >
          <div class="text-sm font-bold truncate">
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
        </div>
        <div class="flex flex-col mt-6">
          <div class="text-base font-bold font-mono">
            Or, Share This Home Via:
          </div>
          <div class="flex gap-6 justify-center items-center mt-4">
            <a
              ref="facebookBtn"
              class="w-14 h-14 rounded-full shadow-xl bg-white flex justify-center items-center cursor-pointer"
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
              class="w-14 h-14 rounded-full shadow-xl bg-white flex justify-center items-center cursor-pointer"
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
              class="w-14 h-14 rounded-full shadow-xl bg-white flex justify-center items-center cursor-pointer"
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
        <Message :show-message-box="copyToolkit">{{ messageModal }}</Message>
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
        <div class="w-full px-5 fixed bottom-10">
          <ButtonPrimary class="w-full !py-3 text-sm" @click="modalTour = true">
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
import saveListing from '~/mixins/saveListing'
import StarRating from '~/components/defaultComponent/star-rating'
import Message from '~/components/defaultComponent/message'
import Footer from '~/components/defaultComponent/Footer.vue'
import LoadingSpinner from '~/components/defaultComponent/loading-spinner'
import PercentageBar from '~/components/defaultComponent/percentage-bar'
import UserReview from '~/components/defaultComponent/user-review'
import AllReviews from '~/components/defaultComponent/all-reviews.vue'
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
    StarRating,
    PercentageBar,
    UserReview,
    LoadingSpinner,
    Footer,
    Message,
    AllReviews,
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
    const userName =
      this.$store.state.user_profile.first_name &&
      this.$store.state.user_profile.last_name
        ? this.$store.state.user_profile.first_name +
          ' ' +
          this.$store.state.user_profile.last_name
        : this.$store.state.user_profile.first_name
        ? this.$store.state.user_profile.first_name
        : this.$store.state.user_profile.last_name
        ? this.$store.state.user_profile.last_name
        : ''
    return {
      swiperOption: {
        slidesPerView: 'auto',
        // centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      tourName: userName || '',
      tourEmail: this.$store.state.user_profile.email || '',
      tourNumber: '',
      readMore: false,
      modal: false,
      rates: [5, 4, 3, 2, 1],
      spinner: false,
      showModal: false,
      btnDisabled: false,
      modalMessage: false,
      readMoreFeature: false,
      filterReviews: '',
      message: '',
      modalTour: false,
      selectedDateTime: null,
      messageModal: '',
      name: userName || '',
      email: this.$store.state.user_profile.email || '',
      number: '',
      imageSelectedNum: null,
      shareRecipientEmail: '',
      youShareEmail: this.$store.state.user_profile.email || '',
      modalShare: false,
      like: this.$store.state.home.home.has_user_liked,
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
            `${process.env.baseUrl}/user-saved-homes/`,
            {
              headers: {
                Authorization: 'Token ' + token,
              },
            }
          )

          exist = data.results.some((val) => {
            return val.home.slug === params.address
          })
        } catch (error) {
          console.log(error.response)
        }
        store.commit('ALREADY_IN_SAVES', exist)
      } else if (store.state.saved_homes_in_cookies) {
        let home = store.state.saved_homes_in_cookies
        home = JSON.parse(decodeURIComponent(home))

        exist = home.some((val) => {
          return val.slug === params.address
        })
        store.commit('ALREADY_IN_SAVES', exist)
      }
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
    ...mapState(['inSaves']),
    formatLink() {
      return process.client ? window.location.href : ''
    },
    averageRating() {
      let totalRating = 0
      this.home.reviews.forEach((review) => {
        totalRating += review.rate
      })
      return totalRating / this.home.reviews.length
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
    starPercentage(star) {
      let numberOfReviewers = 0
      this.home.reviews.forEach((review) => {
        if (review.rate === star) {
          numberOfReviewers++
        }
      })
      return Math.floor(
        100 -
          ((this.home.reviews.length - numberOfReviewers) /
            this.home.reviews.length) *
            100
      )
    },
    makeAPhoneCall(number) {
      location.href = `tel: ${number}`
    },

    changeSelectedDateTime(openDay) {
      this.selectedDateTime = openDay
    },
    async filterReview(rate) {
      this.spinner = true
      const { data } = await axios.get(
        `${process.env.baseUrl}/homes/${this.$route.params.address}/reviews/?rate=${rate}`
      )
      this.filterReviews = data.results
      this.spinner = false
    },
    close() {
      this.modal = false
    },
    closeShareModal() {
      this.modalShare = false
    },
    closeTourModal() {
      this.modalTour = false
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
      this.messageModal = 'Copied!'
      this.copyToolkit = true
      setTimeout(() => {
        this.copyToolkit = false
      }, 1500)
    },
    errorCopyToolkit() {
      this.messageModal = 'Failed to copy texts!'
      this.copyToolkit = true
      setTimeout(() => {
        this.copyToolkit = false
      }, 1500)
    },
  },
}
</script>

<style lang="postcss" scoped>
.swiper-button-next,
.swiper-button-prev {
  color: #fca311;
  transition: 0.2s ease;
}

.swiper-slide {
  width: 150px !important;
}

.swiper-slide:not(:last-child) {
  margin-right: 10px !important;
}

.date-time-card {
  @apply py-2 px-4 border-gray-500 rounded-md bg-gray-100 cursor-pointer;
}
.list-features {
  @apply flex list-none mt-3 flex-wrap;
}

.item-features {
  @apply flex items-center gap-2 text-sm w-6/12;
}

.features {
  @apply mb-3;
}

.input-container {
  @apply mt-4;
}

.heading {
  @apply font-bold text-sm;
}

.copy-link {
  @apply inline-flex items-center justify-center h-auto px-2 text-center text-sm font-bold text-blue-700 cursor-pointer whitespace-nowrap;
}
</style>
