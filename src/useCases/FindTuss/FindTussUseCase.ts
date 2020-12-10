import { ITussRepository } from '../../repositories/ITussRepository'
import { IFindRequestDTO, IFindPaginateDTO } from './FindTussDTO'


export class FindTussUseCase {
  constructor(
    private tussRepository: ITussRepository
  ) { }

  async findByCode(data: IFindRequestDTO) {
    const response = await this.tussRepository.findByCode(data.code)
    return response
  }

  async findAll(data: IFindPaginateDTO) {
    const response = await this.tussRepository.findAll(data.page, data.limit)
    return response
  }
}