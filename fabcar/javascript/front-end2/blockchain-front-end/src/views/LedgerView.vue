<template>
  <div class="ledger">
    <h1>Ledger</h1>
    <div style="margin: 50px;">
      <el-table :data="test" stripe>
        <el-table-column prop="Record.make" label="Make" />
        <el-table-column prop="Record.model" label="Model" />
        <el-table-column prop="Record.colour" label="Colour" />
        <el-table-column prop="Record.owner" label="Owner" />
      </el-table>
    </div>
  </div>
</template>
<script>

export default {
  name: 'LedgerView',
  components: {
    
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      test: [{"Key":"CAR0","Record":{"make":"Toyota","model":"Prius","colour":"blue","owner":"Tomoko"}},{"Key":"CAR1","Record":{"make":"Ford","model":"Mustang","colour":"red","owner":"Brad"}},{"Key":"CAR2","Record":{"make":"Hyundai","model":"Tucson","colour":"green","owner":"Jin Soo"}},{"Key":"CAR3","Record":{"make":"Volkswagen","model":"Passat","colour":"yellow","owner":"Max"}},{"Key":"CAR4","Record":{"make":"Tesla","model":"S","colour":"black","owner":"Adriana"}},{"Key":"CAR5","Record":{"make":"Peugeot","model":"205","colour":"purple","owner":"Michel"}},{"Key":"CAR6","Record":{"make":"Chery","model":"S22L","colour":"white","owner":"Aarav"}},{"Key":"CAR7","Record":{"make":"Fiat","model":"Punto","colour":"violet","owner":"Pari"}},{"Key":"CAR8","Record":{"make":"Tata","model":"Nano","colour":"indigo","owner":"Valeria"}},{"Key":"CAR9","Record":{"make":"Holden","model":"Barina","colour":"brown","owner":"Shotaro"}},{"Key":"car12","Record":{"make":"honda","model":"civic","colour":"black","owner":"aayush"}}],
      tableData2: [
        {
          "Key":"CAR0",
          "Record":
            {
              "make":"Toyota",
              "model":"Prius",
              "colour":"blue",
              "owner":"Tomoko"
            }
        },
        {
          "Key":"CAR1",
          "Record":{"make":"Ford","model":"Mustang","colour":"red","owner":"Brad"}
        },
        {
          "Key":"CAR2",
          "Record":{"make":"Hyundai","model":"Tucson","colour":"green","owner":"Jin Soo"}
        },
        {
          "Key":"CAR3",
          "Record":{"make":"Volkswagen","model":"Passat","colour":"yellow","owner":"Max"}
        },
        {
          "Key":"CAR4",
          "Record":{"make":"Tesla","model":"S","colour":"black","owner":"Adriana"}
        }
      ]
    }
  },
  methods: {
    
  }
}

</script>
