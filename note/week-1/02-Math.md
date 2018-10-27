###
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<script>
			var nun1 = 1.33;
			var num3 = 3;
			var num4 = 5;
			console.log('num1==>'+num1);
			// 通过Math.ceil 可以获取num1 的天花板结果.
			var num2 = Math.ceil(num1);
			//获取地板函数
			var num3 = Math.floor(num1);
			console.log('ceil==>'+num2)//2
			console.log('floor==>'+num3)//1
										//最大
			console.log('Math.max==>'+ Math.max(num3,num4));//5

			// Math.random() 是计算机通过程序模拟出来的随机值(伪随机),跟自然随机有差别. 
			// Math.random()范围   [0,1)
			console.log('随机大小为==>'+Math.random())//
			// 获取1到100的随机值. [0,1) * 100 = [0,100)
			var rdNum = Math.floor(Math.random()*100)+1;
			console.log('随机 1~100==>' + rdNum);
			// 求任意范围随机值. 12~55  公式: Math.floor(Math.random() *数量+ min)
			var rdNum2 = Math.floor(Math.random()*(55-12+1))+12;
			console.log('随机 12~55==>' + rdNum2);
		</script>
	</head>
	<body>
		
	</body>
	</html>
###总结
	math.ceil 天花板结果
	math.floor 地板函数
	math.max 取最大值

	math.random [0,1] 	获取0~1的随机值
						获取1~100的随机值
	var rdNum = Math.floor(Math.random()*100)+1;
	console.log('随机 1~100==>' + rdNum);	
						获取12~55的随机值
	var rdNum = Math.floor(Math.random()*(55-12+1))+12;
	公式: Math.floor(Math.random() *数量+ min)

	math.pow 	平方
	math.round  四舍五入
###与或非
	 && 与 两个都为真==> 真
	 || 或  有一个为真 ==> 真
	 !  非
###判断语句
	if(){

		}else{

		}
###多分支语句
	if(){

		}else if(){
			
		}