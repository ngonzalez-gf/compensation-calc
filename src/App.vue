<template>
  <v-app light>
    <v-toolbar color="white">
      <v-toolbar-title>Compensación</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" height="600">
          <v-layout column align-center justify-center class="white--text">
            <img src="./assets/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-center">Calculadora de compensación</h1>
            <div class="subheading mb-4 text-center">Powered by Vuetify</div>
            <v-btn class="mt-12" color="blue lighten-2" dark large href="/pre-made-themes">
              Get Started
            </v-btn>
          </v-layout> 
        </v-parallax>
      </section>

      <section>
        <v-container>
          <v-layout colunm wrap class="my-12" justify-center>
            <v-flex xs12 sm4 class="my-4">
              <v-card>
                <v-card-title>
                  <h1 class="aling-center">Formulario</h1>
                </v-card-title>
                <v-card-text>
                  <v-form class="px-3">
                    <v-text-field 
                    label="Nombres" 
                    required
                    type="name"
                    v-model="name"
                    :error-messages="errors.collect('name')"
                    data-vv-validate-on="change|custom|input"
                    autofocus id="name"
                    />
                    <v-text-field label="Apellidos" />
                    <v-text-field
                      type="email"
                      label="Correo"
                      name="email"
                      v-model="email"
                      maxlength="100"
                      v-validate="'required|email|max:100'"
                      :error-messages="errors.collect('email')"
                      required
                      data-vv-name="email"
                      data-vv-scope="email"
                      data-vv-validate-on="change|custom|input"
                      autofocus id="email"
                    />
                    <v-text-field
                      label="Celular"
                      v-model="phoneNumber"
                      :counter="80"
                      v-validate="'required|max:80'"                      
                      data-vv-name="phoneNumber"
                      data-vv-scope="phoneNumber"
                      required
                    />
                    <v-text-field label="Telefono" required />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn>Validate</v-btn>
                </v-card-actions>
              </v-card>              
            </v-flex>                        
          </v-layout>
          <table-info></table-info>
        </v-container>
      </section>


      <section>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn class="mt-12" color="blue lighten-2" dark large href="/pre-made-themes">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>777-867-5309</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Chicago, US</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer color="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-4">
              Made with
              <v-icon class="red--text">mdi-heart</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import api from './api'
import TableInfo from './components/TableInfo'

export default {
  name: 'App',
  components: { TableInfo },

  data () {
    return {
      name:'',
      lastname: '',
      email: '',
      phoneNumber: '',
      info: []
    }
  },

  created () {
    api.apiInfo().then(info => (this.info = info))
  }
};
</script>
