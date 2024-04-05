import { StyleSheet, Text, View, Image} from 'react-native'
import React, {useEffect} from 'react'

const Splash = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
     navigation.replace('Login')
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    
   <View style = {styles.background}>
    <Image
     source={{uri: 'https://png.pngtree.com/background/20210710/original/pngtree-summer-camp-planting-trees-afforestation-h5-background-material-picture-image_1009709.jpg'}}
     style={{flex:1}}
    />
 
   </View>
  
    
  
 
);
}

export default Splash

const styles = StyleSheet.create({
  background: { ...StyleSheet.absoluteFillObject, backgroundColor: "black" },

})