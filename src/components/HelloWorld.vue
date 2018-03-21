<template>
  <div>
    <h1>Dapp Persona</h1>
    <form>
      <div class="form-group">
        <label for="name">Nombre de la persona</label>
        <input type="text" class="form-control" id="name" v-model="name">
      </div>
      <button type="button" class="btn btn-primary" @click="setName">Guardar</button>
    </form>
  </div>
</template>

<script>
import Person from '@/handlers/person'

export default {
  data () {
    return {
      name: ''
    }
  },
  beforeCreate () {
    Person.init()
  },
  mounted () {
    this.getName()
  },
  methods: {
    getName () {
      Person.getName().then(name => this.name = name).catch(console.error)
    },
    setName() {
      Person.setName(this.name)
    }
  }
}
</script>
