<template>
  <div class="list">
    <div class="list_title boxShadow">
      <h3>嘿!中介,排行榜</h3>
    </div>
    <div class="list_group">
      <div class="list_item boxShadow" v-for="item in listArr" :key="item.rank" @click="goComment(item)">
        <el-row class="item_title clearfix np">
          <el-col class="mc" :span="15">NO.{{item.rank}}</el-col>
          <el-col class="rkrs" :span="9">入坑人数:
            <b>{{item.number}}人</b>
          </el-col>
        </el-row>
        <el-row class="item_title clearfix">
          <el-col class="dwmc sl">{{item.name}}</el-col>
        </el-row>
        <div class="item_text clearfix">
          <p class="gsjj">中介介绍:</p>
          <p class="gsjj_text">{{item.js}}</p>
        </div>
        <div class="item_bottom clearfix">
          <div class="frdb">法人代表：{{item.fa}}</div>
          <div class="clsj">成立时间：{{item.sj}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num:'1',
      listArr: [
        {
          lbid:'1',
          rank: "1",
          number: "30",
          name: "我爱我家",
          js:
            "我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家",
          fa: "张先生",
          sj: "1996-09-20"
        },
        {
          lbid:'2',
          rank: "2",
          number: "30",
          name: "我爱我家",
          js:
            "我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家",
          fa: "张先生",
          sj: "1996-09-20"
        },
        {
          lbid:'3',
          rank: "3",
          number: "30",
          name: "我爱我家",
          js:
            "我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家",
          fa: "张先生",
          sj: "1996-09-20"
        },
        {
          lbid:'4',
          rank: "4",
          number: "30",
          name: "我爱我家",
          js:
            "我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家我爱我家",
          fa: "张先生",
          sj: "1996-09-20"
        }
      ]
    };
  },
  methods: {
    goComment(item){
      this.$router.push({ name: "comment", params: { id:item.lbid }});
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  color: #b0adad;
  font-size: 16px;
  padding-bottom: 60px;
  padding-top: 40px;
  position: relative;
  .list_title {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  h3 {
    margin: 0;
    color: #77a5ff;
    background-color: #ffffff;
    line-height: 40px;
    text-align: center;
  }
  .list_item {
    width: 90%;
    background-color: #ffffff;
    padding: 10px 10px;
    margin: 20px auto;
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;
    .mc {
      color: #6cadf7;
      font-style: oblique;
      font-weight: bold;
      display: block;
      margin: 0 0 5px 0;
    }
    .item_title {
      padding: 0 0 5px 0;
      border-bottom: 1px solid #fff7f7;
      .dwmc {
        float: left;
        font-size: 16px;
      }
      .rkrs {
        float: right;
        color: #77dcff;
        font-size: 14px;
        margin-top: 2px;
        text-align: right;
        b {
          color: #77dcff;
        }
      }
    }
    .np {
      padding: 0;
      border: 0;
    }
    .item_text {
      padding: 5px 0;
      font-size: 14px;
      border-bottom: 1px solid #fff7f7;
      .gsjj_text {
        text-indent: 2em;
      }
    }
    .item_bottom {
      padding: 5px 0;
      .frdb,
      .clsj {
        // float: left;
        font-size: 14px;
      }
      .clsj {
        // float: right;
      }
    }
  }
  p {
    margin: 0;
  }
}
</style>
