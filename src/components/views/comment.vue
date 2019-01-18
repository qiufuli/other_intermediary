<template>
  <div class="comment">
    <div class="list_title boxShadow">
      <i class="fa fa-long-arrow-left" @click="goback()"></i>
      <h3>评论后方可入坑~</h3>
    </div>
    <el-row class="gsjs boxShadow">
      <div class="list_item" v-for="item in listArr" :key="item.rank" @click="goComment(item)">
        <el-row class="item_title clearfix np">
          <!-- <el-col class="mc" :span="15">NO.{{item.rank}}</el-col> -->
          <el-col class="rkrs" :span="9">
            入坑人数:
            <b>{{item.number}}人</b>
          </el-col>
        </el-row>
        <el-row class="item_title clearfix">
          <el-col class="dwmc sl">中介名称：</el-col>
          <el-col class="dwmc sl">{{item.name}}</el-col>
        </el-row>
        <div class="item_text clearfix">
          <p class="gsjj">中介介绍:</p>
          <p class="gsjj_text">{{item.js}}</p>
        </div>
        <!-- <div class="item_bottom clearfix">
          <div class="frdb">法人代表：{{item.fa}}</div>
          <div class="clsj">成立时间：{{item.sj}}</div>
        </div>-->
      </div>
    </el-row>
    <div class="cmt-container">
      <el-row class="cmt_comment boxShadow">
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
        <el-button type="primary" size="medium" class="fbpl">发表评论</el-button>
      </el-row>
      <div class="cmt-list boxShadow">
        <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
          <div
            class="cmt-title"
          >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time }}</div>
          <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
        </div>
        <el-button type="danger" size="medium " class="fbpl">加载更多</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      comments: [
        {
          add_time: "2019-01-16",
          user_name: "xxxxx",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容"
        },
        {
          add_time: "2019-01-26",
          user_name: "xxxxx",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容"
        }
      ],
      listArr: [
        {
          lbid: "1",
          rank: "1",
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
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  height: 100%;
}
.gsjs {
  width: 100%;
  margin: 10px auto;
  padding: 20px 10px;
  box-sizing: border-box;
}
.comment {
  color: #b0adad;
  font-size: 16px;
  padding-top: 40px;
  position: relative;
  .list_title {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    i {
      position: absolute;
      color: #77a5ff;
      height: 100%;
      line-height: 40px;
      width: 30px;
      text-align: center;
      margin-left: 5px;
    }
  }
  h3 {
    margin: 0;
    color: #77a5ff;
    background-color: #ffffff;
    line-height: 40px;
    text-align: center;
  }
  .list_item {
    width: 100%;
    background-color: #ffffff;
    margin: 0px auto;
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
        float: left;
        color: #77dcff;
        font-size: 14px;
        margin-top: 2px;
        text-align: left;
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
}
.cmt-container {
  .cmt_comment {
    margin: 10px 0;
    padding: 10px 0;
    textarea {
      display: block;
      width: 100%;
      font-size: 14px;
      height: 85px;
      margin: 5px auto;
      border: 1px solid #b7cefc;
      border-radius: 5px;
      color: #787474;
      box-sizing: border-box;
    }
  }
  .fbpl {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .cmt-list {
    margin: 5px 0;
    padding-bottom: 60px;
    .cmt-item {
      font-size: 13px;
      margin-bottom: 10px;
      .cmt-title {
        line-height: 30px;
        background-color: #fbf6f6;
      }
      .cmt-body {
        line-height: 24px;
        text-indent: 2em;
        background: #fcfcfc;
      }
    }
  }
}
</style>
