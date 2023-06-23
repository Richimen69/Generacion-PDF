import { View, Text, Page, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    table: {
        display: 'table',
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 1, 
        borderColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        marginTop: -1,
        marginRight: -1,
        width: '100%',
        borderStyle: 'solid',
        padding: 3,
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
    enc: {
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
    },
    cuerpo: {
        backgroundColor: 'white',
    },
});
const cuerpo = () => {
    const repetirBloque = () => {
        const bloques = []; // Array para almacenar los bloques generados

        for (let i = 0; i < 12; i++) {
            bloques.push(
                <View style={styles.tableRow} key={i}>
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '150%' }}>
                        <Text style={styles.fuente}>.</Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '33%' }}>
                        <Text style={styles.fuente}></Text>
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
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '142%' }}>
                        <Text style={styles.fuente}></Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.cuerpo, width: '50%' }}>
                        <Text style={styles.fuente}></Text>
                    </View>
                </View>
            );
        }

        return bloques; // Devuelve el array de bloques generados
    }

    return (
        <Page size="A4" orientation="landscape">
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={{ ...styles.tableCell, backgroundColor: 'black' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>REPORTE SEMESTRAL DEL COORDINADOR INSTITUCIONAL DE TUTORÍA</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={{ ...styles.tableCell, ...styles.encabezado }}>
                        <Text style={styles.fuente}>Instituto Tecnológico:</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={{ ...styles.tableCell, ...styles.encabezado }}>
                        <Text style={styles.fuente}>Nombre del Coordinador Institucional de Tutoría: </Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.encabezado, width: '65.3%' }}>
                        <Text style={styles.fuente}>Fecha:</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={{ ...styles.tableCell, ...styles.encabezado }}>
                        <Text style={styles.fuente}>Matrícula del Instituto Tecnológico actual:</Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.encabezado, width: '65.3%' }}>
                        <Text style={styles.fuente}></Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '150%' }}>
                        <Text style={styles.fuente}>PROGRAMA EDUCATIVO</Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '33%' }}>
                        <Text style={styles.fuente}>Cantidad de Tutores</Text>
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
                    <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '142%' }}>
                        <Text style={styles.fuente}>Área canalizada</Text>
                    </View>
                    <View style={{ ...styles.tableCell, ...styles.encabezado, ...styles.enc, width: '50%' }}>
                        <Text style={styles.fuente}>Matrícula</Text>
                    </View>
                </View>
                {repetirBloque()}
            </View>
        </Page>
    );
}
const Plantilla = () => {
    return (
        cuerpo()
    );
}


export default Plantilla