console.log()
window.onload = function() {
    var Mark_w_input = document.getElementById('Mark_w');
    var Mark_h_input = document.getElementById('Mark_h');
    var John_w_input = document.getElementById('John_w');
    var John_h_input = document.getElementById('John_h');
    var result = document.getElementById('result');
    var calcul = document.getElementById('calcul');
    var MarkHigherBMI = 0;

    function BMI() {
        var Mark_w = parseFloat(Mark_w_input.value) || 0;
        var Mark_h = parseFloat(Mark_h_input.value) || 0;
        var John_w = parseFloat(John_w_input.value) || 0;
        var John_h = parseFloat(John_h_input.value) || 0;
        var Mark_BMI = Mark_w / Mark_h ** 2;
        var John_BMI = John_w / John_h ** 2;
        if (Mark_BMI > John_BMI) MarkHigherBMI = 1;
        if (MarkHigherBMI == 1) {
            result.innerText = 'Mark co BMI cao hon';
        } else {
            result.innerText = 'John co BMI cao hon';
        }
    }
    calcul.addEventListener('click', BMI);
}