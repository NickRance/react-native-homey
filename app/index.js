/**
 * Created by Development on 3/22/2017.
 */

//index.js
import * as firebase from 'firebase'
import Home from './screens/home'
import Login from './screens/login'
import {StackNavigator} from 'react-navigation'
import Chat from './screens/chat'

const firebaseConfig = {
    apiKey: "AIzaSyBIQa4iLlZulFFsDzYYKbgfexbl-5yJwi0",
    databaseURL: "https://clone-tinder-45d70.firebaseio.com"
}

firebase.initializeApp(firebaseConfig)

const RouteConfigs = {
    Login: {screen:Login},
    Home: {screen:Home},
    Chat: {screen:Chat}
}
const StackNavigatorConfig = {
    headerMode:'none',
}

export default StackNavigator(RouteConfigs, StackNavigatorConfig)