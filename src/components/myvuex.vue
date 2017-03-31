<template>
   <div>
    <h1>Hello Vuex!</h1>
    {{getcount}}
    <button @click="doAdd">doAdd</button>
    <button @click="doMinus">doMinus</button>
   </div>
</template>

<script>
    import { mapActions,mapGetters} from 'vuex'
    export default{
      computed:mapGetters([
        'getcount'
      ]),
      methods:mapActions([
        'doMinus','doAdd'
      ])
}
</script>