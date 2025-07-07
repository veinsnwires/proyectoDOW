import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "usuarios" })
class Usuario extends Model {
  @Column({
    type: DataType.STRING(50),
    primaryKey: true,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING(60), // Para guardar el hash de la contraseña
    allowNull: false,
  })
  declare password: string;
}

export default Usuario;
