
$("#start").click(function(e){

    e.preventDefault();

    let before = $("#avant").val();
    let after = $("#apres").val();
    let tokens = $("#nbToken").val();
    let btcPrice = $("#btcPrice").val();



    let $benefCont = $("#benef");
    let $afterFees = $("#afterFees");
    let $fees = $("#fees");

    let first = after - before;
    let second = first * tokens;
    let benefice = second * btcPrice;
    
    let sato = benefice/first;

    let feeBefore = (((before * tokens)*btcPrice)*0.05)/100;
    let feeAfter = (((after * tokens)*btcPrice)*0.05)/100;
    let feeResult = feeBefore + feeAfter;

    console.log(feeBefore);

    let benefAfterFees = benefice - feeResult;

    $benefCont.html(" " + benefice.toFixed(2) + "$");
    $afterFees.html(" " + benefAfterFees.toFixed(2) + "$");
    $fees.html(" " + feeResult.toFixed(2) + "$");


});