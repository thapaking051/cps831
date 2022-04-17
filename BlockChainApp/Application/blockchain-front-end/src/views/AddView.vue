<template>
  <div class="add">
    <h1>Add New House</h1>
     <el-form :inline="true" class="demo-form-inline">
       <el-form-item label="Username:">
        <el-input v-model="this.username" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
      <p>{{statusMessage}}</p>
     </el-form>
     
    <el-form v-if="show" :inline="true" class="demo-form-inline">
      <el-form-item label="ID:">
        <el-input v-model="this.id" />
      </el-form-item>
      <el-form-item label="Price:">
        <el-input v-model="this.price" />
      </el-form-item>

      <el-form-item label="Location:">
        <el-input v-model="this.location" />
      </el-form-item>

      <el-form-item label="Type:">
        <el-input v-model="this.type" />
      </el-form-item>

      <el-form-item label="Owner:">
        <el-input v-model="this.owner" />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="add">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Authentication from '../../services/Authentication'
export default {
  name: 'AddView',
  components: {
    
  },
  data() {
    return {
      username: '',
      show: false,
      id: '',
      price: '',
      location: '',
      type: '',
      owner: '',
      statusMessage: ''
    }
  },
  methods: {
    async add() {
      const response = await Authentication.add({
        username: this.username,
        id: this.id,
        price: this.price,
        location: this.location,
        type: this.type,
        owner: this.owner
      })
      console.log(response)
      this.statusMessage = response['data']
    },
    async login() {
      const response = await Authentication.login({
        username: this.username
      })
      console.log(response)
      this.statusMessage = response['data']['message']
      this.show = response['data']['loggedin']
    },
  }
}

</script>
