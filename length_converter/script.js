
function converttoinches(){
    // select variables
    let inputcnvt=Number(document.getElementById("input-cnvt").value)
    let result=document.getElementById("result");
    let cmformula=2.54;
    let convert=inputcnvt/cmformula;
    result.innerHTML=convert;
}
