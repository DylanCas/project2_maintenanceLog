const addVehicleByVin = async (event) => {
    event.preventDefault();

    const name = document.querySelector('.add-by-vin-form').querySelector('#driver-name').value.trim();
    const vin = document.querySelector('#vin').value.trim();
    var mileage = document.querySelector('.add-by-vin-form').querySelector('#mileage').value.trim();
    if (mileage == "") {
        mileage = null;
    }

    const response = await fetch(`api/carmd/vin/${vin}`, {
        method: 'POST',
        body: JSON.stringify({name, vin, mileage}),
        headers: {'Content-Type': 'application/json'},
    });
};

const addVehicleByMakeModel = async (event) => {
    event.preventDefault();

    const name = document.querySelector('.add-by-make-model-form').querySelector('#driver-name').value.trim();
    const make = document.querySelector('#make').value.trim();
    const model = document.querySelector('#model').value.trim();
    const year = document.querySelector('#year').value.trim();
    var mileage = document.querySelector('.add-by-make-model-form').querySelector('#mileage').value.trim();
    if (mileage == "") {
        mileage = null;
    }

    const response = await fetch('api/carmd/makemodel', {
        method: 'POST',
        body: JSON.stringify({name, make, model, year, mileage}),
        headers: {'Content-Type': 'application/json'}
    });
};

document.querySelector('.add-by-vin-form').addEventListener('submit', addVehicleByVin);
document.querySelector('.add-by-make-model-form').addEventListener('submit', addVehicleByMakeModel);