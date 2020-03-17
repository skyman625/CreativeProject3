<template>
<div>
  <h1>Character:</h1>
  <p v-if = "noCharacter">Please select a character</p>
  <SingleChar :character="character" :counterPicks="counterPicks"/>
</div>
</template>

<script>
import SingleChar from "../components/SingleChar.vue"
export default {
  name: 'Home',
  components: {
    SingleChar
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    noCharacter() {
      return this.$root.$data.selectedCharacters.length == 0;
    },
    character() {
      if(this.$root.$data.selectedCharacters.length == 2) {
          return this.$root.$data.selectedCharacters[1];
      }
      else {
        return this.$root.$data.selectedCharacters[0];
      }
    },
    counterPicks() {
      if(this.$root.$data.selectedCharacters.length == 0) {
        return null;
      }
      let character = this.$root.$data.selectedCharacters[0];
      if(this.$root.$data.selectedCharacters.length == 2) {
          character = this.$root.$data.selectedCharacters[1];
      }
      let counterPickNames = character.counterPicks;
      let counterPicks = [];
      for(let i = 0; i < counterPickNames.length; i++) {
        for(let j = 0; j < this.$root.$data.allCharacters.length; j++) {
          if(this.$root.$data.allCharacters[j].name == counterPickNames[i]) {
            counterPicks.push(this.$root.$data.allCharacters[j]);
            break;
          }
        }
      }
      return counterPicks;
      }
    },
}
</script>

<style scoped>
h1 {
  text-align: left;
  color: #000000;
  font-size: 50px;
}
p {
  color: #cc3300;
  font-size: 20px;
  text-align: center;
}
</style>
