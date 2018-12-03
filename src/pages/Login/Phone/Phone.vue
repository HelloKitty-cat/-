<template>
  <div class="login_content">
    <section class="login_message">
      <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
      <button @click="getCode" :disabled="isShow" :class="{on: isShow}"
              class="get_verification">{{isShow ? `还有${CountDown}秒` : '获取验证码'}}</button>
    </section>
    <section class="login_verification">
      <input type="tel" maxlength="8" placeholder="验证码" v-model="number">
    </section>
    <span class="hint" v-show="hint">{{hint}}</span>
    <section class="login_hint">
      温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
      <a href="javascript:;">《用户服务协议》</a>
    </section>

    <button class="loginIn" @click="loginTo">登录</button>
    <button class="OtherLoginWay" @click="$router.replace('/login')">其他登录方式</button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        phone: '',
        number: '',
        hint: '',
        isShow: false,  //默认显示黑色
        CountDown: 30
      }
    },
    methods: {
      loginTo () {
        const {phone,number} = this;

        if (!phone){
          this.hint = '手机号不能为空';
          Toast({
            message: '手机号不能为空',
            position: 'middle',
            duration: 2000
          });
        }else if(!(/^1[34578]\d{9}$/.test(phone))){
          this.hint = '手机号有误，请重填';
          Toast({
            message: '手机号有误',
            position: 'middle',
            duration: 2000
          });
        } else if (!number){
          this.hint = '验证码不能为空';
          Toast({
            message: '验证码不能为空',
            position: 'middle',
            duration: 2000
          });
        }else if (!(/^\d{4}$/).test(number)) {
          this.hint = '验证码有误，请重填';
          Toast({
            message: '验证码有误',
            position: 'middle',
            duration: 2000
          });
        }else{
          this.hint = '';
          Toast({
            message: '登录成功',
            position: 'middle',
            duration: 2000
          });
        }
      },
      getCode () {
        let num = 30;
        this.isShow = true;
        console.log('123456');
        this.timer = setInterval(() => {
          num--;
          if (num === 0){
            clearInterval(this.timer)
            this.isShow = false;
          }
          this.CountDown = num;
        },1000)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../common/stylus/mixins";

  .login_content{
    width: 100%;
    padding: 0 42/@rem;
    box-sizing: border-box;
    margin-top: -40/@rem;
    text-align: center;
    .login_message{
      position: relative;
      width: 100%;
      margin-top: 16/@rem;
      font-size: 24/@rem;
      color: #333;
      margin-bottom: 20/@rem;
      text-align: center;
      input{
        border: 1px solid #333;
        border-radius: 8px;
        padding: 20/@rem 0 20/@rem 20/@rem;
        width: 90%;
        outline: none;
        height: 50/@rem;
        &:focus{
          border: 1px solid red;
        }
      }
      button{
        position: absolute;
        right: 50/@rem;
        top: 30/@rem;
        font-size: 24/@rem;
        border-radius: 8px;
        color: #333;
        background: none;
        outline: none;
        border: none;
      }
      .on{
        color: #999;
      }
    }
    .login_verification{
      width: 100%;
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
        height: 50/@rem;
        &:focus{
          border: 1px solid red;
        }
      }
    }
    .login_hint{
      text-align: left;
      margin-left: 22px;
      margin-bottom: 40/@rem;
      margin-top: 40/@rem;
      width: 100%;
      height: 60/@rem;
      color: #999;
      font-size: 24/@rem;
      a{
        color:#b4282d ;
      }
    }
    .hint{
      margin-left: 22px;
      display: block;
      width: 100%;
      height: 24/@rem;
      text-align: left;
      font-size: 24/@rem;
      color: red;
    }
    .loginIn,.OtherLoginWay{
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
