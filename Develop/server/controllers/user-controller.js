const { User } = require('./models');

module.exports = {
  getSingleUser: async (parent, args, context, info) => {
    const { id, username } = args; // Destructure the arguments

    try {
      const foundUser = await User.findOne({
        $or: [{ _id: id }, { username }],
      });

      if (!foundUser) {
        throw new Error('Cannot find a user with this id!');
      }

      return foundUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  createUser: async (parent, args, context, info) => {
    const { body } = args; // Destructure the arguments

    try {
      const user = await User.create(body);

      const token = /* Generate token using appropriate logic */;

      return { token, user };
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  },

  login: async (parent, args, context, info) => {
    const { username, email, password } = args; // Destructure the arguments

    try {
      const user = await User.findOne({ $or: [{ username }, { email }] });

      if (!user) {
        throw new Error("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Wrong password!');
      }

      const token = /* Generate token using appropriate logic */;

      return { token, user };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  saveBook: async (parent, args, context, info) => {
    const { user, body } = args; // Destructure the arguments

    try {
      // Logic to save a book to the user's `savedBooks` field
      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteBook: async (parent, args, context, info) => {
    const { user, params } = args; // Destructure the arguments

    try {
      // Logic to remove a book from `savedBooks`
      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
