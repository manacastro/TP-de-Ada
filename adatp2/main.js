let local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};

const precioMaquina = componentesMaquina => {
    let valorMaquina = 0;

    local.precios.forEach(producto => {
        if (componentesMaquina.includes(producto.componente)) {
            valorMaquina += producto.precio;
        }
    });
    return valorMaquina;
}

const cantidadVentasComponente = componente => {
    const seVendio = venta => venta.componentes.includes(componente);

    const maquinas = local.ventas.filter(seVendio);

    return maquinas.length;
}

const vendedoraDelMes = (mes, anio) => {
    let ventasDelMes = obtenerVentasPorMes(mes, anio);

    let ventasPorVendedora = obtenerTotalVentasPorVendedora(ventasDelMes)

    if (ventasPorVendedora.length === 0) {
        return "NO HAY VENTAS PARA EL MES: " + mes + " DEL AÑO: " + anio;
    }

    let vendedora = ventasPorVendedora[0];

    return vendedora.nombreVendedora;
}

const ventasMes = (mes, anio) => {
    let ventasDelMes = obtenerVentasPorMes(mes, anio);
    let totalVentas = 0;

    ventasDelMes.forEach(venta => totalVentas += precioMaquina(venta.componentes));
    return totalVentas;
}

const ventasVendedora = nombre =>{
    const vendedoras = local.ventas.filter( venta => venta.nombreVendedora === nombre)
    return ventasGenerales(vendedoras)
};

const componenteMasVendido = () => {
    let ventasPorComponente = [];

    local.precios.forEach(precio => ventasPorComponente.push({ nombre: precio.componente, cantidad: cantidadVentasComponente(precio.componente)}));

    ventasPorComponente.sort((a, b) => {
        if (a.cantidad > b.cantidad) return -1;
        return 0;
    });

    return ventasPorComponente[0].nombre;
}

const huboVentas = (mes, anio) => {
    let montoVentas = ventasMes(mes, anio);
    return montoVentas !== 0    
}

local.ventas.map(v => v.sucursal = "Centro")

local.sucursales = ['Centro', 'Caballito'];

const nuevasVentas = [
    { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 08), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 01), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 07), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro" },

]
let ventasTotal = local.ventas.concat(nuevasVentas);

local.ventas = ventasTotal;

const ventasSucursal = sucursal => {
    const ventasXLocales = local.ventas.filter( venta => venta.sucursal === sucursal)
    return ventasGenerales(ventasXLocales)
}

const obtenerTotalVentasPorSucursal = ventasDelMes => {
    let resultado = [];
    ventasDelMes.reduce((resultadoParcial, value) => {
        if (resultadoParcial[value.sucursal] === undefined) {
            resultadoParcial[value.sucursal] = { nombreSucursal: value.sucursal, montoVendido: 0 };
            resultado.push(resultadoParcial[value.sucursal])
        }

        resultadoParcial[value.sucursal].montoVendido += precioMaquina(value.componentes);

        return resultadoParcial;
    }, {});


    resultado.sort((a, b) => {
        if (a.montoVendido > b.montoVendido) return -1;
        return 0;
    });

    return resultado;
}

const sucursalDelMes = (mes, anio) => {
    let ventasDelMes = obtenerVentasPorMes(mes, anio);

    let ventasPorSucursal = obtenerTotalVentasPorSucursal(ventasDelMes)

    if (ventasPorSucursal.length === 0) {
        return "NO HAY VENTAS PARA EL MES: " + mes + " DEL AÑO: " + anio;
    }

    let suc = ventasPorSucursal[0];

    return suc.nombreSucursal;
}

const renderPorMes = () => {
    let resultado = [];
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    local.ventas.reduce((resultadoParcial, value) => {
        let descripcionFecha = meses[value.fecha.getMonth()] + " " + value.fecha.getFullYear();

        if (resultadoParcial[descripcionFecha] === undefined) {
            resultadoParcial[descripcionFecha] = { fecha: descripcionFecha, montoVendido: 0 };
            resultado.push(resultadoParcial[descripcionFecha])
        }

        resultadoParcial[descripcionFecha].montoVendido += precioMaquina(value.componentes);

        return resultadoParcial;
    }, {});


    resultado.sort((a, b) => {
        if (a.montoVendido < b.montoVendido) return -1;
        return 0;
    });

    console.log('Ventas por mes:');

    resultado.forEach(mes => {
        console.log(`   Total de ${mes.fecha}: ${mes.montoVendido}`);
    });
}

renderPorMes();

const renderPorSucursal = () => {
    let resultado = [];
    local.ventas.reduce((resultadoParcial, value) => {
        if (resultadoParcial[value.sucursal] === undefined) {
            resultadoParcial[value.sucursal] = { nombreSucursal: value.sucursal, montoVendido: 0 };
            resultado.push(resultadoParcial[value.sucursal])
        }

        resultadoParcial[value.sucursal].montoVendido += precioMaquina(value.componentes);

        return resultadoParcial;
    }, {});


    resultado.sort((a, b) => {
        if (a.montoVendido > b.montoVendido) return -1;
        return 0;
    });

    console.log('Ventas por sucursal:');

    resultado.forEach(sucursal => {
        console.log(`   Total de ${sucursal.nombreSucursal}: ${sucursal.montoVendido}`);
    });
}

renderPorSucursal();

const Render = () => {
    console.log("Reporte:");

    renderPorMes();
    renderPorSucursal();
    console.log(`Producto estrella: ${componenteMasVendido()}`);
    console.log(`Vendedora que más ingresos generó: ${mejorVendedora(local.ventas)}`);
}

Render();