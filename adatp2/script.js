const obtenerVentasPorMesPorVendedora = (mes, anio, vendedora) => {
    const seVendio = venta => venta.nombreVendedora === vendedora;

    const ventas = obtenerVentasPorMes(mes, anio).filter(seVendio);

    return ventas;
}

const obtenerVentasPorMes = (mes, anio) => {
    mes = mes - 1;

    const seVendio = venta => venta.fecha.getMonth() === mes && venta.fecha.getFullYear() === anio;

    const ventas = local.ventas.filter(seVendio);

    return ventas;
}

const obtenerVentasPorVendedora = vendedora => {
    const seVendio = venta => venta.nombreVendedora === vendedora;

    const ventas = local.ventas.filter(seVendio);

    return ventas;
}

const obtenerTotalVentasPorVendedora = ventasDelMes => {
    let resultado = [];
    ventasDelMes.reduce((resultadoParcial, value) => {
        if (resultadoParcial[value.nombreVendedora] === undefined) {
            resultadoParcial[value.nombreVendedora] = { nombreVendedora: value.nombreVendedora, montoVendido: 0 };
            resultado.push(resultadoParcial[value.nombreVendedora])
        }

        resultadoParcial[value.nombreVendedora].montoVendido += precioMaquina(value.componentes);

        return resultadoParcial;
    }, {});


    resultado.sort((a, b) => {
        if (a.montoVendido > b.montoVendido) return -1;
        return 0;
    });

    return resultado;
}

const mejorVendedora = ventas => {
    let ventasPorVendedora = obtenerTotalVentasPorVendedora(ventas)

    if (ventasPorVendedora.length === 0) {
        return "NO HAY VENTAS";
    }

    let vendedora = ventasPorVendedora[0];

    return vendedora.nombreVendedora;
}

const ventasGenerales = ventas =>{
    let suma = 0;
    ventas.forEach(vent => {
        suma += precioMaquina(vent.componentes)
    });
    return suma;
};