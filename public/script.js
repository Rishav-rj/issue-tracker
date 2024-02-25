
const issueSearchInput = document.getElementById('issueSearch');

issueSearchInput.addEventListener("input", function() {
    const searchValue = issueSearchInput.value.toLowerCase();
    const issueTitles = document.querySelectorAll('.issueTitle');

    issueTitles.forEach(function(issueTitle) {
        const titleText = issueTitle.innerText.toLowerCase();
        if (titleText.includes(searchValue)) {
            issueTitle.closest('.issue-card').style.display = "block";
        } else {
            issueTitle.closest('.issue-card').style.display = "none";
        }
    });
});

