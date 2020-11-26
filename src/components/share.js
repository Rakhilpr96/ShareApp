import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Share from 'react-native-share';

import files from '../filedata';

const ShareComponent = () => {

    const ShareFunction = async ({ fileUrl, textMessage }) => {
        const shareOptions = {
            message: textMessage,
            url: fileUrl,
            // urls: [files.image1, files.image2]   // For multiple files
            // url: "file:///storage/sdcard1/shared/img5.jpg" // for device files
        };
        try {
            const ShareResponse = await Share.open(shareOptions);
            // console.log(JSON.stringify(ShareResponse));
        } catch (error) {
            console.log('Error =>', error);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.singleContainer}>
                <Image style={styles.imageStyle} source={require('../asset/images/img1.png')} />
                <TouchableOpacity style={styles.shareButton} onPress={() => ShareFunction({ fileUrl: files.image1 })}>
                    <Text style={styles.ButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.singleContainer}>
                <Image style={styles.imageStyle} source={require('../asset/images/img2.jpg')} />
                <TouchableOpacity style={styles.shareButton} onPress={() => ShareFunction({ fileUrl: files.image2, textMessage: "This is Image 2" })}>
                    <Text style={styles.ButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.singleContainer}>
                <View style={styles.pdfContainer}>
                    <Text style={styles.pdfText}>PDF</Text>
                </View>
                <TouchableOpacity style={styles.shareButton} onPress={() => ShareFunction({ fileUrl: files.pdf1 })}>
                    <Text style={styles.ButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.singleContainer}>
                <View style={styles.pdfContainer}>
                    <Text style={styles.pdfText}>Text</Text>
                </View>
                <TouchableOpacity style={styles.shareButton} onPress={() => ShareFunction({ textMessage: "This is demo text" })}>
                    <Text style={styles.ButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: '#383131',
        justifyContent: 'space-around',
    },
    singleContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    imageStyle: {
        width: 130,
        height: 100,
        borderRadius: 10
    },
    shareButton: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        marginLeft: 60
    },
    ButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    pdfContainer: {
        width: 130,
        height: 100,
        backgroundColor: '#ceffc4',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
    },
    pdfText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
});

export default ShareComponent;
