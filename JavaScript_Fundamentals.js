console.log()
window.onload = function() {
    //JAVASCRIPT FUNDAMENTALS PART 1

    //CODE CHANLLENG 1+2
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
        var Mark_BMI = (Mark_w / Mark_h ** 2);
        var John_BMI = (John_w / John_h ** 2);
        if (Mark_BMI > John_BMI) MarkHigherBMI = 1;
        else if (Mark_BMI == John_BMI) MarkHigherBMI = 2;
        if (MarkHigherBMI == 1) {
            result.innerText = "Mark's BMI(" +Mark_BMI.toFixed(2)+ ") is higher than John's("+John_BMI.toFixed(2) + ")";
        } else if (MarkHigherBMI == 2) {
            result.innerText = "John's BMI(" +John_BMI.toFixed(2)+ ") is equal to Mark's("+Mark_BMI.toFixed(2) + ")";
        } else {
            result.innerText = "John's BMI(" +John_BMI.toFixed(2)+ ") is higher than Mark's("+Mark_BMI.toFixed(2) + ")";
        }
    }
    calcul.addEventListener('click', BMI);

    //CODE CHALLENG 3
    var D_score1_input = document.getElementById('D_score1');
    var D_score2_input = document.getElementById('D_score2');
    var D_score3_input = document.getElementById('D_score3');
    var K_score1_input = document.getElementById('K_score1');
    var K_score2_input = document.getElementById('K_score2');
    var K_score3_input = document.getElementById('K_score3');
    var result_score = document.getElementById('result_score');
    var calcul_score = document.getElementById('calcul_score');

    function avg_score() {
        var D_score1 = parseFloat(D_score1_input.value);
        var D_score2 = parseFloat(D_score2_input.value);
        var D_score3 = parseFloat(D_score3_input.value);
        var K_score1 = parseFloat(K_score1_input.value);
        var K_score2 = parseFloat(K_score2_input.value);
        var K_score3 = parseFloat(K_score3_input.value);
        var D_avg = ((D_score1+D_score2+D_score3)/3);
        var K_avg = ((K_score1+K_score2+K_score3)/3);
        if (D_avg>=100 || K_avg>=100) {
            if (D_avg > K_avg) {
                result_score.innerText = "Dolphins's avg score (" +D_avg.toFixed(2)+ ") is the winner";
            } else if (D_avg < K_avg) {
                result_score.innerText = "Koalas's avg score (" +K_avg.toFixed(2)+ ") is the winner";
            } else {
                result_score.innerText = "Both teams have the sane score ("+D_avg.toFixed(2)+")";
            }
        } else {
            result_score.innerText = "No teams wins the trophy";
        }
    }
    calcul_score.addEventListener('click', avg_score);

    //CODE CHANLLENGE 4
    var bill_input = document.getElementById('tip');
    var calcul_tip = document.getElementById('calcul_tip')
    function sum_tip() {
        var bill = parseFloat(bill_input.value);
        var tip = 0;
        var sum =0;
        switch (bill) {
            case (bill>50 && bill>300): 
                tip = 15*bill/100;
                break;
            default:
                tip = 20*bill/100;
        }
        sum = bill + tip;
        result_tip.innerText = "The bill was "+bill +", the tip was "+tip.toFixed(2)+", and the total value "+ sum.toFixed(2);
    }
    calcul_tip.addEventListener('click', sum_tip);

    //JAVASCRIPT FUNDAMENTALS PART 2

    //CODE CHANLENGE 1
    var _2D_score1_input = document.getElementById('2D_score1');
    var _2D_score2_input = document.getElementById('2D_score2');
    var _2D_score3_input = document.getElementById('2D_score3');
    var _2K_score1_input = document.getElementById('2K_score1');
    var _2K_score2_input = document.getElementById('2K_score2');
    var _2K_score3_input = document.getElementById('2K_score3');
    var result_score = document.getElementById('result_score');
    var calcul_score = document.getElementById('calcul_score');

    function check_winner() {
        var _2D_score1 = parseFloat(_2D_score1_input.value);
        var _2D_score2 = parseFloat(_2D_score2_input.value);
        var _2D_score3 = parseFloat(_2D_score3_input.value);
        var _2K_score1 = parseFloat(_2K_score1_input.value);
        var _2K_score2 = parseFloat(_2K_score2_input.value);
        var _2K_score3 = parseFloat(_2K_score3_input.value);
        var D_avg2 = ((_2D_score1+_2D_score2+_2D_score3)/3);
        var K_avg2 = ((_2K_score1+_2K_score2+_2K_score3)/3);
        
        if (D_avg2 >= (2*K_avg2)) {
            result_score2.innerText = "Dolphins's avg score (" +D_avg2.toFixed(2)+".vs "+ K_avg2.toFixed(2)+ ") is the winner";
        } else if (K_avg2 >= (2*D_avg2)) {
            result_score2.innerText = "Koalas's avg score (" +K_avg2.toFixed(2)+".vs "+ D_avg2.toFixed(2)+") is the winner";
        } else if ((2*K_avg2) == (2*D_avg2)) {
            result_score2.innerText = "Both teams have the sane score ("+D_avg2.toFixed(2)+")";
        } else {
        result_score2.innerText = "No teams wins the trophy";
        }
    }
    calcul_score2.addEventListener('click', check_winner);

    // CODE CHANLLENGE 2
    let bill_input2 = document.getElementById('tip2');
    var calcul_tip2 = document.getElementById('calcul_tip2');
    function sum_tip2() {
        let billsArr = (bill_input2.value).split(',').map(item => item.trim());
        let tipArr = [];
        let sumArr = [];

        for (i=0; i<billsArr.length; i++) {
            switch (billsArr[i]) {
                case (billsArr[i]>50 && billsArr[i]>300): 
                    tipArr.push(15*billsArr[i]/100);
                    break;
                default:
                    tipArr.push(20*billsArr[i]/100);
            }
            sum = parseFloat(tipArr[i])+parseFloat(billsArr[i]);
            sumArr.push(sum);
            result_tip2.innerText = "The bill was "+billsArr +", the tip was "+tipArr+", and the total value "+ sumArr;
        }
        
    }
    calcul_tip2.addEventListener('click', sum_tip2);

    //CODE CHANLLENGE 3
    var oMark_w_input = document.getElementById('oMark_w');
    var oMark_h_input = document.getElementById('oMark_h');
    var oJohn_w_input = document.getElementById('oJohn_w');
    var oJohn_h_input = document.getElementById('oJohn_h');
    var oresult = document.getElementById('oresult');
    var ocalcul = document.getElementById('ocalcul');

    function oBMI(){
        const Mark = {
            fullName: 'Mark Miller',
            mass: parseFloat(oMark_w_input.value),
            height: parseFloat(oMark_h_input.value),
            calcBMI: function() {
                this.BMI = this.mass / (this.height**2);
                return this.BMI;
            }
        };
        
        const John = {
            fullName: 'John Smith',
            mass: parseFloat(oJohn_w_input.value),
            height: parseFloat(oJohn_h_input.value),
            calcBMI: function() {
                this.BMI = this.mass / (this.height**2);
                return this.BMI;
            }
        };
        const markBMI = Mark.calcBMI();
        const johnBMI = John.calcBMI();


        if (markBMI > johnBMI) {
            oresult.innerText =  Mark.fullName +"'s BMI(" +markBMI.toFixed(2)+ ") is higher than "+John.fullName + "'s BMI("+johnBMI.toFixed(2) +")";
        } else if (johnBMI > markBMI) {
            oresult.innerText =  John.fullName +"'s BMI(" +johnBMI.toFixed(2)+ ") is higher than "+Mark.fullName + "'s BMI("+markBMI.toFixed(2) +")";
        } else {
            oresult.innerText =  Mark.fullName +"'s BMI(" +markBMI.toFixed(2)+ ") is equal to "+John.fullName + "'s BMI("+johnBMI.toFixed(2) +")";
        }
    }
    ocalcul.addEventListener('click',oBMI);
    
} 