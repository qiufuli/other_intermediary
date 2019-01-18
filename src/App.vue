<template>
  <div id="app">
    <transition >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  position: relative;
  height: 100%;
  background: #f7f5f5;
  margin:0;
}
*{
  margin: 0;
  padding: 0;
}
.clearfix {
  zoom: 1;
}

.clearfix:after {
  content: '';
  width: 0;
  height: 0;
  clear: both;
  display: block;
}
.sl{
  	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis
}
.boxShadow {
	box-shadow:0 1px 10px rgba(36, 111, 222, 0.3);
	border: 1px solid #e2eeff;
  background-color:#ffffff;
}
#app{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.el-message-box{
  width: 80%;
}
</style>
