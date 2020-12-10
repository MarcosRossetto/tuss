import { CreateTussUseCase } from './CreateTussUseCase'
import { Request, Response } from 'express'

export class CreateTussController {
  constructor(
    private createTussUseCase: CreateTussUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { code, term } = req.body

    if (!code || !term) return res.status(400).json({
      code: '400',
      message: 'Data cannot be empty.'
    })

    try {

      await this.createTussUseCase.execute({ code, term })

      return res.status(201).send()
    } catch (error) {
      return res.status(500).json({
        code: '500',
        message: 'Unexpected Error'
      })
    }
  }
}