$(document).ready(function(){
    var input; // 입력값
        var calc_2 = 0; // 1항
        var result = 0; // 2항
        var cookie = null; // 대입
        var cookie2 = null; // 대입
               
        
        $('.btn .num').on('click', function(){
            
                input = $(this).text();
                calc_2 += input;
                
                calc_2 = Number(calc_2)
                cookie = calc_2;
            
            $('.output').text(calc_2);
            
            
            console.log(calc_2, result,cookie);
        })

        var operator;
        
        function calculation(){
            
            switch(operator){
                case '+' : result += Number(cookie);
                break;
                case 'X' : result *= Number(cookie);
                break;
                case '÷' : result /= Number(cookie);
                break;
                case '-' : result -= Number(cookie);
                break;
                //default: cookie = Number(result);
            }
        }
        
        
        
               
        $('.btn .op').on('click', function(){
            
            var opop = $('.ops').text();
            
            if(opop == 'result'){
                
                var op2 = $(this).text();
                operator = op2;
                $('.ops2').text(op2)
                
                calc_2 = 0;
                
            }else{
                $('.ops2').text('');
                
                    operator = $(this).text();
                
                $('.ops').text(operator);
                    
                    result = calc_2;
    
                    calc_2 = 0;
                console.log(calc_2, result,cookie);
                
                console.log('bye~')
            }
            
            

        });
        
        
        $('.btn .result').on('click', function(){
            calculation();
            console.log(calc_2, result,cookie);
            
            $('.output').text(result);
            $('.ops').text('result');
            
            
            
        })
        
        
        
        
        
        
        
        
        
        
        
        //////////////////////////////////////////////////
        var onOff = true;
        $('.onoff').on('click',function(){
            
            onOff = !onOff;
            
            if(onOff == false){
                $(this).find('p').animate({
                    'left' : '0px'
                },100);
                $('.output').text(0).css({
                    'color' : 'darkgoldenrod' 
                });
                $('.cover').hide();
                    
            }else{
                $(this).find('p').animate({
                    'left' : '-30px'
                },100);
                
                $('.output').text('Bye-').css({
                    'color' : 'transparent'
                })
                $('.ops').text('');
                $('.ops2').text('');
                $('.cover').show();
                    calc_2 = 0; 
                    result = 0; 
            }
            
        })
        
        $('.clr').on('click', function(){
            calc_2 = 0; 
            result = 0; 
            $('.output').text(0);
            $('.ops').text('');
            $('.ops2').text('');
        })
})