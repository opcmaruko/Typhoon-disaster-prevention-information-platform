<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-49865265-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-49865265-2');
</script>


<template lang="pug">
  .hello.container
    h1 {{ msg }}
    h2 颱風防災資訊平台網頁前端實作

    
    select(name="" id="" class="form-control" required="required" v-model="area")
      option(value="全部") 全部     
      option(value="萬華區") 萬華區
      option(value="中正區") 中正區
      option(value="大同區") 大同區
      option(value="中山區") 中山區
      option(value="大安區") 大安區
      option(value="南港區") 南港區
      option(value="文山區") 文山區
      option(value="松山區") 松山區
      option(value="信義區") 信義區
      option(value="士林區") 士林區
      option(value="北投區") 北投區
      option(value="內湖區") 內湖區

    table(class="table table-striped")
      thead
        tr
          th(scope="col") 發生時間
          th(scope="col") 區域
          th(scope="col") 詳細位置
          th(scope="col") 描述
      
    
      tbody
        tr(v-for="(item,i) in listData" v-if="changearea(item)")
          th(scope="row") 
            p(class="h6") {{ item.CaseTime }}
          th(scope="row") 
            button(type="button" class="btn btn-outline-primary btn-sm") {{ item.CaseLocationDistrict }}
          th(scope="row") 
            p(class="h6") {{ item.CaseLocationDescription }}
          th(scope="row") 
            p(class="h6") {{ item.CaseDescription }}
    
    map(:center.sync="center" :map-type-id.sync="terrian" :zoom.sync="18")
      marker(v-for="m in markers" :position.sync="m.position")
     
    
 
</template>


<script>
import{ Map, Marker, load} from 'vue-google-maps'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC3HXUljQGeEd7WqWFuP2l_Hva9DA-qCoI",
    authDomain: "fir-a1095.firebaseapp.com",
    databaseURL: "https://fir-a1095.firebaseio.com",
    projectId: "fir-a1095",
    storageBucket: "fir-a1095.appspot.com",
    messagingSenderId: "176562940911"
};
load('AIzaSyD4IEtqhh-7ZiCsrcG2ZMi__rRgcqjg8Tk')
firebase.initializeApp(config);

export default {
  components: {
    Map, Marker
  },
  name: "hello",
  data() {
    return {
      area:"全部",
      msg: "maruko test",
      listData: [],
      center: {
        lat: 0,
        lng: 0
      },
      // 位置data
      position: {
        lat: 0,
        lng: 0
      },
      mapId: '',
      userId: '',
      markers: []
    };
  },
  // ready:
  ready () {
    // get mapID    
    this.mapId = location.hash.slice(1)
    if (this.mapId === '') {
      this.mapId = firebase.database().ref('/maps/').push().key
      location.hash = this.mapId
    }
    // get userID
    this.userId = localStorage.getItem('fire-geo-userId')
    if (!this.userId) {
      localStorage.setItem('fire-geo-userId', this.userId)
      this.userId = firebase.database().ref('/maps/' + this.mapId).push().key
    }
    // bable 語法
    const ref = firebase.database().ref(`/maps/$(this.mapId)/`)
    ref.on('child_added', (data) => {
          const marker = data.val()
          this.markers.push({
              key: data.key,
              position: data.val().position
          })
    })
    ref.on('child_changed', (data) => {
          let marker = this.markers.find((m) => m.key === data.key)
          marker.position = data.val().position
    })
    navigator.geolocation.watchPosition((position) => {
      this.position.lat = position.coords.latitude
      this.position.lng = position.coords.longitude
      ref.child(this.userId).set({
          position: this.position  
      })
    })
  },
  methods: {
    changearea(item){
      if(this.area=="全部"){
        return true
      }else if(item.CaseLocationDistrict==this.area){
        return true
      }
    },
    getData() {
      let vm = this;
      vm.axios
        .get(
          "https://tcgbusfs.blob.core.windows.net/blobfs/GetDisasterSummary.json"
        )
        .then(function(response) {
          console.log(response);
          vm.listData =
            response.data.DataSet["diffgr:diffgram"].NewDataSet.CASE_SUMMARY;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  },
  setCenter(){
          this.center = this.position
      }
  
  
  },

  mounted() {
    this.getData();
  }
};
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
}
map {
  display: block;
  width: 100%;
  height: 500px;
}
</style>



