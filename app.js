let questioninNumbers = ''
function one(){
    questioninNumbers += '1'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function two(){
    questioninNumbers += '2'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function three(){
    questioninNumbers += '3'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function four(){
    questioninNumbers += '4'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function five(){
    questioninNumbers += '5'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function six(){
    questioninNumbers += '6'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function seven(){
    questioninNumbers += '7'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function eight(){
    questioninNumbers += '8'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function nine(){
    questioninNumbers += '9'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function zero(){
    questioninNumbers += '0'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function addition(){
    questioninNumbers += '+'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function subtraction(){
    questioninNumbers += '-'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function multiplication(){
    questioninNumbers += 'x'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function division(){
    questioninNumbers += '/'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function point(){
    questioninNumbers += '.'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers 
}
function clean_up(){
    questioninNumbers = '0'
    document.getElementsByClassName('question')[0].innerText = questioninNumbers
    document.getElementsByClassName('answer')[0].innerText = questioninNumbers

} 

function calculate_on(){
    let a = document.getElementsByClassName('question')[0].innerText
    // the code below separates at the sight of non-digits and fullstop(^\d.) (dot)(.), this means regex"/ /" putting it in "( )" means the separators would also be part of the array.
    // alert("1.766+767.23+56-646".split(/([^\d.])/g))
    let b = a.split(/([^\d.])/g)
    let sign_collector = [];
    let number_collector = []
    let pre_answer = 0
    for (let i = 0;i < b.length;i++){

        
        if(b[i] == '+' ){
            sign_collector.push(b[i]);
        }
        else if(b[i] == '-' ){
            sign_collector.push(b[i]);
        }
        else if(b[i] == 'x' ){
            sign_collector.push(b[i]);
        }
        else if(b[i] == '/' ){
            sign_collector.push(b[i]);
        }
        else{
            number_collector.push(b[i])
        }
    }
    for (let j = 0; j < number_collector.length-1; j++){
        for(let k = 0; k < sign_collector.length ; k++){
            if(j == 0){
                if(sign_collector[k] == '+' ){
                    pre_answer = parseFloat(number_collector[j]) + parseFloat(number_collector[j +1]);
                    sign_collector.shift()
                    break
                }
                if(sign_collector[k] == '-' ){
                    pre_answer = parseFloat(number_collector[j]) - parseFloat(number_collector[j +1]);
                    sign_collector.shift()
                    break
                }
                if(sign_collector[k] == 'x' ){
                    pre_answer = parseFloat(number_collector[j]) * parseFloat(number_collector[j +1]);
                    sign_collector.shift()
                    break
                }
                if(sign_collector[k] == '/' ){
                    pre_answer = parseFloat(number_collector[j]) / parseFloat(number_collector[j +1]);
                    sign_collector.shift()
                    break
                }

            }
            else {
                if(sign_collector[k] == '+' ){
                    pre_answer = pre_answer + parseFloat(number_collector[j +1]);
                    sign_collector.shift()
                    break
                }
                if(sign_collector[k] == '-' ){
                    pre_answer = pre_answer - parseFloat(number_collector[j +1]);
                    sign_collector.shift()
                    break
                }
                if(sign_collector[k] == 'x' ){
                    pre_answer = pre_answer * parseFloat(number_collector[j +1]);
                    sign_collector.shift()
                    break
                }
                if(sign_collector[k] == '/' ){
                    pre_answer = pre_answer / parseFloat(number_collector[j +1]);
                    sign_collector.shift()
                    break
                }
                
            }

        }
    }
    document.getElementsByClassName("answer")[0].innerText = pre_answer
}


