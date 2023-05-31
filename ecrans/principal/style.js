import { StyleSheet } from "react-native";
import { MARGES } from "../../outils/constantes";


const Styles = StyleSheet.create({
    corps :{
        backgroundColor : '#443cc6',
        paddingTop : 50 ,
        flex : 1,
    },

    haut :{
        paddingLeft : MARGES.Cotes ,
        paddingRight : MARGES.Cotes ,



    },

    btn_reglage :{
        color : "white",
        height : 25,
        width: 25,
    },

    montant:{
        display : "flex",
        justifyContent : "center",
        alignItems : "center" ,
        marginBottom : 15,
    }, 

    solde : {
        color : "white",
        fontSize : 35,
        fontWeight : "bold",
    },

    cadre :{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
    },  

    carte : {
        resizeMode : "contain",
        width : 300,
        height : 200,
    }
    ,


    bas :{
        backgroundColor : "white",
        height :100,
        flex : 1,
        marginTop : -60,
        borderTopRightRadius : 25,
        borderTopLeftRadius: 25,
        zIndex : -1,
        paddingTop : 60,
    }

    
})

export default Styles ;