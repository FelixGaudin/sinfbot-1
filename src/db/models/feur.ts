import { DataTypes, Model } from "sequelize";
import db from "../main";

class Feur extends Model {
	declare userId: number;
	declare amount: number;
}

Feur.init(
	{
		userId: {
			type: DataTypes.INTEGER,
			unique: true
		},
		amount: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		}
	},
	{
		sequelize: db,
		modelName: "Feur",
		tableName: "feurs"
	}
);

export default Feur;