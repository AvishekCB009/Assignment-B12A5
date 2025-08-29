// heart function
function heartCalc(id){
    document.getElementById(id)
        .addEventListener('click',function(){
            const heartCount = parseInt(document.getElementById('heart_count').innerText)
            const newHeartCount = heartCount + 1
            document.getElementById('heart_count').innerText = newHeartCount
        })
}
heartCalc('heart_btn_1')
heartCalc('heart_btn_2')
heartCalc('heart_btn_3')
heartCalc('heart_btn_4')
heartCalc('heart_btn_5')
heartCalc('heart_btn_6')
heartCalc('heart_btn_7')
heartCalc('heart_btn_8')
heartCalc('heart_btn_9')

// copy function
function copyCalc(){
        const copyCount = parseInt(document.getElementById('copy_count').innerText)
        const newCopyCount = copyCount + 1
        document.getElementById('copy_count').innerText = newCopyCount
}

document.getElementById('copy_btn_1')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_1').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })
document.getElementById('copy_btn_2')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_2').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })
document.getElementById('copy_btn_3')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_3').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })
document.getElementById('copy_btn_4')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_4').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })
document.getElementById('copy_btn_5')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_5').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })
document.getElementById('copy_btn_6')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_6').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })
document.getElementById('copy_btn_7')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_7').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })
document.getElementById('copy_btn_8')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_8').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })
document.getElementById('copy_btn_9')
    .addEventListener('click',function(){
        copyCalc()
        const textNum = document.getElementById('service_number_9').innerText
        navigator.clipboard.writeText(textNum)
        alert(textNum+" has been copied to clipboard.")
    })


// call function
document.getElementById('call_btn_1')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_1').innerText
        const serviceNum = document.getElementById('service_number_1').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })
document.getElementById('call_btn_2')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_2').innerText
        const serviceNum = document.getElementById('service_number_2').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })
document.getElementById('call_btn_3')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_3').innerText
        const serviceNum = document.getElementById('service_number_3').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })
document.getElementById('call_btn_4')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_4').innerText
        const serviceNum = document.getElementById('service_number_4').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })
document.getElementById('call_btn_5')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_5').innerText
        const serviceNum = document.getElementById('service_number_5').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })
document.getElementById('call_btn_6')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_6').innerText
        const serviceNum = document.getElementById('service_number_6').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })
document.getElementById('call_btn_7')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_7').innerText
        const serviceNum = document.getElementById('service_number_7').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })
document.getElementById('call_btn_8')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_8').innerText
        const serviceNum = document.getElementById('service_number_8').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })
document.getElementById('call_btn_9')
    .addEventListener('click',function(){
        const coinCount = parseInt(document.getElementById('coin_count').innerText)
        if(coinCount <= 0){
            alert('You do not have enough coins to make a call, please try again later.')
            return;
            }
        const newCoinCount = coinCount-20
        document.getElementById('coin_count').innerText = newCoinCount
        const serviceName = document.getElementById('service_name_9').innerText
        const serviceNum = document.getElementById('service_number_9').innerText
        alert('Request for '+serviceName+' has been initiated. Calling '+serviceNum+'. 20 coins will be deducted as service charge')
    })


