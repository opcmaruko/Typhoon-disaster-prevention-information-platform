<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
              <router-link class="nav-link" :to="'/'">HelloWorld</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'vue2'">vue2</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'list'">list</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          
        </div>
        <div class="col-md-1">Hi! {{ showUsername }}</div>
        <select class="form-control col-md-2" @change="changestatus" v-model="status">
          <option value="上線">上線</option>
          <option value="下線">下線</option>
        </select>
    </nav>
   
    <router-view @pushNewName="getNewName" ></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      status: this.$store.state.status,
      username: this.$store.state.username
    };
  },
  methods: {
    changestatus() {
      this.$store.state.status = this.status;
    },
    // getNewName 是接收用的事件
    getNewName(newName) {
      let vm = this;
      vm.username = newName;
    }
  },
  computed: {
    showUsername() {
      return this.$store.state.username;
    }
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
