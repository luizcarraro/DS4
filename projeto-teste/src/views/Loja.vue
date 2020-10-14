<template>
  <div>
    <li v-for="item in items" :key="item.name">
      <ItemDaLoja :titulo="item.name" />
    </li>
  </div>
</template>

<script>

import ItemDaLoja from '@/components/ItemDaLoja.vue';

export default {
  name: 'Loja',
  components: {
    ItemDaLoja
  },
  data() {
    return {
      name: 'adsd',
      items: [
        { name: 'Camisa Social Tam P' }, 
        { name: "Boneco do Naruto" },
        { name: "Mais alguma coisa" }
      ]
    }
    
  }
}
</script>

<style>

</style>