import React from 'react';
import { Text, View } from 'react-native';
import Share from 'react-native-share';

const ShareFunction = async ({ fileUrl, textMessage, whatsappNumber }) => {
    const shareOptions = {
        message: textMessage,
        url: fileUrl,
        social: Share.Social.WHATSAPP,
        whatsAppNumber: whatsappNumber,
    };
    try {
        const ShareResponse = await Share.shareSingle(shareOptions);
    } catch (error) {
        console.log('Error =>', error);
    }
};

export default ShareFunction;
