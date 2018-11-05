### json格式
	var movie = {
			"title":"我不是药神",
			"casts": [
				{
					"name":"徐峥",
					"avatar":"http://xxxx.jpg",
					"age":45
				}
			],
			"pubDate":"2017-10-1",
			"rate":5
		}

	1. 要实现把json类型的对象转换为文本,使用JSON.stringify()的方法
			var jsonstr = JSON.stringify(movie);

	2. 要实现从字符串转换为对象,使用JSON.parse() 方法:
			var user = JSON.parse('{"name":"张三","age":20}')
	** 转换为对象 即可通过 . 的形式调用属性的值 **
			console.log(user.name);

	3. 
### json遍历
	**对象**
	var user = {
		name:'张三',
		age:20
	}
	**json对象**
	var userjson = {
		"name":"李四",
		"age":30
	}
	**遍历**
	for(var a in user){
		console.log(a);   //name,age
		xx.xx 这种形式只能读取原来具有的属性
		xx.a  a是变量,必须通过 xx.[a]形式取值

		console.log(user[a]);	//张三 20
	}
	for(var b in userjson){

		console.log(userjson[b]);	//李四 30
	}