import Cookies from 'js-cookie'
import {UI_ELEMENTS} from "./view.js";

const TOKEN = Cookies.get('token');

const DOMAIN = 'https://mighty-cove-31255.herokuapp.com';
const MESSAGES_ENDPOINT = '/api/messages';
const USER_ENDPOINT = '/api/user';
const USER_INFO_ENDPOINT = '/me';

const AUTHORIZATION_HEADER = `Bearer ${TOKEN}`;
const CONTENT_TYPE_JSON_HEADER = 'application/json;charset=utf-8';


let SOCKET = new WebSocket(`ws://mighty-cove-31255.herokuapp.com/websockets?${TOKEN}`);

interface IMessage {
    createdAt: string,
    text: string,
    updatedAt: Date,
    user: {
        email: string,
        name: string
    }
    _v: number,
    _id: string
}

interface IMessageHistory {
    messages: IMessage[];
}

const getMessageHistoryArray = async function () {
    const URL = `${DOMAIN}${MESSAGES_ENDPOINT}`;

    let response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Authorization': `${AUTHORIZATION_HEADER}`,
            'Content-Type': `${CONTENT_TYPE_JSON_HEADER}`,
        },
    })
    let messageHistoryJSON: IMessageHistory = await response.json();

    let messageHistoryArray: IMessage[] = [];

    try {
        messageHistoryArray = messageHistoryJSON.messages;
    }
    catch (e) {
        console.log(e);
    }

    return messageHistoryArray.reverse();
}

const createMessageElement = function (content: string)  {
    const messageContent = content;
    let messageElement: any = UI_ELEMENTS.messageTemplate?.content.cloneNode(true);
    messageElement.querySelector("div").textContent = `${messageContent}`;
    return messageElement;
}

const showMessage = function (messageElement: any): void {
    UI_ELEMENTS.chatScreen?.append(messageElement);
}

const show20Messages = function (messageElementsArray: any[]) {
    const messagesShownArray = messageElementsArray.splice(0, 20);
    messagesShownArray.forEach(item => showMessage(item));
}

const showMessageHistory = function (): void {
    getMessageHistoryArray().
    then(array =>
        array.map(item => item.text)).
    then(messageContentArray => messageContentArray.map(item => createMessageElement(item))).
    then(messageElementsArray => {
        show20Messages(messageElementsArray);
        UI_ELEMENTS.chatScreen?.addEventListener('scroll', (event) => {
            const target = event.currentTarget as HTMLDivElement;
            const scrollHeight: number = target.scrollHeight;
            let scrollTop = Math.ceil(target.scrollTop);
            const clientHeight = target.clientHeight;
            let isChatScrolled = (scrollHeight + scrollTop) === clientHeight;
            if (isChatScrolled) {
                target.scrollTop = scrollTop + 1;
                show20Messages(messageElementsArray);
            }
        })
    });
}

showMessageHistory();

const sendMessage = function (): void {

    let messageInputContent = UI_ELEMENTS.messageInput?.value;

    SOCKET.send(JSON.stringify({text:`${messageInputContent}`}));
    messageInputContent = '';
}

const getMessage = function (): void {
    SOCKET.onmessage = function (event) {
        const messageInfo = JSON.parse(event.data);
        const message = messageInfo.text;
        console.log(messageInfo);
        console.log(message);
        let messageElement = createMessageElement(message);
        UI_ELEMENTS.chatScreen?.prepend(messageElement);
    }
}

UI_ELEMENTS.messageForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessage();
    getMessage();
})

UI_ELEMENTS.authorizationForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = UI_ELEMENTS.authorizationInput?.value;
    const requestObject = {
        email: `${email}`
    }
    const requestJSON = JSON.stringify(requestObject);
    const url = `${DOMAIN}${USER_ENDPOINT}`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': `${CONTENT_TYPE_JSON_HEADER}`
        },
        body: requestJSON,
    }).catch(function (error): void {
        console.log(error);
    })
} )

UI_ELEMENTS.confirmationForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const externalToken = UI_ELEMENTS.codeInput?.value;
    Cookies.set('token', `${externalToken}`);

})

UI_ELEMENTS.chatNameForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const chatName = UI_ELEMENTS.chatNameInput?.value;
    const url = `${DOMAIN}${USER_ENDPOINT}${USER_INFO_ENDPOINT}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Authorization': `${AUTHORIZATION_HEADER}`,
            'Content-Type': `${CONTENT_TYPE_JSON_HEADER}`
        },
        body: JSON.stringify({ name: `'${chatName}'`}),
    } ).catch(function (error) {
        console.log(error);
    })
})