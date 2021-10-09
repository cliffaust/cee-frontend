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
      <div class="h-325 relative">
        <img :src="home.cover_image" class="w-full h-full" alt="Home Image" />
        <div
          class="absolute py-1.5 px-2.5 top-6 text-xl left-8 z-10 bg-green-300 font-bold rounded-lg"
        >
          {{ home.home_status }}
        </div>
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
              @click.stop="changeUnlikeState"
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
              @click.stop="changeLikeState"
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
          <div class="text-3xl font-mono font-bold">{{ home.address }}</div>
          <div class="flex mb-3">
            <div class="mr-4 flex items-center gap-2 mt-2">
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
              <span class="text-xl">{{ home.number_bedrooms }}bd</span>
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
                  d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7"
                ></path>
                <path d="M11 13v2m0 3v2m4 -5v2m0 3v2"></path>
              </svg>
              <span class="text-xl">{{ home.number_bathrooms }}ba</span>
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
              <span v-if="home.home_size" class="text-xl"
                >{{ home.home_size }}sqft</span
              >
              <span v-else class="text-xl">No data</span>
            </div>
          </div>
          <div class="text-2xl font-mono font-bold">
            GH¢{{ home.home_price.toLocaleString() }}
          </div>
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
          <div v-if="home.like_count > 0" class="text-xl mb-1">
            This listing has been liked by {{ home.like_count }} users
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
              Common monthly dues: GH¢{{ home.hoa_dues }}
            </div>
          </div>
          <div class="mt-6">
            <h1 class="font-bold font-mono text-3xl">Description</h1>
            <p v-if="home.describe_home.length < 500" class="text-xl mt-4">
              {{ home.describe_home }}
            </p>
            <template v-if="home.describe_home.length >= 500">
              <p v-if="readMore" class="text-xl mt-4">
                {{ home.describe_home }}
              </p>
              <p v-else class="text-xl mt-4">
                {{ home.describe_home.slice(0, 500) }}....
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
            <h1 class="font-bold font-mono text-3xl">Fact and Features</h1>
            <div class="shadow-md mt-4 p-4 rounded-lg">
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
                  class="text-xl my-4 text-blue-700 font-bold flex items-center gap-2"
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
                  class="text-xl my-4 text-blue-700 font-bold flex items-center gap-2"
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
            <ButtonPrimary
              :class="[
                'w-full',
                '!py-5',
                'text-xl',
                'bg-primary-yellow',
                '!text-primary-blue-200',
              ]"
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
import navbar from '~/components/homeInstance/navbar'
import modal from '~/components/defaultComponent/modal'
import baseInput from '~/components/defaultComponent/baseInput'
import baseTextArea from '~/components/defaultComponent/baseTextArea'
import baseButton from '~/components/defaultComponent/baseButton'
import ButtonPrimary from '~/components/defaultComponent/button-primary.vue'
import ButtonPrimaryOpen from '~/components/defaultComponent/button-primary-open.vue'
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
    ButtonPrimary,
    ButtonPrimaryOpen,
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

// .copy-link {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   height: auto;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   color: inherit;
//   text-align: center;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 1.1;
//   letter-spacing: 2px;
//   text-transform: capitalize;
//   text-decoration: none;
//   white-space: nowrap;
//   border-radius: 4px;
//   border: 1px solid #333;
//   cursor: pointer;
// }

// .image-container {
//   height: 30rem;
//   position: relative;

//   .image {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .icon-container-1 {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     cursor: pointer;
//     background-color: #00233393;
//     padding: 0.8rem 1rem;
//     position: absolute;
//     bottom: 10px;
//     right: 10px;
//     border-radius: 6px;
//     width: 9.5rem;

//     .icon {
//       width: 15px;
//       height: 15px;
//       color: #ffffff;
//     }

//     .text {
//       font-size: 1.6rem;
//       color: #ffffff;
//       font-weight: 600;
//     }
//   }
//   .icon-container-2 {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     cursor: pointer;
//     padding: 0.8rem 1rem;
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     border-radius: 6px;
//     width: 9rem;

//     .icon {
//       width: 25px;
//       height: 25px;
//       color: #ffffff;
//       transition: 0.2s ease;

//       &:hover {
//         color: $primary-bgcolor-2;
//       }
//     }
//   }
// }

// .container {
//   padding: 1rem 2.5rem;
// }

// .description {
//   .address {
//     font-size: 2.3rem;
//     font-weight: 500;
//     margin-bottom: 1rem;
//     font-family: $secondary-font-1;
//   }
//   .features {
//     display: flex;
//     align-items: center;
//     margin: 1.5rem 0;

