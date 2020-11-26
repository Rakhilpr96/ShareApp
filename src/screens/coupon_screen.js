import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';

import ShareFunction from '../components/social_share';

const CouponScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");

    const couponNumber = "1478122_154875";
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    const timedata = `${date}/${month}/${year} : ${hours}:${min}`;
    const messageData = `CALLING CARD | NO- CUTTING | \nDEMO PRINT \nVoucher1 [${couponNumber}] \n******* \nDEMO PRINT \n******* \n${timedata} \nThank you for using \nwww.paybucket.co `;

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeading}>My Coupons</Text>
            <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>DEMO PRINT</Text>
                <View>
                    <Text style={{ color: 'rgba(0,0,0,0.5)' }}>**************</Text>
                    <Text style={{ color: 'rgba(0,0,0,0.7)' }}>DEMO PRINT</Text>
                    <Text style={{ color: 'rgba(0,0,0,0.5)' }}>**************</Text>
                </View>
                <Text style={styles.couponNumber}>{couponNumber}</Text>
            </View>
            <TouchableOpacity
                style={styles.shareButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={{ justifyContent: 'center', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContainer}>
                                <Text style={styles.numberExample}>Example : 919876543210</Text>
                                <TextInput
                                    placeholder="Enter Whatsapp Number"
                                    style={styles.numberInput}
                                    keyboardType="numeric"
                                    maxLength={12}
                                    onChangeText={(mobileNumber) => { setMobileNumber(mobileNumber) }}
                                />
                                <TouchableOpacity style={styles.submitButton} onPress={() => ShareFunction({ textMessage: messageData, whatsappNumber: mobileNumber })}>
                                    <Text style={styles.submitButtonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View >
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        height: '100%'
    },
    mainHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#20085e',
        alignSelf: 'center',
        marginTop: 50
    },
    cardContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 3,
        borderRadius: 7,
        justifyContent: 'space-around',
    },
    cardHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 10
    },
    couponNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#24ADDB',
    },
    shareButton: {
        width: 100,
        height: 50,
        backgroundColor: '#00990a',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50 / 2
    },
    shareButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    modalContainer: {
        marginHorizontal: 30,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'space-evenly',
    },
    numberExample: {
        alignSelf: 'center',
        marginLeft: -50,
        color: 'rgba(0,0,0,0.5)',
    },
    numberInput: {
        width: 220,
        height: 40,
        alignSelf: 'center',
        borderRadius: 40 / 2,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
        paddingHorizontal: 20,
    },
    submitButton: {
        width: 100,
        height: 40,
        backgroundColor: "#FFB422",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40 / 2
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
})

export default CouponScreen;
