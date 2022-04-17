<template>
  <div class="ledger">
    <h1>Query the Ledger</h1>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="getData">Query</el-button>
      </el-form-item>
    </el-form>
    <div style="margin: 50px;">
      <el-table :data="data" stripe>
        <el-table-column prop="Key" label="ID" />
        <el-table-column prop="Record.price" label="Price($)" />
        <el-table-column prop="Record.location" label="Location" />
        <el-table-column prop="Record.type" label="Color" />
        <el-table-column prop="Record.owner" label="Owner" />
      </el-table>
    </div>
  </div>
</template>
<script>
import Authentication from '../../services/Authentication'
export default {
  name: 'LedgerView',
  props: {
   
  },
  data() {
    return {
      data: ''
    }
  },
  methods: {
    async getData() {
      const response = await Authentication.query()
      console.log(response)
      this.data = response['data']
    }
  }
}
</script>

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