import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRespositories";



class ListUserReceiveComplimentsService {

    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            /**
             * Pode ser usado para trazer mais informações, não indicado para um volume alto de informações.
             */
            // relations: ["userSender", "userReceiver", "tag"],
        });

        return compliments;
    }
}

export { ListUserReceiveComplimentsService };