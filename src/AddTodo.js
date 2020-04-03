import React, {useState} from 'react'
import { StyleSheet, TextInput, Button, View, Alert } from 'react-native'

const AddTodo = ({ onSubmit }) => {
    
const [value, setValue] = useState('')

    const pressHandler = () => {

        if (value.trim()) {
            onSubmit(value)
            setValue('')
    
        } else {
  Alert.alert("The name of the thing can't be empty")  
}


}


    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Input a name of the thing'
                autoCorrect={false}
                autoCapitalize='none'
               
            />
            <Button title="Add" onPress={pressHandler}/>

           
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
        
    },
    input: {
        width: "70%",
        borderStyle: "solid",
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})
