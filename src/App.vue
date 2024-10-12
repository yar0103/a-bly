<template>
  <div class="container-sm">
    <Nav />
    <UserBar :isClickedOpenLogin="isClickedOpenLogin" @openLogin="openLogin" />
    <Visual :visual="visual"/>
    <Category :category="category" />
    <Commend :products="products"/>
    <Footer :isClickedOpenLogin="isClickedOpenLogin" @openLogin="openLogin" @closeLogin="closeLogin"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import UserBar from './components/UserBar.vue'
import Visual from './components/Visual.vue'
import Category from './components/Category.vue'
import Commend from './components/Commend.vue'
import Footer from './components/Footer.vue'
// import LoginPage from './components/LoginPage.vue'

import {products} from './data';
import {shoppingCategory} from './data';
import {visual} from './data';

export default {
  name: "App",
  data(){
    return{
      products: products,
      category: shoppingCategory,
      visual: visual,
      // LoginPage: LoginPage
      isClickedOpenLogin: false,
    }
  },
  components: {
    Nav: Nav,
    UserBar: UserBar,
    Visual: Visual,
    Category: Category,
    Commend: Commend,
    Footer: Footer,
  },
  methods: {
    openLogin() {
      this.isClickedOpenLogin = true;
    },
    closeLogin(){
      this.isClickedOpenLogin = false;
    }
  }
};
</script>

<style>
.container-sm{
  max-width: 520px;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.appGo {
  padding: 3px 10px;
  border-radius: 15px;
  background: white;
  font-weight: 600;
  color: black;
  letter-spacing: -2px;
}

.navbar-brand {
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
