import { setStatusBarHidden } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, } from "react-native";
import React, { useState } from 'react';
import { RoundedRect, RoundedRectList } from "../RoundedRect";

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

function RenderMailboxCode(props) {
    console.log('In RenderMailboxCode');
    console.log(props.currentStudent);
    const currentStudent = props.currentStudent;
    return(
    <View>
        <RoundedRect title="Mail Box Code" style={styles.combinationButton}>
            <Text style={styles.combination}>{"Box Combination: " + currentStudent.collegeAddress.campusBoxCode}</Text>
        </RoundedRect>
    </View>
)};

function RenderStudentAddress(props) {
    console.log('In RenderStudentAddress');
    console.log(props.currentStudent);
    const currentStudent = props.currentStudent;
    return (
        <View style={styles.address}>
            <Text style={styles.addressHeader}>Campus Address:</Text>
            <Text style={styles.addressText}>{currentStudent.studentName.firstName + " " + currentStudent.studentName.lastName}</Text>
            <Text style={styles.addressText}>{currentStudent.collegeAddress.street}</Text>
            <Text style={styles.addressText}>{"Campus Box: " + currentStudent.collegeAddress.campusBox}</Text>
            <Text style={styles.addressText}>{currentStudent.collegeAddress.city + ", " + currentStudent.collegeAddress.state + " " + currentStudent.collegeAddress.zipCode}</Text>
        </View>
    )
};

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
            <RenderStudentAddress currentStudent={currentStudent} />
            <RenderMailboxCode currentStudent={currentStudent} />
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
        flex: 1,
        alignItems: 'center',
        height: '100%',
    },
    addressHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#4a4a4a',
    },
    addressText: {
        fontSize: 30,
        fontWeight: '600',
        color: '#313131',
    },
    combinationButton: {
        fontSize: 30,
        margin: 10,
        color: 'white',
        backgroundColor: '#8B1D3D',
        borderRadius: 10,

    },
    combinationButtonText: {
        fontSize: 30,
        margin: 10,
        color: 'white',
        fontWeight: '600',
    },
    combination: {
        fontSize: 20,
        margin: 10,
        fontWeight: '600',
        color: 'white',
    },
    custom: {
        backgroundColor: '#8B1D3D',
        borderColor: "gray",
        borderWidth: 2,
        marginBottom: 20,
        color: 'white',
        fontSize: 40,
        width: '80%',
    },
});
