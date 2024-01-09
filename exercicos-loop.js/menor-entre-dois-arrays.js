const a = [ 3,5,56,78,6,7]
const b = [ 2,4,3,6,45,65]

for (let i = 0; i < a.length; i++){
	if (a[i] < b[i]){
		console.log(a[i]);
	}else{
		console.log(b[i])
	}
}