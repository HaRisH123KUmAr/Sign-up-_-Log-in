/*
*   ------Simple Calculator------
*   Copyright (c) 2017 Mohamed Ashraf.
*   inspired by: https://dribbble.com/shots/2342847-Day-004-Calculator-Daily-UI
*   License under the MIT license.
*/

$(document).ready(function(){
    var calculator = {
      init: function(){
        this.cacheDom();
        this.bindEvents();
      },
      cacheDom: function(){
        this.$val = $('.val');
        this.$screen = $('.screen');
        this.$outcome = $(".outcome");
        this.$equalButton = $('.equal');
        this.$clearButton = $('.clear');
      },
      bindEvents: function(){
        this.$val.on('click', function(e){
          e.preventDefault();
          var $href = $(this).attr('href');
          
          calculator.$screen.animate({'opacity':0}, 100 , function(){
            if(calculator.$screen.html() === '0'){calculator.$screen.html(" ");}
            calculator.$screen.append($href);
            
//             if(calculator.$outcome.val().length >= 3 ){
//                calculator.$outcome.val( Number(calculator.$outcome.val() + $href).toLocaleString('en'));
//                }else{
//                calculator.$outcome.val(calculator.$outcome.val() + $href);
//                }
            
            calculator.$outcome.val(calculator.$outcome.val() + $href);
          }).animate({'opacity':1}, 100);
        });
        this.$equalButton.on('click', function(){
          calculator.$screen.animate({'opacity':0},100,calculator.equal).animate({'opacity':1},100);
        });
        this.$clearButton.on('click', function(){
          calculator.$screen.animate({'opacity':0},100,calculator.clear).animate({'opacity':1},100);
        });
      },
      equal: function(){
        calculator.$outcome.val(eval(calculator.$outcome.val()));
        calculator.$screen.html(eval(calculator.$outcome.val()));
      },
      clear: function(){
        calculator.$outcome.val("");
        calculator.$screen.html("0");
      }
  };
  calculator.init();
});