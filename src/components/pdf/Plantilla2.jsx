import { View, Text, Page, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    contenido: {
        display: 'table',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        maxHeight: '90%'
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        marginTop: -1,
        marginRight: -1, 
        width: '100%',
        borderStyle: 'solid',
        padding: 2,
        borderWidth: 1,
        borderColor: 'black'
    },
    fuente: {
        fontStyle: 'normal',
        lineHeight: '1.5px',
        fontSize: '10',
        fontWeight: 'bold',
    },
    encabezado: {
        backgroundColor: '#ddd9c3',
    },
    Cell: {
        marginTop: -1,
        marginRight: -1,
        width: '100%',
        borderStyle: 'solid',
        padding: 2,
        borderWidth: 1,
        borderColor: 'black'
    },
    enc: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    cuerpo: {
        backgroundColor: 'white',
    },
    ali: {
        marginTop: '5%',
        textAlign: 'center'
    }
});
const encabezado = () => {
    return (
        <View>
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, backgroundColor: 'black' }}>
                    <Text style={{ ...styles.fuente, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>REPORTE SEMESTRAL DEL TUTOR</Text>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, ...styles.encabezado }}>
                    <Text style={styles.fuente}>Instituto Tecnológico:</Text>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, ...styles.encabezado }}>
                    <Text style={styles.fuente}>Nombre del Tutor: </Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, width: '65.3%' }}>
                    <Text style={styles.fuente}>Fecha:</Text>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, ...styles.encabezado, width: '62%' }}>
                    <Text style={styles.fuente}>Programa educativo: </Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, width: '38%' }}>
                    <Text style={styles.fuente}>Grupo: </Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, width: '65.1%' }}>
                    <Text style={styles.fuente}>Hora:</Text>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '86.6%', padding: 1 }}>
                    <Text style={styles.fuente}></Text>
                </View>
                <View style={{ ...styles.Cell, ...styles.encabezado, ...styles.enc, width: '32%' }}>
                    <Text style={styles.fuente}>Estudiantes atendidos en el semestre</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '112%' }}>
                    <Text style={styles.fuente}></Text>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '182.5%' }}>
                    <Text style={styles.fuente}>Lista de estudiantes</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '35%' }}>
                    <Text style={styles.fuente}>Tutoría Grupal</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '33%' }}>
                    <Text style={styles.fuente}>Tutoría Individual</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '45%' }}>
                    <Text style={styles.fuente}>Estudiantes canalizados en el semestre</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '191.5%' }}>
                    <Text style={styles.fuente}>Área canalizada</Text>
                </View>
            </View>
        </View>
    )
}
let i
const repetirBloque = () => {
    const bloques = []; // Array para almacenar los bloques generados
    for (i = 1; i < 26; i++) {
            bloques.push(
                <View style={styles.tableRow} key={i}>
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '182.5%' }}>
                        <Text style={{ ...styles.fuente, marginLeft: '3%' }}>{i}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '35%' }}>
                        <Text style={styles.fuente}></Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '33%' }}>
                        <Text style={styles.fuente}></Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '45%' }}>
                        <Text style={styles.fuente}></Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '191.5%%' }}>
                        <Text style={styles.fuente}></Text>
                    </View>
                </View>

            );
    }  

    return (       
        <>
        <Page size="A4" orientation="landscape">
                <View style={styles.contenido}>
                    <View style={styles.table}>
                {encabezado()}
                        {bloques.slice(0, 18)}
                    </View>
                </View>
            </Page>
            {i > 18 && (
                <Page size="A4" orientation="landscape">
                    <View style={styles.contenido}>
                        <View style={styles.table}>
                            {bloques.slice(18, 25)}
                            <View style={styles.tableRow}>
                                <View style={styles.tableCell}>
                                    <Text style={styles.fuente}>Instructivo de llenado: </Text>
                                    <Text style={{ ...styles.fuente, marginLeft: '2%' }}>• Anote los datos correspondientes en los apartados del encabezado. </Text>
                                    <Text style={styles.fuente}>En el apartado de Observaciones anotar:</Text>
                                    <Text style={{ ...styles.fuente, marginLeft: '2%' }}>• Anote las 10 actividades adicionales más importantes realizadas en el semestre.</Text>
                                    <Text style={{ ...styles.fuente, marginLeft: '2%' }}>• Anotar las acciones de mayor impacto para alcanzar la competencia de la asignatura.</Text>
                                    <Text style={{ ...styles.fuente, marginLeft: '2%' }}>• Este reporte deberá ser llenado por el Tutor.</Text>
                                    <Text style={{ ...styles.fuente, marginLeft: '2%' }}>• Deberá ser entregada al Coordinador de Tutoría del Departamento Académico con copia para el Tutor.</Text>
                                </View>
                            </View >
                            <View style={{ ...styles.tableRow }}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Observaciones: </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:'5%'}}>
                            <Text style={styles.fuente}>Fecha de entrega de este reporte: _______________ </Text>
                        </View>
                        <View style={styles.ali}>
                            <Text style={styles.fuente}>_______________________________________________________________            _______________________________________________ </Text>
                            <Text style={{ ...styles.fuente }}>Nombre y firma del Coordinador de Tutoría del Departamento Académico                  Nombre y firma del Jefe de Departamento Académico
                            </Text>
                            <Text style={{ ...styles.fuente,marginTop:'5%' }}>_________________________________________________</Text>
                            <Text style={{ ...styles.fuente }}>Nombre y firma del tutor</Text>
                        </View>
                    </View>
                </Page>
            )}
        </>

    ) // Devuelve el array de bloques generados
}
const Plantilla3 = () => {
    return (
        repetirBloque()
    );
}


export default Plantilla3