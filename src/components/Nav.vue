<template>
  <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">A-BLY (앱이 더 편리해요!)</a>
      <a class="navbar-brand" href="#">
        <button class="appGo" @click="appSetting">앱으로 보기</button>
      </a>
    </div>
  </nav>

  <div class="black-bg" v-if="isClickedAppSetting" @click="closeAppModal">
    <div class="white-bg container-sm text-center" @click.stop>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        class="bi bi-google-play mb-5"
        viewBox="0 0 16 16"
      >
        <path
          d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"
        />
      </svg>
      <h2 class="appSettingTitle mb-3">해당 기능은 앱에서 사용 가능해요!</h2>
      <p class="mb-4"><b style="color:tomato">앱 설치</b>하고 <b style="color:tomato">더 편하게</b> 쇼핑하기</p>
      <img src="/appSettingQRcode.png" class="appSettingImg" />
      <small class="mb-5" style="color: gray"
        >휴대폰으로 <b>QR 코드를 스캔</b>해서 설치해 보세요</small
      >
      <button type="button" class="btn btn-dark" @click="closeAppModal">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isClickedAppSetting: false,
    };
  },
  methods: {
    appSetting() {
      this.isClickedAppSetting = true;
    },
    closeAppModal() {
      this.isClickedAppSetting = false;
    },
  },
};
</script>

<style>
.appSettingImg {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
}

.white-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
}

.white-bg button {
  width: 100%;
  margin-top: 10px;
}
</style>