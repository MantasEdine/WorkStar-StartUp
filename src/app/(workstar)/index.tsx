import { FlatList, Text, View, StyleSheet } from "react-native";
import { JOB_OFFERS } from "../../../assets/jobs";
import { WorkList } from "../componenets/work-list";
export default function Home() {
  return (
    <View>
      <FlatList
        data={JOB_OFFERS}
        renderItem={({ item }) => <WorkList work={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={styles.headerText}>Jobs</Text>}
        contentContainerStyle={styles.flatListContent}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});