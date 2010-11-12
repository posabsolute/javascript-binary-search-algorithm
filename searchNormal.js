
	var searchNormal = function(needle, haystack, case_insensitive) {
			

			if(needle == "") return [];
				var haystackLength			= haystack.length;
				var letterNumber 		= needle.length;
				var case_insensitive 	= (typeof(case_insensitive) === 'undefined' || case_insensitive) ? true:false;
				var needle 				= (case_insensitive) ? needle.toLowerCase():needle;
				
					
				for(x=0; x<haystackLength; x++  ){
					var element = haystack[x].substr(0,letterNumber);
					element = (case_insensitive) ? element.toLowerCase():element;
				
					if(element == needle){
						
						var getElementPosition = x;
						return findRangeElements();
						break;
					}
				}
			
		
			function findRangeElements(){
				var start = getElementPosition;
				for(i=getElementPosition; i<haystackLength; i++ ){
					var element =  (case_insensitive) ? haystack[i].substr(0,letterNumber).toLowerCase() : haystack[i].substr(0,letterNumber);
					if(element != needle){
						var end = i;
						break;
					}else{
						var end = haystackLength -1;
					}
				}
				var result = [];
				for(i=start; i<end;i++){
					result.push(haystack[i])
				}
				
				return result;
			}
	}