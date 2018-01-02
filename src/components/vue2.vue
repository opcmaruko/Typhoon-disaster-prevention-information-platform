<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <h2>聊天室</h2>
      <div class="col-lg-12">
        <div class="input-group">
          <input type="text" v-model="message" class="form-control" placeholder="" aria-label="">
          <span class="input-group-btn">
            <button class="btn btn-secondary" @click="submitMessage()" type="button">Go!</button>
          </span>
        </div>
      </div>

      <div class="media my-3" v-for="item in messages">
        <img v-if="userneme !== item.userneme" class="mr-3" src="https://loremflickr.com/100/100" alt="Generic placeholder image">
        <div class="media-body">
          <h5  class="mt-0">{{item.userneme}}</h5>
          {{item.message}}
        </div>
        <img v-if="userneme == item.userneme"  class="ml-3" src="https://loremflickr.com/100/100" alt="Generic placeholder image">
      </div>
      
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userneme:'maruko',
      message:'',
      messages:[
        {
          userneme:'maruko',
          message:'安安！！'
        },{
          userneme:'小丸子',
          message:'安安！！你好！'
        }
      ]
    }
  },
  methods:{
    submitMessage(){
    let vm = this
    vm.messages.unshift({
      userneme:vm.userneme,
      message:vm.message

    })
    vm.message=''

  }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
