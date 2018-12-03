<template>
  <div class="login_content">
    <section class="login_message">
      <input type="tel"  placeholder="邮箱号" v-model="email">
    </section>
    <section class="login_verification">
      <input :type="isShowPwd ? 'password' : 'text'" maxlength="15" placeholder="密码" v-model="password">

      <div @click="isShowPwd = !isShowPwd" class="switch_button" :class="{off: isShowPwd}">
        <div class="switch_circle" :class="{right: isShowPwd}"></div>
        <span class="switch_text">{{isShowPwd ? '': 'abc'}}</span>
      </div>
    </section>
    <span class="hint" v-if="hint">{{hint}}</span>
    <button class="loginIn" @click="loginIn">登录</button>
    <button class="OtherLoginWay" @click="$router.replace('/login')">其他登录方式</button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        email: '',
        password: '',
        hint: '', // 提示信息
        isShowPwd: true  // true是隐藏密码  false是显示密码
      }
    },
    methods: {
      loginIn () {
        const {email,password} = this;
        if (!email){
          this.hint = '邮箱不能为空'
          Toast({
            message: '邮箱不能为空',
            position: 'middle',
            duration: 2000
          });
        }else if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email))) {
          this.hint = '邮箱格式不正确,请重新输入'
          Toast({
            message: '邮箱格式不正确',
            position: 'middle',
            duration: 2000
          });
        }else if (!password){
          this.hint = '密码不能为空'
          Toast({
            message: '密码不能为空',
            position: 'middle',
            duration: 2000
          });
        } else if ((!/^[\x01-\x7f]*$/.test(password))) {
          this.hint = '密码不能为中文,请重新输入'
          Toast({
            message: '密码不能为中文',
            position: 'middle',
            duration: 2000
          });
        } else {
          this.hint = '';
          Toast({
            message: '登录成功',
            position: 'middle',
            duration: 2000
          });
        }
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
      position: relative;
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
      .switch_button{
        font-size: 12/@rem;
        border: 1px solid #FF69B4;
        border-radius: 15/@rem;
        transition: background-color .3s;
        padding: 0 6/@rem;
        width: 65/@rem;
        height: 30/@rem;
        line-height: 16/@rem;
        position: absolute;
        top: 100%;
        right: 50/@rem;
        transform: translateY(-50%);
        background: #DCDCDC;
        .switch_circle{
          position: absolute;
          top: -2px;
          right: -2px;
          width: 35/@rem;
          height: 35/@rem;
          background: #FF1493;
          border-radius: 50%;
          transition: transform .5s;
        }
        .right{
          transform: translateX(-45/@rem);
        }
        .switch_text{
          font-size: 24/@rem;
          color: #fff;
          float: left;
          line-height: 30/@rem;
        }
      }
      .off{
        background: #fff;
      }
    }
    .hint{
      margin-top: 80/@rem;
      margin-left: 24px;
      display: block;
      width: 100%;
      height: 24/@rem;
      text-align: left;
      font-size: 24/@rem;
      color: red;
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
