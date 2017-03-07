
function calc(num1, num2, optr)
{
	if (optr=='+')
		{var result=num1+num2
		console.log(result)
		}
		else if (optr=='-')
			{var result=num1-num2
				console.log(result)

			}
			else if (optr=='*')
				{var result=num1*num2
					console.log(result)
				}
				else if (optr=='/')
				{
					var result=num1/num2
					console.log(result)
				}
				else if(optr=='&&')
					{var result=num1&&num2
						console.log(result)
					}
        
		else{
			console.log("optr not found");
		}

}calc(0.3, 0.9856 ,'*')

