import bcrypt from 'bcrypt';
import {
    Table,
    Column,
    Model,
    DataType,
    BeforeCreate,
} from 'sequelize-typescript';

@Table({ tableName: 'usuarios' })
class Usuario extends Model {
    @Column({
        type: DataType.STRING(50),
        primaryKey: true,
        allowNull: false,
        validate: { isEmail: true },
    })
    declare email: string;

    @Column({
        type: DataType.STRING(60), // Para guardar el hash de la contraseña
        allowNull: false,
    })
    declare password: string;

    @BeforeCreate
    static async hashPassword(usuario: Usuario) {
        console.log('Hasheando contraseña para:', usuario.email);
        usuario.password = await bcrypt.hash(usuario.password, 10);
    }
}

export default Usuario;
