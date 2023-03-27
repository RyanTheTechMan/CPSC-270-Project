import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';

const RectList = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handlePress = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.item, item.id === selectedId && styles.itemExpanded]}
          onPress={() => handlePress(item.id)}
        >
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            {item.id === selectedId && <Text style={styles.itemDescription}>{item.description}</Text>}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 8,
  },
  item: {
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginBottom: 8,
    overflow: 'hidden',
  },
  itemExpanded: {
    height: 200,
  },
  itemContent: {
    padding: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 16,
  },
});

export default RectList;
