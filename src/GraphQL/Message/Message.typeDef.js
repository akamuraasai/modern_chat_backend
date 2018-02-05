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
