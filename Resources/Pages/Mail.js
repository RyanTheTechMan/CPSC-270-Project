import { setStatusBarHidden } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";
import React, { useState } from 'react';



const studentInfoGroup = [

    {
        studentId: '0906523',
        studentName: {
            firstName: 'Sarah',
            lastName: 'Connor',
        },
        collegeAddress: {
            street: '221 College Lane',
            campusBox: '42',
            city: 'Salem',
            state: 'VA',
            zipCode: '24153',
            campusBoxCode: '4572'
        }
    },
    {
        studentId: '0813342',
        studentName: {
            firstName: 'Joseph',
            lastName: 'Student',
        },
        collegeAddress: {
            street: '221 College Lane',
            campusBox: '132',
            city: 'Salem',
            state: 'VA',
            zipCode: '24153',
            campusBoxCode: '3923'
        }
    },
];


export default function MailPage() {

    const [selectedId, setSelectedId] = useState('0813342');
    const [currentStudent, setCurrentStudent] = useState(studentInfoGroup[0]);

    for (student in studentInfoGroup) {
        if (student.studentId === selectedId) {
            setCurrentStudent(student);
            return;
        }
    }

    return (
        <View style={styles.view}>
            <Text>Campus Address:</Text>
            <Text>{currentStudent.studentName.firstName}</Text>
            <Text></Text>
            <Text></Text>
        </View>
    );

}

export const styles = StyleSheet.create({
    test: {
        fontSize: 40,
        width: '100%',
        borderWidth: 2,
        textAlign: 'center',
    },
    view: {
        justifyContent: 'center',
        height: '100%',

    }


});