import getters from "./getters";

const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        { 
          id: 1, 
          author: 1, 
          message: 'Hola 👀', 
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 1
        },
        { 
          id: 2, 
          author: 2, 
          message: 'Holaaa!!!', 
          timestamp: new Date().toLocaleTimeString(),
          read: true,
          channelId: 2
        },
        { 
          id: 3, 
          author: 3, 
          message: 'Hola a todo el mundo 😊', 
          timestamp: new Date().toLocaleTimeString(),
          read: true,
          channelId: 3
        },
        { 
          id: 4, 
          author: 3, 
          message: '¿Cómo están?', 
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 4
        },
      ]
    }
  },
  getters
}

export default module;