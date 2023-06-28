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
        backgroundColor: '#eeece1',
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
                    <Text style={{ ...styles.fuente, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>REPORTE SEMESTRAL DEL COORDINADOR DE TUTORÍA DEL DEPARTAMENTO ACADÉMICO</Text>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, ...styles.encabezado }}>
                    <Text style={styles.fuente}>Instituto Tecnológico:</Text>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, ...styles.encabezado }}>
                    <Text style={styles.fuente}>Nombre del Coordinador de Tutoría del Departamento Académico : </Text>
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
                    <Text style={styles.fuente}> </Text>
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
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '133.5%' }}>
                    <Text style={styles.fuente}>Lista de tutores</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '27%' }}>
                    <Text style={styles.fuente}>Grupo :</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '30%' }}>
                    <Text style={styles.fuente}>Tutoría Grupal</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '30%' }}>
                    <Text style={styles.fuente}>Tutoría</Text>
                    <Text style={styles.fuente}>Individual</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '39.5%' }}>
                    <Text style={styles.fuente}>Estudiantes canalizados en el semestre</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '168.2%' }}>
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
                <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '133.5%' }}>
                    <Text style={styles.fuente}>{i}</Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '27%' }}>
                    <Text style={styles.fuente}></Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '30%' }}>
                    <Text style={styles.fuente}></Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '30%' }}>
                    <Text style={styles.fuente}></Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '39%' }}>
                    <Text style={styles.fuente}></Text>
                </View>
                <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '168.2%' }}>
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
                                    <Text style={{ ...styles.fuente, marginLeft: '2%' }}>• Este reporte deberá ser llenado por el Coordinador de Tutoría del Departamento Académico.</Text>
                                    <Text style={{ ...styles.fuente, marginLeft: '2%' }}>• Deberá ser entregada al Jefe de Departamento Académico con copia para el Coordinador Institucional de Tutoría.</Text>
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
                        <View style={{marginTop:'5%'}}>
                            <Text style={styles.fuente}>_____________________________________________________           ______________________________________________________________________ </Text>
                            <Text style={{ ...styles.fuente,textAlign:'center' }}>Nombre y firma del Jefe de Departamento Académico                   Nombre y firma del Coordinador de Tutoría del
 Departamento Académico
 Académico
                            </Text>
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