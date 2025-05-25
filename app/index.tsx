import HomeContent from "../screens/HomeContent"
import SignInScreen from "../screens/SignInScreen"

// Toggle this manually for now.
// Set to true to simulate logged-in user
const isLoggedIn = false

export default function Index() {
	return isLoggedIn ? <HomeContent /> : <SignInScreen />
}