exports.action = function (data) {

console.log(''+data)

ClaraAskMe("je t'écoute",function(result){console.log("retour askme me time      :          "+result)

ClaraIASpeech(result,data.interphone)
})

}