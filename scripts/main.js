function addMentee()
	{
	var menteeName = prompt("Enter name of Mentee: ")
	var newMentee = document.createElement('li');
	var mRating = prompt("Enter a rating ( 1 - 5 ): ");
	var mComment = document.createElement("TEXTAREA");
	newMentee.textContent = menteeName + " Rating = " + mRating;
	var linebreak = document.createElement('br');
	newMentee.appendChild(linebreak);
	newMentee.appendChild(mComment);
	var mList = document.getElementById("list");

	mList.appendChild(newMentee);
	}