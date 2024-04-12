import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

const { width } = Dimensions.get('window');

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.informacao}>
                    <Text style={styles.TituloSection}>Dados Pessoais</Text>
                    <Text>Nome: Carlos Henrique de Oliveira Siqueira</Text>
                    <Text>Idade: 18 anos</Text>
                    <Text>Telefone: xxxx-xxxx</Text>
                    <Text>Morando em Jaguariúna</Text>
                    <Text>Email: Exemplo123@gmail.com</Text>
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.informacao}>
                    <Text style={styles.TituloSection}>Formação</Text>
                
                    <Text>{'\u2022'} Idiomas: Inglês Intermediário</Text>
                    <Text>{'\u2022'} Ensino médio completo - ETEC João Belarmino - Conclusão 2022</Text>
                    <View style={styles.divisoes}>

                    <Text>{'\u2022'} Cursando Técnico de desenvolvimento de sistemas, SENAI - Previsão de conclusão Dezembro 2024</Text>
                    <Text styles={styles.descricao}>Curso focado na preparação para o mercado de trabalho como programador full-stack.{"\n"}
                    Conteúdos abordados: HTML, CSS, JavaScript, API, Banco de Dados, React Native, BootStrap
                    </Text>

                    </View>
                    <View style={styles.divisoes}>
                    <Text>{'\u2022'} Web-Design, SENAI - Julho 2023 a Dezembro 2023 </Text>
                    <Text styles={styles.descricao}>Conteúdos: Nivel básico a intermediario de HTML e CSS além de UI e UX </Text>
                    </View>
                    <View style={styles.divisoes}>
                    <Text>{'\u2022'} PowerBI, SENAI - Outubro 2023</Text>
                    <Text styles={styles.descricao}>Curso introdutório ao PowerBI foram passados principalmente relacionamento de tabelas e tipos de formatações de dados</Text>
                    </View>
                    <View style={styles.divisoes}>
                    <Text>{'\u2022'} Inspetor de Qualidade, SENAI - Maio 2021 a Abril 2022</Text>
                    <Text styles={styles.descricao}>Conteúdos: Introdução ao SolidWorks, leitura e interpretação de desenhos técnicos, uso de instrumentos de medição tais como paquimetro e micrômetro entre outros</Text>
                    </View>
                    <View style={styles.divisoes}>
                    <Text>{'\u2022'} Auxiliar de Logistica, SENAI - Outubro 2020 a Dezembro 2020</Text>
                    <Text styles={styles.descricao}>Conteúdos: Just in time, Kanban, 5s</Text>
                    </View>
                </View>
            </View>

            {/* <View style={styles.section}>
                <Text style={styles.TituloSection}>Meu GitHub: </Text>
                <TouchableOpacity onPress={() => Linking.openURL("https://github.com/carloshosiqueira")}>
                    <Image
                        style={styles.github}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
                        }}
                    />
                </TouchableOpacity>
            </View> */}

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    section: {
        flex:1,
        alignItems: "center",
        justifyContent: 'center  '
    },
    TituloSection: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    informacao: {
        flex: 1,

    },
    divisoes :{
        marginTop: 10,
        maxWidth: '90%',
        textAlign: 'center'
    },
    github: {
        width: width * 0.1,
        height: width * 0.1,
        alignItems: 'center',
    },
    descricao:{
        flex: 1,
        alignItems: 'center'
    }
});

export default Home;