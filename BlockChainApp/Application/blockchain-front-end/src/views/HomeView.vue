<template>
  <div class="hello">
    <el-form :inline="true" class="demo-form-inline">
      <h1>Register User</h1>
      <el-form-item label="Username:">
        <el-input v-model="this.username" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">Register</el-button>
      </el-form-item>
      <p>{{this.statusMessage}}</p>
    </el-form>
  </div>
</template>

<script>
import Authentication from '../../services/Authentication'
export default {
  name: 'HomeView',
  props: {
   
  },
  data() {
    return {
      username: '',
      statusMessage: ''
    }
  },
  methods: {
    async register() {
      const response = await Authentication.register({
        username: this.username
      })
      console.log(response)
      this.statusMessage = response['data']
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
