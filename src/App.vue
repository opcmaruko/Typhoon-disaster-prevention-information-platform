<template lang="pug">
  #app
      .navbar.navbar-expand-lg.navbar-light.bg-light
        a.navbar-brand(href="#") Vue練習
        button.navbar-toggler(type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation")
          span.navbar-toggler-icon
        
        .collapse.navbar-collapse#navbarSupportedContent
          ul.navbar-nav.mr-auto
            li.nav-item
              router-link.nav-link(:to="'/'") 颱風防災資訊平台網頁前端實作
            li.nav-item
              router-link.nav-link(:to="'vue2'") vue基本練習
            li.nav-item
              router-link.nav-link(:to="'list'") vue list練習
            
          .col-md-1 Hi! {{ showUsername }}
          select.form-control.col-md-2(@change='changestatus', v-model='status')
            option(value='上線') 上線
            option(value='下線') 下線

      router-view(@pushnewname='getNewName')

            
 
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
