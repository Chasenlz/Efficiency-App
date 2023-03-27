function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

const financialForm = document.getElementById('financial-form');
financialForm.addEventListener('submit', async (event) => {
   // Add this line to prevent form from submitting and refreshing the page
   event.preventDefault();

   // Your existing code to handle form submission

});

// Function to call GPT-3 API with the prompt
async function callGpt3Api(prompt) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${your_api_key}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 200,
            n: 1,
            stop: null,
            temperature: 0.5
        })
    });

    const data = await response.json();
    return data.choices[0].text;
}
