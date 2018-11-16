## 安装
npm i ke-ueditor
or
yarn add ke-ueditor

## 使用，以@vue/cli3为标准
<ol>
<li>去官网下载ueditor   https://ueditor.baidu.com/website/download.html</li>
<li>解压到public/static</li>
</ol>
```
<template>
  <u-editor v-model="content" :ueditor="`${process.env.BASE_URL}static/ueditor/`"></u-editor>
</template>

<script>
import UEditor from 'ke-ueditor/lib/editor'
export default {
  components: {
    UEditor
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>
```
