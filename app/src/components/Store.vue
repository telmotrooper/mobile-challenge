<template>
  <ion-app>
    <template v-if="apiReached == -1">
      <ion-header>
        <ion-toolbar>
          <ion-title>Lojas</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="content" padding>
        <p><i class="fa fa-5x fa-ellipsis-h"></i></p>
        <p>Buscando informações da loja, aguarde um momento...</p>
      </ion-content>
    </template>

    <template v-if="apiReached == 0">
      <ion-header>
        <ion-toolbar>
          <ion-title>Loja</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <p><i class='fa fa-5x fa-wifi'></i></p>
        <p>Não foi possível encontrar as informações da loja, verifique a sua conexão de internet!</p>
      </ion-content>
      <ion-footer>
        <ion-button @click="refreshPage" full>Recarregar</ion-button>
      </ion-footer>
    </template>

    <template v-if="(apiReached == 1 && store != null)"> <!-- Only happens if (apiReached == 1) -->
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ store.name }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="content" padding>
        <img v-bind:src="store.image_blob" class="thumbnail"
          onerror="src='static/empty-logo.png'">

        <ion-item class="margin-b-minus15">
          <ion-label class="text-center">Nota:</ion-label>
          <ion-label class="text-center">Takeback:</ion-label>
        </ion-item>

        <ion-item>
          <ion-label class="text-center bigger-text"><b>{{ store.rating }}</b></ion-label>
          <ion-label class="text-center bigger-text"><b>{{ parseFloat(store.takeback).toFixed(2) }}</b></ion-label>
        </ion-item>

        <ion-label>Categoria(s):</ion-label>

        <template v-for="(value, index) of store.category">
          <span v-bind:key="value" v-if="index < store.category.length - 1">{{ value }}, </span>
          <span v-bind:key="value" v-else>{{ value }}.</span>
        </template>

      </ion-content>
      <ion-footer>
        <ion-button @click="goHome" full>Voltar</ion-button>
        <ion-button v-bind:href="store.url">Acessar loja</ion-button>
      </ion-footer>
    </template>
  </ion-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      store: null,
      apiReached: -1
    }
  },
  created () {
    this.getData()
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    refreshPage () {
      this.$router.go(this.$router.currentRoute)
    },
    getData () {
      let vm = this

      this.$http.get(`http://challenge.getmore.com.br/stores/${this.$route.params.id}`, {'timeout': 3000})
        .then(
          response => {
            vm.apiReached = 1

            /* Prevents model updating errors */
            vm.$nextTick(() => {
              vm.store = response.body
            })
          },
          response => {
            vm.apiReached = 0
          })
    }
  }
}
</script>
