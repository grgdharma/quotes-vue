<template>
  	<h1>Quoto lists </h1>
	<v-btn @click="reloadQuotes()">Reload</v-btn>
	<h1>{{ quote }}</h1>
  	<table>
		<thead>
			<tr><th>SN.</th><th>Quote</th><th>Action</th></tr>
		</thead>
		<tbody>
			<tr v-for="(quote,index) in quoteLists" :key="index" @click="displayQuote(quote)" >
				<td>{{ index +1 }}</td>
				<td>{{ quote }}</td>
				<td><router-link :to="{ name: 'quote', params: {id: index+1, detail: quote} }" > Detail </router-link> </td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import axios from 'axios';

export default {
  	data() {
      	return {
			quoteLists: [],
			quote:"",
      	}
  	},
  	mounted(){
    	let app = this;
		app.getQuoteList();
  	},
	methods: {
		getQuoteList(){
			let app = this;
			let url = import.meta.env.VITE_APP_ROOT_API+"/quotes";
			axios.get(url).then(function(response){
				app.quoteLists = [];
				response.data.forEach(function (item) {
					app.quoteLists.push(item.text);
				})
				
			})
		},
		reloadQuotes(){
			let app = this;
			app.quote ="";
			app.getQuoteList();
		},
		displayQuote(data){
			let app = this;
			app.quote = data;
		}

	}
  	

}
</script>
