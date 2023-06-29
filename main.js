const testBox = document.querySelector('.test-box')
// 
const input1 = document.querySelector('#inp1')
const inputWith1 = document.querySelector('#inp-with-1')
input1.addEventListener('input', ()=>{
    inputWith1.value = input1.value
    testBox.style.borderTopRightRadius = input1.value + 'px'
})
// 
const input2 = document.querySelector('#inp2')
const inputWith2 = document.querySelector('#inp-with-2')
input2.addEventListener('input', ()=>{
    inputWith2.value = input2.value
    testBox.style.borderBottomRightRadius = input2.value + 'px'
})
// 
const input3 = document.querySelector('#inp3')
const inputWith3 = document.querySelector('#inp-with-3')
input3.addEventListener('input', ()=>{
    inputWith3.value = input3.value
    testBox.style.borderBottomLeftRadius = input3.value + 'px'
})
//
const input4 = document.querySelector('#inp4')
const inputWith4 = document.querySelector('#inp-with-4')
input4.addEventListener('input', ()=>{
    inputWith4.value = input4.value
    testBox.style.borderTopLeftRadius = input4.value + 'px'
})