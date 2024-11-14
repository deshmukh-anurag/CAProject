import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import User from '../components/User';

const PeopleScreen = () => {
  const [users, setUsers] = useState([]);
  const { userId } = useContext(AuthContext);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:4000/users/${userId}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: '500',
            marginTop: 12,
          }}>
          People using signal
        </Text>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => <User item={item} key={item?._id} />}
      />
    </SafeAreaView>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({});