//     .text {
//       font-size: 1.6rem;
//     }

//     .icon {
//       width: 1.6rem;
//       height: 1.6rem;
//     }

//     .description-icon {
//       margin-right: 1.5rem;
//     }
//   }

//   .price {
//     font-size: 2.5rem;
//     font-weight: 700;
//     font-family: $secondary-font-1;
//     display: flex;
//     align-items: center;

//     .home-status-text {
//       font-weight: 700;
//       font-size: 1.3rem;
//       display: block;
//       margin-left: 7px;
//       margin-bottom: -5px;
//       font-family: $primary-font;
//     }
//   }
// }

// .btn-container {
//   display: flex;
//   flex-direction: column;
//   width: 30rem;
//   margin: 2rem auto;

//   &-1 {
//     display: flex;
//     justify-content: space-between;
//     margin-top: 0.8rem;

//     .btn-call,
//     .btn-tour {
//       flex: 0 0 46%;
//     }
//   }
// }

// .popularity-report {
//   .popularity,
//   .report {
//     font-size: 1.5rem;
//   }

//   .popularity {
//     margin-bottom: 0.6rem;
//   }
// }

// .overview {
//   margin: 2rem 0;
//   .heading {
//     font-size: 2.2rem;
//   }
//   &__vitals {
//     display: flex;
//     align-items: center;
//     margin-top: 2rem;

//     .date-posted {
//       font-size: 1.4rem;
//       padding: 0 1rem 0 0;
//       border-right: 1px solid #eee;
//     }

//     .dues {
//       font-size: 1.4rem;
//       padding: 0 0 0 1rem;
//     }
//   }
//   &__description {
//     margin-top: 2rem;

//     .text {
//       font-size: 1.4rem;
//       white-space: pre-wrap;
//     }
//   }
// }

// .modal-heading {
//   font-size: 2.2rem;
// }

// .contact-list {
//   margin-top: 2.2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   .text {
//     font-size: 1.5rem;
//     margin-top: 2rem;
//   }

//   .contact {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     position: relative;
//     &:not(:last-child) {
//       margin-bottom: 0.4rem;
//     }

//     // &::after {
//     //   content: '';
//     //   position: absolute;
//     //   width: 75%;
//     //   height: 1px;
//     //   background-color: #eee;
//     //   bottom: 0.2rem;
//     //   left: 50%;
//     //   right: 50%;
//     //   transform: translateX(-50%);
//     // }

//     .number {
//       font-size: 1.5rem;
//       font-weight: 600;
//     }

//     .icon {
//       width: 20px;
//       height: 20px;
//       color: $primary-bgcolor-2;
//     }
//   }
// }

// .phone-icon {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 45px;
//   height: 45px;
//   border-radius: 50px;
//   transition: 0.4s ease;
//   cursor: pointer;

//   &:hover {
//     background-color: #eee;
//   }
// }

// .read-more {
//   font-size: 1.8rem;
//   margin-top: 0.8rem;
//   cursor: pointer;
//   padding: 1rem;
//   border: none;
//   background-color: #eee;
//   transition: 0.3s ease;
//   border-radius: 1rem;
//   font-family: $secondary-font-1;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   .icon {
//     width: 20px;
//     height: 20px;
//     margin-left: 0.8rem;
//     margin-bottom: -4px;
//   }

//   &:focus {
//     outline: none;
//   }
// }

// .features {
//   .heading {
//     font-size: 2.2rem;
//     font-weight: 700;
//     margin-bottom: 1rem;
//   }
//   .room-features,
//   .sitting-room-features,
//   .kitchen-features,
//   .general-features {
//     margin-left: 1rem;
//     margin-bottom: 2rem;
//     .feature-heading {
//       font-size: 1.8rem;
//       padding: 3px;
//       display: inline-block;
//       border-bottom: 1px solid #eee;
//     }

//     .list-features {
//       margin-top: 1rem;
//       list-style: none;
//       display: flex;
//       flex-wrap: wrap;

//       .item-features {
//         font-size: 1.5rem;
//         display: flex;
//         align-items: center;
//         margin-bottom: 1rem;
//         flex: 0 0 50%;

//         .icon {
//           width: 10px;
//           height: 20px;
//           margin-right: 0.6rem;
//         }
//       }
//     }
//   }
// }

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

// .copy-link {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   height: auto;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   color: inherit;
//   text-align: center;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 1.1;
//   letter-spacing: 2px;
//   text-transform: capitalize;
//   text-decoration: none;
//   white-space: nowrap;
//   border-radius: 4px;
//   border: 1px solid #333;
//   cursor: pointer;
// }

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
