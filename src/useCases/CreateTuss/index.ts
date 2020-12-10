import { CreateTussUseCase } from './CreateTussUseCase'
import { MongoTussRepository } from '../../repositories/implementations/MongoTussRepository'
import { CreateTussController } from './CreateTussController'

const mongoTussRepository = new MongoTussRepository()

const createTussUseCase = new CreateTussUseCase(
  mongoTussRepository
)

const createTussController = new CreateTussController(
  createTussUseCase
)

export { createTussUseCase, createTussController }