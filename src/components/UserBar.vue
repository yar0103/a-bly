<template>
  <div class="userBar container-fluid mt-2">
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="하나만 사도 무료배송"
        aria-label="Search"
      />
      <i class="bi bi-bag-plus" @click="$emit('openLogin')"></i>
    </form>
  </div>

  <div class="black-bg" v-if="isClickedOpenLogin" @click="$emit('closeLogin')">
    <div class="white-bg container-sm" @click.stop>
      <h1 class="loginTitle">LOGIN</h1>
      <p>Please enter your login and password!</p>
      <small
        >로그인 해야만 볼 수 있는 페이지 입니다.<br />
        로그인 해 주세요 :)</small
      >
      <form action="#" class="mt-4">
        <div class="input-style">
          <label for="username">ID</label>
          <input
            type="text"
            id="username"
            placeholder="아이디를 입력하세요"
            required
          />
        </div>
        <div class="input-style">
          <label for="password">PW</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <div class="d-flex">
          <button type="submit" class="login-btn me-2">로그인</button>
          <button class="login-btn">뒤로가기</button>
        </div>
      </form>
      <div class="links">
        <a href="#">회원가입</a> |
        <a href="#">비밀번호 찾기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBar",
};
</script>

<style>
.bi-bag-plus {
  font-size: 30px;
  line-height: 35px;
  color: rgb(190, 190, 190);
}
</style>