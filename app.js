Vue.filter('formatDate', function(d) {
	if(!window.Intl) return d;
	return new Intl.DateTimeFormat('en-US').format(new Date(d));
}); 

const app = new Vue({
	el:'#app',
	data:{
		term:'',
		results:[],
		noResults:false,
		searching:false,
		disliked:[],
		audio:null
	},
	methods:{
		search:function() {
			if(this.audio) {
				this.audio.pause();
				this.audio.currentTime = 0;
			}
			this.searching = true;
			fetch(`api/phpGetPost.php?opis=${this.term}`)
			.then(res => res.json())
			.then(res => {
				console.log(JSON.parse(res).results);
				
				this.searching = false;
				this.results = JSON.parse(res).results;
				//this.noResults = this.results.length === 0;
			});
		},
		play:function(s) {
			if(this.audio) {
				this.audio.pause();
				this.audio.currentTime = 0;
			}
			this.audio = new Audio(s);
			this.audio.play();
		},
		dislike(track){
			console.log(track);
			
			this.disliked.push(track)

		},
		async save(){
			console.log('save');
			
			await axios.post('api/save.php', { dane: 'fdasfdfdfsdaffdas' });
		}
	},
	computed:{
		filtered(){
			let self = this;
			return this.results.filter((el)=>self.disliked.indexOf(el.trackId) < 0)
		}
	}
});