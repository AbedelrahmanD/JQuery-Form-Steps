function nextStep(id) {
    $(`#${id} .stepActive`).next(".stepline").addClass("stepLineActive");
    $(`#${id} .stepLineActive`).next(".step").addClass("stepActive");
}
function prevStep(id) {
    $(`#${id} .stepLineActive`).last().removeClass("stepLineActive");
    var setps = $(`#${id} .stepActive`)
    if (setps.length > 1) {
        setps.last().removeClass("stepActive");
    }

}