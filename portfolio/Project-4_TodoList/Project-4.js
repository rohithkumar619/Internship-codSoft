let Array = JSON.parse(localStorage.getItem('Array'));
let todo,date;
            renderOnBrowser();
            function addTodo(){
                let inputElement = document.querySelector('.js-input');
                todo = inputElement.value;

                let inputDate =document.querySelector('.js-date');
                date=inputDate.value;
                Array.push({name:todo,dueDate:date});
                console.log(Array);

                inputElement.value ='';
                renderOnBrowser();
            }
            function renderOnBrowser(){
                let todoHTML ='';
                for(let i=0 ; i<Array.length ; i++){
                    let todoObject = Array[i];
                    let name=todoObject.name;
                    let dueDate=todoObject.dueDate;
                    let HTML =`<div class="js-name">${name} </div>
                                    <div class="js-dueDate">${dueDate} </div>
                                    <button class="js-delete" onclick="
                                            Array.splice(${i},1);
                                            renderOnBrowser();    
                                    ">Delete</button>
                                
                               
                        `;
                    todoHTML +=HTML;
                    localStorage.setItem('Array',JSON.stringify(Array));
                    
                }
                console.log(Array);
                document.querySelector('.js-div').innerHTML=todoHTML;
            }