import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Row({person}){
    return (
        <Text style={styles.row}>{person.firstname} {person.lastname}</Text>
    )
}

const styles = StyleSheet.create({
    row: {
        paddingTop: 8,
        paddingBottom: 8,
    },
  });