
function converttoinches(){
    // select variables
    const inputcnvt=Number(document.getElementById("input-cnvt").value)
    const result=document.getElementById("result");
    const cmformula=2.54;
    const convert=inputcnvt/cmformula;
    result.innerHTML=convert.toFixed(2)+"inches";
}
