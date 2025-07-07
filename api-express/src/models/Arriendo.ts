import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "arriendos" })
class Arriendo extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    field: "fecha_inicio",
  })
  declare fechaInicio: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    field: "fecha_fin",
  })
  declare fechaFin: string | null;

  @Column({
    type: DataType.STRING(6),
    allowNull: false,
    field: "patente_vehiculo",
  })
  declare patenteVehiculo: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "tipo_vehiculo",
  })
  declare tipoVehiculo: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    field: "rut_cliente",
  })
  declare rutCliente: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    field: "nombre_cliente",
  })
  declare nombreCliente: string;
}

export default Arriendo;
