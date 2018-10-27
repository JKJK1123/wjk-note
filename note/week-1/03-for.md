###for
	// 从0-99中找到一个能被(+5+7)/33整除的数
	// 在找到第一个满足的条件收 没必要进行额外的运算 这时候就可以终止循环 

	var rs = 0;
	for(var i = 0 ; i < 100 ; i++){
		if((i+5+7)%33==0){
			整除余数为0
			conso.log( )
			ri=i
		}
		break
		终止当前循环
	}

###嵌套循环
				// for循环是可以嵌套的 
				//注意: for不能无限嵌套. 每嵌套一层,复杂度都会指数上升.


	for(var i = 0 ; i < 3 ; i ++){
			for(var j = 0 ; j < 3 ; j ++){
				// break 只能打断当前循环
					if(j==1){
						break;
					}
				console.log('i==>'+i);
				console.log('j==>'+j);
			}
		}

###continue( 不会出现想次相同的结果)
	跳出当前循环的例子
	需求:找到0-100中所有能被3整除或者能被7整除的数

	for(var i = 0 ; i <= 100 ; i++){
		if(i%3==0){
			console.log()
			结束当前循环,进入下一次
			continue
		}
		if(i%7==0){
			console.log()
		}
	}

###数组
	var age = 20;
		//要求保存一个班级所有人的年龄信息
		// 通过new关键词可以创建一个数组
		var ages = new Array();
		// var ages = [];
		//以下是数组的某个下标位置
		ages[0] = 20;
		ages[1] = 22;
		ages[2] = 21;

###数组方法
	//注意: 数组一般用于存放同一类的数据集合
	var arr = [3,5,7];
	arr[0] = 1;
	arr[1] = 2;
	console.log(arr);			 //[1,2,7]
	console.log(arr.length); 	//3		length查看数组长度

###遍历数组
	var arr = [3,1,65,283,1,3,32,1];
		注意1 i从0开始
			2 i < arr.length
	for(var i = 0 ; i <arr.length; i++){
		console.logo('数组下标为'+i+'的值为==>'+arr[i])
	}

	var arr = [3,1,23,23,15,213,5];
		// for ... in...
		for(var a in arr){
			console.log('下标为'+a+'的值为'+arr[a]);
		}
```3合并数组(concat)
		var arr1 = [1,3,5];
		var arr2 = [2,4,6];
						 concat(合并)不会影响原来数组
		console.log(arr1.concat(arr2));		[1,3,5,2,4,6

```2把数组转换为字符串(join)
	var str = arr3.join('^_^');
	console.log(str);
```3.把字符串打断为数组(split)

```4.push  从后面插入一个值 ,并返回新的长度
	arr1.push();

```5.unshift  从前面插入,并返回新的长度
	var rs = arr1.unshift();
```6.pop    删除最后一个元素 并且返回被删除的值
	var rs1 = arr2.pop();
		
```7.shift   删除第一个元素 并且返回第一个删除的值
	var rs2 = arr2.shift();