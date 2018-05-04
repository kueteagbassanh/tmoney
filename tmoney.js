module.exports = function() {
  this.parse = function (msg) {
    for (var i = 0; i < msg.length; i++) {
      if (msg[i] == "#") {
          var refNumber = '';
          for (var j = i+1; j < msg.length; j++) {
             //reference number

              if ( !isNaN(parseInt(msg[j])) ) {
                refNumber += parseInt(msg[j]);
              }
              //end of REF
              if (msg[j] == ".") {

                //userName
              var userName =  msg.slice(j+2, msg.indexOf("vous a envoye") - 1);

                //reading of amount
                var amount = '';
                for (
                      var k = msg.indexOf("vous a envoye")+("vous a envoye").length+1;
                      k < msg.indexOf(" F sur votre compte TMoney.");
                      k++
                    ) {
                  if ( !isNaN(parseInt(msg[k])) ) {
                    amount += parseInt(msg[k]);
                  }

                }
                //reading of amount

                // reading of balance
                var balance = '';
                for (
                      var l = msg.indexOf(" F sur votre compte TMoney.")+(" F sur votre compte TMoney.").length+1;
                      l < msg.length;
                      l++
                    ) {
                  if ( !isNaN(parseInt(msg[l])) ) {
                    balance += parseInt(msg[l]);
                  }
                }
              // reading of balance end
                break;
              }
          }
          break;
      }

    }
    return {senderReference : parseInt(refNumber - 1), receiverReference : parseInt(refNumber), userName : userName, amountSent : parseInt(amount), balance : parseInt(balance)};
  }
  this.compare = function () {

  }
}
