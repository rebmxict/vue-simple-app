new Vue({
	el: '#vue-app',
	data: {
		available: true,
		nearby: false
	},
	methods: {
		/* addToA: function() {
			console.log('addToA');
			return this.a + this.age;
		},
		addToB: function() {
			console.log('addToB');
			return this.b + this.age;
		} */
	},
	computed: {
		addToA: function() {
			console.log('addToA');
			return this.a + this.age;
		},
		addToB: function() {
			console.log('addToB');
			return this.b + this.age;
		}
	}
});