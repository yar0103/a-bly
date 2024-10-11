<template>
  <div class="userBar container-fluid mt-2">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="하나만 사도 무료배송" aria-label="Search" >
      <i class="bi bi-bag-plus"></i>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserBar',

}
</script>

<style>
.bi-bag-plus{
    font-size: 30px;
    line-height: 35px;
    color:rgb(190, 190, 190);
}
</style>