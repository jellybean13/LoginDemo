function load() {
	var mTitle = document.getElementById("title");
	var mContext = mTitle.getContext("2d");
	mContext.font = "30px GoogleSans-Regular";
	mContext.fillStyle = "#FFFFFF";
	mContext.fillText("Member management system", 22, 60);
}

function getWarningText() {
	return "Developer warning: This page is ONLY for emulating the basic feature of form.\n"
	+ "Note: DO NOT input the following thing in this page:\n"
	+ "* Your username.\n" + "* Your nickname.\n" + "* Your password.\n" + "* Your e-mail address.\n"
	+ "* Your serial number.\n" + "* Other information which can identify you.\n" + "* ...\n";
}

function signIn() {
	var mSuccessful = false;
	var mUsername = document.getElementById("username");
	var mPassword = document.getElementById("password");
	var mRemember = document.getElementById("remember");
	var mCurrentInfo = "I: " + Date() + "\n";
	if (mUsername.value == "") {
		mCurrentInfo += "E: Could not sign in due to empty username.\n";
		mSuccessful = false;
		mUsername.focus();
	} else if (mPassword.value == "") {
		mCurrentInfo += "E: Could not sign in due to empty password.\n";
		mSuccessful = false;
		mPassword.focus();
	} else {
		if (mUsername.value == "userdebug") {
			mCurrentInfo += "I: The username is " + mUsername.value + "\n";
			if (mPassword.value == "userdebug") {
				mCurrentInfo += "I: The password is correct.\n";
				mSuccessful = true;
			} else {
				mCurrentInfo += "E: The password is not correct.\n";
				mSuccessful = false;
			}
			mCurrentInfo += "I: The password will" + (mRemember.checked ? " " : " not ") + "be remembered.\n";
		} else {
			mCurrentInfo += "E: The username is not exist.\n";
			mSuccessful = false;
		}
	}
	mCurrentInfo += mSuccessful ? "I: Execution successful." : "E: Execution aborted.";
	alert(mCurrentInfo);
}