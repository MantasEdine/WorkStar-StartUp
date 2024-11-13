import { StyleSheet, Text, View, Image } from 'react-native';
import { Work } from '../../../assets/types/work';

export const WorkList = ({ work }: { work: Work }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemImageContainer}>
        <Image source={work.imagesUrl} style={styles.itemImage} />
        <Image source={work.imagesUrl} style={styles.companyLogo} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{work.brand}</Text>
        <Text style={styles.itemPosition}>{work.position}</Text>
        <Text style={styles.itemPrice}>${work.hourlyPayment.toFixed(2)}/hour</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
        top: 10,
        right: 10,
        width: 50,
        height: 50,
        resizeMode: 'contain',
      },
      itemTextContainer: {
        padding: 8,
        alignItems: 'flex-start',
        gap: 4,
      },
      itemTitle: {
        fontSize: 16,
        color: '#888',
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