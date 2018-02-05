export const User = `
  type User {
    _id: String, 
    name: String
  }
`;

export const Query = `
  user(_id: String): User
  users: [User] 
`;

export const Mutation = `
  createUser(name: String): User
`;
