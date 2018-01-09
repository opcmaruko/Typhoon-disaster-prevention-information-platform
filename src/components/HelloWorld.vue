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
    
    
 
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      area:"全部",
      msg: "maruko test",
      listData: []
    };
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
    }
  },

  mounted() {
    this.getData();
  }
};
</script>



