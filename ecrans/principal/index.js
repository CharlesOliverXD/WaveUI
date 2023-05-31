import { View, Text, Image, TouchableOpacity , FlatList} from 'react-native'

import Styles from './style';

const Principal = () => {
    return (
        <View style={Styles.corps}>
            {/* Header */}
            <View style={Styles.haut}>
                <TouchableOpacity >
                    <Image style={Styles.btn_reglage} source={require('../../assets/icones/reglage.png')} />
                </TouchableOpacity>

                <View style={Styles.montant}>
                    <Text style={Styles.solde}>
                        150 000 F
                    </Text>
                </View>

                <View style={Styles.cadre}>
                    <Image style={Styles.carte} source={require('../../assets/icones/carte_wave.png')} />
                </View>


            </View>

            {/* Body */}
            <FlatList style={Styles.bas}>
                <View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icones/la-personne.png')} />
                        <Text>Transfert</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../../assets/icones/panier.png')} />
                        <Text>Paiements</Text>
                    </TouchableOpacity>
                </View>


                <View></View>
            </FlatList>

        </View>
    )
}

export default Principal;