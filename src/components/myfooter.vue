<template>  
    <!-- footer -->
    <div class="footer">
      <div class="footerContent">微軟正黑體</div>
    </div>
</template>

<script>
  export default{
    
  }
</script>

<style scoped>
  .footer::before {
    content: '';
  }
  .footer {
    position: fixed;
    bottom: 0;
    background-color: #e71a04;
    width: 100%;
    height: 80px;
    text-align: center;
    font-family:'微軟正黑體';
    font-size:24px;
  }
  .footerContent {
    margin: 20px auto;
  }
</style>