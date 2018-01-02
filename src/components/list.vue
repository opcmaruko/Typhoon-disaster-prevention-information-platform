<template>
  <div class="list container">
    <h1>{{ msg }}</h1>
    <h5>狀態：{{showStatus}}</h5>
    <div class="form-group mx-sm-3 mb-2">
    <input type="text" v-model="username" placeholder="輸入名稱"> 
    <button type="button" class="btn btn-primary" @click="updataUsername">登入名稱</button>
    </div>
   
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Poto</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">選擇</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in listData" :class="{ 'bg-info': item.selected }">
          <th scope="row">{{i+1}}</th>
          <td><img :src="item.picture.medium"></td>
          <td>{{ item.name.first }} {{ item.name.last }}</td>
          <td>{{ item.email }}</td>
          <td><button class="btn btn-outline-primary" @click="clickMe(item)">選擇</button></td>
        </tr>
        
      </tbody>
    </table>
      
      
      <!-- <div class="media my-3">
        <div class="media-body">
          <h5 class="mt-0 mb-1">Media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
        <img class="ml-3" src="https://loremflickr.com/100/100" alt="Generic placeholder image">
      </div> -->
    
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      msg: "maruko test",
      listData: [],
      username: ''
      
    };
  },
  methods: {
    getData() {
      let vm = this;
      vm.axios
        .get("https://randomuser.me/api/?results=50")
        .then(function(response) {
          console.log(response);
          vm.listData = response.data.results;
          vm.listData.forEach(function(item) {
            vm.$set(item, "selected", false);
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    updataUsername() {
      this.$store.state.username=this.username
    },
    clickMe(item) {
      item.selected = !item.selected;
      console.log(item.selected);
    }
  },
  computed:{
     showStatus(){
       return this.$store.state.status
     }
  },
  mounted() {
    this.getData();
  }
};
</script>

