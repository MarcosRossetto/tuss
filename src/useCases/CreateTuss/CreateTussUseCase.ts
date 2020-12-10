import { Tuss } from '../../entities/Tuss'
import { ITussRepository } from '../../repositories/ITussRepository'
import { ICreateRequestDTO } from './CreateTussDTO'
import createError from 'http-errors'


export class CreateTussUseCase {
  constructor(
    private tussRepository: ITussRepository
  ) { }

  async execute(data: ICreateRequestDTO) {
    const tussAlreadyExists = await this.tussRepository.findByCode(data.code)

    if (tussAlreadyExists) throw createError(400, 'tuss already exists.')

    const tuss = new Tuss(data)

    await this.tussRepository.save(tuss)
  }
}