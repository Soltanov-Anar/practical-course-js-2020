const checkValueInputs = (button, id1, id2) => {
    const btn = document.querySelector(button);
    const input1 = document.getElementById(id1);
    const input2 = document.getElementById(id2);

    console.log(input1, input2);
    console.log(input1);

    const checkValue = (elem) => {
            elem.addEventListener('input', (e) => {
                if (e.target.value.length && e.target.value.length > 1) {
                    btn.removeAttribute('disabled');
                    console.log('remove');

                } else if (!!input1.value !== true || !!input2.value !== true) {
                    btn.setAttribute('disabled', 'disabled');
                    console.log('disabled');
                }       
            });     
        }

    checkValue(input1, input2);
    checkValue(input2);
};

export default checkValueInputs;
   