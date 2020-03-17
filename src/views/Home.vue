<template>
<div>
<h1>Roster</h1>
<p>Select one character to see their stats and counter picks</p>
<p>Select two characters to compare their stats</p>
  <CharacterList :chars="allCharacters" />
</div>
</template>

<script>
import CharacterList from "../components/CharacterList.vue"
export default {
  name: 'Home',
  components: {
    CharacterList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    allCharacters() {
      return this.$root.$data.allCharacters;
    }
  },
}
</script>

<style scoped>
h1 {
  color: #000000;
  font-size: 50px;
}
</style>
