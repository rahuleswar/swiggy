      	var action = document.getElementById('action')

      	action.addEventListener('click',function(){

                let before = document.querySelector(".after");
                before.classList.add("before");
      	});
 


        var form = document.getElementById('form')

             form.addEventListener('submit', function(ref){
                  
                  ref.preventDefault();
                  
             });

            


      	var badd = document.getElementById('b-add')
      	var f2 = document.getElementById('f2')


      	badd.addEventListener('click',function add(){
                   

                let col = document.createElement("div");
                col.classList.add("f1");
                f2.append(col);

                let input = document.createElement("input");
                input.setAttribute('id','action1')
                col.append(input);

                let label = document.createElement("label");
                label.classList.add("after1");
                label.innerHTML = "OTP";
                col.append(label);
                



                var action1 = document.getElementById('action1')

      	       action1.addEventListener('click',function(){

                       let before1 = document.querySelector(".after1");
                       before1.classList.add("before");
      	      });

               badd.removeEventListener("click", add);
                
      	});


