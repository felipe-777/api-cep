import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import api from '../services/api';

function Cep (){
    let [cep, setCep] = useState('');
    let [cepUsuario, setCepUsuario] = useState(null);


return (
    <View style={styles.container}>
        <Image 
        source={{uri:'https://cdn2.iconfinder.com/date/icons/social-media-and-payment/64/-47-512.png'}}
        style={{width:128, height:128, marginTop:50}}
        resizeMode='cover'
        />

    <Text style={styles.titulo}>Busca de CEP</Text>
        <TextInput style={styles.busca}
         keyboardType='numeric'
         placeholder='Digite um cep (ex.: 18133400)'
         value={cep}
         onChangeText={(valor) => setCep(valor)}
        />
        
    <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Pesquisar</Text>
    </TouchableOpacity>

    <View style={styles.resultado}>
        <Text style={styles.textoResultado}>Cep:18133-400</Text>
        <Text style={styles.textoResultado}>Rua: Rua do Caça Niquel</Text>
        <Text style={styles.textoResultado}>Bairro: Centro</Text>
        <Text style={styles.textoResultado}>Cidade: São Roque</Text>
        <Text style={styles.textoResultado}>Uf: SP</Text>
    </View>

    </View>
)
}

export default Cep;

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#0099CC',
        flex:1,
        alignItems:'center'
    },

    titulo:{
        marginTop:25,
        color:'white',
        marginBottom:15,
        fontSize:25,
        fontWeight:'bold'
    },

    busca:{
        fontSize:20,
        color:'#FFF',
        width:'90%',
        padding:20,
        borderColor:'white',
        borderWidth:1
    },

    botao:{
        backgroundColor:'#333399',
        height:50,
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:20,
        marginTop:20
    },

    textoBotao:{
        fontSize:15,
        color:'#FFF'
    },

    resultado:{
        marginTop:50,
        marginLeft:20,
        alignItems:'center',
    },

    textoResultado:{
        fontSize:20,
        color:'#FFF'
    }

});