import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'


export default function List(props) {

    function carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    function mostrarLikes(likers){
        if(likers === 0){
            return;
        }

        return(
            <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'} </Text>
        )
    }

    return(
        <View>
            <View style={styles.viewPerfil}>
                <Image source={{uri: props.data.imgperfil}} style={styles.fotoPerfil} />
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>

            <Image source={{uri:props.data.imgPublicacao }} style={styles.fotoPublicacao} resizeMode="cover" />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image source={carregaIcone(props.data.likeada)} style={styles.iconeLike} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Image source={require('../img/comment.png')} style={styles.iconeLike} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Image source={require('../img/send.png')} style={styles.iconeLike} />
                </TouchableOpacity>
            </View>

            { mostrarLikes(props.data.likers) }

            <Text style={styles.nomeRodape}>{props.data.nome}</Text>
            <Text style={styles.descRopade}>{props.data.descricao}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8, 
    },
    fotoPerfil: {
       width: 50,
       height: 50,
       borderRadius: 25
    },
    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 22,
        color: '#000'
    },
    fotoPublicacao: {
        height: 400,
        alignItems:'center'
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 25,
        height: 25,
    },
    btnSend: {
        paddingLeft:5
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 7
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    descRopade: {
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 15
    }

})