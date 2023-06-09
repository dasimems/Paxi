import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Logo } from '../components'
import { blackColor, primaryColor, whiteColor } from '../assets/colors'
import { lato } from '../fonts'
import { useNavigation } from '@react-navigation/native'
import { NavNames } from '../data/general'

const GettingStarted = () => {
    
    const { navigate } = useNavigation();
  return (
    <View style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: whiteColor.default
    }}>

        <View style={{
            flex: 1
        }}>

            <ScrollView contentContainerStyle={{
                flex: 1,
                alignItems: "center",
                gap: 50,
                justifyContent: "space-between"
            }}>


                <Logo />
                <Logo image />

                <View>

                <Text style={{
                    textAlign: "center",
                    fontFamily: lato.regular.default,
                    fontFamily: lato.bold.default,
                    fontSize: 29
                }}>Lorem Ipsum is simply dummy</Text>
                <Text style={{
                    textAlign: "center",
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity600,
                    marginTop: 20,
                    fontSize: 18
                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

                </View>



            </ScrollView>
        </View>


      <Button onPress={()=>{
        navigate(NavNames.Login.name)
      }} textColor={whiteColor.default} style={{
        backgroundColor: primaryColor.default,
        marginTop: 100
      }} text="GET STARTED"  />
    </View>
  )
}

export default GettingStarted

const styles = StyleSheet.create({})