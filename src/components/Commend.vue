<template>
  <div class="commend container mb-2">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="topTitle mt-2">당신을 위한 추천 상품</h5>
      <div class="d-flex column-gap-1 fs-5">
        <button type="button" class="btn btn-dark" @click="marketSort">마켓순</button>
        <button type="button" class="btn btn-dark" @click="priceSort">가격순</button>
        <i class="bi bi-arrow-right flex-shrink-1"></i>
      </div>
    </div>
    <div class="row row-cols-2 g-2">
      <div class="col" v-for="(p, i) in formattedProducts" :key="i">
        <div class="card">
          <img :src="p.image" class="card-img-top fixedHeight" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <span class="red"
                ><b>{{ p.discount }}</b></span
              >
              {{ p.formattedPrice }}
            </h5>
            <p class="card-text cardTitle">{{ p.market }}</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">{{ p.content }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commend",
  data() {
    return {
      originalProducts: [], // 처음 products를 저장할 배열
      copyProducts: [], // 정렬된 products를 저장할 배열
      isSorted: false, // 현재 정렬 상태
    };
  },
  props: {
    products: Array,
  },
  methods: {
    marketSort() {
      if (this.isSorted) {
        // 이미 정렬된 상태라면, 원래 순서로 복구
        this.copyProducts = [...this.originalProducts];
        this.isSorted = false;
      } else {
        // 처음 정렬 상태가 아니라면 정렬 진행
        if (this.originalProducts.length === 0) {
          // 원래 데이터를 저장해둠
          this.originalProducts = [...this.products];
        }
        this.copyProducts = [...this.products].sort((a, b) => {
          return a.market.localeCompare(b.market); // 마켓 이름 기준 정렬
        });
        this.isSorted = true;
      }
    },
    priceSort(){
      if (this.isSorted) {
        // 이미 정렬된 상태라면, 원래 순서로 복구
        this.copyProducts = [...this.originalProducts];
        this.isSorted = false;
      } else {
        // 처음 정렬 상태가 아니라면 정렬 진행
        if (this.originalProducts.length === 0) {
          // 원래 데이터를 저장해둠
          this.originalProducts = [...this.products];
        }
        this.copyProducts = [...this.products].sort((a, b) => {
          return a.price - b.price; // 가격기준 정렬
        });
        this.isSorted = true;
      }
    }
  },
  computed: {
    formattedProducts() {
      return this.copyProducts.length > 0
        ? this.copyProducts.map((product) => ({
            ...product,
            formattedPrice: product.price.toLocaleString("ko-KR"),
          }))
        : this.products.map((product) => ({
            ...product,
            formattedPrice: product.price.toLocaleString("ko-KR"),
          }));
    },
  },
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
