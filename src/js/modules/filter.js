import * as noUiSlider from 'nouislider';
export function filter() {
    const rangeItems = document.querySelectorAll('[data-range]');
    if(rangeItems.length) {
        rangeItems.forEach(rangeItem => {
            const fromValue = rangeItem.querySelector('[data-range-from]');
            const toValue = rangeItem.querySelector('[data-range-to]');
            const item = rangeItem.querySelector('[data-range-item]');
            let inputs = [fromValue, toValue];
            noUiSlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)],
                connect: true,
                range: {
                    'min': [Number(fromValue.dataset.rangeFrom)],
                    'max': [Number(toValue.dataset.rangeTo)]
                }
            });
            item.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = Math.floor(values[handle]);
            });
        });
    }

    // switcher
    const switcherBody = document.querySelector('.switcher__body');
    let switcher = document.getElementById("switcher__input");
    if(switcher.checked) {
        switcherBody.classList.add('active');
    } 

    switcherBody.addEventListener('click', () => {
        if(switcherBody.classList.contains('active')) {
           switcher.checked == false;
        } else {
           switcher.checked == true;
        }
        switcherBody.classList.toggle('active');
    })

    // select
    const select = document.querySelector('.select-filter__body');
    const selectTitle = select.querySelector('.select-filter__title');
    const selectLabels = select.querySelectorAll('.select-filter__label');
    const selectArrow =  document.querySelector('.select-filter__arrow');

    // Toggle
    selectTitle.addEventListener('click', () => {
        if (select.classList.contains('active') && selectArrow.classList.contains('active')) {
            select.classList.remove('active');
            selectArrow.classList.remove('active');
        } else {
            select.classList.add('active');
            selectArrow.classList.add('active');
        }
    });
    // Close when click to option
    for (let i = 0; i < selectLabels.length; i++) {
        selectLabels[i].addEventListener('click', (e) => {
            selectTitle.textContent = e.target.textContent;
            select.classList.remove('active');
            selectArrow.classList.remove('active');
        });
    }


}