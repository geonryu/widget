$(document).ready(function(){
    
    function clock(){
            var now = new Date();
            
            var sec = now.getSeconds(),
                min = now.getMinutes(),
                hour = now.getHours();
            
            var _date = now.getDate(),
                day = now.getDay();
            
            //1s : 6deg
            //1m : 6deg
            //1h : 30deg
            var degH = Number(hour) * 30,
                degM = Number(min) * 6,
                degS = Number(sec) * 6;
            
            $('.hr').css({
                'transform' : 'rotate('+degH+'deg)'
            });
            
            $('.min').css({
                'transform' : 'rotate('+degM+'deg)'
            });
            $('.sec').css({
                'transform' : 'rotate('+degS+'deg)'
            });
        
        
            if(hour > 12){
                hour -= 12;
            }
        
            if(hour<10){
                hour = '0'+hour
            }
            if(min<10){
                min = '0'+min
            }
            
            $('.hr_d').text(hour);
            $('.min_d').text(min);
        
            switch(day){
                case 0 : day = 'SUN';
                break;
                    case 1 : day = 'MON';
                break;
                    case 2 : day = 'TUE';
                break;
                    case 3 : day = 'WED';
                break;
                    case 4 : day = 'THU';
                break;
                    case 5 : day = 'FRI';
                break;
                    case 6 : day = 'SAT';
                break;
            }
        
            $('.window .date').text(_date);
            $('.window .day').text(day);
        }
        
        setInterval(clock, 500);
        clock();
    
    
})