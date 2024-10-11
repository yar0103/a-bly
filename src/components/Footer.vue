<template>
  <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid d-flex justify-content-around">
      <a class="navbar-brand" href="#"><i class="bi bi-shop-window fs-5"></i></a>
      <a class="navbar-brand" href="#"><i class="bi bi-list fs-5 "></i></a>
      <a class="navbar-brand" href="#"><i class="bi bi-search fs-5 "></i></a>
      <router-link to="/myPage" class="pageMoveBtn"><i class="bi bi-person-fill fs-5"></i></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.pageMoveBtn{
  color: white;
}

.bi {
  margin: 0 auto;
  cursor: pointer;
}
</style>