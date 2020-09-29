import io from 'socket.io-client';

let socket = null;

export default {
  init: (url) => {
    socket = io(url);
    return socket;
  },
  get: () => {
    if (!socket) throw new Error('Socket connect fail!');
    return socket;
  },
};
