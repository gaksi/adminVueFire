<template>
  <div id="app">
    <router-view></router-view>
    <dialogs-wrapper tag="div"></dialogs-wrapper>
  </div>
</template>
<script>

export default {
  name: 'App'
}
</script>
<style lang="scss">

  /* reset */
  * { border: 0 none; box-sizing: border-box; margin:0; padding:0 }
  dl, ul, ol, menu, li { list-style: none; }
  blockquote, q { quotes: none; }
  input, select, textarea, button, a {
    vertical-align: middle; transition:all .2s; color:#6c757d
  }
  button {
    border: 0 none; background-color: transparent; cursor: pointer;
  }
  input[type="button"], input[type="submit"] {cursor: pointer;}
  a { text-decoration: none; color: #6c757d; transition:all .2s; }
  i { font-style: normal; vertical-align:middle; }
  a:active, a:hover { text-decoration: none; color:inherit; }
  address, caption, cite, code, dfn, em, var { font-style: normal; font-weight: normal; }
  .clearfix { *zoom:1 }
  .clearfix:after { content:''; display:block; clear:both; }
  /*.router-link-exact-active { color: blue; }
  */

  body {
    margin: 0; font-family: sans-serif;
    font-size: 14px; font-weight: 400;
    line-height: 1.5; color: #6c757d; text-align: left;
    background-color: #fafbfe;
  }
</style>
