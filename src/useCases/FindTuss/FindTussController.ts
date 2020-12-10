import { FindTussUseCase } from './FindTussUseCase'
import { Request, Response } from 'express'
export class FindTussController {
  constructor(
    private findTussUseCase: FindTussUseCase
  ) { }

  async findAll(req: Request, res: Response): Promise<Response> {
    const { page, limit } = req.query
    const options = {
      page: +page,
      limit: +limit
    }

    if (!page) return res.status(400).json({
      error: 400,
      message: 'Data cannot be empty.'
    })

    try {
      const response = await this.findTussUseCase.findAll(options)

      if (!response) {
        res.status(404).json({
          code: '404',
          message: 'Not found code'
        })
      }

      return res.status(200).json(response)

    } catch (error) {
      return res.status(500).json({
        code: '500',
        message: 'Unexpected Error'
      })
    }
  }

  async findByCode(req: Request, res: Response): Promise<Response> {
    const { code } = req.params

    if (!code) return res.status(400).json({
      error: 400,
      message: 'Data cannot be empty.'
    })
    try {
      const response = await this.findTussUseCase.findByCode({ code })

      if (!response) {
        console.log('Continua aqui')
        res.status(404).json({
          code: '404',
          message: 'Not found code'
        })
        return
      }

      return res.status(200).json(response)

    } catch (error) {
      return res.status(500).json({
        code: '500',
        message: 'Unexpected Error'
      })
    }
  }
}