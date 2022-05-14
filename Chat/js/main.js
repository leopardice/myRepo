import Cookies from 'js-cookie'
import {UI_ELEMENTS} from "./view.js";

UI_ELEMENTS.messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const messageContent = UI_ELEMENTS.messageInput.value;
    let messageElement = UI_ELEMENTS.messageTemplate.content.cloneNode(true);
    messageElement.querySelector("p").textContent = `Я: ${messageContent}`;
    UI_ELEMENTS.chatScreen.append(messageElement);
})

UI_ELEMENTS.authorizationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = UI_ELEMENTS.authorizationInput.value;
    const requestObject = {
        email: `'${email}'`
    }
    const requestJSON = JSON.stringify(requestObject);
    alert(requestJSON);
    const url = "https://mighty-cove-31255.herokuapp.com/api/user";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ email: 'figaro138@gmail.com'}),
    }).catch(function (error) {
        console.log(error);
    })
} )

UI_ELEMENTS.confirmationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const externalToken = UI_ELEMENTS.codeInput.value;
    Cookies.set('token', `${externalToken}`);

})

UI_ELEMENTS.chatNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const token = Cookies.get('token');
    const chatName = UI_ELEMENTS.chatNameInput.value;
    console.log(chatName);
    const url = 'https://mighty-cove-31255.herokuapp.com/api/user';
    const userInfoUrl = 'https://mighty-cove-31255.herokuapp.com/api/user/me';
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ name: `'${chatName}'`}),
    } ).catch(function (error) {
        console.log(error);
    })

    fetch(userInfoUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    }).then(response =>
        response.json())
        .then(json => {
        console.log(json);
    }).catch(function (error) {
        console.log(error);
    })
})

