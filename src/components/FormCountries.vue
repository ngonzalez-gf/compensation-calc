<template>
    <v-container fluid>
        <v-row align="center">
        <v-col cols="6">
            <v-subheader>Seleccione País</v-subheader>
        </v-col>

        <v-col cols="6">
            <v-select
            v-model="select"
            :hint="`${select.name}`"
            :items="items"
            item-text="name"
            item-value="name"
            label="Select"
            persistent-hint
            return-object
            single-line
            ></v-select>
        </v-col>                    
        <v-col cols="6">
            <v-subheader>Seleccione Capital</v-subheader>
        </v-col>

        <v-col cols="6">
            <v-select
            v-model="select"
            :hint="`${select.capital}`"
            :items="capitals"
            item-text="capital"
            item-value="capital"
            label="Select"
            persistent-hint
            return-object
            single-line
            ></v-select>
        </v-col>            
        </v-row> 
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data () {
      return {
        select: {},
        items: [],
        capitals: []
      }
    },
    methods: {
        async getCountries() {
            let country = await axios.get(`https://restcountries.eu/rest/v2/regionalbloc/usan?fields=name`)
                console.log(country.data)
                this.items =  await country.data
        },
        async getCapitals() {
            let capital = await axios.get(`https://restcountries.eu/rest/v2/regionalbloc/usan?fields=capital`)
            console.log(capital.data)
            this.capitals = await capital.data
        }
    },
    created () {
        this.getCountries();
        this.getCapitals();
    }
  }
</script>