import { View } from 'react-native';
import { useState } from 'react';

import Button from "@/components/Button";
import { DataBase } from '@/services/Database';

export default function DBTestButtons() {
    const [schema1, setSchema1] = useState({
        name: 'TEXT',
        type: 'TEXT',
    })
    const [entry1, setEntry1] = useState({
        name: 'findus',
        type: 'cat',
    });

    function createTestDB() {
        DataBase.initializeDatabase('testTable1', schema1);
        console.log('DEBUG: Created DB');
    }

    function putFindusIntoDB() {
        DataBase.addRow('testTable1', entry1);
        console.log('DEBUG: Put Findus into DB');
    }

    function printEntriesToConsole() {
        DataBase.query('testTable1');
    }

    function deleteDatabase() {
        DataBase.deleteDatabase('testTable1'); // macht iwie nichts
        console.log('DEBUS: Deleted DB');
    }

    return(
        <View>
            <Button text='Create DB' onPress={createTestDB}/>
            <Button text='Put Findus into DB' onPress={putFindusIntoDB}/>
            <Button text='Print entries to console' onPress={printEntriesToConsole}/>
            <Button text='Delete DB' onPress={deleteDatabase}/>
        </View>
    )
}