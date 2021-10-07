<template>
  <div class="mt-20">
    <div class="card flex flex-col items-center">
      <div class="card-image">
        <img class="image" src="~/assets/images/house-1.png" alt="Home Image" />
      </div>
      <div>
        <h1 class="card-heading">Buy a home</h1>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
          aspernatur quam nemo saepe consectetur laboriosam nulla!
        </p>
        <a href="#" class="primary-link">Learn More</a>
      </div>
    </div>

    <div class="card flex flex-col items-center">
      <div class="card-image">
        <img class="image" src="~/assets/images/house-2.png" alt="Home Image" />
      </div>
      <div>
        <h1 class="card-heading">Rent a home</h1>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
          aspernatur quam nemo saepe consectetur laboriosam nulla!
        </p>
        <a href="#" class="primary-link">Learn More</a>
      </div>
    </div>

    <div class="card flex flex-col items-center">
      <div class="card-image">
        <img
          class="image"
          src="~/assets/images/location-pin.png"
          alt="Home Image"
        />
      </div>
      <div>
        <h1 class="card-heading">Buy a land</h1>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
          aspernatur quam nemo saepe consectetur laboriosam nulla!
        </p>
        <a href="#" class="primary-link">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
  @apply w-2/8 mx-auto mt-12 mb-8;
}

.image {
  @apply w-52;
}

.card-heading {
  @apply text-4xl font-mono font-bold text-center mt-6;
}

.card-text {
  @apply text-xl text-left my-6;
}
</style>
