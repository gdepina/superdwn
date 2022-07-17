const CUIT = 30278205627;
const HOURVALUE = 200;
const ESTABLISHMENTCBU = "1234567891011316209650";

const list = () => {
    return fetch('/api/reports', {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

const getEmployeeUsers = () => {
    return fetch('/api/employee/', {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

const getEmployeeHours = (cuil) => {
    const currentDate = new Date();
    const untilMonth = currentDate.getMonth() + 1;
    const sinceDate = `${currentDate.getFullYear().toString()}-0${currentDate.getMonth().toString()}-${currentDate.getDate().toString()}`;
    const untilDate = `${currentDate.getFullYear().toString()}-0${untilMonth.toString()}-${currentDate.getDate().toString()}`;
    return fetch(`https://presentismo-integrado.herokuapp.com/informarpresentismo?cuil=${cuil}&fechaInicio=${sinceDate}&fechaFin=${untilDate}`, {
        method: 'GET',
        // body: {
        //     cuil: cuil,
        //     fechaInicio: sinceDate,
        //     fechaFin: untilDate
        // }
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

const processPayment = (body) => {
    return fetch('https://bank-back.herokuapp.com/api/v1/solicitudes/pago', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}


const buildAmount = (opt) => {
    const finalHours = opt.hours;
    return finalHours * HOURVALUE;
}


const getPresentismByEmployee = (cb) => {
    let employeeInfo = [];
    let buildPayments = new Promise((resolve, reject) => {
        getEmployeeUsers().then((data) => {
            const qtyUsers = data.length;
            data.forEach((item, index) => {
                const employee = getEmployeeHours(item.cuil);
                employee.then(employeeData => {
                    employeeData && employeeInfo.push({
                        cbuDestino: item.cbu,
                        fechaDePago: new Date(),
                        descripcion: `Pago de haberes ${item.name}`,
                        monto: employeeData.horasTrabajadas * HOURVALUE
                    })
                    if (employeeInfo.length === qtyUsers) resolve();
                })
            })
        })
    })

    buildPayments.then(() =>
        processPayment({cbuEstablecimiento: ESTABLISHMENTCBU, pagos: employeeInfo}).then(result => {
            cb('Los pagos se ejecutaron con exito');
        })
    )

}

const getPresentism = (cb) => {
    let employeeInfo = [];
    let runChain = new Promise((resolve, reject) => {
        getEmployeeUsers().then((data) => {
            const qtyUsers = data.length;
            data.forEach((item, index) => {
                const employee = getEmployeeHours(item.cuil);
                employee.then(employeeData => {
                    employeeData && employeeInfo.push({
                        name: item.name,
                        hours: employeeData.horasTrabajadas,
                        aus: employeeData.ausencias,
                        amount: employeeData.horasTrabajadas * HOURVALUE
                    })
                    if (employeeInfo.length === qtyUsers) resolve();
                })
            })
        })
    })

    return runChain.then(() => cb(employeeInfo))

}


export {
    list,
    getPresentismByEmployee,
    getPresentism,
}
