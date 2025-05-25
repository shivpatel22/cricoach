export function validateSignUp(data) {
	const errors = {}
	const {
		name,
		username,
		email,
		gender,
		birthDate,
		role,
		password,
		confirmPassword,
	} = data

	if (!name.trim()) errors.name = "Name is required."

	if (!username.trim()) {
		errors.username = "Username is required."
	} else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
		errors.username =
			"Username can only contain letters, numbers, and underscores."
	}
	if (!email || !email.trim()) {
		errors.email = "Email is required."
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = "Invalid email format."
	}

	if (!birthDate.trim()) {
		errors.birthDate = "Birth date is required."
	} else if (!/^\d{2}-\d{2}-\d{4}$/.test(birthDate)) {
		errors.birthDate = "Invalid birth date format (dd-mm-yyyy)."
	}

	if (!role.trim()) errors.role = "Role must be selected."
	if (!gender.trim()) errors.gender = "Gender must be selected."

	// Password Validation: collect all relevant messages
	let passwordErrors = []
	if (!password) {
		passwordErrors.push("Password is required.")
	} else {
		if (password.length < 8 || password.length > 12) {
			passwordErrors.push("Password must be 8–12 characters long.")
		}
		if (!/[A-Z]/.test(password)) {
			passwordErrors.push("Must contain at least one uppercase letter.")
		}
		if (!/[a-z]/.test(password)) {
			passwordErrors.push("Must contain at least one lowercase letter.")
		}
		if (!/[0-9]/.test(password)) {
			passwordErrors.push("Must contain at least one number.")
		}
		if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
			passwordErrors.push("Must contain at least one special character.")
		}
	}
	if (passwordErrors.length > 0) {
		errors.password = passwordErrors.join(" ")
	}

	if (!confirmPassword) {
		errors.confirmPassword = "Please confirm your password."
	} else if (password && password !== confirmPassword) {
		errors.confirmPassword = "Passwords do not match."
	}

	return Object.keys(errors).length > 0 ? errors : null
}
