import {View, Text, Pressable, StyleSheet} from 'react-native'

export default function PrimaryButton({children, onPress}) {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} android_ripple={{color: "#640233"}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {  
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  }
});