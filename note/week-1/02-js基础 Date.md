###	
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<script>
			// Date js内置对象
			// 这句话的作用:通过 new 创建了date的实例对象
			var date = new Date();
			//Thu Oct 25 2018 09:23:11 GMT+0800  格林威治时间 东8时(北京时间)
			console.log(date);
			// 对象.xx ==> 对象的属性  比如 小狗的颜色 小狗的身高 ...
			// 对象.xx() ==> 调用对象的方法  比如: 小狗跑   小狗跳...
			// 1999  千年虫病毒  99+1 ==>  00
			var year = date.getFullYear(); // 调用对象date的方法,获取当前的年份
			console.log('year===>'+year);
			// 月份范围0-11  
			// 数组 下标都是从 0 开始
			var month = date.getMonth()+1//0~11
			console.log('month');
			//注意: 变量名 冲突  后面会覆盖前面
			var day = date.getDate();
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			//程序语言中 时间的最小单位为毫秒   1s = 1000 ms;
			var mm = date.getMilliseconds();
			// 时间戳 

			// + 连接符是所有编程语言中最常见的操作
			var nowTime = year + '年' + month + '月' + day + '日' + hour
				+ ':' + min + ':'+sec + ':'+ mm ;
			console.log('当前时间为: '+nowTime);
		</script>
	</head>
	<body>
		
	</body>
	</html>
###
	Date()      	返回到当前时间日期
	getDate()   	返回一个月中的某一天
	getMonth()  	返回月份(以数组形式储存 返回到0到11)
	getFullyear() 	返回年
	getHours() 		返回小时部分
	getminutes() 	返回分钟部分
	getseconds() 	返回秒数
	getday() 		返回到一周中的某一天(返回值是0(周日)
					到6(周六) 之间的一整个小时)