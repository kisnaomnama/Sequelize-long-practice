'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Teams','sportId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Sports',
        key: 'id'
      }
    })

    await queryInterface.addColumn('Players','currentTeamId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Teams',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('Players', 'currentTeamId');
    await queryInterface.removeColumn('Teams', 'sportsId');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
