<template>
  <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid d-flex justify-content-around">
      <a class="navbar-brand" href="#"
        ><i class="bi bi-shop-window fs-5"></i
      ></a>
      <a class="navbar-brand" href="#"><i class="bi bi-list fs-5"></i></a>
      <a class="navbar-brand" href="#"><i class="bi bi-search fs-5"></i></a>
      <a class="navbar-brand" href="#none" @click="$emit('openLogin')"
        ><i class="bi bi-person-fill fs-5"></i
      ></a>
    </div>
  </nav>

  <div class="black-bg" v-if="isClickedOpenLogin" @click="$emit('closeLogin')" >
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
  name: "Footer",
  props: {
    isClickedOpenLogin: Boolean,
  },
};
</script>

<style>
.pageMoveBtn {
  color: white;
}

.bi {
  margin: 0 auto;
  cursor: pointer;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.white-bg {
  width: 100%;
  height: 70%;
  background: white;
  border-radius: 8px;
  padding: 20px;

  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align: center;
}

.loginTitle {
  font-weight: 900;
  color: #007bff;
}

/* 입력 필드 */
.input-style {
  margin-bottom: 15px;
  text-align: left;
}

.input-style label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.input-style input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
}

.input-style input:focus {
  border-color: #007bff;
  outline: none;
}

/* 로그인 버튼 */
.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #0056b3;
}

/* 링크 스타일 */
.links {
  margin-top: 15px;
  font-size: 14px;
}

.links a {
  color: #007bff;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style>
