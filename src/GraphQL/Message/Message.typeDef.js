export const Message = `
  type Message {
    _id: String, 
    from: User,
    to: User,
    message: String,
    date: String
  }
`;

export const Query = `
  message(_id: String): Message 
  messages: [Message] 
`;

export const Mutation = `
  sendMessage(to: String, from: String, message: String, date: String): Message
`;
