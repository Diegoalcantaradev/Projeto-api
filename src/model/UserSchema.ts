import mongoose,{Document,Schema} from "mongoose";
import { IUser } from "../interface/User";

const UserSchema:Schema = new Schema(
    {
        nome: String,
        email: String,
        idade: Number,
        cpf: Number,
        senha: String,
        cep: String  
    }
);

export const User = mongoose.model<IUser>("Usuario", UserSchema);
export default User;