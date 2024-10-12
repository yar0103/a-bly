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
      <h2 class="appSettingTitle">해당 기능은 앱에서 사용 가능해요!</h2>
      <p>앱 설치하고 더 편하게 쇼핑하기</p>
      <img src="/appSettingQRcode.png" class="appSettingImg" />
      <small>휴대폰으로 QR 코드를 스캔해서 설치해 보세요</small>
      <button type="button" class="btn btn-dark">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data(){
    return{
      isClickedAppSetting: false,
    }
  },
  methods: {
    appSetting(){
      this.isClickedAppSetting = true
    },
    closeAppModal(){
      this.isClickedAppSetting = false
    }
  }
};
</script>

<style>
.appSettingImg{
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