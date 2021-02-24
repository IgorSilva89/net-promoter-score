/**
 * Não é correto que o nosso controller tenha acesso a outras informaçães que não sejam da responsabilidade dele. Não é responsável do controller acessar banco de dados, fazer pesquisas, inserções, etc. Por isso nosso repositório é isolado.
 */

import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
class UserRepository extends Repository<User> { }

export { UserRepository }