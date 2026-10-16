
import { DataTypes } from 'sequelize';

    import sequelize from '../config/conn.js';

    const usuario = sequelize.define('usuario', {

        id:{
            type: DataTypes.INTEGER,
	        autoIncrement: true,
	        primaryKey: true
        },

        nome:{
            type: DataTypes.STRING,
	        allowNull: false    
        },

        email:{
              type: DataTypes.STRING,
             allowNull: false,
            unique: true,
             validate: {
              isEmail: true
             }
      },

        senha:{
            type: DataTypes.STRING,
            allowNull:false
        },
        reflexoes:{
            type: DataTypes.TEXT 
        },
        aprendizados:{
            type: DataTypes.TEXT 
        },
        conexoes:{
            type: DataTypes.TEXT 

        },


     })
     export default usuario