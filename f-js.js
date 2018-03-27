
function validateForm() {
    var x = document.forms["myForm"]["course"].value;
    var str = document.forms["myForm"]["option"].value;
    if(str=='Courses')
    {
    switch(x)
    {
    	case "Engineering": window.open('engineering.html');
    						break;
    	case "Medical" : window.open('doctrate.html');
    						break;
    	case "Designing" : window.open('desiging.html');
    						break;
    	case "Law" :     window.open('Law.html');
    					break;
    	case "Business" : window.open('business.html');
    						break;
    	case "hotel management" : window.open('hotel.html');
    						break;
    	case "Defence" : window.open('defence.html');
    						break;
    }
}
 else
  if(str=='Entrance-Exams')
  		{
   	switch(x)
      {
        case "Engineering": window.open('entrance-exams/Engg-entrance.html');
                            break;
        case "Medical" : window.open('entrance-exams/med-entrance.html');
                            break;
        case "Designing" : window.open('entrance-exams/desg-entrance.html');
                            break;
        case "Law" :     window.open('entrance-exams/Law-entrance.html');
                        break;
        case "Business" : window.open('entrance-exams/busi-entrance.html');
                            break;
        case "hotel management" : window.open('entrance-exams/hotel-entrance.html');
                            break;
        case "Defence" : window.open('defence.html');
                            break;
           }
  		}
   else
     if(str=='Placement-Exams')
 		{
 			window.open('entrance-exams/placement-exams.html');
 	}

}
