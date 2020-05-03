import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

const SignIn: React.FC = () => {
    const { signed, signIn } = useAuth();

    console.log(signed);

    function handleSigIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title='SignIn' onPress={handleSigIn} />
        </View>
    );
};

export default SignIn;