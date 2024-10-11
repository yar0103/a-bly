<template>
  <div class="commend container mb-2">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="topTitle mt-2 w-100">당신을 위한 추천 상품</h5>
      <i class="bi bi-arrow-right flex-shrink-1"></i>
    </div>
    <div class="row row-cols-2 g-2">
      <div class="col" v-for="(p,i) in products" :key="i">
        <div class="card">
          <img
            :src="p.image"
            class="card-img-top fixedHeight"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              <span class="red"><b>{{p.discount}}</b></span> {{p.price}}
            </h5>
            <p class="card-text cardTitle">{{p.market}}</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">{{p.content}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commend",
  props: {
    products: Array,
  }
};
</script>

<style>
.fixedHeight {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.topTitle {
  letter-spacing: -2px;
  font-weight: 600;
}

.cardTitle {
  letter-spacing: -1px;
  font-weight: 600;
}

small {
  font-weight: 400;
}

.red {
  color: tomato;
}
</style>