import { FindTussUseCase } from './FindTussUseCase'
import { MongoTussRepository } from '../../repositories/implementations/MongoTussRepository'
import { FindTussController } from './FindTussController'

const mongoTussRepository = new MongoTussRepository()

const findTussUseCase = new FindTussUseCase(
  mongoTussRepository
)

const findTussController = new FindTussController(
  findTussUseCase
)

export { findTussUseCase, findTussController }