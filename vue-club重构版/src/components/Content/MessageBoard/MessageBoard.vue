<template>
  <div class="messages">
    <h1>留言板</h1>
    <div class="form">
      <input type="text" v-model="username" placeholder="用户名">
      <textarea v-model="message" placeholder="留言内容"></textarea>
      <button @click="submitMessage" class="submitBtn">留言</button>
    </div>
    <div id="messageBoard">
      <div class="message" v-for="(msg, index) in messages" :key="index">
        <div class="message-info">
          <div class="info">
            <img src="@/assets/logo.jpg" alt="头像" width="50" height="50">
            <strong>{{ msg.username }}</strong>
          </div>
          <span>发布于:{{ msg.timestamp }}</span>
        </div>
        <div class="content">
          {{ msg.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBoard",
  data() {
    return {
      username: '',
      message: '',
      messages: []
    };
  },
  methods: {
    submitMessage() {
      if (this.message === '') {
        alert('请输入内容');
        return;
      }
      const newMessage = {
        username: this.username || '匿名',
        content: this.message,
        timestamp: this.getCurrentTime()
      };
      this.messages.unshift(newMessage);
      this.username = '';
      this.message = '';
    },
    getCurrentTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = ('0' + (now.getMonth() + 1)).slice(-2);
      const day = ('0' + now.getDate()).slice(-2);
      const hours = ('0' + now.getHours()).slice(-2);
      const minutes = ('0' + now.getMinutes()).slice(-2);
      const seconds = ('0' + now.getSeconds()).slice(-2);
      return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  color: #fff;
}

.messages {
  margin-top: 100px;
  width: 500px;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    to right bottom,
    rgba(255,255,255,.6),
    rgba(255,255,255,.3),
    rgba(255,255,255,.2)
);
  background-color: rgba(255, 255, 255, 0.266);
  border-radius: 40px;
  box-shadow: 0 10px 50px #00000019;
}

.form {
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  width: 100%;
  padding-bottom: 90px;
}

input:focus,
textarea:focus {
  outline: none;
}

input,
textarea {
  border: none;
  color: #000;
  margin-bottom: 40px;
  font: 900 30px '';
  border-radius: 10px;
  padding: 30px;
}

.messages h1 {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  font-size: 50px;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 10px;
}

.submitBtn {
  position: absolute;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
  border: none;
  font-size: 30px;
  letter-spacing: 5px;
  width: 130px;
  height: 70px;
  border-radius: 50px;
}

#messageBoard {
  width: 100%;
  text-align: left;
}

@keyframes messageFadeIn {
  to {
    opacity: 1;
  }
}

.message {
  width: 100%;
  padding: 10px;
  opacity: 0;
  animation: messageFadeIn 0.5s ease forwards;
  background-image: linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%);
  background-color: #fff;
  margin: 70px 0;
  border-radius: 10px;
  box-shadow: 0 10px 20px #00000026;
  text-shadow: 0px 0px 20px #ffffff;
  position:relative;
}

.message-info {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  position: relative;
}

.info {
  transform: translateY(-10px);
}

.info img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px #fff solid;
}

strong {
  position: absolute;
  width: 600px;
  letter-spacing: 3px;
  font-size: 27px;
  top: 50px;
  left: 130px;
}

.message-info span {
  position: absolute;
  top: 10px;
  right: 10px;
}

.content {
  font-size: 30px;
  margin: 30px;
  width: 95%;
}

</style>

