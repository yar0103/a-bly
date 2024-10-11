<template>
  <div class="row row-cols-4 row-cols-md-4 g-2 p-2 shopping">
    <div class="col" v-for="(c,i) in category" :key="i">
      <div class="card text-center">
        <div class="card-body">
          <img :src="c.image" class="card-img-top" alt="..." />
          <p class="card-text">
            <small>{{c.title}}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: Array,
  }
};
</script>

<style>
.card-img-top {
  width: 40px;
}
</style>