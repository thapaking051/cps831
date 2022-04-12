<template>
  <div class="hello">
    <el-form :inline="true" class="demo-form-inline">
      <h1>Sign Up</h1>
      <el-form-item label="User Name:">
        <el-input v-model="this.user1" />
      </el-form-item>
      <el-form-item label="Password:">
        <el-input
          v-model="this.password1"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit1">Sign Up</el-button>
      </el-form-item>
      <p>{{this.statusMessageSignUp}}</p>
    </el-form>

    <el-form :inline="true" class="demo-form-inline">
      <h1>Log In</h1>
      <el-form-item label="User Name:">
        <el-input v-model="this.user2" />
      </el-form-item>
      <el-form-item label="Password:">
        <el-input
          v-model="this.password2"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit2">Log In</el-button>
      </el-form-item>
      <p>{{this.statusMessageLogIn}}</p>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data() {
    return {
      user1: '',
      password1: '',
      user2: '',
      password2: '',
      statusMessageSignUp: '',
      statusMessageLogIn: ''
    }
  },
  methods: {
    onSubmit1() {
       console.log(this.user + " " + this.region + " " + 'submit!')
       this.statusMessageSignUp = "Sign Up Successful!"
    },

    onSubmit2() {
       console.log(this.user + " " + this.region + " " + 'submit!')
       this.statusMessageLogIn = "Log In Successful!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
