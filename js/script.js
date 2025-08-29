// copy function
function copyBtn(id){
document.getElementById(id)
    .addEventListener('click',function(){
        const copyCount = parseInt(document.getElementById('copy_count').innerText)
        const newCopyCount = copyCount + 1
        document.getElementById('copy_count').innerText = newCopyCount
    })}
copyBtn('copy_btn_1')
copyBtn('copy_btn_2')
copyBtn('copy_btn_3')
copyBtn('copy_btn_4')
copyBtn('copy_btn_5')
copyBtn('copy_btn_6')
copyBtn('copy_btn_7')
copyBtn('copy_btn_8')
copyBtn('copy_btn_9')
// Call function
function callBtn(id){
    document.getElementById(id)
        .addEventListener('click',function(){
            const coinCount = parseInt(document.getElementById('coin_count').innerText)
            if(coinCount <= 0){
                alert('You do not have enough coins to make a call, please try again later.')
                return;
            }
            const newCoinCount = coinCount-20
            document.getElementById('coin_count').innerText = newCoinCount
        })}
callBtn('call_btn_1')
callBtn('call_btn_2')
callBtn('call_btn_3')
callBtn('call_btn_4')
callBtn('call_btn_5')
callBtn('call_btn_6')
callBtn('call_btn_7')
callBtn('call_btn_8')
callBtn('call_btn_9')