<template>
  <div class="login_content">
    <section class="login_message">
      <input type="tel" maxlength="11" placeholder="邮箱号">
    </section>
    <section class="login_verification">
      <input type="tel" maxlength="8" placeholder="密码">
    </section>

    <button class="loginIn">登录</button>
    <button class="OtherLoginWay" @click="$router.replace('/login')">其他登录方式</button>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "../../../common/stylus/mixins";

  .login_content{
    width: 100%;
    padding: 0 42/@rem;
    box-sizing: border-box;
    margin-top: -40/@rem;
    height: 220/@rem;
    margin-bottom: 20/@rem;
    text-align: center;
    .login_message{
      width: 100%;
      margin-top: 16/@rem;
      height: 50/@rem;
      font-size: 24/@rem;
      color: #333;
      margin-bottom: 60/@rem;
      text-align: center;
      input{
        border: 1px solid #333;
        border-radius: 8px;
        padding: 20/@rem 0 20/@rem 20/@rem;
        width: 90%;
        outline: none;
        height: 100%;
        &:focus{
          border: 1px solid red;
        }
      }
    }
    .login_verification{
      width: 100%;
      height: 50/@rem;
      font-size: 24/@rem;
      color: #333;
      margin-bottom: 40/@rem;
      text-align: center;
      input{
        border: 1px solid #333;
        border-radius: 8px;
        padding: 20/@rem 0 20/@rem 20/@rem;
        width: 90%;
        outline: none;
        height: 100%;
        &:focus{
          border: 1px solid red;
        }
      }
    }
    .loginIn,.OtherLoginWay{
      margin-top: 40/@rem;
      width: 90%;
      height: 90/@rem;
      background: #b4282d;
      color: #fff;
      font-size: 28/@rem;
      outline: none;
      border-radius: 8px;
      border: 1px solid #b4282d;
    }
    .OtherLoginWay{
      margin-top: 40/@rem;
      background: none;
      color: #b4282d;
    }
  }
</style>
