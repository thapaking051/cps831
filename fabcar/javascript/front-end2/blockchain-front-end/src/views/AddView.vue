<template>
  <div class="add">
    <h1>Add New Car</h1>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="ID:">
        <el-input v-model="this.id" />
      </el-form-item>

      <el-form-item label="Make:">
        <el-input v-model="this.make" />
      </el-form-item>

      <el-form-item label="Model:">
        <el-input v-model="this.model" />
      </el-form-item>

      <el-form-item label="Colour:">
        <el-input v-model="this.colour" />
      </el-form-item>

      <el-form-item label="Owner:">
        <el-input v-model="this.owner" />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
      </el-form-item>
      <p>{{statusMessage}}</p>
    </el-form>
  </div>
</template>
<script>

export default {
  name: 'AddView',
  components: {
    
  },
  data() {
    return {
      id: '',
      make: '',
      model: '',
      colour: '',
      owner: '',
      statusMessage: ''
    }
  },
  methods: {
    onSubmit() {
       console.log(this.id + " " + this.make + " " + 'submit!')
       this.statusMessage = "Added new car with properties \n" 
                              + "ID: " + this.id + " --- "
                              + "Make: " + this.make + " --- "
                              + "Model: " + this.model + " --- "
                              + "Colour: " + this.colour + " --- "
                              + "Owner: " + this.owner
    }
  }
}

</script>
