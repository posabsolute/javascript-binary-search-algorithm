

		var searchBinary = function(needle, haystack, case_insensitive) {
				if(needle == "") return [];
				var haystackLength 	= haystack.length;
				var letterNumber 	= needle.length;
				case_insensitive 	= (typeof(case_insensitive) === 'undefined' || case_insensitive) ? true:false;
				needle 				= (case_insensitive) ? needle.toLowerCase():needle;
					
				/* start binary search, Get middle position */
				var getElementPosition = findElement()
				
				/* get interval and return result array */
				if(getElementPosition == -1) return [];
				return getRangeElement = findRangeElement()
				
				function findElement() {
					if (typeof(haystack) === 'undefined' || !haystackLength) return -1;
					
					var high = haystack.length - 1;
					var low = 0;
					
					while (low <= high) {
						mid = parseInt((low + high) / 2);
						var element = haystack[mid].substr(0,letterNumber);
						element = (case_insensitive) ? element.toLowerCase():element;
						
						if (element > needle) {
							high = mid - 1;
						} else if (element < needle) {
							low = mid + 1;
						} else {
							
							return mid;
						}
					}
					return -1;
				}
				function findRangeElement(){
					
					for(i=getElementPosition; i>0; i--){
						var element =  (case_insensitive) ? haystack[i].substr(0,letterNumber).toLowerCase() : haystack[i].substr(0,letterNumber);
						if(element != needle){
							var start = i+1;
							break;
						}else{
							var start = 0;
						}
					}
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
				
			};		
