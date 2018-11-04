### for (for循环是可以嵌套的,for不能无限嵌套. 每嵌套一层,复杂度都会指数上升.)
		1. break终止当前循环
			从0-99中找到一个能被(+5+7)/33整除的数
				var rs = 0;
				for(var i = 0 ; i < 100 ; i++){
					if((i+5+7)%33==0){
						整除余数为0
						conso.log( )
						ri=i
					}
				break
			}
	2. continue(跳出当前循环的例子)
		需求:找到0-100中所有能被3整除或者能被7整除的数
			for(var i = 0 ; i <= 100 ; i++){
				if(i%3==0){
					console.log()
					continue
				}
				if(i%7==0){
					console.log()
				}
			}
### 数组
		1. xx.length(查看数组的长度)
		2. 合并数组(concat)不会影响原来数组
			var arr1 = [1,3,5];
			var arr2 = [2,4,6];
			console.log(arr1.concat(arr2));		//[1,3,5,2,4,6]
		3. 把数组转换为字符串(join)
			var str = arr3.join('^_^');
		4. 把字符串打断为数组(split)
		5. push  从后面插入一个值 ,并返回新的长度
			arr1.push();
		6. unshift  从前面插入,并返回新的长度
			var rs = arr1.unshift();
		7. pop    删除最后一个元素 并且返回被删除的值
			var rs1 = arr2.pop();
		
		8. shift   删除第一个元素 并且返回第一个删除的值
			var rs2 = arr2.shift();
		9. break (实现目标跳出循环)
		10. continue(继续往下)
		11. .in/.length(两种遍历数组的方式)
