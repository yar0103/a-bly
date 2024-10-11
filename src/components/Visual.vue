<template>
  <div id="carouselExampleAutoplaying" class="carousel slide mt-2" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/visual-0.jpg" class="d-block w-100" alt="visual">
    </div>
    <div class="carousel-item" v-for="(v,i) in visual" :key="i">
      <img :src="v.image" class="d-block w-100" alt="visual">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
  name: 'Visual',
  props: {
    visual : Array
  }
};
</script>

<style>
.carousel-control-prev,
.carousel-control-next{
  opacity: 1;

}

.carousel-control-prev-icon,
.carousel-control-next-icon{
  background-color: rgba(0,0,0,0.5);
  width: 40%;
  height: 15%;
}
</style>