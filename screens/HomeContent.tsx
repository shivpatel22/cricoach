import { useNavigation } from "@react-navigation/native"
import { router } from "expo-router"
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../styles/CoachHomeStyles" // Update if your styles path differs

const HomeContent = () => {
	const navigation = useNavigation()

	function handleStudent(): void {
		router.push("/coach-home/StudentScreen")
	}

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				{/* <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity> */}
				<View style={styles.profile}>
					<Image
						source={require("../assets/images/boy.png")}
						style={styles.profileImage}
					/>
				</View>
			</View>

			{/* Stats */}
			<View style={styles.stats}>
				<TouchableOpacity
					style={styles.statBox}
					onPress={() => handleStudent()}
				>
					<Text style={styles.statLabel}>Students</Text>
					<Text style={styles.statValue}>25</Text>
				</TouchableOpacity>

				<View style={styles.statBox}>
					<Text style={styles.statLabel}>Sessions</Text>
					<Text style={styles.statValue}>12</Text>
				</View>
				<View style={styles.statBox}>
					<Text style={styles.statLabel}>Videos</Text>
					<Text style={styles.statValue}>48</Text>
				</View>
			</View>
		</View>
	)
}

export default HomeContent
