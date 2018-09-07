




var i=2;//the number of initially difficult question
var m=0;//record how many questions are done
var num=new Array;//record the numbers of questions which are done
var sum=2;//record total points
var answer=document.getElementById("answer");
var a_lert=document.getElementById("a_lert");
var sub=document.getElementById("sub");
//questions
var questions=new Array(6);
questions[0]="Easy: What is 2 + 3?";
questions[1]="Easy: What is 11 + 12?";
questions[2]="Medium Easy: What is 4 * 5?";
questions[3]="Medium: What is 3 * 2 - 1?";
questions[4]="Hard: What is 2 ^ 4?";
questions[5]="Hard: What is 2 * 4 / 8?";
//answer
var answers=new Array(6);
answers[0]="4";
answers[1]="23";
answers[2]="20";
answers[3]="5";
answers[4]="16";
answers[5]="1";

var show=document.getElementById("showque");
//get a question from backstage and show it in the div which id is "timu"
function getQuestion()
{
      //show the question
     show.innerHTML=questions[i];
     num[m]=i;
     m++;

}

//judge whether the answer is correct or not
function IsCorrect()
{
	  if(answer.value==answers[i])
		  {
              	if(i>=0&&i<5&&m!=6)
              		{
              		   if(i==0||i==1)
        			   {
        				 sum+=1;
        			   }
        			   else if(i==2)
        			   {
        			 	 sum+=1.5;
        			   }
        			   else if(i==3)
        			   {
        				 sum+=2;
        			   }
        			   else
        			   {
        				 sum+=3;
        			   }
              		   var j=i+1;
              		   while(num.indexOf(j)!=-1&&j<6)
        			   {
        				 j++;
        			   }
                        i=j;
                        a_lert.innerHTML="You are correct! Your score is "+sum+".";
                        getQuestion();
                        answer.value="";
              		}
              	 else if(i==5&&m!=6)//complete the most difficult question but don't complete all questions
        		 {
                     sum+=3;
                     a_lert.innerHTML="You have answered most difficult ones correctly. Congradulations! Your score is "+sum+". Please refresh to start again.";
                     sub.value="Disabled";
             }
              	 else  if(m==6) //complete all  questions
        		 {
              		 a_lert.innerHTML="You have completed all questions. Your score is "+sum+". Please refresh to start again.";
                   sub.value="Disabled";
             }
		  }

 	 else //error answer
	 {
		 if(i>=1&&i<=6)
		 {
			 if(i==0||i==1)
			 {
				 sum-=1;
			 }
			 else if(i==2)
			 {
				sum-=1.5;
			 }
			 else if(i==3)
			 {
				 sum-=2;
			 }
			 else
			 {
				 sum-=3;
			 }
			 if(sum<0)
			 {
				 a_lert.innerHTML="Sorry but your score is too low: "+sum+". Please refresh to start again.";
         sub.value="Disabled";
       }
			 else
			 {
				  var j=i-1;
				  while(num.indexOf(j)!=-1)
				  {
					  j--;
				  }
				  i=j;
				  a_lert.innerHTML="Sorry this answer is not correct. Your score is "+sum+".";
				  getQuestion();
				  answer.value="";
			 }
		 }
		 else if(i==0)
		 {
			 a_lert.innerHTML="Sorry you didnt answer the easiest ones correctly. Your Score is "+sum+".";
       sub.value="Disabled";
     }
	 }
}
