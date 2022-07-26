module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('users', [
      {
        username: 'Admin',
        email: 'admin@admin.com',
        password: 'senha1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'User',
        email: 'user@user.com',
        password: 'senha2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
