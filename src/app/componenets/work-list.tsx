import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Work } from '../../../assets/types/work';

export const WorkList = ({ work }: { work: Work }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemImageContainer}>
        <Image source={work.postImageUrl} style={styles.itemImage} />
        <Image source={work.iconImageUrl} style={styles.companyLogo} />
      </View>
      <View style={styles.itemTextContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{work.brand}</Text>
          <Text style={styles.itemPosition}>{work.position}</Text>
          <Text style={styles.itemAddress}>{work.address}</Text>
          


          <Text style={styles.itemPrice}>{work.hourlyPayment.toFixed(2)} ₽/hour</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press here
            console.log("Button pressed");
          }}
        >
          <Text style={styles.buttonText}>Откликнуться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2b2b2b',
    padding: 10,
    borderRadius: 5,
    top : 25,
    alignSelf: 'flex-start', // Align the button to the right
  },
  buttonText: {
    color: 'white', // Set text color to black for better contrast
    fontFamily : "sans-serif",
    fontWeight : "bold"
  },
  itemAddress : {

  },
  item: {
    backgroundColor: 'white',
    marginVertical: 15,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
  },
  itemImageContainer: {
    position: 'relative',
    width: '100%',
    height: 150,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  companyLogo: {
    position: 'absolute',
    borderRadius: 35,
    top: 5,
    right: 10,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  itemTextContainer: {
    backgroundColor: "#D7D9CC",
    padding: 8,
    flexDirection: 'row', // Use row direction to align items horizontally
    
    justifyContent: 'space-between', // Push the button to the right
    alignItems: 'center', // Center items vertically
  },
  textContainer: {
    flex: 1, // Take up remaining space
    marginBottom : 10,
    gap : 5,
  },
  itemTitle: {
    fontSize: 18,
    color: '#cd1c18',
    fontWeight  : "bold",
    fontFamily: 'sans-serif'
  },
  itemPosition: {
    fontSize: 14,
    color: '#555',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});