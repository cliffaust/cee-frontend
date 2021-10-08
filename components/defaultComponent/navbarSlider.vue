<template>
  <div
    :class="[
      navbarSlider
        ? 'fixed top-0 right-0 bottom-0 left-0 z-10 transition duration-300 bg-black bg-opacity-60'
        : 'fixed top-0 right-0 bottom-0 left-0 -z-2 transition-z-index duration-700',
    ]"
    @click="changeNavbarSliderState"
  >
    <div :class="[navbarSlider ? 'nav-item' : 'not-nav-item']" @click.stop>
      <div class="flex flex-col items-center mt-20">
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
            <title>bag</title>
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
                transform="translate(-620.000000, -291.000000)"
              >
                <g id="94" transform="translate(620.000000, 291.000000)">
                  <rect
                    id="Rectangle-40"
                    stroke="#333333"
                    stroke-width="2"
                    x="4"
                    y="7"
                    width="16"
                    height="16"
                    rx="1"
                  />
                  <path
                    id="Oval-21"
                    d="M16,10 L16,5 C16,2.790861 14.209139,1 12,1 C9.790861,1 8,2.790861 8,5 L8,10"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <rect
                    id="Rectangle-41"
                    fill="#333333"
                    x="5"
                    y="18"
                    width="14"
                    height="2"
                  />
                </g>
              </g>
            </g></svg
          >Buy a book
        </div>
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
            <title>book</title>
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
                transform="translate(-884.000000, -203.000000)"
                stroke="#333333"
              >
                <g id="60" transform="translate(884.000000, 203.000000)">
                  <path
                    id="Combined-Shape"
                    d="M2,5.0068455 L2,16.9931549 C2,18.0067797 2.74224228,18.9663373 3.72245134,19.2113896 L10.7574644,20.9701425 L12,21.2807764 L12,20 L12,5.99999997 L12,5.21922356 L11.2425356,5.02985747 L4.20752254,3.27110423 C3.03799922,2.9787234 2,3.80374257 2,5.0068455 Z M12.7574644,5.02985755 L12,5.21922364 L12,6.00000005 L12,19.9999998 L12,21.2807762 L13.2425356,20.9701423 L20.2775487,19.2113892 C21.2590506,18.9660137 22,18.0066201 22,16.9931545 L22,5.00684547 C22,3.80328805 20.9604115,2.97912072 19.7924774,3.27110423 L12.7574644,5.02985755 Z"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path id="Path-144" d="M5,8 L9,9" stroke-linejoin="round" />
                  <path id="Path-144" d="M5,11 L9,12" stroke-linejoin="round" />
                  <path id="Path-144" d="M5,14 L9,15" stroke-linejoin="round" />
                  <path id="Path-144" d="M15,9 L19,8" />
                  <path id="Path-144" d="M15,12 L19,11" />
                  <path id="Path-144" d="M15,15 L19,14" />
                </g>
              </g>
            </g></svg
          >Sell your book
        </div>
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
            <title>backpack</title>
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
                transform="translate(-180.000000, -775.000000)"
              >
                <g id="304" transform="translate(180.000000, 775.000000)">
                  <path
                    id="Rectangle-209"
                    d="M4,10.9907535 C4,6.57758222 7.59071231,3 12,3 L12,3 C16.418278,3 20,6.57559919 20,10.9907535 L20,21.0092049 C20,22.1086907 19.1054862,23 18.0059397,23 L5.99406028,23 C4.8927712,23 4,22.1017876 4,21.0092049 L4,10.9907535 Z"
                    stroke="#333333"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle-210"
                    stroke="#333333"
                    stroke-width="2"
                    x="7"
                    y="14"
                    width="10"
                    height="9"
                    rx="1"
                  />
                  <rect
                    id="Rectangle-211"
                    fill="#333333"
                    x="20"
                    y="15"
                    width="2"
                    height="6"
                    rx="1"
                  />
                  <rect
                    id="Rectangle-211"
                    fill="#333333"
                    x="2"
                    y="15"
                    width="2"
                    height="6"
                    rx="1"
                  />
                  <rect
                    id="Rectangle-212"
                    fill="#333333"
                    x="8"
                    y="17"
                    width="8"
                    height="1"
                  />
                  <polygon
                    id="Path-236"
                    stroke="#333333"
                    stroke-width="2"
                    fill="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    points="12 7 11 8 12 9 13 8"
                  />
                  <path
                    id="Rectangle-213"
                    d="M9.52460577,2.5 C9.668914,1.12530889 10.4526876,0.5 12,0.5 C13.5473124,0.5 14.331086,1.12530889 14.4753942,2.5 L9.52460577,2.5 Z"
                    stroke="#333333"
                  />
                </g>
              </g>
            </g></svg
          >For student
        </div>
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
            <title>star</title>
            <desc>Created with Sketch.</desc>
            <defs />
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linejoin="round"
            >
              <g
                id="Artboard-4"
                transform="translate(-488.000000, -203.000000)"
                stroke="#333333"
                stroke-width="2"
              >
                <g id="51" transform="translate(488.000000, 203.000000)">
                  <path
                    id="Star-1"
                    d="M12,18.6297757 L16.8247261,21.1662844 L18.6181983,22.1091685 L18.2756756,20.1121079 L17.3542349,14.7396964 L21.2575203,10.9349334 L22.7084698,9.52060725 L20.703307,9.22924004 L15.3090991,8.44541576 L12.8967361,3.55743429 L12,1.74044854 L11.1032639,3.55743429 L8.69090085,8.44541576 L3.29669304,9.22924004 L1.29153021,9.52060725 L2.74247966,10.9349334 L6.64576511,14.7396964 L5.72432441,20.1121079 L5.3818017,22.1091685 L7.17527386,21.1662844 L12,18.6297757 Z"
                  />
                </g>
              </g>
            </g></svg
          >Weekly special
        </div>
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
            <title>book</title>
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
                transform="translate(-884.000000, -203.000000)"
                stroke="#333333"
              >
                <g id="60" transform="translate(884.000000, 203.000000)">
                  <path
                    id="Combined-Shape"
                    d="M2,5.0068455 L2,16.9931549 C2,18.0067797 2.74224228,18.9663373 3.72245134,19.2113896 L10.7574644,20.9701425 L12,21.2807764 L12,20 L12,5.99999997 L12,5.21922356 L11.2425356,5.02985747 L4.20752254,3.27110423 C3.03799922,2.9787234 2,3.80374257 2,5.0068455 Z M12.7574644,5.02985755 L12,5.21922364 L12,6.00000005 L12,19.9999998 L12,21.2807762 L13.2425356,20.9701423 L20.2775487,19.2113892 C21.2590506,18.9660137 22,18.0066201 22,16.9931545 L22,5.00684547 C22,3.80328805 20.9604115,2.97912072 19.7924774,3.27110423 L12.7574644,5.02985755 Z"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path id="Path-144" d="M5,8 L9,9" stroke-linejoin="round" />
                  <path id="Path-144" d="M5,11 L9,12" stroke-linejoin="round" />
                  <path id="Path-144" d="M5,14 L9,15" stroke-linejoin="round" />
                  <path id="Path-144" d="M15,9 L19,8" />
                  <path id="Path-144" d="M15,12 L19,11" />
                  <path id="Path-144" d="M15,15 L19,14" />
                </g>
              </g>
            </g></svg
          >Buy used books
        </div>
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <defs />
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Artboard-4" transform="translate(-92.000000, -115.000000)">
                <g id="2" transform="translate(92.000000, 115.000000)">
                  <circle
                    id="Oval-1"
                    stroke="#333333"
                    stroke-width="2"
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <rect
                    id="Rectangle-1"
                    fill="#333333"
                    x="11"
                    y="7"
                    width="2"
                    height="10"
                    rx="1"
                  />
                  <rect
                    id="Rectangle-1"
                    fill="#333333"
                    x="7"
                    y="11"
                    width="10"
                    height="2"
                    rx="1"
                  />
                </g>
              </g>
            </g></svg
          >Buy new books
        </div>
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
            <title>briefcase</title>
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
                transform="translate(-136.000000, -379.000000)"
              >
                <g id="122" transform="translate(136.000000, 379.000000)">
                  <rect
                    id="Rectangle-40"
                    stroke="#333333"
                    stroke-width="2"
                    x="1"
                    y="6"
                    width="22"
                    height="16"
                    rx="1"
                  />
                  <path
                    id="Rectangle-42"
                    d="M8,6.00189865 L8,3.99810135 C8,2.89458045 8.90195036,2 10.0085302,2 L13.9914698,2 C15.1007504,2 16,2.88670635 16,3.99810135 L16,6.00189865"
                    stroke="#333333"
                    stroke-width="2"
                  />
                  <path
                    id="Path-45"
                    d="M23,9 C23,9 22.9999992,14.0311289 17.9688711,14.0311289 C12.937743,14.0311289 9.00000019,14.0311289 4.99081969,14.0311289 C0.981639191,14.0311289 1,9 1,9"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <rect
                    id="Rectangle-74"
                    fill="#333333"
                    x="16"
                    y="11"
                    width="2"
                    height="6"
                    rx="1"
                  />
                  <rect
                    id="Rectangle-74"
                    fill="#333333"
                    x="6"
                    y="11"
                    width="2"
                    height="6"
                    rx="1"
                  />
                </g>
              </g>
            </g></svg
          >How we work
        </div>
        <nuxt-link to="/cart" class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            /></svg
          >Your Cart
        </nuxt-link>
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
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
                transform="translate(-400.000000, -247.000000)"
              >
                <g id="69" transform="translate(400.000000, 247.000000)">
                  <circle
                    id="Oval-7"
                    stroke="#333333"
                    stroke-width="2"
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <path
                    id="?"
                    d="M12.016,14.544 C12.384,14.544 12.64,14.256 12.704,13.904 L12.768,13.168 C14.544,12.864 16,11.952 16,9.936 L16,9.904 C16,7.904 14.48,6.656 12.24,6.656 C10.768,6.656 9.696,7.184 8.848,7.984 C8.624,8.176 8.528,8.432 8.528,8.672 C8.528,9.152 8.928,9.552 9.424,9.552 C9.648,9.552 9.856,9.456 10.016,9.328 C10.656,8.752 11.344,8.448 12.192,8.448 C13.344,8.448 14.032,9.072 14.032,9.968 L14.032,10 C14.032,11.008 13.2,11.584 11.696,11.728 C11.264,11.776 11.008,12.096 11.072,12.528 L11.232,13.904 C11.28,14.272 11.552,14.544 11.92,14.544 L12.016,14.544 Z M10.784,16.816 L10.784,16.976 C10.784,17.6 11.264,18.08 11.92,18.08 C12.576,18.08 13.056,17.6 13.056,16.976 L13.056,16.816 C13.056,16.192 12.576,15.712 11.92,15.712 C11.264,15.712 10.784,16.192 10.784,16.816 Z"
                    fill="#333333"
                  />
                </g>
              </g>
            </g></svg
          >About us
        </div>
        <div class="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
            <title>chats</title>
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
                transform="translate(-180.000000, -599.000000)"
              >
                <g id="224" transform="translate(180.000000, 599.000000)">
                  <path
                    id="Path-168"
                    d="M15.2928932,22.7071068 C15.6834175,23.0976311 16.3165825,23.0976311 16.7071068,22.7071068 L19.4142136,20 L20,20 C21.5522847,20 23,18.5522847 23,17 L23,11 C23,9.44771525 21.5522847,8 20,8 L20,10 C20.4477153,10 21,10.5522847 21,11 L21,17 C21,17.4477153 20.4477153,18 20,18 L19,18 C18.7347835,18 18.4804296,18.1053568 18.2928932,18.2928932 L16,20.5857864 L13.7071068,18.2928932 C13.5195704,18.1053568 13.2652165,18 13,18 L8,18 C7.55228475,18 7,17.4477153 7,17 L5,15.5 L5,17 C5,18.5522847 6.44771525,20 8,20 L10.3877551,20 L11.9259259,20 C12.4492636,20 12.6510872,20 12.7804477,20 L15.2928932,22.7071068 Z"
                    fill="#333333"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Rectangle-406"
                    d="M4.58578644,12 L7.29289322,14.7071068 L8,15.4142136 L8.70710678,14.7071068 L11.4142136,12 L16.009222,12 C17.1041196,12 18,11.1030865 18,10.0029699 L18,3.99703014 C18,2.89728733 17.0980352,2 15.9931545,2 L4.00684547,2 C2.90000582,2 2,2.8917406 2,3.99703014 L2,10.0029699 C2,11.1011825 2.89736015,12 4,12 L4.58578644,12 Z"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </g></svg
          >Contact us
        </div>
        <div
          class="flex justify-center items-center flex-col w-full relative before:-top-3 before:h-0.5 before:w-4/5 before:bg-gray-200 before:absolute"
        >
          <nuxt-link to="/signup" class="link"
            >Signup<svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
              <title>user-add</title>
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
                  transform="translate(-136.000000, -863.000000)"
                >
                  <g id="343" transform="translate(136.000000, 863.000000)">
                    <path
                      id="Path-41"
                      d="M14.2571621,15 L7,15 C4.20063223,15 2.390348,16.1679253 1.5255785,18.0896353 C1.07423388,19.0926234 0.949016905,20.1108713 0.995546634,20.9698816 C0.998604759,21.0263393 1.0014872,21.0632937 1.00496281,21.0995037 C1.0599172,21.6490476 1.54995985,22.0499916 2.09950372,21.9950372 C2.64904758,21.9400828 3.04999158,21.4500401 2.99503719,20.9004963 C2.99555422,20.9071205 2.99399879,20.8871791 2.99261905,20.8617069 C2.96185588,20.2937714 3.05021139,19.575276 3.34942151,18.9103647 C3.890902,17.7070747 4.98686778,17 7,17 L12.0070975,17 L13.2070325,17 C13.4170071,16.2576107 13.7789623,15.5790321 14.2571621,15 Z"
                      fill="#333333"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Combined-Shape"
                      d="M19,18 L19,16.4976988 C19,16.2228273 18.7680664,16 18.5,16 C18.2238576,16 18,16.2148438 18,16.4976988 L18,18 L16.4976988,18 C16.2148438,18 16,18.2238576 16,18.5 C16,18.7680664 16.2228273,19 16.4976988,19 L18,19 L18,20.5023012 C18,20.7771727 18.2319336,21 18.5,21 C18.7761424,21 19,20.7851562 19,20.5023012 L19,19 L20.5023012,19 C20.7851562,19 21,18.7761424 21,18.5 C21,18.2319336 20.7771727,18 20.5023012,18 L19,18 Z M18.5,23 C16.0147186,23 14,20.9852814 14,18.5 C14,16.0147186 16.0147186,14 18.5,14 C20.9852814,14 23,16.0147186 23,18.5 C23,20.9852814 20.9852814,23 18.5,23 Z"
                      fill="#333333"
                    />
                    <circle
                      id="Oval-40"
                      stroke="#333333"
                      stroke-width="2"
                      cx="12"
                      cy="8"
                      r="5"
                    />
                  </g>
                </g>
              </g></svg
          ></nuxt-link>
          <nuxt-link to="/login" class="link"
            >Login<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              /></svg
          ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      username: '',
    }
  },
  computed: {
    ...mapState({
      navbarSlider: (state) => state.navbarSlider,
    }),
  },

  watch: {
    $route: {
      handler: 'closeSlider',
      immediate: true,
      deep: true,
    },
  },

  methods: {
    changeNavbarSliderState() {
      this.$store.dispatch('changeNavbarState', false)
    },

    closeSlider() {
      this.$store.dispatch('changeNavbarState', false)
    },
  },
}
</script>

<style lang="postcss" scoped>
.link {
  @apply text-2xl py-4 font-bold cursor-pointer w-full flex justify-center gap-4 items-center mb-5 hover:bg-gray-200 last:mb-0;
}

.nav-item {
  @apply fixed h-screen w-4/5 translate-x-0 bg-white z-20 transition-all duration-300 ease-linear overflow-scroll;
}

.not-nav-item {
  @apply fixed h-screen w-4/5 -translate-x-full bg-white z-20 transition-all duration-300 ease-linear;
}
</style>
