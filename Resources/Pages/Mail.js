import { setStatusBarHidden } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, } from "react-native";
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


export function MailBoxCode({ currentStudent, hideMailCode }) {

    if (!hideMailCode) {
        return (
            <Text style={styles.combination}>{"Box Combination: " + currentStudent.collegeAddress.campusBoxCode}</Text>
        )
    }


}

export default function MailPage() {

    const [selectedId, setSelectedId] = useState('0813342');
    const [currentStudent, setCurrentStudent] = useState(studentInfoGroup[0]);
    const [hideMailCode, setHideMailCode] = useState(false);

    for (student in studentInfoGroup) {
        if (student.studentId === selectedId) {
            setCurrentStudent(student);
            return;
        }
    }

    return (
        <View style={styles.mailPage}>
            <View style={styles.address}>
                <Text style={styles.addressHeader}>Campus Address:</Text>
                <Text style={styles.addressText}>{currentStudent.studentName.firstName + " " + currentStudent.studentName.lastName}</Text>
                <Text style={styles.addressText}>{currentStudent.collegeAddress.street}</Text>
                <Text style={styles.addressText}>{"Campus Box: " + currentStudent.collegeAddress.campusBox}</Text>
                <Text style={styles.addressText}>{currentStudent.collegeAddress.city + ", " + currentStudent.collegeAddress.state + " " + currentStudent.collegeAddress.zipCode}</Text>
            </View>
            <MailBoxCode currentStudent={currentStudent} hideMailCode={hideMailCode} />
            <Pressable onPress={() => setHideMailCode(!hideMailCode)}>
                <Text style={styles.combinationButton}>Display Combination</Text>
            </Pressable>
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
    address: {
        justifyContent: 'center',
        height: '50%',
        alignItems: 'left',
    },
    mailPage: {
        height: '100%',
        alignItems: 'center',
    },
    addressHeader: {
        fontSize: 40,
    },
    addressText: {
        fontSize: 30,

    },
    combinationButton: {
        fontSize: 30,
        margin: 10,
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: 10,
        borderWidth: 2,

    },
    combination: {
        fontSize: 30,
        margin: 10,
    },
});